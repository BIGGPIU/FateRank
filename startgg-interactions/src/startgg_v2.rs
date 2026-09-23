
use indicatif::{ProgressBar, ProgressStyle};
use std::time::Duration;
use json::object;

use crate::{auth, constants::{MAX_REQUESTS_PER_MINUTE,STARTGG_URL,STARTGG_WAIT_TIME}, startgg_ignores::IgnoredSet, vibe_coded};
use crate::request;





#[derive(Debug)]
pub struct TournamentSetStanding {
    // true if they won, false if they lost
    pub id:i64,
    pub has_won:bool,
    pub score:i64,
}

#[derive(Debug)]
pub struct TournamentSet {
    pub standings:[TournamentSetStanding;2]
}

#[derive(Debug)]
pub struct TournamentEvent {
    pub id:i64,
    pub sets:Vec<TournamentSet>
}

#[derive(Debug)]
pub struct Tournament {
    pub id:i64,
    pub tournament_name:String,
    pub tournament_events:Vec<TournamentEvent>
}

pub struct UserStruct {
    pub user_id:i64,
    pub user_name:String,
    pub user_slug:String,
    pub user_region:Option<&'static str>
}

/// Strcture for interacting with start.gg contains all the information thats needed to interact with start.gg
pub struct StartGG {
    /// Authorization token without the "Bearer" part.
    auth_token:&'static str,
    client:reqwest::Client,
    request_amnt:i32
}

impl StartGG {


    pub fn new() -> Self {
        let client = reqwest::Client::new();

        return Self {
            auth_token: auth::AUTHENTICATION,
            client: client,
            request_amnt: 0
        }
    }

    async fn get_tournament_page_amount(&mut self) -> i64  {
        request!(self);

        json::parse(&
            self.client.post(
                STARTGG_URL
            )
            .body(
                object! {
                    "query":"query GetTournamentAmount($TournamentPage: Int) {tournaments( query: {page: $TournamentPage, perPage: 256, filter: {videogameIds: [1144], afterDate: 1767225600}, sort: startAt}) { pageInfo { page totalPages } } }",
                    "variables" : {
                        "TournamentPage":1
                    }
                }.dump()

            )
            .bearer_auth(&mut self.auth_token)
            .send()
            .await
            .unwrap()
            .text()
            .await
            .unwrap()
        ).unwrap()["data"]["tournaments"]["pageInfo"]["totalPages"].as_i64().unwrap()
    }

    async fn get_event_set_page_amount(&mut self,event_id:i64) -> i64 {
        request!(self);

        let x = json::parse(
            &mut self.client.post(
                STARTGG_URL
            )
            .body(
                object! {
                    "query":"query GetSets($EventId: ID) {event(id: $EventId) {sets(page: 1, perPage: 32, sortType: RECENT, filters: {showByes: false}) {pageInfo { totalPages } } } }",
                    "variables": {
                        "EventId":event_id
                    }
                }.dump()
            )
            .bearer_auth(&mut self.auth_token)
            .send()
            .await
            .unwrap()
            .text()
            .await
            .unwrap()
        ).unwrap();

        return x["data"]["event"]["sets"]["pageInfo"]["totalPages"].as_i64().unwrap_or(0);
    }



    /// Gets the all the tournaments and in turn pulls all the events and sets for the tournament
    pub async fn get_all_tournaments(&mut self) -> Vec<Tournament>  {
        let mut v:Vec<Tournament> = Vec::with_capacity(256);


        let page_amnt = self.get_tournament_page_amount().await;

        for page in 1..page_amnt+1 {

            request!(self);

            let r = json::parse(&
                self.client.post(
                    STARTGG_URL
                )
                .body(
                    object! {
                        "query": "query GetTournaments($TournamentPage:Int) {tournaments(query: {page: $TournamentPage,perPage: 256,filter: { videogameIds: [1144]afterDate: 1767225600} sort:startAt}) { pageInfo { page totalPages } nodes { id name } } }",
                        // Debug query V | Real query ^
                        // "query": "query GetTournaments($TournamentPage:Int) {tournaments(query: {page: $TournamentPage,perPage: 9,filter: { videogameIds: [1144]afterDate: 1767225600} sort:startAt}) { pageInfo { page totalPages } nodes { id name } } }",
                        "TournamentPage":page,
                    }.dump()
                )
                .bearer_auth(&mut self.auth_token)
                .send()
                .await
                .unwrap()
                .text()
                .await
                .unwrap()
            ).unwrap();

            // I uh... used to think Cow stood for "Co OWned". TIL its basically a glorified Option Variant
            let tournament_progress_bar = ProgressBar::new(r["data"]["tournaments"]["nodes"].members().len() as u64).with_style(ProgressStyle::default_bar()).with_style(ProgressStyle::with_template("[{elapsed_precise}] {msg:70} {bar:40.blue} [{pos:>7}/{len:7}]").unwrap());
            
            for tournament in r["data"]["tournaments"]["nodes"].members() {
                let id = tournament["id"].as_i64().unwrap();
                tournament_progress_bar.set_message(format!("Reading information for tournament ID {id}"));
                
                let tournament_events= self.get_all_events_for_tournament_id(id).await;

                v.push(
                    Tournament {
                        id,
                        tournament_name: tournament["name"].as_str().unwrap().to_string(),
                        tournament_events,
                    }
                );

                tournament_progress_bar.inc(1);
            }

            tournament_progress_bar.finish_with_message("Finished Pulling information tournaments");
        }
        
        v
    }


    /// gets all the tournament events and then fills the events with all their sets.
    async fn get_all_events_for_tournament_id(&mut self, tournament_id:i64) -> Vec<TournamentEvent> {
        let mut v:Vec<TournamentEvent> = Vec::with_capacity(256);

        request!(self);

        let r = json::parse(
            &mut self.client.post(
                STARTGG_URL
            )
            .body(
                object! {
                    "query":"query GetEvents($TournamentId:ID) {tournament( id: $TournamentId) { events ( limit:256 filter: { videogameId:[1144]} ) { id state } } }",
                    "variables": {
                        "TournamentId":tournament_id
                    }
                }.dump()
            )
            .bearer_auth(&mut self.auth_token)
            .send()
            .await
            .unwrap()
            .text()
            .await
            .unwrap()
            .as_str()
        ).unwrap();

        // let event_progress_bar = ProgressBar::new(r["data"]["tournament"]["events"].members().len() as u64).with_style(ProgressStyle::default_bar()).with_style(ProgressStyle::with_template("[{elapsed_precise}] {msg:50} {bar:40.blue} [{pos:>7}/{len:7}]").unwrap());
        
        for event in r["data"]["tournament"]["events"].members() {
            let id = event["id"].as_i64().unwrap();

            // event_progress_bar.set_message(format!("Reading from event {id}"));
            
            if event["state"].as_str().unwrap() != "COMPLETED" {
                continue;
            }



            let sets = self.get_all_sets_for_event_id(id).await;

            v.push(
                TournamentEvent {
                    id,
                    sets
                }
            );

            // event_progress_bar.inc(1);
        }

        // event_progress_bar.finish_with_message(format!("Done reading events for {tournament_id}."));
        // event_progress_bar.finish_and_clear();



        v
    }


    async fn get_all_sets_for_event_id(&mut self, event_id:i64) -> Vec<TournamentSet>{
        let mut v:Vec<TournamentSet> = Vec::with_capacity(128);

        let page_amount = self.get_event_set_page_amount(event_id).await;

        // let set_page_progress_bar = ProgressBar::new(page_amount as u64).with_style(ProgressStyle::default_bar()).with_style(ProgressStyle::default_bar()).with_style(ProgressStyle::with_template("[{elapsed_precise}] {msg:50} {bar:40.blue} [{pos:>7}/{len:7}]").unwrap());

        for page in 1..page_amount+1 {
            request!(self);

            let r = json::parse(&mut self.client.post(
                STARTGG_URL
            )
            .body(
                object! {
                    "query":"query GetSets($EventId: ID, $Page: Int) {event(id: $EventId) { sets ( page:$Page, perPage:32, sortType: RECENT, filters: { showByes:false } ) { pageInfo { totalPages } nodes { id slots ( includeByes:false ) { standing { placement stats { score { value } } entrant { participants { user { id slug } } } } } } } } }",
                    "variables": {
                        "EventId":event_id,
                        "page":page
                    }
                }.dump()
            )
            .bearer_auth(&mut self.auth_token)
            .send()
            .await
            .unwrap()
            .text()
            .await
            .unwrap()
            .as_str())
            .unwrap();

            

            for set in r["data"]["event"]["sets"]["nodes"].members() {
                
                // set_page_progress_bar.inc(1);

                if let Some(x) = IgnoredSet::is_ignored_set(set["id"].as_i64().unwrap()) {
                    v.push(x);
                    continue;
                }

                if let None = set["slots"][0]["standing"]["entrant"]["participants"][0]["user"]["id"].as_i64() {
                    continue;
                }
                if let None = set["slots"][1]["standing"]["entrant"]["participants"][0]["user"]["id"].as_i64() {
                    continue;
                }
                // I think this means there was a DQ
                if let None = set["slots"][0]["standing"]["stats"]["score"]["value"].as_i64() {
                    continue;
                }
                if let None = set["slots"][1]["standing"]["stats"]["score"]["value"].as_i64() {
                    continue;
                }



                v.push(
                    TournamentSet {
                        standings: [
                            TournamentSetStanding {
                                id: set["slots"][0]["standing"]["entrant"]["participants"][0]["user"]["id"].as_i64().unwrap(),
                                has_won: set["slots"][0]["standing"]["placement"].as_i64().unwrap() == 1,
                                score: set["slots"][0]["standing"]["stats"]["score"]["value"].as_i64().unwrap(),
                            },
                            TournamentSetStanding {
                                id: set["slots"][1]["standing"]["entrant"]["participants"][0]["user"]["id"].as_i64().unwrap(),
                                has_won: set["slots"][1]["standing"]["placement"].as_i64().unwrap() == 1,
                                score: set["slots"][1]["standing"]["stats"]["score"]["value"].as_i64().unwrap(),
                            }
                        ],
                    }
                );
            }
        }

        v
    }


    

    pub async fn pull_user_information(
        &mut self,
        user_id:i64,
    ) -> UserStruct {
        request!(self);

        let r = json::parse(
            &mut self.client.post(
                "https://api.start.gg/gql/alpha"
            )
            .body(
                object! {
                    "query":"query GetUser($UserId: ID) {user(id: $UserId) {player { gamerTag } slug discriminator location { country } } }",
                    "variables":{
                        "UserId": user_id,
                    }
                }.dump()
            )
            .bearer_auth(&mut self.auth_token)
            .send()
            .await
            .unwrap()
            .text()
            .await
            .unwrap()
            .as_str()
        ).unwrap();

        let region = vibe_coded::get_continent(r["data"]["user"]["location"]["country"].as_str().unwrap_or(""));

        UserStruct {
            user_id,
            user_name: r["data"]["user"]["player"]["gamerTag"].as_str().unwrap().to_string(),
            user_slug: r["data"]["user"]["slug"].as_str().unwrap_or("NONE").to_string(),
            user_region: region,
        }
    }

}


#[macro_export]
macro_rules! request {
    ($self: ident) => {
        $self.request_amnt += 1;

        if $self.request_amnt >= MAX_REQUESTS_PER_MINUTE as i32 {
            tokio::time::sleep(STARTGG_WAIT_TIME).await;
            $self.request_amnt = 0;
        }
    };
}