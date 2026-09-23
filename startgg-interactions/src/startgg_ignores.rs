use crate::startgg_v2::{TournamentSet, TournamentSetStanding};


pub struct IgnoredSet {

}



impl IgnoredSet {
    pub fn is_ignored_set(set_id:i64) -> Option<TournamentSet> {
        match set_id {
            106458660 => {
                // CEO Ryazo vs Yui
                Some(
                    TournamentSet {
                        standings: 
                        [
                            // Ryazo
                            TournamentSetStanding {
                                id: 1321163,
                                has_won: true,
                                score:3 ,
                            },
                            // Yui
                            TournamentSetStanding {
                                id: 682369,
                                has_won: false,
                                score: 1,
                            },   
                        ]
                    }
                )
            },
            106458667 => {
                // CEO Rainch vs Ronan Healy 

                Some(
                    TournamentSet {
                        standings: 
                        [
                            // Raich
                            TournamentSetStanding {
                                id: 162430,
                                has_won: true,
                                score:3 ,
                            },
                            // Ronan
                            TournamentSetStanding {
                                id: 48752,
                                has_won: false,
                                score: 0,
                            },   
                        ]
                    }
                )
            },
            106458668 => {
                // CEO Yui vs Rainch
                Some(
                    TournamentSet {
                        standings: 
                        [
                            // Yui
                            TournamentSetStanding {
                                id: 682369,
                                has_won: false,
                                score:1 ,
                            },
                            // Ronan
                            TournamentSetStanding {
                                id: 48752,
                                has_won: true,
                                score: 3,
                            },   
                        ]
                    }
                )
            },
            _ => {
                return None;
            }
        }
    }
}