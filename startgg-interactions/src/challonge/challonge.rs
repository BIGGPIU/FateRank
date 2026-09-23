
use std::io::Write;

use thirtyfour::{By, DesiredCapabilities, WebDriver, common::capabilities::firefox::FirefoxPreferences, extensions::query::ElementQueryable};
use crate::challonge::challonge_tournaments::{ChallongeTournament, HouseOfCasuals, WeeklyRebelRumble} ;

const CHALLONGE_BASE_LINK:&'static str = "https://challonge.com/";

pub struct Challonge {
    driver:thirtyfour::WebDriver,
}

#[derive(Debug)]
pub struct ChallongeTournamentEvent {
    pub sets:Vec<ChallongeTournamentSet>
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
        
        // let link_name = WeeklyRebelRumble::get_possible_event_names(0)[2].clone();

        // Challonge::generate_html_file(&link_name);

        // if let Some(x) = self.gather_tournament_page_information(WeeklyRebelRumble::get_possible_event_names(0)[1].clone()).await {
        //     println!("OK");
        // }
        // else {
        //     panic!("NG :(");
        // }


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

                if let Some(x) = self.gather_tournament_page_information().await {
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

                if let Some(x) = self.gather_tournament_page_information().await {
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
    async fn gather_tournament_page_information(&mut self) -> Option<ChallongeTournamentEvent> {
        // HEY YOU! DID YOU COME HERE BECAUSE YOU CTRL+CLICKED AN ERROR?
        // MAKE SURE YOU'RE IN startgg-interactions AND RUN LIVE SERVER!
        self.driver.goto(format!("http://127.0.0.1:5500")).await.unwrap();
        self.driver.enter_frame(0).await.unwrap();

        // println!("{link:?}");

        let tournament_match_elements =self
        .driver
        .query(By::ClassName("-complete"))
        .desc("Could not get tournament match")
        .any().await.unwrap();

        if tournament_match_elements.len() == 0 {
            return None
        }

        let mut tournament_sets:Vec<ChallongeTournamentSet> = vec![];

        for i in tournament_match_elements {
            // println!("{:?}",i.attr("data-match-id").await.unwrap());
            let mut sets:Vec<ChallongeTournamentSetStanding> = vec![];
            let set_parent = i.find(By::Tag("g")).await.unwrap();
            let mut is_bad_data = false;

            

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
                        Err(_) => {
                            println!("Bad Challonge set data detected.");
                            is_bad_data = true;
                            break;
                        },
                    };
                
                // println!("{}\n\n",set.inner_html().await.unwrap());

                // println!("{} {}",
                // set
                //     .attr("data-participant-id")
                //     .await
                //     .unwrap()
                //     .unwrap()
                //     .parse::<i64>()
                //     .unwrap(),
                //     set
                //     // /html/body/div[1]/div[2]/div/div[1]/div/div/div/div/div/svg/g/g[2]/g[8]/g/svg[2]/text[3]
                //     .find(By::ClassName("match--player-score"))
                //     .await
                //     .unwrap()
                //     .text()
                //     .await
                //     .unwrap()
                // );

                // for dave in set.find_all(By::Tag("text")).await.unwrap() {
                //     println!("{:?}",dave.class_name().await.unwrap_or(Some("UNKOWN".to_string())));
                // }

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

            if !is_bad_data {
                tournament_sets.push(
                    ChallongeTournamentSet { standings: [sets[0].clone(),sets[1].clone()] }
                );
            }

        }


        Some(
            ChallongeTournamentEvent { sets: tournament_sets }
        )
    }
}