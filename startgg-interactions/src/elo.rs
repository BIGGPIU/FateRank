use std::collections::HashMap;
use skillratings::{Outcomes, glicko2::{Glicko2Rating, glicko2}};

use crate::{constants::GLICKO2_CONFIG, startgg_v2::TournamentSet, };

#[derive(Clone, Copy)]
pub struct Confidence(pub i64);

impl Confidence {
    #[inline]
    pub fn new() -> Self {
        Confidence(0)
    }

    pub fn from(v:i64) -> Self {
        Confidence(v)
    }

    #[inline]
    pub fn update(&self) -> Confidence {
        if self.0 != 100 {
            return Confidence(self.0 + 1);
        }

        return Confidence(100)
    }
}

pub struct Elo {
    users: HashMap<i64,(Confidence,Glicko2Rating)>
}

impl Elo {
    pub fn new() -> Self {
        return Self {
            users: HashMap::new(),
        }
    }



    pub fn update_player_elo(&mut self, t:&TournamentSet) {
        let outcome;
        let mut updated = false;
        
        let repeat_count = std::cmp::max(
            t.standings[0].score - t.standings[1].score,
            t.standings[1].score - t.standings[0].score
        );

        // println!("{} - {} Score Difference: {repeat_count}",t.standings[0].id,t.standings[1].id);

        if t.standings[0].has_won {
            outcome = Outcomes::WIN;
        }
        else {
            outcome = Outcomes::LOSS;
        }

        for i in &t.standings {
            if !self.users.contains_key(&i.id) {
                self.users.insert(i.id, (Confidence::new(),Glicko2Rating::default()));
            }
        }
        for _ in 0..repeat_count {
            let (new_player_1, new_player_2) = glicko2(
                &self.users.get(&t.standings[0].id).unwrap().1,
                &self.users.get(&t.standings[1].id).unwrap().1,
                &outcome,
                &GLICKO2_CONFIG
            );

            let confidence_p1;
            let confidence_p2;
    
            if updated == false {
                confidence_p1 = self.users.get(&t.standings[0].id).unwrap().0.update().clone();
                confidence_p2 = self.users.get(&t.standings[1].id).unwrap().0.update().clone();
                updated = true;
            }
            else {
                confidence_p1 = self.users.get(&t.standings[0].id).unwrap().0.clone();
                confidence_p2 = self.users.get(&t.standings[1].id).unwrap().0.clone();
            }

            *self.users.get_mut(&t.standings[0].id).unwrap() = (confidence_p1,new_player_1);
            *self.users.get_mut(&t.standings[1].id).unwrap() = (confidence_p2,new_player_2);        
        }
    }

    pub fn print_stats(&self) {
        println!("Individual Players: {}",self.users.len());

        for i in &self.users {
            println!("Player Id: {}",i.0);
            println!("ELO: {}",i.1.1.rating);
            println!("");
        }
    }

    pub fn get_users(&self) -> HashMap<i64, (Confidence,Glicko2Rating)> {
        return self.users.clone();
    }
}
