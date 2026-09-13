use std::collections::HashMap;
use skillratings::{Outcomes, glicko2::{Glicko2Rating, glicko2}};

use crate::{constants::GLICKO2_CONFIG, startgg::TournamentSet};


pub struct Elo {
    users: HashMap<i64,Glicko2Rating>
}

impl Elo {
    pub fn new() -> Self {
        return Self {
            users: HashMap::new(),
        }
    }



    pub fn update_player_elo(&mut self, t:&TournamentSet) {
        let outcome;
        
        if t.standings[0].has_won {
            outcome = Outcomes::WIN;
        }
        else {
            outcome = Outcomes::LOSS;
        }

        for i in &t.standings {
            if !self.users.contains_key(&i.id) {
                self.users.insert(i.id, Glicko2Rating::default());
            }
        }

        let (new_player_1, new_player_2) = glicko2(
            self.users.get(&t.standings[0].id).unwrap(),
            self.users.get(&t.standings[1].id).unwrap(),
            &outcome,
            &GLICKO2_CONFIG
        );

        *self.users.get_mut(&t.standings[0].id).unwrap() = new_player_1;
        *self.users.get_mut(&t.standings[1].id).unwrap() = new_player_2;        
    }

    pub fn print_stats(&self) {
        println!("Individual Players: {}",self.users.len());

        for i in &self.users {
            println!("Player Id: {}",i.0);
            println!("ELO: {}",i.1.rating);
            println!("");
        }
    }

    pub fn get_users(&self) -> HashMap<i64, Glicko2Rating> {
        return self.users.clone();
    }
}
