# FateRank
Seeding Assistance tool for BBTAG. Built Using React/TSX and Rust. 


# Methodology 

There is literally nothing special about this. It uses the default Glicko-2 ranking algorithim. 

# Supported Platforms

* Start.gg

# Planned Features

Challonge Support

Character Statistics (I'll figure this out eventually)

Website redesign

Automatic start.gg seeding [think of something like smashbase.gg](https://smashbase.gg)


# Creating your own ranking 

clone this repository through the github app or by running 

`git clone (insert this repository)`

Create `auth.rs` in `stargg-interactions/src/` and paste 

`pub(crate) const AUTHENTICATION:&'static str = "YOUR KEY HERE";`

then you can run 

`cargo run`

inside of `/startgg-interactions`

After running the previous commands 

navigate to `/generate_ranking_website/src` and run `generate_sql_list.py`

then whenever you run a new commit you'll have a brand new website with your own ranking. Hooray

# AI Disclosure

Because I know most of you probably care, The only file that was created with AI was `vibe_coded.rs`. Where it was used to turn countries to region tags. 

