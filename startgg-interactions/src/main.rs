use crate::{database::Database, elo::Elo, startgg::StartGG};




mod startgg;
mod constants;
mod json_structs;
mod auth;
mod elo;
mod database;
mod vibe_coded;

#[tokio::main]
async fn main() {
    let client = StartGG::new();
    let db = Database::new("/home/Diya/Documents/GitHub/FateRank/database/db.sqlite").await;

    let x = client.get_all_tournaments().await;

    let mut elo = Elo::new();

    for i in &x {
        for ii in &i.tournament_events {
            for iii in &ii.sets {
                elo.update_player_elo(&iii);
            }
        }
    }

    elo.print_stats();
    
    db.commit_glicko_information(&elo).await;    

    db.update_with_startgg_information(&client, &elo).await;

}