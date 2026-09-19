use std::{sync::{Arc, Mutex}, time::Duration};

use json::{JsonValue, object};

use crate::{auth, constants::{MAX_REQUESTS_PER_MINUTE, STARTGG_WAIT_TIME}, json_structs::{self}, vibe_coded};






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
    client:reqwest::Client
}


impl StartGG {


    pub fn new() -> Self {
        let client = reqwest::Client::new();

        return Self {
            auth_token: auth::AUTHENTICATION,
            client: client,
        }
    }

    pub async fn get_all_tournaments(&self) -> Vec<Tournament>  {
        // as of 9/7/2026 there are only 134 bbtag tournaments, it stands to reason that there probably wont be too many more (more than 256)
        let mut v = Vec::with_capacity(200);
        let mut requests = 0;

        let r = json::parse(&
            self.client.post(
                "https://api.start.gg/gql/alpha"
            )
            .body(
                object! {
                    "query": "query GetTournaments($TournamentPage:Int) {tournaments(query: {page: $TournamentPage,perPage: 256,filter: { videogameIds: [1144]afterDate: 1767225600} sort:startAt}) { pageInfo { page totalPages } nodes { id name } } }",
                    // Debug query V | Real query ^
                    // "query": "query GetTournaments($TournamentPage:Int) {tournaments(query: {page: $TournamentPage,perPage: 9,filter: { videogameIds: [1144]afterDate: 1767225600} sort:startAt}) { pageInfo { page totalPages } nodes { id name } } }",
                    "TournamentPage":1,
                }.dump()
            )
            .bearer_auth(&self.auth_token)
            .send()
            .await
            .unwrap()
            .text()
            .await
            .unwrap()
        ).unwrap();

        requests += 1;

        println!("Total Pages: {:?}", r["data"]["tournaments"]["pageInfo"]["totalPages"].as_i32().unwrap());


        for i in r["data"]["tournaments"]["nodes"].members() {
        // for i in r.tournaments.nodes {

            let id = i["id"].as_i64().unwrap();
            let tournament_events = self.get_all_events(id, &mut requests).await;

            v.push(
                Tournament { id: id, tournament_events: tournament_events, tournament_name:i["name"].as_str().unwrap().to_string() }
            )
        }

        if r["data"]["tournaments"]["pageInfo"]["totalPages"].as_i32().unwrap() != 1  && false{
            for p in 2..r["data"]["tournaments"]["pageInfo"]["totalPages"].as_i32().unwrap() {


            // for p in 2..r.tournaments.page_info.total_pages {
                
                requests += 1;

                if requests >= MAX_REQUESTS_PER_MINUTE as i32 {
                    println!("Sleeping to avoid rate limit...");
                    tokio::time::sleep(STARTGG_WAIT_TIME).await;
                    println!("done");
                    requests = 0;
                }

                let r = json::parse(&
                    &self.client.post(
                        "https://api.start.gg/gql/alpha"
                    )
                    .body(
                        object! {
                            "query":"query GetTournaments($TournamentPage:Int) {tournaments(query: {page: $TournamentPage,perPage: 256,filter: { videogameIds: [1144]afterDate: 1767225600} sort:startAt}) { pageInfo { page totalPages } nodes { id name } } }",
                            "TournamentPage":p
                        }.dump()
                    )
                    .bearer_auth(&self.auth_token)
                    .send()
                    .await
                    .unwrap()
                    .text()
                    .await
                    .unwrap()
                    .as_str()
                ).unwrap();

                for i in r["data"]["tournaments"]["nodes"].members() {
                // for i in r.tournaments.nodes {

                    let id = i["id"].as_i64().unwrap();
                    let tournament_events = self.get_all_events(id, &mut requests).await;

                    v.push(
                        Tournament { id: id, tournament_events: tournament_events, tournament_name:i["name"].as_str().unwrap().to_string() }
                    )
                }

            }
        }

        v
    }


    // modifies tournaments in place.
    async fn get_all_events(&self, tournament_id:i64,requests:&mut i32 ) -> Vec<TournamentEvent>  {
        let mut v = Vec::with_capacity(256);
        
        *requests += 1;

        // println!("{requests}");

        if *requests >= MAX_REQUESTS_PER_MINUTE as i32 {
            println!("Sleeping to avoid rate limit...");
            tokio::time::sleep(STARTGG_WAIT_TIME).await;
            println!("done");
            *requests = 0;
        }

        let r = json::parse(&
            &self.client.post(
                "https://api.start.gg/gql/alpha"
            )
            .body(
                object! {
                    "query":"query GetEvents($TournamentId:ID) {tournament( id: $TournamentId) { events ( limit:256 filter: { videogameId:[1144]} ) { id state } } }",
                    "variables" : {
                        "TournamentId": tournament_id
                    }
                }.dump()
            )
            .bearer_auth(&self.auth_token)
            .send()
            .await
            .unwrap()
            .text()
            .await
            .unwrap()
            .as_str()
        ).unwrap();

        for event in r["data"]["tournament"]["events"].members() {
            
            if event["state"] != "COMPLETED" {
                continue;   
            }
            
            let id = event["id"].as_i64().unwrap();
            
            println!("Reading event {id}");

            let sets = self.get_sets_from_event(id, requests).await;

            v.push(
                TournamentEvent {
                    id: id,
                    sets: sets,
                }
            );
        }

        return v;
    }

    async fn get_sets_from_event(&self,event_id:i64, requests:&mut i32) -> Vec<TournamentSet> {


        let mut v = Vec::with_capacity(128);
        *requests += 1;

        if *requests >= MAX_REQUESTS_PER_MINUTE as i32 {
            println!("Sleeping to avoid rate limit...");
            tokio::time::sleep(STARTGG_WAIT_TIME).await;
            println!("done");
            *requests = 0;
        }


        let r = json::parse(&
            &self.client.post(
                "https://api.start.gg/gql/alpha"
            )
            .body(
                object! {
                    "query":"query GetSets($EventId: ID, $Page: Int) {event(id: $EventId) { sets ( page:$Page, perPage:32, sortType: RECENT, filters: { showByes:false } ) { pageInfo { totalPages } nodes { slots ( includeByes:false ) { standing { placement stats { score { value } } entrant { participants { user { id slug } } } } } } } } }",
                    "variables":{
                        "EventId": event_id,
                        "Page":1
                    }
                }.dump()
            )
            .bearer_auth(&self.auth_token)
            .send()
            .await
            .unwrap()
            .text()
            .await
            .unwrap()
            .as_str()
        ).unwrap();

        let mut sets_counted = 0;
        println!("Total Pages {}",r["data"]["event"]["sets"]["pageInfo"]["totalPages"].as_i32().unwrap());

        for set in r["data"]["event"]["sets"]["nodes"].members() {

            sets_counted += 1;
            println!("Reading set {sets_counted} of event id {event_id}");

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

        if r["data"]["event"]["sets"]["pageInfo"]["totalPages"].as_i32().unwrap() != 1 {
            for page in 2..r["data"]["event"]["sets"]["pageInfo"]["totalPages"].as_i32().unwrap()+1 {

                println!("Reading extra page {page}");

                *requests += 1;

                if *requests >= MAX_REQUESTS_PER_MINUTE as i32 {
                    println!("Sleeping to avoid rate limit...");
                    tokio::time::sleep(STARTGG_WAIT_TIME).await;
                    println!("done");
                    *requests = 0;
                }

                let r = json::parse(
                    &self.client.post(
                        "https://api.start.gg/gql/alpha"
                    )
                    .body(
                        object! {
                            "query":"query GetSets($EventId: ID, $Page: Int) {event(id: $EventId) { sets ( page:$Page, perPage:32, sortType: RECENT, filters: { showByes:false } ) { pageInfo { totalPages } nodes { slots ( includeByes:false ) { standing { placement stats { score { value } } entrant { participants { user { id slug } } } } } } } } }",
                            "variables": {
                                "EventId": event_id,
                                "Page":page
                            }
                        }.dump()
                    )
                    .bearer_auth(&self.auth_token)
                    .send()
                    .await
                    .unwrap()
                    .text()
                    .await
                    .unwrap()
                    .as_str()
                ).unwrap();

                for set in r["data"]["event"]["sets"]["nodes"].members()  {

                    sets_counted += 1;
                    println!("Reading set {sets_counted} of event id {event_id}");

                    if let None = set["slots"][0]["standing"]["entrant"]["participants"][0]["user"]["id"].as_i64() {
                        continue;
                    }
                    if let None = set["slots"][1]["standing"]["entrant"]["participants"][0]["user"]["id"].as_i64() {
                        continue;
                    }
                    if let None = set["slots"][0]["standing"]["stats"]["score"]["value"].as_i64() {
                        // I think this means there was a DQ
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
                                    score: set["slots"][0]["standing"]["stats"]["score"]["value"].as_i64().unwrap()
                                },
                                TournamentSetStanding {
                                    id: set["slots"][1]["standing"]["entrant"]["participants"][0]["user"]["id"].as_i64().unwrap(),
                                    has_won: set["slots"][1]["standing"]["placement"].as_i64().unwrap() == 1,
                                    score: set["slots"][1]["standing"]["stats"]["score"]["value"].as_i64().unwrap()
                                }
                            ],
                        }
                    );
                
                }
            }
        }


        return v;
    }

    pub async fn pull_user_information(
        &self,
        user_id:i64,
    ) -> UserStruct {
        println!("Pulling information for {user_id}");

        let r = json::parse(&
            &self.client.post(
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
            .bearer_auth(&self.auth_token)
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