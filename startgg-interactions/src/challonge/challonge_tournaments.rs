
// Would keep but I dont want to add async-traits as a dependency
// pub trait ChallongeEvent {
//     /// index (u64): The index of tournaments you want to go through. 
//     /// 
//     /// For example if the first week of HouseOfCasuals is week 15 then index 0 would access week 15, index 1 would access week 16 and so on and so forth
//     async fn get_event(index:u64) -> Option<JsonValue>;

//     fn get_first_week() -> u64;
// }

pub trait ChallongeTournament {
    /// Returns a vector of all the possible event names for this event
    /// 
    /// index: what week after the first one do you want to search for? SHOULD NOT BE NEGATIVE. ISNT A U64 BECAUSE IM DUM AND DUM AND STUPID!
    fn get_possible_event_names(index:i64) -> Vec<String>;

    fn get_first_week() -> i64;
}

pub struct WeeklyRebelRumble {

}

impl WeeklyRebelRumble {
    pub fn is_skipped_week(index:i64) -> bool {
        match index + 32 as i64 {
            46 => {
                true
            }
            _ => {
                false
            }
        }
    }   
}

impl ChallongeTournament for WeeklyRebelRumble {
    /// Returns a vector of all the possible event names for this event
    fn get_possible_event_names(index:i64) -> Vec<String> {
        let first_week = WeeklyRebelRumble::get_first_week();
        

        vec![
            format!("wrr{}bbtagsw",first_week+index),
            format!("wrr{}bbtagxbl",first_week+index),
            format!("wrr{}bbtagpsn",first_week+index),
            format!("wrr{}bbtagnso",first_week+index),
            format!("wrr{}bbtagpc",first_week+index),
        ]
    }

    fn get_first_week() -> i64 {
        32
    }
}


pub struct HouseOfCasuals {

}


impl ChallongeTournament for HouseOfCasuals {
    fn get_possible_event_names(index:i64) -> Vec<String> {
        let first_week = HouseOfCasuals::get_first_week();
        
        vec![
            format!("houseofcasuals{}",first_week+index)
        ]
    }

    fn get_first_week() -> i64 {
        24
    }
}