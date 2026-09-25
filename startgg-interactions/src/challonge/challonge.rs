
use std::{io::Write, time::Duration};

use indicatif::{ProgressBar, ProgressStyle};
use thirtyfour::{By, DesiredCapabilities, WebDriver, common::capabilities::firefox::FirefoxPreferences, extensions::query::ElementQueryable};
use crate::challonge::challonge_tournaments::{ChallongeTournament, HouseOfCasuals, WeeklyRebelRumble} ;

const CHALLONGE_BASE_LINK:&'static str = "https://challonge.com/";

pub struct Challonge {
    driver:thirtyfour::WebDriver,
}

#[derive(Debug)]
pub struct ChallongeTournamentEvent {
    pub sets:Vec<ChallongeTournamentSet>,
    pub slug:String,
}

#[derive(Debug)]
pub struct ChallongeTournamentSet {
    pub standings:[ChallongeTournamentSetStanding;2]
}

#[derive(Debug)]
#[derive(Clone)]
pub struct ChallongeTournamentSetStanding {
    // true if they won, false if they lost
    pub name:String,
    pub id:i64,
    pub score:i64,
}


impl Challonge {
    pub async fn new() -> Self {

        Self {
            driver: WebDriver::managed(DesiredCapabilities::firefox()).await.unwrap()
        }
    }

    
    pub async fn get_tournaments(&mut self) -> Vec<ChallongeTournamentEvent> {
        // get weekly rumble tournaments
        
        // let link_name = WeeklyRebelRumble::get_possible_event_names(0)[1].clone();

        // Challonge::generate_html_file(&link_name);

        // if let Some(x) = self.gather_tournament_page_information(link_name).await {
        //     println!("OK");
        // }
        // else {
        //     panic!("NG :(");
        // }

        println!("Pulling challonge tournaments..");

        let mut v:Vec<ChallongeTournamentEvent> = Vec::new();
        let mut index: i64 = 0;
        loop {
            // println!("Cheking week {index}");
            let mut week_exists = false;
            
            if WeeklyRebelRumble::is_skipped_week(index) {
                index += 1;
                continue;
            }

            for i in WeeklyRebelRumble::get_possible_event_names(index) {

                Challonge::generate_html_file(&i);

                self.driver.refresh().await.unwrap();

                if let Some(x) = self.gather_tournament_page_information(i).await {
                    v.push(x);
                    
                    week_exists = true;
                    break;
                }
            }
        
            index += 1;

            if week_exists == false {
                break;
            }
        }


        index = 0;

        loop {
            let mut week_exists = false;

            for i in HouseOfCasuals::get_possible_event_names(index) {

                Challonge::generate_html_file(&i);

                self.driver.refresh().await.unwrap();

                if let Some(x) = self.gather_tournament_page_information(i).await {
                    v.push(x);

                    week_exists = true;
                    break;
                }
            }
        
            index += 1;

            if week_exists == false {
                break;
            }
        }

        v
    }

    fn generate_html_file(link:&String) {
        std::fs::remove_file(crate::constants::INDEX_HTML_PAGE).unwrap();

        let mut x = std::fs::File::create(crate::constants::INDEX_HTML_PAGE).unwrap();   

        
        x.write("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>FateRank</title></head><body>".as_bytes()).unwrap();
        x.write(format!("{link}<br><iframe src=\"https://challonge.com/{link}/module\" width=\"100%\" height=\"500\" frameborder=\"0\" scrolling=\"auto\" allowtransparency=\"true\"></iframe>").as_bytes()).unwrap();
        x.write("</body></html>".as_bytes()).unwrap();
        
    }
    
    /// page: the tournametn you want to navigatae to without the /
    async fn gather_tournament_page_information(&mut self,link:String) -> Option<ChallongeTournamentEvent> {
        // HEY YOU! DID YOU COME HERE BECAUSE YOU CTRL+CLICKED AN ERROR?
        // MAKE SURE YOU'RE IN startgg-interactions AND RUN LIVE SERVER!
        self.driver.goto(format!("http://127.0.0.1:5500")).await.unwrap();
        self.driver.enter_frame(0).await.unwrap();

        let tournament_match_elements =self
        .driver
        .query(By::ClassName("-complete"))
        .desc("Could not get tournament match")
        .any().await.unwrap();

        if tournament_match_elements.len() == 0 {
            return None
        }

        let mut tournament_sets:Vec<ChallongeTournamentSet> = vec![];
        let mut throw_away_entire_tournament = false;

        for i in tournament_match_elements {
            // println!("{:?}",i.attr("data-match-id").await.unwrap());
            let mut sets:Vec<ChallongeTournamentSetStanding> = vec![];
            let set_parent = i.find(By::Tag("g")).await.unwrap();

            

            for set in set_parent.find_all(By::Tag("svg")).await.unwrap() {

                let score = match set
                    .find(By::ClassName("match--player-score"))
                    .await
                    .unwrap()
                    .text()
                    .await
                    .unwrap()
                    .parse::<i64>()
                    {
                        Ok(x) => x,
                        Err(e) => {
                            // if this errors just throw away the entire tournament

                            let x = match set.find(By::ClassName("match--player-score"))
                            .await
                            .unwrap()
                            .inner_html()
                            .await
                            .unwrap()
                            .parse::<i64>()
                                {
                                    Ok(x) => {
                                        x
                                    },
                                    Err(_) => {
                                        throw_away_entire_tournament = true;
                                        break;
                                    },
                                };

                            x
                        },
                    };

                sets.push(ChallongeTournamentSetStanding {
                    id: set
                    .attr("data-participant-id")
                    .await
                    .unwrap()
                    .unwrap()
                    .parse::<i64>()
                    .unwrap()
                    ,
                    score: score
                    ,
                    name: 
                    set
                    .find(By::ClassName("match--player-name"))
                    .await
                    .unwrap()
                    .text()
                    .await
                    .unwrap()

                })
            }

            if sets.len() == 0 {
                // because challonge lets you do this for some reason

            }
            else if sets[0].score == 0 && sets[0].score == 0 {

            }
            else {
                tournament_sets.push(
                    ChallongeTournamentSet { standings: [sets[0].clone(),sets[1].clone()] }
                );
            }

            
            
        

        }


        if !throw_away_entire_tournament {
            Some(
                ChallongeTournamentEvent { sets: tournament_sets, slug: link }
            )
        }
        else {
            None
        }
    }
}