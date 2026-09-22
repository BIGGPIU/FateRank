use crate::{database::Database, elo::Elo, startgg_v2::StartGG,};




mod constants;
mod json_structs;
mod auth;
mod elo;
mod database;
mod vibe_coded;
mod startgg_ignores;
mod challonge;
mod startgg_v2;

#[tokio::main]
async fn main() {
    let mut client = StartGG::new();
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

    db.update_with_startgg_information(&mut client, &elo).await;

}