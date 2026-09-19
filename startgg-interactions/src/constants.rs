use std::time::Duration;

use skillratings::{glicko::GlickoConfig, glicko2::Glicko2Config};

pub const MAX_REQUESTS_PER_MINUTE:usize = 50;
pub const GLICKO2_CONFIG:Glicko2Config = Glicko2Config { tau: 0.5, convergence_tolerance: 0.000_001 };
pub const STARTGG_WAIT_TIME:Duration = Duration::from_secs(60);