use crate::{challonge::challonge::Challonge, database::Database, elo::Elo, startgg_v2::StartGG,};


#[deny(non_camel_case_types)]

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
    let mut challonge = Challonge::new().await;
    let mut elo = Elo::new();
    

    let challonge_hints = Database::load_challonge_event_cache("/home/Diya/Documents/GitHub/FateRank/database/db.sqlite").await;
    let db = Database::new("/home/Diya/Documents/GitHub/FateRank/database/db.sqlite").await;
    
    let all_challonge_tournaments = challonge.get_tournaments(&challonge_hints).await;

    // to close the window
    drop(challonge);

    db.update_challonge_set_information(&all_challonge_tournaments).await;

    let x = client.get_all_tournaments().await;


    for tournament in &x {
        for event in &tournament.tournament_events {
            for set in &event.sets {
                db.update_startgg_set_information(set, event, tournament).await;
                elo.update_player_elo(&set);
            }
        }
    }

    // elo.print_stats();
    
    db.commit_glicko_information(&elo).await;    

    db.update_with_startgg_information(&mut client, &elo).await;
    
    for event in all_challonge_tournaments {
        db.update_elo_based_off_challonge_info(event).await;
    }


    println!("Done pulling information. Thank you for using FateRank!");
}