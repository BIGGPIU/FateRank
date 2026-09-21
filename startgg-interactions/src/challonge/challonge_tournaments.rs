use json::JsonValue;
use reqwest::Client;
use crate::challonge::auth::AUTHENTICATION;

// Would keep but I dont want to add async-traits as a dependency
// pub trait ChallongeEvent {
//     /// index (u64): The index of tournaments you want to go through. 
//     /// 
//     /// For example if the first week of HouseOfCasuals is week 15 then index 0 would access week 15, index 1 would access week 16 and so on and so forth
//     async fn get_event(index:u64) -> Option<JsonValue>;

//     fn get_first_week() -> u64;
// }

pub struct WeeklyRebelRumble {

}


impl WeeklyRebelRumble {
    async fn get_event(index:u64,client:Client) -> Option<JsonValue> {
        let first_week = WeeklyRebelRumble::get_first_week();

        let psn_link = format!("challonge.com/wrr{}bbtagpsn",first_week+index);
        let xbl_link = format!("challonge.com/wrr{}bbtagxbl",first_week+index);
        let old_nso_link = format!("challonge.com/wrr{}bbtagsw",first_week+index);
        let nso_link = format!("challonge.com/wrr{}bbtagnso",first_week+index);
        let pc_link = format!("challonge.com/wrr{}bbtagpc",first_week+index);

        todo!()
    }

    const fn get_first_week() -> u64 {
        32
    }
}