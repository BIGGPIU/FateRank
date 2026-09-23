use indicatif::{ProgressBar, ProgressStyle};
use sqlx::{Pool, Sqlite, SqlitePool};

use crate::{challonge::challonge::ChallongeTournamentEvent, constants::{MAX_REQUESTS_PER_MINUTE, STARTGG_WAIT_TIME}, elo::Elo, startgg_v2::StartGG,};

pub struct Database {
    pool:Pool<Sqlite>
}



impl Database {

    pub async fn new(database_location:&str) -> Self {
        let pool = SqlitePool::connect(database_location).await.unwrap();
        
        Database::clear_user_db(&pool).await;


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

    pub async fn update_challonge_set_information(&self, v:Vec<ChallongeTournamentEvent>) {
        for event in v {
            for set in event.sets {
                let sql;
                
                if set.standings[0].score > set.standings[1].score {
                    sql = "INSERT INTO ChallongeSets (winner_name,winner_id,winner_score,loser_name,loser_id,loser_score,tournament_slug) VALUES ($1,$2,$3,$4,$5,$6,$7)"
                }
                else {
                    sql = "INSERT INTO ChallongeSets (winner_name,winner_id,winner_score,loser_name,loser_id,tournament_slug) VALUES ($4,$5,$6,$1,$2,$3,$7)"
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

        let len = elo.get_users().len();

        let user_information_progress_bar = ProgressBar::new(elo.get_users().len() as u64);
        user_information_progress_bar.set_style(ProgressStyle::with_template("[{elapsed_precise}] {msg:70} {bar:40.green} [{pos:>7}/{len:7}]").unwrap());
        user_information_progress_bar.set_message(format!("Fetching User Information (Expeted RateLimit avoids: {})",len/MAX_REQUESTS_PER_MINUTE));

        for (uid,_) in elo.get_users() {

            requests += 1; 

            if requests >= MAX_REQUESTS_PER_MINUTE {
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
}