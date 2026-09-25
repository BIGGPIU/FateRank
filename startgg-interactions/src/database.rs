use indicatif::{ProgressBar, ProgressStyle};
use skillratings::glicko2::{Glicko2, Glicko2Rating, glicko2};
use sqlx::{Pool, Row, Sqlite, SqlitePool};

use crate::{challonge::challonge::ChallongeTournamentEvent, constants::{GLICKO2_CONFIG, MAX_REQUESTS_PER_MINUTE, STARTGG_WAIT_TIME}, elo::{Confidence, Elo}, startgg_v2::StartGG,};

pub struct Database {
    pool:Pool<Sqlite>
}

pub struct DatabaseUserWithElo {
    username:String,
    startgg_uid:i64,
    elo:Glicko2Rating,
    confidence:Confidence,
}


impl Database {

    pub async fn new(database_location:&str) -> Self {
        let pool = SqlitePool::connect(database_location).await.unwrap();
        
        Database::clear_user_db(&pool).await;
        Database::clear_challonge_sets_db(&pool).await;


        return Self {
            pool,
        }
    }

    async fn clear_user_db(pool:&Pool<Sqlite>) {
        sqlx::query::<Sqlite>
        ("DELETE FROM User")
        .execute(pool)
        .await
        .unwrap();
    }

    async fn clear_challonge_sets_db(pool:&Pool<Sqlite>) {
        sqlx::query::<Sqlite>
        ("DELETE FROM ChallongeSets")
        .execute(pool)
        .await
        .unwrap();
    }

    pub async fn commit_glicko_information(&self,elo:&Elo) {
        for (uid,rating) in elo.get_users() {
            sqlx::query::<Sqlite>
            ("INSERT INTO User (startgg_uid,elo,true_elo,deviation,volatility,confidence) VALUES ($1,$2,$5,$3,$4,$6)")
            .bind(uid)
            .bind(rating.1.rating)
            .bind(rating.1.deviation)
            .bind(rating.1.volatility)
            .bind(rating.1.rating - rating.1.deviation)
            .bind(rating.0.0)
            .execute(&self.pool)
            .await
            .unwrap();
        }
    } 

    pub async fn update_challonge_set_information(&self, v:&Vec<ChallongeTournamentEvent>) {
        for event in v {
            for set in &event.sets {
                let sql;
                
                if set.standings[0].score > set.standings[1].score {
                    sql = "INSERT INTO ChallongeSets (winner_name,winner_id,winner_score,loser_name,loser_id,loser_score,tournament_slug) VALUES ($1,$2,$3,$4,$5,$6,$7)"
                }
                else {
                    sql = "INSERT INTO ChallongeSets (winner_name,winner_id,winner_score,loser_name,loser_id,loser_score,tournament_slug) VALUES ($4,$5,$6,$1,$2,$3,$7)"
                }


                sqlx::query::<Sqlite>
                (sql)
                .bind(&set.standings[0].name)
                .bind(&set.standings[0].id)
                .bind(&set.standings[0].score)
                .bind(&set.standings[1].name)
                .bind(&set.standings[1].id)
                .bind(&set.standings[1].score)
                .bind(&event.slug)
                .execute(&self.pool)
                .await
                .unwrap();
            }
        }
    }


    pub async fn update_with_startgg_information(&self,sgg_object:&mut StartGG,elo:&Elo) {
        let mut requests = 0;

        let mut rl_avoids = elo.get_users().len()/MAX_REQUESTS_PER_MINUTE;

        let user_information_progress_bar = ProgressBar::new(elo.get_users().len() as u64);
        user_information_progress_bar.set_style(ProgressStyle::with_template("[{elapsed_precise}] {msg:70} {bar:40.green} [{pos:>7}/{len:7}]").unwrap());
        user_information_progress_bar.set_message(format!("Fetching User Information (RateLimit avoids left: {})",rl_avoids));

        for (uid,_) in elo.get_users() {

            requests += 1; 

            if requests >= MAX_REQUESTS_PER_MINUTE {
                rl_avoids -= 1;
                user_information_progress_bar.set_message(format!("Fetching User Information (RateLimit avoids left: {})",rl_avoids));
                // println!("Sleeping to avoid rate limit...");
                tokio::time::sleep(STARTGG_WAIT_TIME).await;
                // println!("done");
                requests = 0;
            }

            let user_information = sgg_object.pull_user_information(uid).await;
            
            sqlx::query::<Sqlite>
            ("UPDATE User SET username = $1, region = $2, slug = $3 WHERE startgg_uid = $4")
            .bind(user_information.user_name)
            .bind(user_information.user_region.unwrap_or("UNK"))
            .bind(user_information.user_slug)
            .bind(uid)
            .execute(&self.pool)
            .await
            .unwrap();

            user_information_progress_bar.inc(1);
        }

        user_information_progress_bar.finish_with_message("Finished Pulling User Information");
    }


    pub async fn update_elo_based_off_challonge_info(&self,v:ChallongeTournamentEvent) {
        for set in v.sets {
            let player_1_challonge = &set.standings[0];
            let player_2_challonge = &set.standings[1];

            if let (Some(player_1_elo),Some(player_2_elo)) = (
                self.user_exists_in_database(&set.standings[0].name).await,
                self.user_exists_in_database(&set.standings[1].name).await
            ) {
                let repeat_count = std::cmp::max(player_1_challonge.score - player_2_challonge.score, player_2_challonge.score - player_1_challonge.score);
                
                let mut new_player_1 = player_1_elo.elo;
                let mut new_player_2 = player_2_elo.elo;

                for _ in 0..repeat_count {
                    if player_1_challonge.score > player_2_challonge.score {
                        (new_player_1, new_player_2) = glicko2(&new_player_1,&new_player_2, &skillratings::Outcomes::WIN, &GLICKO2_CONFIG);
                    }
                    else {
                        (new_player_1, new_player_2) = glicko2(&new_player_1,&new_player_2, &skillratings::Outcomes::LOSS, &GLICKO2_CONFIG);
                    }
                }

                player_2_elo.confidence.update();

                self.update_user_elo_information(DatabaseUserWithElo {
                    username: player_1_challonge.name.clone(),
                    elo:new_player_1,
                    confidence: player_1_elo.confidence.update(),
                    startgg_uid: player_1_elo.startgg_uid,
                }).await;


                self.update_user_elo_information(DatabaseUserWithElo {
                    username: player_2_challonge.name.clone(),
                    elo:new_player_2,
                    confidence: player_2_elo.confidence.update(),
                    startgg_uid: player_2_elo.startgg_uid
                }).await;

            }
        }
    }

    async fn update_user_elo_information(&self,user:DatabaseUserWithElo) {
        sqlx::query::<Sqlite>
        ("UPDATE User SET elo = $1, deviation = $2, volatility = $3, true_elo = $4, confidence = $5 WHERE startgg_uid = $6")
        .bind(user.elo.rating)
        .bind(user.elo.deviation)
        .bind(user.elo.volatility)
        .bind(user.elo.rating - user.elo.deviation)
        .bind(user.confidence.0)
        .bind(user.startgg_uid)
        .execute(&self.pool)
        .await
        .unwrap();
    }

    async fn user_exists_in_database(&self,username:&String) -> Option<DatabaseUserWithElo> {
        match sqlx::query::<Sqlite>
        ("SELECT * FROM User WHERE username = $1 LIMIT 1")
        .bind(&username)
        .fetch_one(&self.pool)
        .await {
            Ok(row) => {
                Some(DatabaseUserWithElo {
                    username: username.to_string(),
                    elo:Glicko2Rating { 
                        rating: row.get("elo") ,
                        deviation: row.get("deviation"),
                        volatility: row.get("volatility")
                    },
                    confidence: Confidence::from(row.get("confidence")),
                    startgg_uid: row.get("startgg_uid"),
                })
            },
            Err(_) => {
                None
            },
        }

        
    }
}