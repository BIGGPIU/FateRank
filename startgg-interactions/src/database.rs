use std::time::Duration;

use sqlx::{Pool, Sqlite, SqlitePool};

use crate::{constants::{MAX_REQUESTS_PER_MINUTE, STARTGG_WAIT_TIME}, elo::Elo, startgg::{self, StartGG}};

pub struct Database {
    pool:Pool<Sqlite>
}



impl Database {

    pub async fn new(database_location:&str) -> Self {
        return Self {
            pool: SqlitePool::connect(database_location).await.unwrap(),
        }
    }

    async fn clear_db(&self) {
        sqlx::query::<Sqlite>
        ("DELETE FROM User")
        .execute(&self.pool)
        .await
        .unwrap();
    }

    pub async fn commit_glicko_information(&self,elo:&Elo) {
        
        self.clear_db().await;

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


    pub async fn update_with_startgg_information(&self,sgg_object:&StartGG,elo:&Elo) {
        let mut requests = 0;

        for (uid,_) in elo.get_users() {

            requests += 1; 

            if requests >= MAX_REQUESTS_PER_MINUTE {
                println!("Sleeping to avoid rate limit...");
                tokio::time::sleep(STARTGG_WAIT_TIME).await;
                println!("done");
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
        }
    }
}