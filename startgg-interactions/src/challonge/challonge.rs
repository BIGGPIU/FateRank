use json::JsonValue;
use reqwest::Client;
use crate::challonge::auth::AUTHENTICATION;

const CHALLONGE_BASE_LINK:&'static str = "https://api.challonge.com/v2.1";

pub struct Challonge {

}



impl Challonge {


    pub async fn get_tournament_id(tournament_url:&String,client:&Client) -> String {

        let json = json::parse(&
            client.get
            (format!("{CHALLONGE_BASE_LINK}/tournaments/{tournament_url}.json"))
            .header("Authorization", AUTHENTICATION)
            .header("Content-Type", "application/vnd.api+json")
            .header("Accept", "application/json")
            .header("Authorization-Type", "v1")
            .send()
            .await
            .unwrap()
            .text()
            .await.unwrap() 
        ).unwrap();

        if json.has_key("errors") {
            panic!("{}",&json.pretty(4));
        }

        return json["data"]["id"].as_str().unwrap().to_string()

    }

    // todo!(continue to implement challonge support)
    // todo!(possibly get to work on the tournament stream helper plugin if you have the time)

    pub async fn get_matches(tournament_id:String,client:&Client) -> Option<JsonValue> {
        let json = json::parse (&client.get
        (format!("{CHALLONGE_BASE_LINK}/tournaments/{tournament_id}/matches.json?page=1&per_page=999&state=complete"))
        .header("Authorization", AUTHENTICATION)
        .header("Content-Type", "application/vnd.api+json")
        .header("Accept", "application/json")
        .header("Authorization-Type", "v1")
        .send()
        .await
        .unwrap()
        .text()
        .await.unwrap()).unwrap();

        if json.has_key("errors") {
            panic!("{}",&json.pretty(4));
        }

        todo!()
    }

}