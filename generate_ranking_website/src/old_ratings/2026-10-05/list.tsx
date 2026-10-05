
export const DATE_CREATED = "2026/10/05"

export interface UserRatingItem {
    username:string,
    elo:number,
    region:string,
    slug:string,
    position:number
    confidence:number
    player_info:ExpandedUserStats
}

export interface ExpandedUserStats {
    best_wins:TournamentSet[],
    rivals:RivalInformation[]
}

export interface TournamentSet {
    winner_name:string,
    winner_score:number,
    loser_name:string,
    loser_score:number,
}

export interface RivalInformation {
    rival_name:string,
    rival_wins:number,
    rival_losses:number,
    // MAX 3 
    recent_sets:TournamentSet[]
}

export const rating_list:Array<UserRatingItem> = [


        {
            username: "Tumbleweed",
            elo: 2119.3958138868506,
            region: "EU",
            slug: "user/944de247",
            confidence: 14,
            position: 1,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Tumbleweed",
            winner_score:3,
            loser_name:"pbl`",
            loser_score:2
        },

        
        {
            winner_name:"Tumbleweed",
            winner_score:3,
            loser_name:"pbl`",
            loser_score:1
        },

        
        {
            winner_name:"Tumbleweed",
            winner_score:3,
            loser_name:"alanae",
            loser_score:0
        },

        
        {
            winner_name:"Tumbleweed",
            winner_score:3,
            loser_name:"LouieTheKraken",
            loser_score:0
        },

        
        {
            winner_name:"Tumbleweed",
            winner_score:3,
            loser_name:"Zeden",
            loser_score:0
        },

        
        {
            winner_name:"Tumbleweed",
            winner_score:3,
            loser_name:"GideonTG",
            loser_score:0
        },

        
        {
            winner_name:"Tumbleweed",
            winner_score:3,
            loser_name:"Guy",
            loser_score:0
        },

        
        {
            winner_name:"Tumbleweed",
            winner_score:3,
            loser_name:"KazuFoxFire",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "pbl`",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Tumbleweed",
                            winner_score:3,
                            loser_name:"pbl`",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Tumbleweed",
                            winner_score:3,
                            loser_name:"pbl`",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Tumbleweed",
                            winner_score:3,
                            loser_name:"pbl`",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "alanae",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Tumbleweed",
                            winner_score:3,
                            loser_name:"alanae",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Tumbleweed",
                            winner_score:3,
                            loser_name:"alanae",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "LouieTheKraken",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Tumbleweed",
                            winner_score:3,
                            loser_name:"LouieTheKraken",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Tumbleweed",
                            winner_score:3,
                            loser_name:"LouieTheKraken",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "KingofNinjas789",
            elo: 2024.0553999375322,
            region: "NA",
            slug: "user/81cc3da6",
            confidence: 74,
            position: 2,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"Kraven Morcom",
            loser_score:2
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:0
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:1
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"LLon",
            loser_score:2
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"LLon",
            loser_score:1
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"Sprite",
            loser_score:1
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"TomoA",
            loser_score:0
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"TomoA",
            loser_score:1
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"Gex",
            loser_score:0
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:2
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:2
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:0
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"Raich",
            loser_score:0
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:2
        },

        
        {
            winner_name:"KingofNinjas789",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "TomoA",
            rival_wins: 6,
            rival_losses:4,
            recent_sets: [
                
                        {
                            winner_name:"KingofNinjas789",
                            winner_score:3,
                            loser_name:"TomoA",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"KingofNinjas789",
                            winner_score:3,
                            loser_name:"TomoA",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"KingofNinjas789",
                            winner_score:3,
                            loser_name:"TomoA",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Sonikun",
            rival_wins: 6,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"KingofNinjas789",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"KingofNinjas789",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"KingofNinjas789",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Monkey :)",
            rival_wins: 4,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"KingofNinjas789",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"KingofNinjas789",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"KingofNinjas789",
                        loser_score:3,
                        winner_name:"Monkey :)",
                        winner_score:1
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Kraven Morcom",
            elo: 1992.9940310837355,
            region: "NA",
            slug: "user/e602d6bb",
            confidence: 24,
            position: 3,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Kraven Morcom",
            winner_score:3,
            loser_name:"Mahihkan Sky",
            loser_score:0
        },

        
        {
            winner_name:"Kraven Morcom",
            winner_score:3,
            loser_name:"Monkey4012",
            loser_score:0
        },

        
        {
            winner_name:"Kraven Morcom",
            winner_score:3,
            loser_name:"hashimo",
            loser_score:2
        },

        
        {
            winner_name:"Kraven Morcom",
            winner_score:3,
            loser_name:"Gex",
            loser_score:0
        },

        
        {
            winner_name:"Kraven Morcom",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:0
        },

        
        {
            winner_name:"Kraven Morcom",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:0
        },

        
        {
            winner_name:"Kraven Morcom",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"Kraven Morcom",
            winner_score:3,
            loser_name:"YOGAMEWIZARD",
            loser_score:1
        },

        
        {
            winner_name:"Kraven Morcom",
            winner_score:3,
            loser_name:"E30",
            loser_score:1
        },

        
        {
            winner_name:"Kraven Morcom",
            winner_score:3,
            loser_name:"Awookanen",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Monkey4012",
            rival_wins: 4,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Kraven Morcom",
                            winner_score:3,
                            loser_name:"Monkey4012",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Kraven Morcom",
                        loser_score:3,
                        winner_name:"Monkey4012",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Kraven Morcom",
                            winner_score:3,
                            loser_name:"Monkey4012",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "hashimo",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Kraven Morcom",
                            winner_score:3,
                            loser_name:"hashimo",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Kraven Morcom",
                            winner_score:3,
                            loser_name:"hashimo",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Awookanen",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Kraven Morcom",
                            winner_score:3,
                            loser_name:"Awookanen",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Kraven Morcom",
                            winner_score:3,
                            loser_name:"Awookanen",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Sonikun",
            elo: 1907.0516209301838,
            region: "NA",
            slug: "user/2d529950",
            confidence: 100,
            position: 4,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"KingofNinjas789",
            loser_score:1
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"KingofNinjas789",
            loser_score:1
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"Kraven Morcom",
            loser_score:1
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"Mahihkan Sky",
            loser_score:1
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"Spritecranberry145829103",
            loser_score:1
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"Spritecranberry145829103",
            loser_score:2
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"LuchikaDRS",
            loser_score:2
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"LuchikaDRS",
            loser_score:2
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"LuchikaDRS",
            loser_score:1
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"LuchikaDRS",
            loser_score:2
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"Detective Crow",
            loser_score:1
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"Detective Crow",
            loser_score:0
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"Hachi",
            loser_score:2
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"Hachi",
            loser_score:0
        },

        
        {
            winner_name:"Sonikun",
            winner_score:3,
            loser_name:"Crackin Atkins",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "KingofNinjas789",
            rival_wins: 3,
            rival_losses:6,
            recent_sets: [
                
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"KingofNinjas789",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Sonikun",
                        loser_score:3,
                        winner_name:"KingofNinjas789",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"KingofNinjas789",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Gex",
            rival_wins: 9,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "LuchikaDRS",
            rival_wins: 6,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"LuchikaDRS",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Sonikun",
                        loser_score:3,
                        winner_name:"LuchikaDRS",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"LuchikaDRS",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Ryazo",
            elo: 1903.98311260711,
            region: "NA",
            slug: "user/0c038e56",
            confidence: 32,
            position: 5,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Ryazo",
            winner_score:3,
            loser_name:"katy",
            loser_score:0
        },

        
        {
            winner_name:"Ryazo",
            winner_score:3,
            loser_name:"Ronan Healy",
            loser_score:0
        },

        
        {
            winner_name:"Ryazo",
            winner_score:3,
            loser_name:"Yui",
            loser_score:1
        },

        
        {
            winner_name:"Ryazo",
            winner_score:3,
            loser_name:"Lotad",
            loser_score:2
        },

        
        {
            winner_name:"Ryazo",
            winner_score:3,
            loser_name:"Gex",
            loser_score:0
        },

        
        {
            winner_name:"Ryazo",
            winner_score:3,
            loser_name:"Raich",
            loser_score:2
        },

        
        {
            winner_name:"Ryazo",
            winner_score:3,
            loser_name:"Raich",
            loser_score:0
        },

        
        {
            winner_name:"Ryazo",
            winner_score:3,
            loser_name:"Laspanditas",
            loser_score:0
        },

        
        {
            winner_name:"Ryazo",
            winner_score:3,
            loser_name:"YOGAMEWIZARD",
            loser_score:1
        },

        
        {
            winner_name:"Ryazo",
            winner_score:3,
            loser_name:"NuclearTaco2042",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "YOGAMEWIZARD",
            rival_wins: 4,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Ryazo",
                            winner_score:3,
                            loser_name:"YOGAMEWIZARD",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Ryazo",
                            winner_score:3,
                            loser_name:"YOGAMEWIZARD",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Ryazo",
                            winner_score:3,
                            loser_name:"YOGAMEWIZARD",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Raich",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Ryazo",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Ryazo",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Ryazo",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mahihkan Sky",
            elo: 1866.1636772401607,
            region: "NA",
            slug: "user/1981f799",
            confidence: 10,
            position: 6,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mahihkan Sky",
            winner_score:3,
            loser_name:"Ryazo",
            loser_score:1
        },

        
        {
            winner_name:"Mahihkan Sky",
            winner_score:3,
            loser_name:"Detective Crow",
            loser_score:1
        },

        
        {
            winner_name:"Mahihkan Sky",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Ryazo",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mahihkan Sky",
                            winner_score:3,
                            loser_name:"Ryazo",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Mahihkan Sky",
                            winner_score:3,
                            loser_name:"Ryazo",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Detective Crow",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mahihkan Sky",
                            winner_score:3,
                            loser_name:"Detective Crow",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Mahihkan Sky",
                            winner_score:3,
                            loser_name:"Detective Crow",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Chopsuey",
            elo: 1860.2422018653313,
            region: "NA",
            slug: "user/5e94fdfd",
            confidence: 20,
            position: 7,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Chopsuey",
            winner_score:3,
            loser_name:"Ryazo",
            loser_score:2
        },

        
        {
            winner_name:"Chopsuey",
            winner_score:3,
            loser_name:"LLon",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LLon",
            rival_wins: 8,
            rival_losses:4,
            recent_sets: [
                
                        {
                            winner_name:"Chopsuey",
                            winner_score:3,
                            loser_name:"LLon",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Chopsuey",
                            winner_score:3,
                            loser_name:"LLon",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Chopsuey",
                        loser_score:3,
                        winner_name:"LLon",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Ryazo",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Chopsuey",
                            winner_score:3,
                            loser_name:"Ryazo",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Chopsuey",
                            winner_score:3,
                            loser_name:"Ryazo",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Chopsuey",
                            winner_score:3,
                            loser_name:"Ryazo",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Monkey4012",
            elo: 1854.6996268331297,
            region: "NA",
            slug: "user/2706d2c5",
            confidence: 12,
            position: 8,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Monkey4012",
            winner_score:3,
            loser_name:"Kraven Morcom",
            loser_score:2
        },

        
        {
            winner_name:"Monkey4012",
            winner_score:3,
            loser_name:"hashimo",
            loser_score:0
        },

        
        {
            winner_name:"Monkey4012",
            winner_score:3,
            loser_name:"TomoA",
            loser_score:0
        },

        
        {
            winner_name:"Monkey4012",
            winner_score:3,
            loser_name:"FourSwordKirby",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Kraven Morcom",
            rival_wins: 2,
            rival_losses:4,
            recent_sets: [
                
                    {
                        loser_name:"Monkey4012",
                        loser_score:3,
                        winner_name:"Kraven Morcom",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Monkey4012",
                            winner_score:3,
                            loser_name:"Kraven Morcom",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Monkey4012",
                        loser_score:3,
                        winner_name:"Kraven Morcom",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "hashimo",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Monkey4012",
                            winner_score:3,
                            loser_name:"hashimo",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Monkey4012",
                            winner_score:3,
                            loser_name:"hashimo",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "TomoA",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Monkey4012",
                            winner_score:3,
                            loser_name:"TomoA",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Monkey4012",
                            winner_score:3,
                            loser_name:"TomoA",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Big_Tilt",
            elo: 1846.1692980507387,
            region: "NA",
            slug: "user/d875b9a3",
            confidence: 13,
            position: 9,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Big_Tilt",
            winner_score:3,
            loser_name:"Mimighoul Master",
            loser_score:0
        },

        
        {
            winner_name:"Big_Tilt",
            winner_score:3,
            loser_name:"Midboss",
            loser_score:0
        },

        
        {
            winner_name:"Big_Tilt",
            winner_score:3,
            loser_name:"ThatScrubDavid",
            loser_score:0
        },

        
        {
            winner_name:"Big_Tilt",
            winner_score:3,
            loser_name:"Rothicus",
            loser_score:0
        },

        
        {
            winner_name:"Big_Tilt",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:0
        },

        
        {
            winner_name:"Big_Tilt",
            winner_score:3,
            loser_name:"Sturmfresser",
            loser_score:2
        },

        
        {
            winner_name:"Big_Tilt",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"Big_Tilt",
            winner_score:3,
            loser_name:"Wear-Tear-Rust",
            loser_score:1
        },

        
        {
            winner_name:"Big_Tilt",
            winner_score:3,
            loser_name:"BrazenWhiteRose",
            loser_score:2
        },

        
        {
            winner_name:"Big_Tilt",
            winner_score:3,
            loser_name:"GamingWarthog",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "ThatScrubDavid",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Big_Tilt",
                            winner_score:3,
                            loser_name:"ThatScrubDavid",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Big_Tilt",
                            winner_score:3,
                            loser_name:"ThatScrubDavid",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "BXR",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Big_Tilt",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Mimighoul Master",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Big_Tilt",
                            winner_score:3,
                            loser_name:"Mimighoul Master",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "katy",
            elo: 1843.4471827256152,
            region: "NA",
            slug: "user/e6bf5fc5",
            confidence: 12,
            position: 10,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"katy",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:2
        },

        
        {
            winner_name:"katy",
            winner_score:3,
            loser_name:"Mastrcheap",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Mastrcheap",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"katy",
                            winner_score:3,
                            loser_name:"Mastrcheap",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"katy",
                            winner_score:3,
                            loser_name:"Mastrcheap",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"katy",
                            winner_score:3,
                            loser_name:"Mastrcheap",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Sonikun",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"katy",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"katy",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"katy",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "LA CAMA",
            elo: 1835.086548622619,
            region: "UNK",
            slug: "user/a23f4764",
            confidence: 8,
            position: 11,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"LA CAMA",
            winner_score:3,
            loser_name:"BingDiaoQWQ",
            loser_score:1
        },

        
        {
            winner_name:"LA CAMA",
            winner_score:3,
            loser_name:"BingDiaoQWQ",
            loser_score:0
        },

        
        {
            winner_name:"LA CAMA",
            winner_score:3,
            loser_name:"ColdMill",
            loser_score:1
        },

        
        {
            winner_name:"LA CAMA",
            winner_score:3,
            loser_name:"Cram",
            loser_score:0
        },

        
        {
            winner_name:"LA CAMA",
            winner_score:3,
            loser_name:"Donpi",
            loser_score:0
        },

        
        {
            winner_name:"LA CAMA",
            winner_score:3,
            loser_name:"Artoria Nobunaga",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BingDiaoQWQ",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LA CAMA",
                            winner_score:3,
                            loser_name:"BingDiaoQWQ",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"LA CAMA",
                            winner_score:3,
                            loser_name:"BingDiaoQWQ",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"LA CAMA",
                            winner_score:3,
                            loser_name:"BingDiaoQWQ",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Cram",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LA CAMA",
                            winner_score:3,
                            loser_name:"Cram",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "ColdMill",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LA CAMA",
                            winner_score:3,
                            loser_name:"ColdMill",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Spritecranberry145829103",
            elo: 1830.6459568551,
            region: "UNK",
            slug: "user/be47db16",
            confidence: 18,
            position: 12,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Spritecranberry145829103",
            winner_score:3,
            loser_name:"Detective Crow",
            loser_score:2
        },

        
        {
            winner_name:"Spritecranberry145829103",
            winner_score:3,
            loser_name:"Detective Crow",
            loser_score:1
        },

        
        {
            winner_name:"Spritecranberry145829103",
            winner_score:3,
            loser_name:"Lotad",
            loser_score:1
        },

        
        {
            winner_name:"Spritecranberry145829103",
            winner_score:3,
            loser_name:"Gex",
            loser_score:1
        },

        
        {
            winner_name:"Spritecranberry145829103",
            winner_score:3,
            loser_name:"Gex",
            loser_score:1
        },

        
        {
            winner_name:"Spritecranberry145829103",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:0
        },

        
        {
            winner_name:"Spritecranberry145829103",
            winner_score:3,
            loser_name:"Anima",
            loser_score:0
        },

        
        {
            winner_name:"Spritecranberry145829103",
            winner_score:3,
            loser_name:"Twimmy",
            loser_score:0
        },

        
        {
            winner_name:"Spritecranberry145829103",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"Spritecranberry145829103",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Detective Crow",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Spritecranberry145829103",
                            winner_score:3,
                            loser_name:"Detective Crow",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Spritecranberry145829103",
                            winner_score:3,
                            loser_name:"Detective Crow",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Gex",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Spritecranberry145829103",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Spritecranberry145829103",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mldorli",
            elo: 1829.9289351637099,
            region: "NA",
            slug: "user/6ea2e0a7",
            confidence: 4,
            position: 13,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mldorli",
            winner_score:3,
            loser_name:"Gex",
            loser_score:2
        },

        
        {
            winner_name:"Mldorli",
            winner_score:3,
            loser_name:"Gex",
            loser_score:1
        },

        
        {
            winner_name:"Mldorli",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:0
        },

        
        {
            winner_name:"Mldorli",
            winner_score:3,
            loser_name:"Yanase Koi",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Gex",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mldorli",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Mldorli",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "LuckyNaegi",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mldorli",
                            winner_score:3,
                            loser_name:"LuckyNaegi",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Yanase Koi",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mldorli",
                            winner_score:3,
                            loser_name:"Yanase Koi",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "LuchikaDRS",
            elo: 1820.9142937064303,
            region: "NA",
            slug: "user/d6c43847",
            confidence: 27,
            position: 14,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:2
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Detective Crow",
            loser_score:2
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Gex",
            loser_score:0
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Gex",
            loser_score:1
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:2
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Raich",
            loser_score:2
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Raich",
            loser_score:0
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:2
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:1
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:1
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"FourSwordKirby",
            loser_score:2
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Burnt Bread",
            loser_score:0
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:1
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:0
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"MrEater",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Sonikun",
            rival_wins: 1,
            rival_losses:6,
            recent_sets: [
                
                    {
                        loser_name:"LuchikaDRS",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"LuchikaDRS",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"LuchikaDRS",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Monkey :)",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LuchikaDRS",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"LuchikaDRS",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"LuchikaDRS",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "thechriss2004s",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"LuchikaDRS",
                            winner_score:3,
                            loser_name:"thechriss2004s",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"LuchikaDRS",
                        loser_score:3,
                        winner_name:"thechriss2004s",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"LuchikaDRS",
                            winner_score:3,
                            loser_name:"thechriss2004s",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "hashimo",
            elo: 1808.2539556252336,
            region: "JPN",
            slug: "user/7f3c55f1",
            confidence: 26,
            position: 15,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"hashimo",
            winner_score:3,
            loser_name:"Hachi",
            loser_score:2
        },

        
        {
            winner_name:"hashimo",
            winner_score:3,
            loser_name:"Mastrcheap",
            loser_score:1
        },

        
        {
            winner_name:"hashimo",
            winner_score:3,
            loser_name:"Mastrcheap",
            loser_score:0
        },

        
        {
            winner_name:"hashimo",
            winner_score:3,
            loser_name:"Raich",
            loser_score:1
        },

        
        {
            winner_name:"hashimo",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:0
        },

        
        {
            winner_name:"hashimo",
            winner_score:3,
            loser_name:"FourSwordKirby",
            loser_score:0
        },

        
        {
            winner_name:"hashimo",
            winner_score:3,
            loser_name:"FenneccyFoxMV",
            loser_score:1
        },

        
        {
            winner_name:"hashimo",
            winner_score:3,
            loser_name:"Masive",
            loser_score:2
        },

        
        {
            winner_name:"hashimo",
            winner_score:3,
            loser_name:"MetalBlurS",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Hachi",
            rival_wins: 2,
            rival_losses:4,
            recent_sets: [
                
                    {
                        loser_name:"hashimo",
                        loser_score:3,
                        winner_name:"Hachi",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"hashimo",
                            winner_score:3,
                            loser_name:"Hachi",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"hashimo",
                        loser_score:3,
                        winner_name:"Hachi",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Mastrcheap",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"hashimo",
                            winner_score:3,
                            loser_name:"Mastrcheap",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"hashimo",
                            winner_score:3,
                            loser_name:"Mastrcheap",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"hashimo",
                            winner_score:3,
                            loser_name:"Mastrcheap",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "FourSwordKirby",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"hashimo",
                            winner_score:3,
                            loser_name:"FourSwordKirby",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"hashimo",
                            winner_score:3,
                            loser_name:"FourSwordKirby",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "RuneKat",
            elo: 1806.31010913605,
            region: "NA",
            slug: "user/5bfb1975",
            confidence: 4,
            position: 16,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"RuneKat",
            winner_score:3,
            loser_name:"BotanIsMyOshi69",
            loser_score:1
        },

        
        {
            winner_name:"RuneKat",
            winner_score:3,
            loser_name:"BotanIsMyOshi69",
            loser_score:0
        },

        
        {
            winner_name:"RuneKat",
            winner_score:3,
            loser_name:"Zturtle102",
            loser_score:0
        },

        
        {
            winner_name:"RuneKat",
            winner_score:3,
            loser_name:"Spartan",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BotanIsMyOshi69",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"RuneKat",
                            winner_score:3,
                            loser_name:"BotanIsMyOshi69",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"RuneKat",
                            winner_score:3,
                            loser_name:"BotanIsMyOshi69",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Spartan",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"RuneKat",
                            winner_score:3,
                            loser_name:"Spartan",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Zturtle102",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"RuneKat",
                            winner_score:3,
                            loser_name:"Zturtle102",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "pbl`",
            elo: 1786.8779821676278,
            region: "EU",
            slug: "user/10f7d41d",
            confidence: 12,
            position: 17,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"pbl`",
            winner_score:3,
            loser_name:"Trashy",
            loser_score:0
        },

        
        {
            winner_name:"pbl`",
            winner_score:3,
            loser_name:"Peepohold",
            loser_score:0
        },

        
        {
            winner_name:"pbl`",
            winner_score:3,
            loser_name:"FX",
            loser_score:1
        },

        
        {
            winner_name:"pbl`",
            winner_score:3,
            loser_name:"Openwolf",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Trashy",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"pbl`",
                            winner_score:3,
                            loser_name:"Trashy",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"pbl`",
                            winner_score:3,
                            loser_name:"Trashy",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Peepohold",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"pbl`",
                            winner_score:3,
                            loser_name:"Peepohold",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"pbl`",
                            winner_score:3,
                            loser_name:"Peepohold",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Detective Crow",
            elo: 1783.384280770629,
            region: "UNK",
            slug: "user/5976380f",
            confidence: 20,
            position: 18,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"Gex",
            loser_score:1
        },

        
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:2
        },

        
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:0
        },

        
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:0
        },

        
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"Reapers Ruling Rat",
            loser_score:0
        },

        
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"Serene Smile",
            loser_score:0
        },

        
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"Twimmy",
            loser_score:0
        },

        
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"Orrax / Luke",
            loser_score:1
        },

        
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:2
        },

        
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"BXR",
            loser_score:0
        },

        
        {
            winner_name:"Detective Crow",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "E2DEKU",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Detective Crow",
                            winner_score:3,
                            loser_name:"E2DEKU",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Detective Crow",
                            winner_score:3,
                            loser_name:"E2DEKU",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Detective Crow",
                            winner_score:3,
                            loser_name:"E2DEKU",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "BXR",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Detective Crow",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Detective Crow",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Berto",
            elo: 1776.612959964013,
            region: "NA",
            slug: "user/14cf793e",
            confidence: 4,
            position: 19,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Berto",
            winner_score:3,
            loser_name:"JOE MAMA",
            loser_score:2
        },

        
        {
            winner_name:"Berto",
            winner_score:3,
            loser_name:"JOE MAMA",
            loser_score:0
        },

        
        {
            winner_name:"Berto",
            winner_score:3,
            loser_name:"Garfield",
            loser_score:0
        },

        
        {
            winner_name:"Berto",
            winner_score:3,
            loser_name:"Bwead",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "JOE MAMA",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Berto",
                            winner_score:3,
                            loser_name:"JOE MAMA",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Berto",
                            winner_score:3,
                            loser_name:"JOE MAMA",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Garfield",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Berto",
                            winner_score:3,
                            loser_name:"Garfield",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Bwead",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Berto",
                            winner_score:3,
                            loser_name:"Bwead",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "NAKAKAPAGPABAGABAG",
            elo: 1768.9855702042478,
            region: "NA",
            slug: "user/6f5e9b4b",
            confidence: 6,
            position: 20,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"NAKAKAPAGPABAGABAG",
            winner_score:3,
            loser_name:"Cykes_02",
            loser_score:2
        },

        
        {
            winner_name:"NAKAKAPAGPABAGABAG",
            winner_score:3,
            loser_name:"Gex",
            loser_score:0
        },

        
        {
            winner_name:"NAKAKAPAGPABAGABAG",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Cykes_02",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"NAKAKAPAGPABAGABAG",
                            winner_score:3,
                            loser_name:"Cykes_02",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"NAKAKAPAGPABAGABAG",
                            winner_score:3,
                            loser_name:"Cykes_02",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"NAKAKAPAGPABAGABAG",
                        loser_score:3,
                        winner_name:"Cykes_02",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Gex",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"NAKAKAPAGPABAGABAG",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"NAKAKAPAGPABAGABAG",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Intimidaving",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"NAKAKAPAGPABAGABAG",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Charamie",
            elo: 1760.7136470179894,
            region: "ASIA",
            slug: "user/0a0375e6",
            confidence: 4,
            position: 21,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Charamie",
            winner_score:3,
            loser_name:"Valcan",
            loser_score:2
        },

        
        {
            winner_name:"Charamie",
            winner_score:3,
            loser_name:"Hakari882",
            loser_score:0
        },

        
        {
            winner_name:"Charamie",
            winner_score:3,
            loser_name:"canqkate",
            loser_score:1
        },

        
        {
            winner_name:"Charamie",
            winner_score:3,
            loser_name:"Monomin",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Valcan",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Charamie",
                            winner_score:3,
                            loser_name:"Valcan",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Hakari882",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Charamie",
                            winner_score:3,
                            loser_name:"Hakari882",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "canqkate",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Charamie",
                            winner_score:3,
                            loser_name:"canqkate",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Hachi",
            elo: 1758.9043727544572,
            region: "NA",
            slug: "user/6ab1f2a8",
            confidence: 14,
            position: 22,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Hachi",
            winner_score:3,
            loser_name:"Chopsuey",
            loser_score:0
        },

        
        {
            winner_name:"Hachi",
            winner_score:3,
            loser_name:"hashimo",
            loser_score:1
        },

        
        {
            winner_name:"Hachi",
            winner_score:3,
            loser_name:"hashimo",
            loser_score:2
        },

        
        {
            winner_name:"Hachi",
            winner_score:3,
            loser_name:"Gex",
            loser_score:1
        },

        
        {
            winner_name:"Hachi",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
        {
            winner_name:"Hachi",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "hashimo",
            rival_wins: 4,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Hachi",
                            winner_score:3,
                            loser_name:"hashimo",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Hachi",
                        loser_score:3,
                        winner_name:"hashimo",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Hachi",
                            winner_score:3,
                            loser_name:"hashimo",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Chopsuey",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Hachi",
                            winner_score:3,
                            loser_name:"Chopsuey",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Hachi",
                            winner_score:3,
                            loser_name:"Chopsuey",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Rhyllis",
            elo: 1751.0678205856607,
            region: "NA",
            slug: "user/b85a5251",
            confidence: 4,
            position: 23,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Rhyllis",
            winner_score:3,
            loser_name:"Shrub",
            loser_score:2
        },

        
        {
            winner_name:"Rhyllis",
            winner_score:3,
            loser_name:"Pssych",
            loser_score:1
        },

        
        {
            winner_name:"Rhyllis",
            winner_score:3,
            loser_name:"Cataclysm",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Shrub",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Rhyllis",
                            winner_score:3,
                            loser_name:"Shrub",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Rhyllis",
                            winner_score:3,
                            loser_name:"Shrub",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Cataclysm",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Rhyllis",
                            winner_score:3,
                            loser_name:"Cataclysm",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Pssych",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Rhyllis",
                            winner_score:3,
                            loser_name:"Pssych",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Cykes_02",
            elo: 1750.903310439987,
            region: "NA",
            slug: "user/1aaf3e94",
            confidence: 9,
            position: 24,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Cykes_02",
            winner_score:3,
            loser_name:"NAKAKAPAGPABAGABAG",
            loser_score:2
        },

        
        {
            winner_name:"Cykes_02",
            winner_score:3,
            loser_name:"Reapers Ruling Rat",
            loser_score:1
        },

        
        {
            winner_name:"Cykes_02",
            winner_score:3,
            loser_name:"Pokedude",
            loser_score:0
        },

        
        {
            winner_name:"Cykes_02",
            winner_score:3,
            loser_name:"E30",
            loser_score:1
        },

        
        {
            winner_name:"Cykes_02",
            winner_score:3,
            loser_name:"Imano Ob",
            loser_score:0
        },

        
        {
            winner_name:"Cykes_02",
            winner_score:3,
            loser_name:"Vermillion",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "NAKAKAPAGPABAGABAG",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Cykes_02",
                        loser_score:3,
                        winner_name:"NAKAKAPAGPABAGABAG",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"Cykes_02",
                        loser_score:3,
                        winner_name:"NAKAKAPAGPABAGABAG",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"NAKAKAPAGPABAGABAG",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Pokedude",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"Pokedude",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"Pokedude",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Reapers Ruling Rat",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"Reapers Ruling Rat",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Ronan Healy",
            elo: 1745.9097908794313,
            region: "NA",
            slug: "user/c8cdfd3a",
            confidence: 29,
            position: 25,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"Yui",
            loser_score:1
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"Duckator",
            loser_score:1
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"Laspanditas",
            loser_score:0
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"GragonMonkey",
            loser_score:1
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"Garfield",
            loser_score:0
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"NuclearTaco2042",
            loser_score:1
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"Goji",
            loser_score:1
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"Hien",
            loser_score:0
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"BXR",
            loser_score:0
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"Burn0ut",
            loser_score:0
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"EX Falchion",
            loser_score:2
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"FMBrosuke",
            loser_score:0
        },

        
        {
            winner_name:"Ronan Healy",
            winner_score:3,
            loser_name:"Trillion-Crows",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Yui",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Ronan Healy",
                            winner_score:3,
                            loser_name:"Yui",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Ronan Healy",
                        loser_score:3,
                        winner_name:"Yui",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Ronan Healy",
                            winner_score:3,
                            loser_name:"Yui",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Laspanditas",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Ronan Healy",
                            winner_score:3,
                            loser_name:"Laspanditas",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Ronan Healy",
                            winner_score:3,
                            loser_name:"Laspanditas",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "rat",
            elo: 1739.548976148459,
            region: "OCE",
            slug: "user/73e8d816",
            confidence: 4,
            position: 26,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"rat",
            winner_score:3,
            loser_name:"L'Winner",
            loser_score:2
        },

        
        {
            winner_name:"rat",
            winner_score:3,
            loser_name:"Raoden",
            loser_score:0
        },

        
        {
            winner_name:"rat",
            winner_score:3,
            loser_name:"dog",
            loser_score:1
        },

        
        {
            winner_name:"rat",
            winner_score:3,
            loser_name:"Ranga",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "L'Winner",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"rat",
                            winner_score:3,
                            loser_name:"L'Winner",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Raoden",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"rat",
                            winner_score:3,
                            loser_name:"Raoden",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "dog",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"rat",
                            winner_score:3,
                            loser_name:"dog",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Yui",
            elo: 1737.4804313721543,
            region: "NA",
            slug: "user/d52d4bc0",
            confidence: 14,
            position: 27,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Yui",
            winner_score:3,
            loser_name:"Big_Tilt",
            loser_score:2
        },

        
        {
            winner_name:"Yui",
            winner_score:3,
            loser_name:"Ronan Healy",
            loser_score:1
        },

        
        {
            winner_name:"Yui",
            winner_score:3,
            loser_name:"Guapo",
            loser_score:0
        },

        
        {
            winner_name:"Yui",
            winner_score:3,
            loser_name:"Guapo",
            loser_score:1
        },

        
        {
            winner_name:"Yui",
            winner_score:3,
            loser_name:"Raich",
            loser_score:2
        },

        
        {
            winner_name:"Yui",
            winner_score:3,
            loser_name:"Link Pendrago",
            loser_score:2
        },

        
        {
            winner_name:"Yui",
            winner_score:3,
            loser_name:"Scrappy Sensei",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Ronan Healy",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Yui",
                        loser_score:3,
                        winner_name:"Ronan Healy",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Yui",
                            winner_score:3,
                            loser_name:"Ronan Healy",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Yui",
                        loser_score:3,
                        winner_name:"Ronan Healy",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Link Pendrago",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Yui",
                            winner_score:3,
                            loser_name:"Link Pendrago",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Yui",
                            winner_score:3,
                            loser_name:"Link Pendrago",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "LLon",
            elo: 1736.5127864925441,
            region: "KOR",
            slug: "user/27295b2c",
            confidence: 22,
            position: 28,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"LLon",
            winner_score:3,
            loser_name:"Chopsuey",
            loser_score:2
        },

        
        {
            winner_name:"LLon",
            winner_score:3,
            loser_name:"Raich",
            loser_score:0
        },

        
        {
            winner_name:"LLon",
            winner_score:3,
            loser_name:"DaBelowZero",
            loser_score:1
        },

        
        {
            winner_name:"LLon",
            winner_score:3,
            loser_name:"Edgelord44",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Chopsuey",
            rival_wins: 4,
            rival_losses:8,
            recent_sets: [
                
                    {
                        loser_name:"LLon",
                        loser_score:3,
                        winner_name:"Chopsuey",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"LLon",
                        loser_score:3,
                        winner_name:"Chopsuey",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"LLon",
                            winner_score:3,
                            loser_name:"Chopsuey",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Raich",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LLon",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"LLon",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Pokke",
            elo: 1735.423020726328,
            region: "NA",
            slug: "user/a15d56a9",
            confidence: 5,
            position: 29,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Pokke",
            winner_score:3,
            loser_name:"Mimighoul Master",
            loser_score:0
        },

        
        {
            winner_name:"Pokke",
            winner_score:3,
            loser_name:"E30",
            loser_score:1
        },

        
        {
            winner_name:"Pokke",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Pokke",
            winner_score:3,
            loser_name:"Ceasar little",
            loser_score:1
        },

        
        {
            winner_name:"Pokke",
            winner_score:3,
            loser_name:"Yat0ro",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Mimighoul Master",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Pokke",
                            winner_score:3,
                            loser_name:"Mimighoul Master",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Lavender",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Pokke",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Ceasar little",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Pokke",
                            winner_score:3,
                            loser_name:"Ceasar little",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Guapo",
            elo: 1729.1627715223071,
            region: "NA",
            slug: "user/8512922f",
            confidence: 15,
            position: 30,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Guapo",
            winner_score:3,
            loser_name:"Big_Tilt",
            loser_score:2
        },

        
        {
            winner_name:"Guapo",
            winner_score:3,
            loser_name:"Raich",
            loser_score:0
        },

        
        {
            winner_name:"Guapo",
            winner_score:3,
            loser_name:"Midboss",
            loser_score:0
        },

        
        {
            winner_name:"Guapo",
            winner_score:3,
            loser_name:"Midboss",
            loser_score:0
        },

        
        {
            winner_name:"Guapo",
            winner_score:3,
            loser_name:"Soulkitten23",
            loser_score:0
        },

        
        {
            winner_name:"Guapo",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
        },

        
        {
            winner_name:"Guapo",
            winner_score:3,
            loser_name:"Sovereign",
            loser_score:0
        },

        
        {
            winner_name:"Guapo",
            winner_score:3,
            loser_name:"X-Cal",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Midboss",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Guapo",
                            winner_score:3,
                            loser_name:"Midboss",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Guapo",
                            winner_score:3,
                            loser_name:"Midboss",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Guapo",
                            winner_score:3,
                            loser_name:"Midboss",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Megu",
            elo: 1718.42665283033,
            region: "UNK",
            slug: "user/670d2170",
            confidence: 2,
            position: 31,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Megu",
            winner_score:3,
            loser_name:"Keluna",
            loser_score:0
        },

        
        {
            winner_name:"Megu",
            winner_score:3,
            loser_name:"Astuarte",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Astuarte",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Megu",
                            winner_score:3,
                            loser_name:"Astuarte",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Keluna",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Megu",
                            winner_score:3,
                            loser_name:"Keluna",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Fujyno",
            elo: 1697.53059699817,
            region: "EU",
            slug: "user/ff2f0dc4",
            confidence: 4,
            position: 32,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Fujyno",
            winner_score:3,
            loser_name:"Karlaaaa",
            loser_score:0
        },

        
        {
            winner_name:"Fujyno",
            winner_score:3,
            loser_name:"AAAA",
            loser_score:2
        },

        
        {
            winner_name:"Fujyno",
            winner_score:3,
            loser_name:"DisgustinglyWashedEggs",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Karlaaaa",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Fujyno",
                            winner_score:3,
                            loser_name:"Karlaaaa",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Fujyno",
                            winner_score:3,
                            loser_name:"Karlaaaa",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "AAAA",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Fujyno",
                            winner_score:3,
                            loser_name:"AAAA",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "DisgustinglyWashedEggs",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Fujyno",
                            winner_score:3,
                            loser_name:"DisgustinglyWashedEggs",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "shadowPR",
            elo: 1697.411407717027,
            region: "UNK",
            slug: "user/3a79de82",
            confidence: 10,
            position: 33,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"shadowPR",
            winner_score:3,
            loser_name:"Tokai Tatum",
            loser_score:1
        },

        
        {
            winner_name:"shadowPR",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:1
        },

        
        {
            winner_name:"shadowPR",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:0
        },

        
        {
            winner_name:"shadowPR",
            winner_score:3,
            loser_name:"GragonMonkey",
            loser_score:1
        },

        
        {
            winner_name:"shadowPR",
            winner_score:3,
            loser_name:"GragonMonkey",
            loser_score:0
        },

        
        {
            winner_name:"shadowPR",
            winner_score:3,
            loser_name:"Pillowtalk",
            loser_score:0
        },

        
        {
            winner_name:"shadowPR",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"shadowPR",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"shadowPR",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "jadestar63",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"shadowPR",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"shadowPR",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"shadowPR",
                        loser_score:3,
                        winner_name:"jadestar63",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "BXR",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"shadowPR",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"shadowPR",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "GragonMonkey",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"shadowPR",
                            winner_score:3,
                            loser_name:"GragonMonkey",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"shadowPR",
                            winner_score:3,
                            loser_name:"GragonMonkey",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Shrub",
            elo: 1690.3815548054,
            region: "NA",
            slug: "user/432f2103",
            confidence: 6,
            position: 34,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Shrub",
            winner_score:3,
            loser_name:"Gaudeo",
            loser_score:1
        },

        
        {
            winner_name:"Shrub",
            winner_score:3,
            loser_name:"Gaudeo",
            loser_score:0
        },

        
        {
            winner_name:"Shrub",
            winner_score:3,
            loser_name:"Moorcas",
            loser_score:0
        },

        
        {
            winner_name:"Shrub",
            winner_score:3,
            loser_name:"Cataclysm",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Gaudeo",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Shrub",
                            winner_score:3,
                            loser_name:"Gaudeo",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Shrub",
                            winner_score:3,
                            loser_name:"Gaudeo",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Cataclysm",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Shrub",
                            winner_score:3,
                            loser_name:"Cataclysm",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Panther",
            elo: 1690.2859037786452,
            region: "NA",
            slug: "user/b5d54e8c",
            confidence: 4,
            position: 35,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Panther",
            winner_score:3,
            loser_name:"Lukiro",
            loser_score:0
        },

        
        {
            winner_name:"Panther",
            winner_score:3,
            loser_name:"PMXHOMIE",
            loser_score:1
        },

        
        {
            winner_name:"Panther",
            winner_score:3,
            loser_name:"Muerto",
            loser_score:1
        },

        
        {
            winner_name:"Panther",
            winner_score:3,
            loser_name:"Johnny Tatsumi",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Muerto",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Panther",
                            winner_score:3,
                            loser_name:"Muerto",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "PMXHOMIE",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Panther",
                            winner_score:3,
                            loser_name:"PMXHOMIE",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Lukiro",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Panther",
                            winner_score:3,
                            loser_name:"Lukiro",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Markava",
            elo: 1689.2167854162044,
            region: "NA",
            slug: "user/a839ceae",
            confidence: 3,
            position: 36,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Markava",
            winner_score:3,
            loser_name:"Darklight",
            loser_score:2
        },

        
        {
            winner_name:"Markava",
            winner_score:3,
            loser_name:"Darklight",
            loser_score:0
        },

        
        {
            winner_name:"Markava",
            winner_score:3,
            loser_name:"Mage",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Darklight",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Markava",
                            winner_score:3,
                            loser_name:"Darklight",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Markava",
                            winner_score:3,
                            loser_name:"Darklight",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Mage",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Markava",
                            winner_score:3,
                            loser_name:"Mage",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Lotad",
            elo: 1684.5832739457983,
            region: "NA",
            slug: "user/a85715a4",
            confidence: 16,
            position: 37,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"Gex",
            loser_score:0
        },

        
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:1
        },

        
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"MysteryRacer21",
            loser_score:2
        },

        
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:2
        },

        
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"HCShark10",
            loser_score:0
        },

        
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"BXR",
            loser_score:0
        },

        
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BXR",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Lotad",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Lotad",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "E2DEKU",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Lotad",
                            winner_score:3,
                            loser_name:"E2DEKU",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Lotad",
                            winner_score:3,
                            loser_name:"E2DEKU",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Snake Eater",
            elo: 1682.524410533487,
            region: "NA",
            slug: "user/63d5cb8d",
            confidence: 3,
            position: 38,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Snake Eater",
            winner_score:3,
            loser_name:"yameteAsh",
            loser_score:1
        },

        
        {
            winner_name:"Snake Eater",
            winner_score:3,
            loser_name:"yameteAsh",
            loser_score:0
        },

        
        {
            winner_name:"Snake Eater",
            winner_score:3,
            loser_name:"RavenCaol",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "yameteAsh",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Snake Eater",
                            winner_score:3,
                            loser_name:"yameteAsh",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Snake Eater",
                            winner_score:3,
                            loser_name:"yameteAsh",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "RavenCaol",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Snake Eater",
                            winner_score:3,
                            loser_name:"RavenCaol",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Crackin Atkins",
            elo: 1677.110304319939,
            region: "NA",
            slug: "user/2455f196",
            confidence: 8,
            position: 39,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Crackin Atkins",
            winner_score:3,
            loser_name:"Bojack",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Bojack",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Crackin Atkins",
                            winner_score:3,
                            loser_name:"Bojack",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Crackin Atkins",
                            winner_score:3,
                            loser_name:"Bojack",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Crackin Atkins",
                            winner_score:3,
                            loser_name:"Bojack",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Sprite",
            elo: 1674.2077085886744,
            region: "NA",
            slug: "user/189e57fd",
            confidence: 19,
            position: 40,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Sprite",
            winner_score:3,
            loser_name:"KingofNinjas789",
            loser_score:1
        },

        
        {
            winner_name:"Sprite",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:0
        },

        
        {
            winner_name:"Sprite",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:2
        },

        
        {
            winner_name:"Sprite",
            winner_score:3,
            loser_name:"Reapers Ruling Rat",
            loser_score:1
        },

        
        {
            winner_name:"Sprite",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"Sprite",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:1
        },

        
        {
            winner_name:"Sprite",
            winner_score:3,
            loser_name:"Kanzuki",
            loser_score:0
        },

        
        {
            winner_name:"Sprite",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:0
        },

        
        {
            winner_name:"Sprite",
            winner_score:3,
            loser_name:"FGCConex",
            loser_score:0
        },

        
        {
            winner_name:"Sprite",
            winner_score:3,
            loser_name:"Troggz93",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "KingofNinjas789",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Sprite",
                        loser_score:3,
                        winner_name:"KingofNinjas789",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"Sprite",
                        loser_score:3,
                        winner_name:"KingofNinjas789",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Sprite",
                            winner_score:3,
                            loser_name:"KingofNinjas789",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Sonikun",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Sprite",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Sprite",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Sprite",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:2
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mastrcheap",
            elo: 1672.0782049047086,
            region: "NA",
            slug: "user/1e186b5c",
            confidence: 18,
            position: 41,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mastrcheap",
            winner_score:3,
            loser_name:"TomoA",
            loser_score:2
        },

        
        {
            winner_name:"Mastrcheap",
            winner_score:3,
            loser_name:"Serene Smile",
            loser_score:0
        },

        
        {
            winner_name:"Mastrcheap",
            winner_score:3,
            loser_name:"Awookanen",
            loser_score:2
        },

        
        {
            winner_name:"Mastrcheap",
            winner_score:3,
            loser_name:"Lord Hoseph Dong",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Serene Smile",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mastrcheap",
                            winner_score:3,
                            loser_name:"Serene Smile",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Mastrcheap",
                            winner_score:3,
                            loser_name:"Serene Smile",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Mastrcheap",
                            winner_score:3,
                            loser_name:"Serene Smile",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "maplekaaa",
            elo: 1670.7415554731092,
            region: "EU",
            slug: "user/f7d971a3",
            confidence: 4,
            position: 42,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"maplekaaa",
            winner_score:3,
            loser_name:"Luke1235",
            loser_score:0
        },

        
        {
            winner_name:"maplekaaa",
            winner_score:3,
            loser_name:"Doogong",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Luke1235",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"maplekaaa",
                        loser_score:3,
                        winner_name:"Luke1235",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"maplekaaa",
                            winner_score:3,
                            loser_name:"Luke1235",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Doogong",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"maplekaaa",
                            winner_score:3,
                            loser_name:"Doogong",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "DBlanks",
            elo: 1669.8293277910918,
            region: "EU",
            slug: "user/9ac9f1cb",
            confidence: 8,
            position: 43,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"DBlanks",
            winner_score:3,
            loser_name:"alanae",
            loser_score:2
        },

        
        {
            winner_name:"DBlanks",
            winner_score:3,
            loser_name:"NaruKami",
            loser_score:1
        },

        
        {
            winner_name:"DBlanks",
            winner_score:3,
            loser_name:"FX",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "FX",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DBlanks",
                            winner_score:3,
                            loser_name:"FX",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"DBlanks",
                            winner_score:3,
                            loser_name:"FX",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "alanae",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DBlanks",
                            winner_score:3,
                            loser_name:"alanae",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"DBlanks",
                            winner_score:3,
                            loser_name:"alanae",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "結月有希 ~ Yuzuki Yuki",
            elo: 1665.0921825508908,
            region: "NA",
            slug: "user/326a2268",
            confidence: 10,
            position: 44,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"結月有希 ~ Yuzuki Yuki",
            winner_score:3,
            loser_name:"Shadowpelt",
            loser_score:2
        },

        
        {
            winner_name:"結月有希 ~ Yuzuki Yuki",
            winner_score:3,
            loser_name:"Shadowpelt",
            loser_score:2
        },

        
        {
            winner_name:"結月有希 ~ Yuzuki Yuki",
            winner_score:3,
            loser_name:"BXR",
            loser_score:2
        },

        
        {
            winner_name:"結月有希 ~ Yuzuki Yuki",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"結月有希 ~ Yuzuki Yuki",
            winner_score:3,
            loser_name:"BXR",
            loser_score:2
        },

        
        {
            winner_name:"結月有希 ~ Yuzuki Yuki",
            winner_score:3,
            loser_name:"BXR",
            loser_score:2
        },

        
        {
            winner_name:"結月有希 ~ Yuzuki Yuki",
            winner_score:3,
            loser_name:"SpicyChedderJack",
            loser_score:1
        },

        
        {
            winner_name:"結月有希 ~ Yuzuki Yuki",
            winner_score:3,
            loser_name:"SpicyChedderJack",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BXR",
            rival_wins: 5,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"結月有希 ~ Yuzuki Yuki",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"結月有希 ~ Yuzuki Yuki",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"結月有希 ~ Yuzuki Yuki",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Shadowpelt",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"結月有希 ~ Yuzuki Yuki",
                            winner_score:3,
                            loser_name:"Shadowpelt",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"結月有希 ~ Yuzuki Yuki",
                            winner_score:3,
                            loser_name:"Shadowpelt",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "SpicyChedderJack",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"結月有希 ~ Yuzuki Yuki",
                            winner_score:3,
                            loser_name:"SpicyChedderJack",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"結月有希 ~ Yuzuki Yuki",
                            winner_score:3,
                            loser_name:"SpicyChedderJack",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Luke1235",
            elo: 1657.1341564201257,
            region: "EU",
            slug: "user/28427a09",
            confidence: 9,
            position: 45,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Luke1235",
            winner_score:3,
            loser_name:"maplekaaa",
            loser_score:0
        },

        
        {
            winner_name:"Luke1235",
            winner_score:3,
            loser_name:"Coffee Farmer",
            loser_score:0
        },

        
        {
            winner_name:"Luke1235",
            winner_score:3,
            loser_name:"Coffee Farmer",
            loser_score:1
        },

        
        {
            winner_name:"Luke1235",
            winner_score:3,
            loser_name:"Everlasting",
            loser_score:0
        },

        
        {
            winner_name:"Luke1235",
            winner_score:3,
            loser_name:"antlandking",
            loser_score:1
        },

        
        {
            winner_name:"Luke1235",
            winner_score:3,
            loser_name:"[ BK SAS ]",
            loser_score:0
        },

        
        {
            winner_name:"Luke1235",
            winner_score:3,
            loser_name:"Archie",
            loser_score:0
        },

        
        {
            winner_name:"Luke1235",
            winner_score:3,
            loser_name:"Chidz",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Coffee Farmer",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Luke1235",
                            winner_score:3,
                            loser_name:"Coffee Farmer",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Luke1235",
                            winner_score:3,
                            loser_name:"Coffee Farmer",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "maplekaaa",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Luke1235",
                            winner_score:3,
                            loser_name:"maplekaaa",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Luke1235",
                        loser_score:3,
                        winner_name:"maplekaaa",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Everlasting",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Luke1235",
                            winner_score:3,
                            loser_name:"Everlasting",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "SethMitchy",
            elo: 1652.4688522779154,
            region: "NA",
            slug: "user/6c82c752",
            confidence: 2,
            position: 46,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"SethMitchy",
            winner_score:3,
            loser_name:"Neemo",
            loser_score:0
        },

        
        {
            winner_name:"SethMitchy",
            winner_score:3,
            loser_name:"mimi",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "mimi",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SethMitchy",
                            winner_score:3,
                            loser_name:"mimi",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Neemo",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SethMitchy",
                            winner_score:3,
                            loser_name:"Neemo",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "TomoA",
            elo: 1649.6488999399846,
            region: "NA",
            slug: "user/416ca15a",
            confidence: 42,
            position: 47,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"KingofNinjas789",
            loser_score:2
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"KingofNinjas789",
            loser_score:0
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"Sprite",
            loser_score:2
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"Sprite",
            loser_score:1
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"Raich",
            loser_score:0
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"Raich",
            loser_score:1
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"Night",
            loser_score:0
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"Burnt Bread",
            loser_score:0
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:0
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"RNGG",
            loser_score:2
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:2
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"SegGel2009",
            loser_score:0
        },

        
        {
            winner_name:"TomoA",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "KingofNinjas789",
            rival_wins: 4,
            rival_losses:6,
            recent_sets: [
                
                    {
                        loser_name:"TomoA",
                        loser_score:3,
                        winner_name:"KingofNinjas789",
                        winner_score:0
                    },
            
                    
                    {
                        loser_name:"TomoA",
                        loser_score:3,
                        winner_name:"KingofNinjas789",
                        winner_score:0
                    },
            
                    
                    {
                        loser_name:"TomoA",
                        loser_score:3,
                        winner_name:"KingofNinjas789",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Raich",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"TomoA",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"TomoA",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"TomoA",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Sprite",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"TomoA",
                            winner_score:3,
                            loser_name:"Sprite",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"TomoA",
                            winner_score:3,
                            loser_name:"Sprite",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"TomoA",
                            winner_score:3,
                            loser_name:"Sprite",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "L'Winner",
            elo: 1646.1140477022025,
            region: "OCE",
            slug: "user/6cac5c3a",
            confidence: 9,
            position: 48,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"L'Winner",
            winner_score:3,
            loser_name:"Raoden",
            loser_score:2
        },

        
        {
            winner_name:"L'Winner",
            winner_score:3,
            loser_name:"Raoden",
            loser_score:0
        },

        
        {
            winner_name:"L'Winner",
            winner_score:3,
            loser_name:"crazyhead",
            loser_score:1
        },

        
        {
            winner_name:"L'Winner",
            winner_score:3,
            loser_name:"Ranga",
            loser_score:0
        },

        
        {
            winner_name:"L'Winner",
            winner_score:3,
            loser_name:"Eccentric_Thistle",
            loser_score:1
        },

        
        {
            winner_name:"L'Winner",
            winner_score:3,
            loser_name:"Keanu",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Raoden",
            rival_wins: 3,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"L'Winner",
                            winner_score:3,
                            loser_name:"Raoden",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"L'Winner",
                        loser_score:3,
                        winner_name:"Raoden",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"L'Winner",
                            winner_score:3,
                            loser_name:"Raoden",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Ranga",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"L'Winner",
                            winner_score:3,
                            loser_name:"Ranga",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Yat",
            elo: 1643.1846705931534,
            region: "NA",
            slug: "user/d80c1c6d",
            confidence: 4,
            position: 49,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Yat",
            winner_score:3,
            loser_name:"Champo",
            loser_score:2
        },

        
        {
            winner_name:"Yat",
            winner_score:3,
            loser_name:"Promilkid",
            loser_score:0
        },

        
        {
            winner_name:"Yat",
            winner_score:3,
            loser_name:"Endmin 67",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Champo",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Yat",
                            winner_score:3,
                            loser_name:"Champo",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Yat",
                            winner_score:3,
                            loser_name:"Champo",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Promilkid",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Yat",
                            winner_score:3,
                            loser_name:"Promilkid",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Endmin 67",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Yat",
                            winner_score:3,
                            loser_name:"Endmin 67",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Iota",
            elo: 1642.7419308957092,
            region: "NA",
            slug: "user/3a631faa",
            confidence: 12,
            position: 50,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Iota",
            winner_score:3,
            loser_name:"JosesChrist",
            loser_score:2
        },

        
        {
            winner_name:"Iota",
            winner_score:3,
            loser_name:"Cure Dynamic",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "JosesChrist",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Iota",
                            winner_score:3,
                            loser_name:"JosesChrist",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Iota",
                            winner_score:3,
                            loser_name:"JosesChrist",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Iota",
                            winner_score:3,
                            loser_name:"JosesChrist",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Cure Dynamic",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Iota",
                            winner_score:3,
                            loser_name:"Cure Dynamic",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Iota",
                            winner_score:3,
                            loser_name:"Cure Dynamic",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Iota",
                            winner_score:3,
                            loser_name:"Cure Dynamic",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mr.Pengu",
            elo: 1635.7824603485378,
            region: "NA",
            slug: "user/20910131",
            confidence: 26,
            position: 51,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Night",
            loser_score:1
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Dr.Ragnarok",
            loser_score:0
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Dr.Ragnarok",
            loser_score:1
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:1
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Dave (UNPOSSIBLE)",
            loser_score:1
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Dave (UNPOSSIBLE)",
            loser_score:2
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Exil",
            loser_score:0
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Exil",
            loser_score:2
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"BrazenWhiteRose",
            loser_score:0
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"AshuraRem",
            loser_score:0
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Arvald",
            loser_score:1
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Arvald",
            loser_score:0
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"GoetiaGC",
            loser_score:1
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"GoetiaGC",
            loser_score:0
        },

        
        {
            winner_name:"Mr.Pengu",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Dr.Ragnarok",
            rival_wins: 5,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Mr.Pengu",
                            winner_score:3,
                            loser_name:"Dr.Ragnarok",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Mr.Pengu",
                            winner_score:3,
                            loser_name:"Dr.Ragnarok",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Mr.Pengu",
                            winner_score:3,
                            loser_name:"Dr.Ragnarok",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Night",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Mr.Pengu",
                        loser_score:3,
                        winner_name:"Night",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"Mr.Pengu",
                        loser_score:3,
                        winner_name:"Night",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Mr.Pengu",
                            winner_score:3,
                            loser_name:"Night",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Exil",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mr.Pengu",
                            winner_score:3,
                            loser_name:"Exil",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Mr.Pengu",
                            winner_score:3,
                            loser_name:"Exil",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Mr.Pengu",
                            winner_score:3,
                            loser_name:"Exil",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Gex",
            elo: 1635.4584592505325,
            region: "UNK",
            slug: "user/55542af6",
            confidence: 76,
            position: 52,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"KingofNinjas789",
            loser_score:2
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Detective Crow",
            loser_score:2
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Lotad",
            loser_score:2
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"TomoA",
            loser_score:2
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:0
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"MysteryRacer21",
            loser_score:0
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Reapers Ruling Rat",
            loser_score:0
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Tokai Tatum",
            loser_score:0
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Orrax / Luke",
            loser_score:0
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Burnt Bread",
            loser_score:0
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"CoolmasterJG",
            loser_score:0
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:2
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BUMBACHUNGA",
            rival_wins: 6,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Gex",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Gex",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Gex",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "E2DEKU",
            rival_wins: 1,
            rival_losses:4,
            recent_sets: [
                
                    {
                        loser_name:"Gex",
                        loser_score:3,
                        winner_name:"E2DEKU",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"Gex",
                        loser_score:3,
                        winner_name:"E2DEKU",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"Gex",
                        loser_score:3,
                        winner_name:"E2DEKU",
                        winner_score:1
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Zhen",
            elo: 1634.220401032449,
            region: "NA",
            slug: "user/2d24630c",
            confidence: 4,
            position: 53,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Zhen",
            winner_score:3,
            loser_name:"Sorana",
            loser_score:0
        },

        
        {
            winner_name:"Zhen",
            winner_score:3,
            loser_name:"JR121",
            loser_score:1
        },

        
        {
            winner_name:"Zhen",
            winner_score:3,
            loser_name:"Moose",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Moose",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zhen",
                            winner_score:3,
                            loser_name:"Moose",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "JR121",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zhen",
                            winner_score:3,
                            loser_name:"JR121",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "E2DEKU",
            elo: 1633.6837509537836,
            region: "NA",
            slug: "user/29555b35",
            confidence: 55,
            position: 54,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"KingofNinjas789",
            loser_score:2
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:2
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:2
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"Gex",
            loser_score:1
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"Gex",
            loser_score:2
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"Gex",
            loser_score:1
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"Gex",
            loser_score:0
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"MysteryRacer21",
            loser_score:2
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"Reapers Ruling Rat",
            loser_score:1
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"Anima",
            loser_score:1
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:2
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:1
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:2
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
        {
            winner_name:"E2DEKU",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Sonikun",
            rival_wins: 3,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"E2DEKU",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:0
                    },
            
                    
                    {
                        loser_name:"E2DEKU",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"E2DEKU",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Gex",
            rival_wins: 4,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"E2DEKU",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"E2DEKU",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"E2DEKU",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "BUMBACHUNGA",
            rival_wins: 4,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"E2DEKU",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"E2DEKU",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"E2DEKU",
                        loser_score:3,
                        winner_name:"BUMBACHUNGA",
                        winner_score:1
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "MysteryRacer21",
            elo: 1624.9226688905278,
            region: "UNK",
            slug: "user/acdcd517",
            confidence: 19,
            position: 55,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"MysteryRacer21",
            winner_score:3,
            loser_name:"Lotad",
            loser_score:0
        },

        
        {
            winner_name:"MysteryRacer21",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:0
        },

        
        {
            winner_name:"MysteryRacer21",
            winner_score:3,
            loser_name:"HCShark10",
            loser_score:1
        },

        
        {
            winner_name:"MysteryRacer21",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:2
        },

        
        {
            winner_name:"MysteryRacer21",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:2
        },

        
        {
            winner_name:"MysteryRacer21",
            winner_score:3,
            loser_name:"Canned",
            loser_score:1
        },

        
        {
            winner_name:"MysteryRacer21",
            winner_score:3,
            loser_name:"Jazzcuzzi",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BUMBACHUNGA",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"MysteryRacer21",
                        loser_score:3,
                        winner_name:"BUMBACHUNGA",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"MysteryRacer21",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Lotad",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"MysteryRacer21",
                            winner_score:3,
                            loser_name:"Lotad",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"MysteryRacer21",
                        loser_score:3,
                        winner_name:"Lotad",
                        winner_score:2
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Raich",
            elo: 1613.2173624889072,
            region: "NA",
            slug: "user/792c29de",
            confidence: 69,
            position: 56,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"Ronan Healy",
            loser_score:0
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"DaBelowZero",
            loser_score:1
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:2
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:1
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"FourSwordKirby",
            loser_score:2
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"FenneccyFoxMV",
            loser_score:1
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"Edgelord44",
            loser_score:2
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"Reilly",
            loser_score:0
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:1
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"RNGG",
            loser_score:0
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"Weeb-King",
            loser_score:0
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"MrEater",
            loser_score:1
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"NuclearTaco2042",
            loser_score:0
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"NuclearTaco2042",
            loser_score:0
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"Glinty",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "NuclearTaco2042",
            rival_wins: 6,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Raich",
                            winner_score:3,
                            loser_name:"NuclearTaco2042",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Raich",
                            winner_score:3,
                            loser_name:"NuclearTaco2042",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Raich",
                            winner_score:3,
                            loser_name:"NuclearTaco2042",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "FourSwordKirby",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Raich",
                        loser_score:3,
                        winner_name:"FourSwordKirby",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Raich",
                            winner_score:3,
                            loser_name:"FourSwordKirby",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Raich",
                        loser_score:3,
                        winner_name:"FourSwordKirby",
                        winner_score:0
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "DaBelowZero",
            elo: 1611.6779654442582,
            region: "NA",
            slug: "user/f2206539",
            confidence: 12,
            position: 57,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"DaBelowZero",
            winner_score:3,
            loser_name:"GEN D",
            loser_score:1
        },

        
        {
            winner_name:"DaBelowZero",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:0
        },

        
        {
            winner_name:"DaBelowZero",
            winner_score:3,
            loser_name:"Mallaclaqclaq123",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "GEN D",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DaBelowZero",
                            winner_score:3,
                            loser_name:"GEN D",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"DaBelowZero",
                            winner_score:3,
                            loser_name:"GEN D",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"DaBelowZero",
                            winner_score:3,
                            loser_name:"GEN D",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Shyoshiguy",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DaBelowZero",
                            winner_score:3,
                            loser_name:"Shyoshiguy",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"DaBelowZero",
                            winner_score:3,
                            loser_name:"Shyoshiguy",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mimighoul Master",
            elo: 1602.8551172634238,
            region: "NA",
            slug: "user/1c7daef6",
            confidence: 13,
            position: 58,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mimighoul Master",
            winner_score:3,
            loser_name:"Zrrkon",
            loser_score:0
        },

        
        {
            winner_name:"Mimighoul Master",
            winner_score:3,
            loser_name:"E30",
            loser_score:2
        },

        
        {
            winner_name:"Mimighoul Master",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:1
        },

        
        {
            winner_name:"Mimighoul Master",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:1
        },

        
        {
            winner_name:"Mimighoul Master",
            winner_score:3,
            loser_name:"Ceasar little",
            loser_score:0
        },

        
        {
            winner_name:"Mimighoul Master",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"Mimighoul Master",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"Mimighoul Master",
            winner_score:3,
            loser_name:"Zarlet",
            loser_score:0
        },

        
        {
            winner_name:"Mimighoul Master",
            winner_score:3,
            loser_name:"Zarlet",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Ceasar little",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Mimighoul Master",
                            winner_score:3,
                            loser_name:"Ceasar little",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Mimighoul Master",
                        loser_score:3,
                        winner_name:"Ceasar little",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Zarlet",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mimighoul Master",
                            winner_score:3,
                            loser_name:"Zarlet",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Mimighoul Master",
                            winner_score:3,
                            loser_name:"Zarlet",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "BXR",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Mimighoul Master",
                        loser_score:3,
                        winner_name:"BXR",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Mimighoul Master",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Monkey :)",
            elo: 1599.8346360154042,
            region: "NA",
            slug: "user/40a2c783",
            confidence: 46,
            position: 59,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"KingofNinjas789",
            loser_score:1
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"Gex",
            loser_score:2
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"Night",
            loser_score:0
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"MerrliT",
            loser_score:2
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"FourSwordKirby",
            loser_score:0
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:0
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:0
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"YOGAMEWIZARD",
            loser_score:1
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"MrEater",
            loser_score:0
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"MrEater",
            loser_score:1
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"Wool",
            loser_score:0
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:0
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"EX Falchion",
            loser_score:0
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"EX Falchion",
            loser_score:2
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"pdhewitt",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "KingofNinjas789",
            rival_wins: 2,
            rival_losses:4,
            recent_sets: [
                
                    {
                        loser_name:"Monkey :)",
                        loser_score:3,
                        winner_name:"KingofNinjas789",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"Monkey :)",
                        loser_score:3,
                        winner_name:"KingofNinjas789",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Monkey :)",
                            winner_score:3,
                            loser_name:"KingofNinjas789",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "thechriss2004s",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Monkey :)",
                            winner_score:3,
                            loser_name:"thechriss2004s",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Monkey :)",
                            winner_score:3,
                            loser_name:"thechriss2004s",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Monkey :)",
                            winner_score:3,
                            loser_name:"thechriss2004s",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Occurring Gap",
            elo: 1591.1247574280626,
            region: "NA",
            slug: "user/6dc179d6",
            confidence: 12,
            position: 60,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Occurring Gap",
            winner_score:3,
            loser_name:"Zrrkon",
            loser_score:1
        },

        
        {
            winner_name:"Occurring Gap",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:1
        },

        
        {
            winner_name:"Occurring Gap",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Occurring Gap",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"Occurring Gap",
            winner_score:3,
            loser_name:"Vurger",
            loser_score:0
        },

        
        {
            winner_name:"Occurring Gap",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Zrrkon",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Occurring Gap",
                            winner_score:3,
                            loser_name:"Zrrkon",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Occurring Gap",
                            winner_score:3,
                            loser_name:"Zrrkon",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "jadestar63",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Occurring Gap",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Occurring Gap",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Lavender",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Occurring Gap",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Occurring Gap",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Trashy",
            elo: 1581.865076717016,
            region: "EU",
            slug: "user/8120d84f",
            confidence: 12,
            position: 61,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Trashy",
            winner_score:3,
            loser_name:"LouieTheKraken",
            loser_score:2
        },

        
        {
            winner_name:"Trashy",
            winner_score:3,
            loser_name:"Peepohold",
            loser_score:1
        },

        
        {
            winner_name:"Trashy",
            winner_score:3,
            loser_name:"EleosStar",
            loser_score:0
        },

        
        {
            winner_name:"Trashy",
            winner_score:3,
            loser_name:"King_Rasta",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LouieTheKraken",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Trashy",
                            winner_score:3,
                            loser_name:"LouieTheKraken",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Trashy",
                        loser_score:3,
                        winner_name:"LouieTheKraken",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Trashy",
                            winner_score:3,
                            loser_name:"LouieTheKraken",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Peepohold",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Trashy",
                            winner_score:3,
                            loser_name:"Peepohold",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Trashy",
                            winner_score:3,
                            loser_name:"Peepohold",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Night",
            elo: 1580.5155222386802,
            region: "NA",
            slug: "user/8ae49298",
            confidence: 18,
            position: 62,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"Mr.Pengu",
            loser_score:2
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"Mr.Pengu",
            loser_score:0
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:1
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:0
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:0
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"BrazenWhiteRose",
            loser_score:0
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"Mcintosh2002",
            loser_score:0
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:0
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"winderling",
            loser_score:1
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"Jay314",
            loser_score:0
        },

        
        {
            winner_name:"Night",
            winner_score:3,
            loser_name:"Mookeh",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Mr.Pengu",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Night",
                            winner_score:3,
                            loser_name:"Mr.Pengu",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Night",
                            winner_score:3,
                            loser_name:"Mr.Pengu",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Night",
                        loser_score:3,
                        winner_name:"Mr.Pengu",
                        winner_score:1
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Filter",
            elo: 1579.1457072466023,
            region: "NA",
            slug: "user/bc6a4201",
            confidence: 3,
            position: 63,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Filter",
            winner_score:3,
            loser_name:"Cage4296",
            loser_score:0
        },

        
        {
            winner_name:"Filter",
            winner_score:3,
            loser_name:"Famine",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Cage4296",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Filter",
                        loser_score:3,
                        winner_name:"Cage4296",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Filter",
                            winner_score:3,
                            loser_name:"Cage4296",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Famine",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Filter",
                            winner_score:3,
                            loser_name:"Famine",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Reapers Ruling Rat",
            elo: 1576.7642327760134,
            region: "NA",
            slug: "user/fcc41777",
            confidence: 52,
            position: 64,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"Gex",
            loser_score:0
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"Zrrkon",
            loser_score:2
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"bweans",
            loser_score:0
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:0
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:2
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:2
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:0
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:1
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:2
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"SSBSonic",
            loser_score:1
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:1
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"Trickster?",
            loser_score:0
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"Yat0ro",
            loser_score:1
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BUMBACHUNGA",
            rival_wins: 3,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Reapers Ruling Rat",
                        loser_score:3,
                        winner_name:"BUMBACHUNGA",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Reapers Ruling Rat",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Reapers Ruling Rat",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Patneko",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Reapers Ruling Rat",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Reapers Ruling Rat",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Reapers Ruling Rat",
                        loser_score:3,
                        winner_name:"Patneko",
                        winner_score:0
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Anima",
            elo: 1575.5485228203054,
            region: "NA",
            slug: "user/baf89dd1",
            confidence: 8,
            position: 65,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Anima",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:2
        },

        
        {
            winner_name:"Anima",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LuckyNaegi",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Anima",
                            winner_score:3,
                            loser_name:"LuckyNaegi",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Duckator",
            elo: 1573.9640726940218,
            region: "NA",
            slug: "user/4f876735",
            confidence: 6,
            position: 66,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Duckator",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:0
        },

        
        {
            winner_name:"Duckator",
            winner_score:3,
            loser_name:"Trillion-Crows",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Trillion-Crows",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Duckator",
                            winner_score:3,
                            loser_name:"Trillion-Crows",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Duckator",
                            winner_score:3,
                            loser_name:"Trillion-Crows",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Intimidaving",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Duckator",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Duckator",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "SmolSquish",
            elo: 1570.7599502900343,
            region: "UNK",
            slug: "user/33ac8302",
            confidence: 4,
            position: 67,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"SmolSquish",
            winner_score:3,
            loser_name:"Sompursone",
            loser_score:2
        },

        
        {
            winner_name:"SmolSquish",
            winner_score:3,
            loser_name:"fancyhat",
            loser_score:1
        },

        
        {
            winner_name:"SmolSquish",
            winner_score:3,
            loser_name:"KyonHB",
            loser_score:0
        },

        
        {
            winner_name:"SmolSquish",
            winner_score:3,
            loser_name:"Trashfox",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "fancyhat",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SmolSquish",
                            winner_score:3,
                            loser_name:"fancyhat",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "KyonHB",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SmolSquish",
                            winner_score:3,
                            loser_name:"KyonHB",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Sompursone",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SmolSquish",
                            winner_score:3,
                            loser_name:"Sompursone",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Brigadier_BunBun",
            elo: 1568.1337267933302,
            region: "NA",
            slug: "user/fb893722",
            confidence: 2,
            position: 68,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Brigadier_BunBun",
            winner_score:3,
            loser_name:"Riko",
            loser_score:0
        },

        
        {
            winner_name:"Brigadier_BunBun",
            winner_score:3,
            loser_name:"Riko",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Riko",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Brigadier_BunBun",
                            winner_score:3,
                            loser_name:"Riko",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Brigadier_BunBun",
                            winner_score:3,
                            loser_name:"Riko",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "JOE MAMA",
            elo: 1567.4536712578413,
            region: "NA",
            slug: "user/dbbc84f4",
            confidence: 10,
            position: 69,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"JOE MAMA",
            winner_score:3,
            loser_name:"Garfield",
            loser_score:2
        },

        
        {
            winner_name:"JOE MAMA",
            winner_score:3,
            loser_name:"wingupingu",
            loser_score:0
        },

        
        {
            winner_name:"JOE MAMA",
            winner_score:3,
            loser_name:"Donny Tsunami",
            loser_score:0
        },

        
        {
            winner_name:"JOE MAMA",
            winner_score:3,
            loser_name:"Burn0ut",
            loser_score:0
        },

        
        {
            winner_name:"JOE MAMA",
            winner_score:3,
            loser_name:"I Be Smart",
            loser_score:0
        },

        
        {
            winner_name:"JOE MAMA",
            winner_score:3,
            loser_name:"GearDragon",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Burn0ut",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"JOE MAMA",
                        loser_score:3,
                        winner_name:"Burn0ut",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"JOE MAMA",
                            winner_score:3,
                            loser_name:"Burn0ut",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Garfield",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"JOE MAMA",
                        loser_score:3,
                        winner_name:"Garfield",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"JOE MAMA",
                            winner_score:3,
                            loser_name:"Garfield",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Kreation",
            elo: 1557.7140148268354,
            region: "SA",
            slug: "user/8608bd2f",
            confidence: 10,
            position: 70,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Kreation",
            winner_score:3,
            loser_name:"Pokedude",
            loser_score:0
        },

        
        {
            winner_name:"Kreation",
            winner_score:3,
            loser_name:"Mith",
            loser_score:1
        },

        
        {
            winner_name:"Kreation",
            winner_score:3,
            loser_name:"Mith",
            loser_score:0
        },

        
        {
            winner_name:"Kreation",
            winner_score:3,
            loser_name:"Mith",
            loser_score:2
        },

        
        {
            winner_name:"Kreation",
            winner_score:3,
            loser_name:"Imano Ob",
            loser_score:0
        },

        
        {
            winner_name:"Kreation",
            winner_score:3,
            loser_name:"Pastrock",
            loser_score:2
        },

        
        {
            winner_name:"Kreation",
            winner_score:3,
            loser_name:"DCGrz",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Pokedude",
            rival_wins: 1,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"Kreation",
                        loser_score:3,
                        winner_name:"Pokedude",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"Kreation",
                        loser_score:3,
                        winner_name:"Pokedude",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Kreation",
                            winner_score:3,
                            loser_name:"Pokedude",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Mith",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Kreation",
                            winner_score:3,
                            loser_name:"Mith",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Kreation",
                            winner_score:3,
                            loser_name:"Mith",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Kreation",
                            winner_score:3,
                            loser_name:"Mith",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Pastrock",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Kreation",
                            winner_score:3,
                            loser_name:"Pastrock",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "MerrliT",
            elo: 1556.6472916864266,
            region: "UNK",
            slug: "user/c5d9cd33",
            confidence: 6,
            position: 71,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"MerrliT",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:2
        },

        
        {
            winner_name:"MerrliT",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "thechriss2004s",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"MerrliT",
                            winner_score:3,
                            loser_name:"thechriss2004s",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"MerrliT",
                            winner_score:3,
                            loser_name:"thechriss2004s",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "LuckyNaegi",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"MerrliT",
                            winner_score:3,
                            loser_name:"LuckyNaegi",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"MerrliT",
                            winner_score:3,
                            loser_name:"LuckyNaegi",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "FourSwordKirby",
            elo: 1554.1907676156434,
            region: "NA",
            slug: "user/df0d8159",
            confidence: 24,
            position: 72,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"FourSwordKirby",
            winner_score:3,
            loser_name:"Chopsuey",
            loser_score:2
        },

        
        {
            winner_name:"FourSwordKirby",
            winner_score:3,
            loser_name:"Raich",
            loser_score:0
        },

        
        {
            winner_name:"FourSwordKirby",
            winner_score:3,
            loser_name:"Tokai Tatum",
            loser_score:0
        },

        
        {
            winner_name:"FourSwordKirby",
            winner_score:3,
            loser_name:"bweans",
            loser_score:1
        },

        
        {
            winner_name:"FourSwordKirby",
            winner_score:3,
            loser_name:"bweans",
            loser_score:0
        },

        
        {
            winner_name:"FourSwordKirby",
            winner_score:3,
            loser_name:"Lant",
            loser_score:1
        },

        
        {
            winner_name:"FourSwordKirby",
            winner_score:3,
            loser_name:"Speeze",
            loser_score:1
        },

        
        {
            winner_name:"FourSwordKirby",
            winner_score:3,
            loser_name:"TheGrizzwald",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Raich",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"FourSwordKirby",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"FourSwordKirby",
                        loser_score:3,
                        winner_name:"Raich",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"FourSwordKirby",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "bweans",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"FourSwordKirby",
                            winner_score:3,
                            loser_name:"bweans",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"FourSwordKirby",
                            winner_score:3,
                            loser_name:"bweans",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"FourSwordKirby",
                            winner_score:3,
                            loser_name:"bweans",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "gemi+",
            elo: 1550.698217672725,
            region: "NA",
            slug: "user/8fffb7eb",
            confidence: 4,
            position: 73,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"gemi+",
            winner_score:3,
            loser_name:"MetalBlurS",
            loser_score:2
        },

        
        {
            winner_name:"gemi+",
            winner_score:3,
            loser_name:"DanteRebellionX",
            loser_score:1
        },

        
        {
            winner_name:"gemi+",
            winner_score:3,
            loser_name:"Larp",
            loser_score:0
        },

        
        {
            winner_name:"gemi+",
            winner_score:3,
            loser_name:"LeDom",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LeDom",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"gemi+",
                            winner_score:3,
                            loser_name:"LeDom",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "DanteRebellionX",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"gemi+",
                            winner_score:3,
                            loser_name:"DanteRebellionX",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "MetalBlurS",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"gemi+",
                            winner_score:3,
                            loser_name:"MetalBlurS",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Tucky",
            elo: 1548.2328937668192,
            region: "NA",
            slug: "user/3ee16c36",
            confidence: 2,
            position: 74,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Tucky",
            winner_score:3,
            loser_name:"Shoji",
            loser_score:2
        },

        
        {
            winner_name:"Tucky",
            winner_score:3,
            loser_name:"fancytuna",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "fancytuna",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Tucky",
                            winner_score:3,
                            loser_name:"fancytuna",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Shoji",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Tucky",
                            winner_score:3,
                            loser_name:"Shoji",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Pokedude",
            elo: 1547.3650024801468,
            region: "UNK",
            slug: "user/9f4bf6c5",
            confidence: 14,
            position: 75,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Pokedude",
            winner_score:3,
            loser_name:"Kreation",
            loser_score:2
        },

        
        {
            winner_name:"Pokedude",
            winner_score:3,
            loser_name:"Kreation",
            loser_score:1
        },

        
        {
            winner_name:"Pokedude",
            winner_score:3,
            loser_name:"Mith",
            loser_score:0
        },

        
        {
            winner_name:"Pokedude",
            winner_score:3,
            loser_name:"Imano Ob",
            loser_score:0
        },

        
        {
            winner_name:"Pokedude",
            winner_score:3,
            loser_name:"Red",
            loser_score:1
        },

        
        {
            winner_name:"Pokedude",
            winner_score:3,
            loser_name:"DCGrz",
            loser_score:0
        },

        
        {
            winner_name:"Pokedude",
            winner_score:3,
            loser_name:"Pigeta",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Kreation",
            rival_wins: 3,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Pokedude",
                            winner_score:3,
                            loser_name:"Kreation",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Pokedude",
                            winner_score:3,
                            loser_name:"Kreation",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Pokedude",
                        loser_score:3,
                        winner_name:"Kreation",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Mith",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Pokedude",
                            winner_score:3,
                            loser_name:"Mith",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Pokedude",
                        loser_score:3,
                        winner_name:"Mith",
                        winner_score:2
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Pssych",
            elo: 1547.2942198162216,
            region: "NA",
            slug: "user/d59b53aa",
            confidence: 9,
            position: 76,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Pssych",
            winner_score:3,
            loser_name:"Moorcas",
            loser_score:2
        },

        
        {
            winner_name:"Pssych",
            winner_score:3,
            loser_name:"Moorcas",
            loser_score:0
        },

        
        {
            winner_name:"Pssych",
            winner_score:3,
            loser_name:"Moorcas",
            loser_score:0
        },

        
        {
            winner_name:"Pssych",
            winner_score:3,
            loser_name:"Glimbo the Gnome",
            loser_score:0
        },

        
        {
            winner_name:"Pssych",
            winner_score:3,
            loser_name:"The Esquire",
            loser_score:0
        },

        
        {
            winner_name:"Pssych",
            winner_score:3,
            loser_name:"KiaRio",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Moorcas",
            rival_wins: 3,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Pssych",
                            winner_score:3,
                            loser_name:"Moorcas",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Pssych",
                        loser_score:3,
                        winner_name:"Moorcas",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Pssych",
                            winner_score:3,
                            loser_name:"Moorcas",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Glimbo the Gnome",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Pssych",
                            winner_score:3,
                            loser_name:"Glimbo the Gnome",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "The Esquire",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Pssych",
                            winner_score:3,
                            loser_name:"The Esquire",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Dr.Ragnarok",
            elo: 1541.860745866367,
            region: "NA",
            slug: "user/e62334f2",
            confidence: 20,
            position: 77,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"Mr.Pengu",
            loser_score:1
        },

        
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"Mr.Pengu",
            loser_score:2
        },

        
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"Dave (UNPOSSIBLE)",
            loser_score:0
        },

        
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"Exil",
            loser_score:2
        },

        
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"Exil",
            loser_score:0
        },

        
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"Exil",
            loser_score:1
        },

        
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"GoetiaGC",
            loser_score:0
        },

        
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:0
        },

        
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"Garumb",
            loser_score:0
        },

        
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"AlexNomas",
            loser_score:0
        },

        
        {
            winner_name:"Dr.Ragnarok",
            winner_score:3,
            loser_name:"AlexNomas",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Mr.Pengu",
            rival_wins: 2,
            rival_losses:5,
            recent_sets: [
                
                    {
                        loser_name:"Dr.Ragnarok",
                        loser_score:3,
                        winner_name:"Mr.Pengu",
                        winner_score:0
                    },
            
                    
                    {
                        loser_name:"Dr.Ragnarok",
                        loser_score:3,
                        winner_name:"Mr.Pengu",
                        winner_score:0
                    },
            
                    
                    {
                        loser_name:"Dr.Ragnarok",
                        loser_score:3,
                        winner_name:"Mr.Pengu",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Exil",
            rival_wins: 3,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Dr.Ragnarok",
                            winner_score:3,
                            loser_name:"Exil",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Dr.Ragnarok",
                            winner_score:3,
                            loser_name:"Exil",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Dr.Ragnarok",
                        loser_score:3,
                        winner_name:"Exil",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Dave (UNPOSSIBLE)",
            rival_wins: 3,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Dr.Ragnarok",
                        loser_score:3,
                        winner_name:"Dave (UNPOSSIBLE)",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Dr.Ragnarok",
                            winner_score:3,
                            loser_name:"Dave (UNPOSSIBLE)",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Dr.Ragnarok",
                            winner_score:3,
                            loser_name:"Dave (UNPOSSIBLE)",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "alanae",
            elo: 1541.1104303147763,
            region: "EU",
            slug: "user/1a64177b",
            confidence: 15,
            position: 78,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"alanae",
            winner_score:3,
            loser_name:"Zerochel",
            loser_score:2
        },

        
        {
            winner_name:"alanae",
            winner_score:3,
            loser_name:"Zerochel",
            loser_score:1
        },

        
        {
            winner_name:"alanae",
            winner_score:3,
            loser_name:"Alireza",
            loser_score:1
        },

        
        {
            winner_name:"alanae",
            winner_score:3,
            loser_name:"Alireza",
            loser_score:2
        },

        
        {
            winner_name:"alanae",
            winner_score:3,
            loser_name:"Alireza",
            loser_score:0
        },

        
        {
            winner_name:"alanae",
            winner_score:3,
            loser_name:"ColdMill",
            loser_score:0
        },

        
        {
            winner_name:"alanae",
            winner_score:3,
            loser_name:"EleosStar",
            loser_score:0
        },

        
        {
            winner_name:"alanae",
            winner_score:3,
            loser_name:"sil",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Alireza",
            rival_wins: 3,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"alanae",
                            winner_score:3,
                            loser_name:"Alireza",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"alanae",
                        loser_score:3,
                        winner_name:"Alireza",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"alanae",
                            winner_score:3,
                            loser_name:"Alireza",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Zerochel",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"alanae",
                            winner_score:3,
                            loser_name:"Zerochel",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"alanae",
                            winner_score:3,
                            loser_name:"Zerochel",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "FenneccyFoxMV",
            elo: 1538.1316098453897,
            region: "NA",
            slug: "user/b7c99cb3",
            confidence: 10,
            position: 79,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"FenneccyFoxMV",
            winner_score:3,
            loser_name:"Weeb-King",
            loser_score:0
        },

        
        {
            winner_name:"FenneccyFoxMV",
            winner_score:3,
            loser_name:"hotdog8642",
            loser_score:0
        },

        
        {
            winner_name:"FenneccyFoxMV",
            winner_score:3,
            loser_name:"Cow",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Cow",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"FenneccyFoxMV",
                            winner_score:3,
                            loser_name:"Cow",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"FenneccyFoxMV",
                            winner_score:3,
                            loser_name:"Cow",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Weeb-King",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"FenneccyFoxMV",
                            winner_score:3,
                            loser_name:"Weeb-King",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"FenneccyFoxMV",
                            winner_score:3,
                            loser_name:"Weeb-King",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "LouieTheKraken",
            elo: 1534.8957510626547,
            region: "EU",
            slug: "user/3becead3",
            confidence: 8,
            position: 80,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"LouieTheKraken",
            winner_score:3,
            loser_name:"DBlanks",
            loser_score:2
        },

        
        {
            winner_name:"LouieTheKraken",
            winner_score:3,
            loser_name:"Trashy",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Trashy",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"LouieTheKraken",
                        loser_score:3,
                        winner_name:"Trashy",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"LouieTheKraken",
                            winner_score:3,
                            loser_name:"Trashy",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"LouieTheKraken",
                        loser_score:3,
                        winner_name:"Trashy",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "DBlanks",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LouieTheKraken",
                            winner_score:3,
                            loser_name:"DBlanks",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"LouieTheKraken",
                            winner_score:3,
                            loser_name:"DBlanks",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Valcan",
            elo: 1529.1465267311705,
            region: "ASIA",
            slug: "user/7ac74f62",
            confidence: 4,
            position: 81,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Valcan",
            winner_score:3,
            loser_name:"MMDK",
            loser_score:2
        },

        
        {
            winner_name:"Valcan",
            winner_score:3,
            loser_name:"Hinotoriz",
            loser_score:1
        },

        
        {
            winner_name:"Valcan",
            winner_score:3,
            loser_name:"A-Rew",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Hinotoriz",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Valcan",
                            winner_score:3,
                            loser_name:"Hinotoriz",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "A-Rew",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Valcan",
                            winner_score:3,
                            loser_name:"A-Rew",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "WhitefangRex",
            elo: 1527.7445980867121,
            region: "EU",
            slug: "user/9d7e0975",
            confidence: 6,
            position: 82,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"WhitefangRex",
            winner_score:3,
            loser_name:"AAAA",
            loser_score:2
        },

        
        {
            winner_name:"WhitefangRex",
            winner_score:3,
            loser_name:"DisgustinglyWashedEggs",
            loser_score:0
        },

        
        {
            winner_name:"WhitefangRex",
            winner_score:3,
            loser_name:"Poogen",
            loser_score:1
        },

        
        {
            winner_name:"WhitefangRex",
            winner_score:3,
            loser_name:"IdontKnowMyName",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "AAAA",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"WhitefangRex",
                            winner_score:3,
                            loser_name:"AAAA",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"WhitefangRex",
                        loser_score:3,
                        winner_name:"AAAA",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Poogen",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"WhitefangRex",
                            winner_score:3,
                            loser_name:"Poogen",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Serene Smile",
            elo: 1527.384410880272,
            region: "NA",
            slug: "user/3b3752be",
            confidence: 27,
            position: 83,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:2
        },

        
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:2
        },

        
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:2
        },

        
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:1
        },

        
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"Raich",
            loser_score:1
        },

        
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:0
        },

        
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"E30",
            loser_score:2
        },

        
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"Sturmfresser",
            loser_score:0
        },

        
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"Hien",
            loser_score:1
        },

        
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"NepGear",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Sonikun",
            rival_wins: 1,
            rival_losses:4,
            recent_sets: [
                
                    {
                        loser_name:"Serene Smile",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:0
                    },
            
                    
                    {
                        loser_name:"Serene Smile",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Serene Smile",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Raich",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Serene Smile",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Serene Smile",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Serene Smile",
                            winner_score:3,
                            loser_name:"Raich",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Laspanditas",
            elo: 1525.533144524081,
            region: "NA",
            slug: "user/234bd946",
            confidence: 13,
            position: 84,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Laspanditas",
            winner_score:3,
            loser_name:"lupeslounge",
            loser_score:0
        },

        
        {
            winner_name:"Laspanditas",
            winner_score:3,
            loser_name:"lupeslounge",
            loser_score:1
        },

        
        {
            winner_name:"Laspanditas",
            winner_score:3,
            loser_name:"Nago",
            loser_score:2
        },

        
        {
            winner_name:"Laspanditas",
            winner_score:3,
            loser_name:"Hee-Homeboy",
            loser_score:0
        },

        
        {
            winner_name:"Laspanditas",
            winner_score:3,
            loser_name:"Sanaito",
            loser_score:0
        },

        
        {
            winner_name:"Laspanditas",
            winner_score:3,
            loser_name:"KoreanPanda",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "lupeslounge",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Laspanditas",
                            winner_score:3,
                            loser_name:"lupeslounge",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Laspanditas",
                            winner_score:3,
                            loser_name:"lupeslounge",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Hee-Homeboy",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Laspanditas",
                            winner_score:3,
                            loser_name:"Hee-Homeboy",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Laspanditas",
                            winner_score:3,
                            loser_name:"Hee-Homeboy",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Lukiro",
            elo: 1520.5804114515506,
            region: "NA",
            slug: "user/537b5669",
            confidence: 5,
            position: 85,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Lukiro",
            winner_score:3,
            loser_name:"hyperHICO",
            loser_score:0
        },

        
        {
            winner_name:"Lukiro",
            winner_score:3,
            loser_name:"Thejimmy246",
            loser_score:1
        },

        
        {
            winner_name:"Lukiro",
            winner_score:3,
            loser_name:"Thejimmy246",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Thejimmy246",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Lukiro",
                            winner_score:3,
                            loser_name:"Thejimmy246",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Lukiro",
                            winner_score:3,
                            loser_name:"Thejimmy246",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Tokai Tatum",
            elo: 1517.309884599454,
            region: "NA",
            slug: "user/97273aba",
            confidence: 24,
            position: 86,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:1
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:2
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Pillowtalk",
            loser_score:0
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Pillowtalk",
            loser_score:2
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Pillowtalk",
            loser_score:0
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"BXR",
            loser_score:0
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"BXR",
            loser_score:0
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"ruby_chan",
            loser_score:0
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Yat0ro",
            loser_score:0
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:0
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:0
        },

        
        {
            winner_name:"Tokai Tatum",
            winner_score:3,
            loser_name:"Special Schmix",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Patneko",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Tokai Tatum",
                        loser_score:3,
                        winner_name:"Patneko",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Tokai Tatum",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Tokai Tatum",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Pillowtalk",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Tokai Tatum",
                            winner_score:3,
                            loser_name:"Pillowtalk",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Tokai Tatum",
                            winner_score:3,
                            loser_name:"Pillowtalk",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Tokai Tatum",
                            winner_score:3,
                            loser_name:"Pillowtalk",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "jadestar63",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Tokai Tatum",
                        loser_score:3,
                        winner_name:"jadestar63",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Tokai Tatum",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Tokai Tatum",
                        loser_score:3,
                        winner_name:"jadestar63",
                        winner_score:2
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Raoden",
            elo: 1507.911501896851,
            region: "OCE",
            slug: "user/6d13f391",
            confidence: 12,
            position: 87,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Raoden",
            winner_score:3,
            loser_name:"L'Winner",
            loser_score:1
        },

        
        {
            winner_name:"Raoden",
            winner_score:3,
            loser_name:"crazyhead",
            loser_score:1
        },

        
        {
            winner_name:"Raoden",
            winner_score:3,
            loser_name:"Ranga",
            loser_score:2
        },

        
        {
            winner_name:"Raoden",
            winner_score:3,
            loser_name:"Ranga",
            loser_score:1
        },

        
        {
            winner_name:"Raoden",
            winner_score:3,
            loser_name:"Eccentric_Thistle",
            loser_score:0
        },

        
        {
            winner_name:"Raoden",
            winner_score:3,
            loser_name:"Eccentric_Thistle",
            loser_score:0
        },

        
        {
            winner_name:"Raoden",
            winner_score:3,
            loser_name:"miofa",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "L'Winner",
            rival_wins: 1,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"Raoden",
                        loser_score:3,
                        winner_name:"L'Winner",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Raoden",
                            winner_score:3,
                            loser_name:"L'Winner",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Raoden",
                        loser_score:3,
                        winner_name:"L'Winner",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Ranga",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Raoden",
                            winner_score:3,
                            loser_name:"Ranga",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Raoden",
                            winner_score:3,
                            loser_name:"Ranga",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Raoden",
                            winner_score:3,
                            loser_name:"Ranga",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Eccentric_Thistle",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Raoden",
                            winner_score:3,
                            loser_name:"Eccentric_Thistle",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Raoden",
                            winner_score:3,
                            loser_name:"Eccentric_Thistle",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Hakari882",
            elo: 1506.770059743111,
            region: "ASIA",
            slug: "user/2e632b3e",
            confidence: 4,
            position: 88,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Hakari882",
            winner_score:3,
            loser_name:"Hinotoriz",
            loser_score:2
        },

        
        {
            winner_name:"Hakari882",
            winner_score:3,
            loser_name:"BetaTester881",
            loser_score:1
        },

        
        {
            winner_name:"Hakari882",
            winner_score:3,
            loser_name:"PHI",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Hinotoriz",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Hakari882",
                            winner_score:3,
                            loser_name:"Hinotoriz",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "BetaTester881",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Hakari882",
                            winner_score:3,
                            loser_name:"BetaTester881",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Blackfeathershadow",
            elo: 1505.7980286012073,
            region: "NA",
            slug: "user/ad2ea9b0",
            confidence: 2,
            position: 89,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Blackfeathershadow",
            winner_score:3,
            loser_name:"gamer",
            loser_score:1
        },

        
        {
            winner_name:"Blackfeathershadow",
            winner_score:3,
            loser_name:"falling_robin",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "gamer",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Blackfeathershadow",
                            winner_score:3,
                            loser_name:"gamer",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "falling_robin",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Blackfeathershadow",
                            winner_score:3,
                            loser_name:"falling_robin",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "BotanIsMyOshi69",
            elo: 1502.9634525152017,
            region: "NA",
            slug: "user/8a147aaa",
            confidence: 6,
            position: 90,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"BotanIsMyOshi69",
            winner_score:3,
            loser_name:"Spartan",
            loser_score:2
        },

        
        {
            winner_name:"BotanIsMyOshi69",
            winner_score:3,
            loser_name:"Duder963",
            loser_score:0
        },

        
        {
            winner_name:"BotanIsMyOshi69",
            winner_score:3,
            loser_name:"Ibbit",
            loser_score:1
        },

        
        {
            winner_name:"BotanIsMyOshi69",
            winner_score:3,
            loser_name:"sabredog",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Spartan",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BotanIsMyOshi69",
                            winner_score:3,
                            loser_name:"Spartan",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Ibbit",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BotanIsMyOshi69",
                            winner_score:3,
                            loser_name:"Ibbit",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Edgelord44",
            elo: 1502.8153991274787,
            region: "NA",
            slug: "user/855d114b",
            confidence: 8,
            position: 91,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Edgelord44",
            winner_score:3,
            loser_name:"Akihisa Sendo",
            loser_score:1
        },

        
        {
            winner_name:"Edgelord44",
            winner_score:3,
            loser_name:"Mallaclaqclaq123",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Mallaclaqclaq123",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Edgelord44",
                            winner_score:3,
                            loser_name:"Mallaclaqclaq123",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Edgelord44",
                            winner_score:3,
                            loser_name:"Mallaclaqclaq123",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Akihisa Sendo",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Edgelord44",
                            winner_score:3,
                            loser_name:"Akihisa Sendo",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Edgelord44",
                            winner_score:3,
                            loser_name:"Akihisa Sendo",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Twimmy",
            elo: 1500.443850228187,
            region: "NA",
            slug: "user/f029cf7d",
            confidence: 7,
            position: 92,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Twimmy",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:1
        },

        
        {
            winner_name:"Twimmy",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Oguri Cap",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Twimmy",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "thechriss2004s",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Twimmy",
                            winner_score:3,
                            loser_name:"thechriss2004s",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Deighta",
            elo: 1494.1969417612313,
            region: "NA",
            slug: "user/3b5ed3ac",
            confidence: 2,
            position: 93,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Deighta",
            winner_score:3,
            loser_name:"Zhen",
            loser_score:2
        },

        
        {
            winner_name:"Deighta",
            winner_score:3,
            loser_name:"Moose",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Moose",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Deighta",
                            winner_score:3,
                            loser_name:"Moose",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Zhen",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Deighta",
                            winner_score:3,
                            loser_name:"Zhen",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Coffee Farmer",
            elo: 1492.9494894099262,
            region: "EU",
            slug: "user/e222bfab",
            confidence: 6,
            position: 94,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Coffee Farmer",
            winner_score:3,
            loser_name:"Everlasting",
            loser_score:1
        },

        
        {
            winner_name:"Coffee Farmer",
            winner_score:3,
            loser_name:"Doogong",
            loser_score:2
        },

        
        {
            winner_name:"Coffee Farmer",
            winner_score:3,
            loser_name:"antlandking",
            loser_score:0
        },

        
        {
            winner_name:"Coffee Farmer",
            winner_score:3,
            loser_name:"Archie",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Everlasting",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Coffee Farmer",
                            winner_score:3,
                            loser_name:"Everlasting",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "antlandking",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Coffee Farmer",
                            winner_score:3,
                            loser_name:"antlandking",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Bojack",
            elo: 1487.6290325295477,
            region: "NA",
            slug: "user/958b43af",
            confidence: 12,
            position: 95,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Bojack",
            winner_score:3,
            loser_name:"Lant",
            loser_score:0
        },

        
        {
            winner_name:"Bojack",
            winner_score:3,
            loser_name:"Moontide",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Lant",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Bojack",
                            winner_score:3,
                            loser_name:"Lant",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Bojack",
                            winner_score:3,
                            loser_name:"Lant",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Bojack",
                            winner_score:3,
                            loser_name:"Lant",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Moontide",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Bojack",
                            winner_score:3,
                            loser_name:"Moontide",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Bojack",
                            winner_score:3,
                            loser_name:"Moontide",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Bojack",
                            winner_score:3,
                            loser_name:"Moontide",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Champo",
            elo: 1486.8660677975554,
            region: "ASIA",
            slug: "user/ebbefec3",
            confidence: 4,
            position: 96,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Champo",
            winner_score:3,
            loser_name:"Deux",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Deux",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Champo",
                            winner_score:3,
                            loser_name:"Deux",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Champo",
                            winner_score:3,
                            loser_name:"Deux",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "GEN D",
            elo: 1486.3338964541936,
            region: "NA",
            slug: "user/c913b1b3",
            confidence: 12,
            position: 97,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"GEN D",
            winner_score:3,
            loser_name:"Hero M#",
            loser_score:0
        },

        
        {
            winner_name:"GEN D",
            winner_score:3,
            loser_name:"Snackcakes",
            loser_score:0
        },

        
        {
            winner_name:"GEN D",
            winner_score:3,
            loser_name:"Zamurai Cris",
            loser_score:0
        },

        
        {
            winner_name:"GEN D",
            winner_score:3,
            loser_name:"Matau32",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Matau32",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"GEN D",
                            winner_score:3,
                            loser_name:"Matau32",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"GEN D",
                            winner_score:3,
                            loser_name:"Matau32",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Snackcakes",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"GEN D",
                            winner_score:3,
                            loser_name:"Snackcakes",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"GEN D",
                            winner_score:3,
                            loser_name:"Snackcakes",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Zeden",
            elo: 1486.2693468220116,
            region: "EU",
            slug: "user/adf5f249",
            confidence: 4,
            position: 98,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Zeden",
            winner_score:3,
            loser_name:"Rodo",
            loser_score:0
        },

        
        {
            winner_name:"Zeden",
            winner_score:3,
            loser_name:"sil",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "sil",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zeden",
                            winner_score:3,
                            loser_name:"sil",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Zrrkon",
            elo: 1485.950057652269,
            region: "NA",
            slug: "user/6db54991",
            confidence: 22,
            position: 99,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Zrrkon",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:1
        },

        
        {
            winner_name:"Zrrkon",
            winner_score:3,
            loser_name:"GragonMonkey",
            loser_score:0
        },

        
        {
            winner_name:"Zrrkon",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:0
        },

        
        {
            winner_name:"Zrrkon",
            winner_score:3,
            loser_name:"Yat0ro",
            loser_score:0
        },

        
        {
            winner_name:"Zrrkon",
            winner_score:3,
            loser_name:"Yat0ro",
            loser_score:0
        },

        
        {
            winner_name:"Zrrkon",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"Zrrkon",
            winner_score:3,
            loser_name:"Shermies Bravest Hamster",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "jadestar63",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Zrrkon",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Zrrkon",
                        loser_score:3,
                        winner_name:"jadestar63",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Zrrkon",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Yat0ro",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zrrkon",
                            winner_score:3,
                            loser_name:"Yat0ro",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Zrrkon",
                            winner_score:3,
                            loser_name:"Yat0ro",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Zrrkon",
                            winner_score:3,
                            loser_name:"Yat0ro",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Orrax / Luke",
            elo: 1484.8762603057457,
            region: "NA",
            slug: "user/79401a64",
            confidence: 4,
            position: 100,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Orrax / Luke",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:1
        },

        
        {
            winner_name:"Orrax / Luke",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "E2DEKU",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Orrax / Luke",
                            winner_score:3,
                            loser_name:"E2DEKU",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Burnt Bread",
            elo: 1483.773914374792,
            region: "UNK",
            slug: "user/c8f8515c",
            confidence: 8,
            position: 101,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Burnt Bread",
            winner_score:3,
            loser_name:"Sprite",
            loser_score:2
        },

        
        {
            winner_name:"Burnt Bread",
            winner_score:3,
            loser_name:"TomoA",
            loser_score:1
        },

        
        {
            winner_name:"Burnt Bread",
            winner_score:3,
            loser_name:"TomoA",
            loser_score:0
        },

        
        {
            winner_name:"Burnt Bread",
            winner_score:3,
            loser_name:"FourSwordKirby",
            loser_score:2
        },

        
        {
            winner_name:"Burnt Bread",
            winner_score:3,
            loser_name:"Yanase Koi",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "TomoA",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Burnt Bread",
                            winner_score:3,
                            loser_name:"TomoA",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Burnt Bread",
                        loser_score:3,
                        winner_name:"TomoA",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Burnt Bread",
                            winner_score:3,
                            loser_name:"TomoA",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Sprite",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Burnt Bread",
                            winner_score:3,
                            loser_name:"Sprite",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "bweans",
            elo: 1482.07188280267,
            region: "NA",
            slug: "user/71dad7ab",
            confidence: 22,
            position: 102,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"bweans",
            winner_score:3,
            loser_name:"Zrrkon",
            loser_score:1
        },

        
        {
            winner_name:"bweans",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:2
        },

        
        {
            winner_name:"bweans",
            winner_score:3,
            loser_name:"GragonMonkey",
            loser_score:1
        },

        
        {
            winner_name:"bweans",
            winner_score:3,
            loser_name:"MetalBlurS",
            loser_score:0
        },

        
        {
            winner_name:"bweans",
            winner_score:3,
            loser_name:"Moorcas",
            loser_score:1
        },

        
        {
            winner_name:"bweans",
            winner_score:3,
            loser_name:"hotdog8642",
            loser_score:2
        },

        
        {
            winner_name:"bweans",
            winner_score:3,
            loser_name:"Not Shadow Joulton",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "jadestar63",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"bweans",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"bweans",
                        loser_score:3,
                        winner_name:"jadestar63",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"bweans",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "hotdog8642",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"bweans",
                            winner_score:3,
                            loser_name:"hotdog8642",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"bweans",
                            winner_score:3,
                            loser_name:"hotdog8642",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Midboss",
            elo: 1480.5643096928975,
            region: "NA",
            slug: "user/f2e6f8ac",
            confidence: 9,
            position: 103,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Midboss",
            winner_score:3,
            loser_name:"Vollrath",
            loser_score:0
        },

        
        {
            winner_name:"Midboss",
            winner_score:3,
            loser_name:"Sorana",
            loser_score:0
        },

        
        {
            winner_name:"Midboss",
            winner_score:3,
            loser_name:"KyonHB",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Sorana",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Midboss",
                            winner_score:3,
                            loser_name:"Sorana",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Midboss",
                            winner_score:3,
                            loser_name:"Sorana",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Vollrath",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Midboss",
                            winner_score:3,
                            loser_name:"Vollrath",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Midboss",
                            winner_score:3,
                            loser_name:"Vollrath",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Reilly",
            elo: 1480.1232483299457,
            region: "NA",
            slug: "user/6c5e9735",
            confidence: 26,
            position: 104,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Reilly",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:1
        },

        
        {
            winner_name:"Reilly",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:2
        },

        
        {
            winner_name:"Reilly",
            winner_score:3,
            loser_name:"Goji",
            loser_score:0
        },

        
        {
            winner_name:"Reilly",
            winner_score:3,
            loser_name:"Mcintosh2002",
            loser_score:2
        },

        
        {
            winner_name:"Reilly",
            winner_score:3,
            loser_name:"Not Shadow Joulton",
            loser_score:1
        },

        
        {
            winner_name:"Reilly",
            winner_score:3,
            loser_name:"Link Pendrago",
            loser_score:2
        },

        
        {
            winner_name:"Reilly",
            winner_score:3,
            loser_name:"Luff",
            loser_score:0
        },

        
        {
            winner_name:"Reilly",
            winner_score:3,
            loser_name:"Rodimus Prime",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Monkey :)",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Reilly",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Reilly",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Rodimus Prime",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Reilly",
                            winner_score:3,
                            loser_name:"Rodimus Prime",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Reilly",
                            winner_score:3,
                            loser_name:"Rodimus Prime",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "thechriss2004s",
            elo: 1478.8475315310388,
            region: "UNK",
            slug: "user/c2944890",
            confidence: 45,
            position: 105,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"LuchikaDRS",
            loser_score:1
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"Serene Smile",
            loser_score:1
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:2
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:2
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:0
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:2
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"Shenanigans_XX",
            loser_score:0
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"SkullRonin13",
            loser_score:1
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"BXR",
            loser_score:0
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:2
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"Trickster?",
            loser_score:2
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"Wool",
            loser_score:1
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Oguri Cap",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"thechriss2004s",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"thechriss2004s",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"thechriss2004s",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "LuchikaDRS",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"thechriss2004s",
                        loser_score:3,
                        winner_name:"LuchikaDRS",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"thechriss2004s",
                            winner_score:3,
                            loser_name:"LuchikaDRS",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"thechriss2004s",
                        loser_score:3,
                        winner_name:"LuchikaDRS",
                        winner_score:0
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "BingDiaoQWQ",
            elo: 1470.9088565118589,
            region: "ASIA",
            slug: "user/6bb4bdb4",
            confidence: 15,
            position: 106,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"BingDiaoQWQ",
            winner_score:3,
            loser_name:"cerdi99",
            loser_score:1
        },

        
        {
            winner_name:"BingDiaoQWQ",
            winner_score:3,
            loser_name:"cerdi99",
            loser_score:0
        },

        
        {
            winner_name:"BingDiaoQWQ",
            winner_score:3,
            loser_name:"Cram",
            loser_score:1
        },

        
        {
            winner_name:"BingDiaoQWQ",
            winner_score:3,
            loser_name:"izank11",
            loser_score:2
        },

        
        {
            winner_name:"BingDiaoQWQ",
            winner_score:3,
            loser_name:"izank11",
            loser_score:1
        },

        
        {
            winner_name:"BingDiaoQWQ",
            winner_score:3,
            loser_name:"Artoria Nobunaga",
            loser_score:2
        },

        
        {
            winner_name:"BingDiaoQWQ",
            winner_score:3,
            loser_name:"SleepyheadDX",
            loser_score:0
        },

        
        {
            winner_name:"BingDiaoQWQ",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "izank11",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BingDiaoQWQ",
                            winner_score:3,
                            loser_name:"izank11",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"BingDiaoQWQ",
                            winner_score:3,
                            loser_name:"izank11",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "cerdi99",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BingDiaoQWQ",
                            winner_score:3,
                            loser_name:"cerdi99",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"BingDiaoQWQ",
                            winner_score:3,
                            loser_name:"cerdi99",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Masive",
            elo: 1470.6060726857133,
            region: "NA",
            slug: "user/070aa910",
            confidence: 8,
            position: 107,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Masive",
            winner_score:3,
            loser_name:"raiden",
            loser_score:1
        },

        
        {
            winner_name:"Masive",
            winner_score:3,
            loser_name:"Troggz93",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "raiden",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Masive",
                            winner_score:3,
                            loser_name:"raiden",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Masive",
                            winner_score:3,
                            loser_name:"raiden",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Troggz93",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Masive",
                            winner_score:3,
                            loser_name:"Troggz93",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Masive",
                            winner_score:3,
                            loser_name:"Troggz93",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Karlaaaa",
            elo: 1467.3315872932792,
            region: "EU",
            slug: "user/7eb3b2b2",
            confidence: 5,
            position: 108,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Karlaaaa",
            winner_score:3,
            loser_name:"WhitefangRex",
            loser_score:2
        },

        
        {
            winner_name:"Karlaaaa",
            winner_score:3,
            loser_name:"lisk",
            loser_score:0
        },

        
        {
            winner_name:"Karlaaaa",
            winner_score:3,
            loser_name:"Poogen",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "WhitefangRex",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Karlaaaa",
                            winner_score:3,
                            loser_name:"WhitefangRex",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Poogen",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Karlaaaa",
                            winner_score:3,
                            loser_name:"Poogen",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Kiomi",
            elo: 1464.315414124796,
            region: "NA",
            slug: "user/1c28cd2f",
            confidence: 6,
            position: 109,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Kiomi",
            winner_score:3,
            loser_name:"Glinty",
            loser_score:2
        },

        
        {
            winner_name:"Kiomi",
            winner_score:3,
            loser_name:"Dark Slayer",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Glinty",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Kiomi",
                            winner_score:3,
                            loser_name:"Glinty",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Kiomi",
                            winner_score:3,
                            loser_name:"Glinty",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Dark Slayer",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Kiomi",
                            winner_score:3,
                            loser_name:"Dark Slayer",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Kiomi",
                            winner_score:3,
                            loser_name:"Dark Slayer",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "BirdGang",
            elo: 1461.4160234211906,
            region: "NA",
            slug: "user/fc2cce1c",
            confidence: 4,
            position: 110,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"BirdGang",
            winner_score:3,
            loser_name:"RNGG",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "RNGG",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BirdGang",
                            winner_score:3,
                            loser_name:"RNGG",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"BirdGang",
                            winner_score:3,
                            loser_name:"RNGG",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "BigSloth",
            elo: 1459.8284434189545,
            region: "NA",
            slug: "user/8effeeb2",
            confidence: 1,
            position: 111,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"BigSloth",
            winner_score:3,
            loser_name:"DotFM",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "DotFM",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BigSloth",
                            winner_score:3,
                            loser_name:"DotFM",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "CoolmasterJG",
            elo: 1459.571726208639,
            region: "NA",
            slug: "user/dc940523",
            confidence: 6,
            position: 112,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"CoolmasterJG",
            winner_score:3,
            loser_name:"thechriss2004s",
            loser_score:2
        },

        
        {
            winner_name:"CoolmasterJG",
            winner_score:3,
            loser_name:"SSBSonic",
            loser_score:2
        },

        
        {
            winner_name:"CoolmasterJG",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:1
        },

        
        {
            winner_name:"CoolmasterJG",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "thechriss2004s",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"CoolmasterJG",
                            winner_score:3,
                            loser_name:"thechriss2004s",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "SSBSonic",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"CoolmasterJG",
                            winner_score:3,
                            loser_name:"SSBSonic",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "yameteAsh",
            elo: 1458.2918449475849,
            region: "NA",
            slug: "user/4bdff17b",
            confidence: 7,
            position: 113,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"yameteAsh",
            winner_score:3,
            loser_name:"Kyle Stormdrain",
            loser_score:1
        },

        
        {
            winner_name:"yameteAsh",
            winner_score:3,
            loser_name:"Treehell",
            loser_score:0
        },

        
        {
            winner_name:"yameteAsh",
            winner_score:3,
            loser_name:"MrMuerto123",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Treehell",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"yameteAsh",
                            winner_score:3,
                            loser_name:"Treehell",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"yameteAsh",
                            winner_score:3,
                            loser_name:"Treehell",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Kyle Stormdrain",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"yameteAsh",
                            winner_score:3,
                            loser_name:"Kyle Stormdrain",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"yameteAsh",
                        loser_score:3,
                        winner_name:"Kyle Stormdrain",
                        winner_score:2
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "PMXHOMIE",
            elo: 1457.201371933408,
            region: "NA",
            slug: "user/98004a72",
            confidence: 5,
            position: 114,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"PMXHOMIE",
            winner_score:3,
            loser_name:"Muerto",
            loser_score:1
        },

        
        {
            winner_name:"PMXHOMIE",
            winner_score:3,
            loser_name:"MH Rox",
            loser_score:2
        },

        
        {
            winner_name:"PMXHOMIE",
            winner_score:3,
            loser_name:"Babel",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Muerto",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"PMXHOMIE",
                        loser_score:3,
                        winner_name:"Muerto",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"PMXHOMIE",
                            winner_score:3,
                            loser_name:"Muerto",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "MH Rox",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"PMXHOMIE",
                            winner_score:3,
                            loser_name:"MH Rox",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "jadestar63",
            elo: 1449.7603129886566,
            region: "NA",
            slug: "user/1a73f5dc",
            confidence: 53,
            position: 115,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"shadowPR",
            loser_score:1
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Tokai Tatum",
            loser_score:2
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Tokai Tatum",
            loser_score:2
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Zrrkon",
            loser_score:2
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"bweans",
            loser_score:0
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Reilly",
            loser_score:2
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:2
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:1
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:1
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:2
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:2
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Pillowtalk",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Patneko",
            rival_wins: 2,
            rival_losses:4,
            recent_sets: [
                
                        {
                            winner_name:"jadestar63",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"jadestar63",
                        loser_score:3,
                        winner_name:"Patneko",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"jadestar63",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Lavender",
            rival_wins: 3,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"jadestar63",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"jadestar63",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"jadestar63",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Zrrkon",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"jadestar63",
                        loser_score:3,
                        winner_name:"Zrrkon",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"jadestar63",
                            winner_score:3,
                            loser_name:"Zrrkon",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"jadestar63",
                        loser_score:3,
                        winner_name:"Zrrkon",
                        winner_score:1
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Cythrin",
            elo: 1448.5035696319703,
            region: "NA",
            slug: "user/11c04680",
            confidence: 18,
            position: 116,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Cythrin",
            winner_score:3,
            loser_name:"Guapo",
            loser_score:2
        },

        
        {
            winner_name:"Cythrin",
            winner_score:3,
            loser_name:"Do It Mix Tho?",
            loser_score:0
        },

        
        {
            winner_name:"Cythrin",
            winner_score:3,
            loser_name:"Jrock",
            loser_score:1
        },

        
        {
            winner_name:"Cythrin",
            winner_score:3,
            loser_name:"Jrock",
            loser_score:2
        },

        
        {
            winner_name:"Cythrin",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:1
        },

        
        {
            winner_name:"Cythrin",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
        },

        
        {
            winner_name:"Cythrin",
            winner_score:3,
            loser_name:"Garryth",
            loser_score:0
        },

        
        {
            winner_name:"Cythrin",
            winner_score:3,
            loser_name:"Commiku",
            loser_score:2
        },

        
        {
            winner_name:"Cythrin",
            winner_score:3,
            loser_name:"PhilSchwifty",
            loser_score:1
        },

        
        {
            winner_name:"Cythrin",
            winner_score:3,
            loser_name:"Gold InGarnet",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Intimidaving",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Cythrin",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Cythrin",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Cythrin",
                        loser_score:3,
                        winner_name:"Intimidaving",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Jrock",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Cythrin",
                            winner_score:3,
                            loser_name:"Jrock",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Cythrin",
                            winner_score:3,
                            loser_name:"Jrock",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mop",
            elo: 1443.015647626486,
            region: "NA",
            slug: "user/fac03a9e",
            confidence: 6,
            position: 117,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mop",
            winner_score:3,
            loser_name:"Iris",
            loser_score:1
        },

        
        {
            winner_name:"Mop",
            winner_score:3,
            loser_name:"PlutOh",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Iris",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mop",
                            winner_score:3,
                            loser_name:"Iris",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Mop",
                            winner_score:3,
                            loser_name:"Iris",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "PlutOh",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mop",
                            winner_score:3,
                            loser_name:"PlutOh",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Mop",
                            winner_score:3,
                            loser_name:"PlutOh",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Peepohold",
            elo: 1434.4013511378437,
            region: "EU",
            slug: "user/d0ae9e5c",
            confidence: 8,
            position: 118,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Peepohold",
            winner_score:3,
            loser_name:"alanae",
            loser_score:2
        },

        
        {
            winner_name:"Peepohold",
            winner_score:3,
            loser_name:"King_Rasta",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "alanae",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Peepohold",
                            winner_score:3,
                            loser_name:"alanae",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Peepohold",
                            winner_score:3,
                            loser_name:"alanae",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "RNGG",
            elo: 1432.896500113411,
            region: "UNK",
            slug: "user/3a7bb97c",
            confidence: 20,
            position: 119,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"RNGG",
            winner_score:3,
            loser_name:"Will Power",
            loser_score:1
        },

        
        {
            winner_name:"RNGG",
            winner_score:3,
            loser_name:"Velvet",
            loser_score:0
        },

        
        {
            winner_name:"RNGG",
            winner_score:3,
            loser_name:"GooeyLagoon",
            loser_score:0
        },

        
        {
            winner_name:"RNGG",
            winner_score:3,
            loser_name:"Spyder_306",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Velvet",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"RNGG",
                            winner_score:3,
                            loser_name:"Velvet",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"RNGG",
                            winner_score:3,
                            loser_name:"Velvet",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"RNGG",
                            winner_score:3,
                            loser_name:"Velvet",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Oguri Cap",
            elo: 1430.512498493556,
            region: "UNK",
            slug: "user/c7e96de0",
            confidence: 68,
            position: 120,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:2
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:2
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:0
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Sturmfresser",
            loser_score:0
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Trickster?",
            loser_score:1
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:0
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:1
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:0
        },

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Patneko",
            rival_wins: 4,
            rival_losses:4,
            recent_sets: [
                
                    {
                        loser_name:"Oguri Cap",
                        loser_score:3,
                        winner_name:"Patneko",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Oguri Cap",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Oguri Cap",
                        loser_score:3,
                        winner_name:"Patneko",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "BUMBACHUNGA",
            rival_wins: 1,
            rival_losses:4,
            recent_sets: [
                
                    {
                        loser_name:"Oguri Cap",
                        loser_score:3,
                        winner_name:"BUMBACHUNGA",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"Oguri Cap",
                        loser_score:3,
                        winner_name:"BUMBACHUNGA",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Oguri Cap",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Zerochel",
            elo: 1430.4447512325132,
            region: "EU",
            slug: "user/377ce5d9",
            confidence: 4,
            position: 121,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Zerochel",
            winner_score:3,
            loser_name:"Alireza",
            loser_score:1
        },

        
        {
            winner_name:"Zerochel",
            winner_score:3,
            loser_name:"EleosStar",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Alireza",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zerochel",
                            winner_score:3,
                            loser_name:"Alireza",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "EleosStar",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zerochel",
                            winner_score:3,
                            loser_name:"EleosStar",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Muerto",
            elo: 1428.1921418752006,
            region: "NA",
            slug: "user/4cbbd678",
            confidence: 6,
            position: 122,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Muerto",
            winner_score:3,
            loser_name:"Lukiro",
            loser_score:1
        },

        
        {
            winner_name:"Muerto",
            winner_score:3,
            loser_name:"PMXHOMIE",
            loser_score:1
        },

        
        {
            winner_name:"Muerto",
            winner_score:3,
            loser_name:"hyperHICO",
            loser_score:0
        },

        
        {
            winner_name:"Muerto",
            winner_score:3,
            loser_name:"Azor DC",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "PMXHOMIE",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Muerto",
                            winner_score:3,
                            loser_name:"PMXHOMIE",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Muerto",
                        loser_score:3,
                        winner_name:"PMXHOMIE",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Lukiro",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Muerto",
                            winner_score:3,
                            loser_name:"Lukiro",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Alireza",
            elo: 1427.6854221632263,
            region: "EU",
            slug: "user/ce632a7f",
            confidence: 9,
            position: 123,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Alireza",
            winner_score:3,
            loser_name:"alanae",
            loser_score:2
        },

        
        {
            winner_name:"Alireza",
            winner_score:3,
            loser_name:"Zeden",
            loser_score:1
        },

        
        {
            winner_name:"Alireza",
            winner_score:3,
            loser_name:"Rodo",
            loser_score:1
        },

        
        {
            winner_name:"Alireza",
            winner_score:3,
            loser_name:"Crisis_Core",
            loser_score:0
        },

        
        {
            winner_name:"Alireza",
            winner_score:3,
            loser_name:"NSE",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "alanae",
            rival_wins: 1,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"Alireza",
                        loser_score:3,
                        winner_name:"alanae",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Alireza",
                            winner_score:3,
                            loser_name:"alanae",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Alireza",
                        loser_score:3,
                        winner_name:"alanae",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Crisis_Core",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Alireza",
                            winner_score:3,
                            loser_name:"Crisis_Core",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Gaudeo",
            elo: 1426.8898889971817,
            region: "NA",
            slug: "user/e05d297e",
            confidence: 5,
            position: 124,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Gaudeo",
            winner_score:3,
            loser_name:"Pssych",
            loser_score:2
        },

        
        {
            winner_name:"Gaudeo",
            winner_score:3,
            loser_name:"LeDom",
            loser_score:1
        },

        
        {
            winner_name:"Gaudeo",
            winner_score:3,
            loser_name:"Dinner",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LeDom",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Gaudeo",
                            winner_score:3,
                            loser_name:"LeDom",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Pssych",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Gaudeo",
                            winner_score:3,
                            loser_name:"Pssych",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Patneko",
            elo: 1426.4406792305233,
            region: "NA",
            slug: "user/01913282",
            confidence: 73,
            position: 125,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"Reapers Ruling Rat",
            loser_score:0
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"Reapers Ruling Rat",
            loser_score:0
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"Tokai Tatum",
            loser_score:1
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:0
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:2
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:1
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:1
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:2
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:2
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"Pillowtalk",
            loser_score:0
        },

        
        {
            winner_name:"Patneko",
            winner_score:3,
            loser_name:"Pillowtalk",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Oguri Cap",
            rival_wins: 4,
            rival_losses:4,
            recent_sets: [
                
                        {
                            winner_name:"Patneko",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Patneko",
                        loser_score:3,
                        winner_name:"Oguri Cap",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Patneko",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "jadestar63",
            rival_wins: 4,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Patneko",
                        loser_score:3,
                        winner_name:"jadestar63",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Patneko",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Patneko",
                        loser_score:3,
                        winner_name:"jadestar63",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "BUMBACHUNGA",
            rival_wins: 1,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"Patneko",
                        loser_score:3,
                        winner_name:"BUMBACHUNGA",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"Patneko",
                        loser_score:3,
                        winner_name:"BUMBACHUNGA",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Patneko",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "GragonMonkey",
            elo: 1424.9888173962672,
            region: "NA",
            slug: "user/7617abc0",
            confidence: 18,
            position: 126,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"GragonMonkey",
            winner_score:3,
            loser_name:"Reilly",
            loser_score:2
        },

        
        {
            winner_name:"GragonMonkey",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:0
        },

        
        {
            winner_name:"GragonMonkey",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:0
        },

        
        {
            winner_name:"GragonMonkey",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"GragonMonkey",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"GragonMonkey",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:0
        },

        
        {
            winner_name:"GragonMonkey",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
        },

        
        {
            winner_name:"GragonMonkey",
            winner_score:3,
            loser_name:"Jay314",
            loser_score:1
        },

        
        {
            winner_name:"GragonMonkey",
            winner_score:3,
            loser_name:"Regulus",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Intimidaving",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"GragonMonkey",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"GragonMonkey",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "HCShark10",
            elo: 1419.9531862312251,
            region: "NA",
            slug: "user/4595b8d4",
            confidence: 17,
            position: 127,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Cythrin",
            loser_score:0
        },

        
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Do It Mix Tho?",
            loser_score:0
        },

        
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Jrock",
            loser_score:0
        },

        
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:1
        },

        
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:0
        },

        
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
        },

        
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Ssj3enderman",
            loser_score:0
        },

        
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Durandal",
            loser_score:0
        },

        
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Cytosine",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Intimidaving",
            rival_wins: 3,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"HCShark10",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"HCShark10",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"HCShark10",
                        loser_score:3,
                        winner_name:"Intimidaving",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Cythrin",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"HCShark10",
                            winner_score:3,
                            loser_name:"Cythrin",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "canqkate",
            elo: 1417.867162848801,
            region: "UNK",
            slug: "user/996b0fd7",
            confidence: 2,
            position: 128,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"canqkate",
            winner_score:3,
            loser_name:"Psyco",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Psyco",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"canqkate",
                            winner_score:3,
                            loser_name:"Psyco",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Omicron Austin",
            elo: 1414.715263270611,
            region: "NA",
            slug: "user/9064ea66",
            confidence: 6,
            position: 129,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Omicron Austin",
            winner_score:3,
            loser_name:"Vollrath",
            loser_score:0
        },

        
        {
            winner_name:"Omicron Austin",
            winner_score:3,
            loser_name:"Velvet",
            loser_score:2
        },

        
        {
            winner_name:"Omicron Austin",
            winner_score:3,
            loser_name:"Twak",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Velvet",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Omicron Austin",
                        loser_score:3,
                        winner_name:"Velvet",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Omicron Austin",
                            winner_score:3,
                            loser_name:"Velvet",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Omicron Austin",
                        loser_score:3,
                        winner_name:"Velvet",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Vollrath",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Omicron Austin",
                            winner_score:3,
                            loser_name:"Vollrath",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Omicron Austin",
                            winner_score:3,
                            loser_name:"Vollrath",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Twak",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Omicron Austin",
                            winner_score:3,
                            loser_name:"Twak",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "ColdMill",
            elo: 1414.0628686994933,
            region: "EU",
            slug: "user/8bb4bc2d",
            confidence: 7,
            position: 130,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"ColdMill",
            winner_score:3,
            loser_name:"Noctowlite 13",
            loser_score:1
        },

        
        {
            winner_name:"ColdMill",
            winner_score:3,
            loser_name:"Panda Yeux",
            loser_score:0
        },

        
        {
            winner_name:"ColdMill",
            winner_score:3,
            loser_name:"Makoche",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Makoche",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"ColdMill",
                            winner_score:3,
                            loser_name:"Makoche",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Panda Yeux",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"ColdMill",
                            winner_score:3,
                            loser_name:"Panda Yeux",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "YOGAMEWIZARD",
            elo: 1413.04165488194,
            region: "NA",
            slug: "user/38b9de27",
            confidence: 18,
            position: 131,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"YOGAMEWIZARD",
            winner_score:3,
            loser_name:"Ryazo",
            loser_score:2
        },

        
        {
            winner_name:"YOGAMEWIZARD",
            winner_score:3,
            loser_name:"Spritecranberry145829103",
            loser_score:2
        },

        
        {
            winner_name:"YOGAMEWIZARD",
            winner_score:3,
            loser_name:"Nago",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Ryazo",
            rival_wins: 2,
            rival_losses:4,
            recent_sets: [
                
                    {
                        loser_name:"YOGAMEWIZARD",
                        loser_score:3,
                        winner_name:"Ryazo",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"YOGAMEWIZARD",
                        loser_score:3,
                        winner_name:"Ryazo",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"YOGAMEWIZARD",
                        loser_score:3,
                        winner_name:"Ryazo",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Nago",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"YOGAMEWIZARD",
                            winner_score:3,
                            loser_name:"Nago",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"YOGAMEWIZARD",
                            winner_score:3,
                            loser_name:"Nago",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Everlasting",
            elo: 1412.5679277417785,
            region: "UNK",
            slug: "user/5c469dc4",
            confidence: 5,
            position: 132,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Everlasting",
            winner_score:3,
            loser_name:"maplekaaa",
            loser_score:2
        },

        
        {
            winner_name:"Everlasting",
            winner_score:3,
            loser_name:"[ BK SAS ]",
            loser_score:0
        },

        
        {
            winner_name:"Everlasting",
            winner_score:3,
            loser_name:"Sand",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "maplekaaa",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Everlasting",
                            winner_score:3,
                            loser_name:"maplekaaa",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "MetalBlurS",
            elo: 1412.1907372179262,
            region: "NA",
            slug: "user/4ac53514",
            confidence: 18,
            position: 133,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"MetalBlurS",
            winner_score:3,
            loser_name:"Never Block",
            loser_score:2
        },

        
        {
            winner_name:"MetalBlurS",
            winner_score:3,
            loser_name:"Never Block",
            loser_score:0
        },

        
        {
            winner_name:"MetalBlurS",
            winner_score:3,
            loser_name:"DanteRebellionX",
            loser_score:0
        },

        
        {
            winner_name:"MetalBlurS",
            winner_score:3,
            loser_name:"DanteRebellionX",
            loser_score:1
        },

        
        {
            winner_name:"MetalBlurS",
            winner_score:3,
            loser_name:"DanteRebellionX",
            loser_score:0
        },

        
        {
            winner_name:"MetalBlurS",
            winner_score:3,
            loser_name:"CharizardX",
            loser_score:0
        },

        
        {
            winner_name:"MetalBlurS",
            winner_score:3,
            loser_name:"Eternum",
            loser_score:0
        },

        
        {
            winner_name:"MetalBlurS",
            winner_score:3,
            loser_name:"anonanon",
            loser_score:0
        },

        
        {
            winner_name:"MetalBlurS",
            winner_score:3,
            loser_name:"Arkanjin",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "DanteRebellionX",
            rival_wins: 3,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"MetalBlurS",
                            winner_score:3,
                            loser_name:"DanteRebellionX",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"MetalBlurS",
                            winner_score:3,
                            loser_name:"DanteRebellionX",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"MetalBlurS",
                        loser_score:3,
                        winner_name:"DanteRebellionX",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Never Block",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"MetalBlurS",
                            winner_score:3,
                            loser_name:"Never Block",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"MetalBlurS",
                        loser_score:3,
                        winner_name:"Never Block",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"MetalBlurS",
                            winner_score:3,
                            loser_name:"Never Block",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "EleosStar",
            elo: 1412.0859224824762,
            region: "EU",
            slug: "user/66154fbe",
            confidence: 11,
            position: 134,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"EleosStar",
            winner_score:3,
            loser_name:"GideonTG",
            loser_score:2
        },

        
        {
            winner_name:"EleosStar",
            winner_score:3,
            loser_name:"Openwolf",
            loser_score:0
        },

        
        {
            winner_name:"EleosStar",
            winner_score:3,
            loser_name:"Crisis_Core",
            loser_score:0
        },

        
        {
            winner_name:"EleosStar",
            winner_score:3,
            loser_name:"TakeYourTime",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "GideonTG",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"EleosStar",
                            winner_score:3,
                            loser_name:"GideonTG",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"EleosStar",
                            winner_score:3,
                            loser_name:"GideonTG",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Openwolf",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"EleosStar",
                            winner_score:3,
                            loser_name:"Openwolf",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"EleosStar",
                            winner_score:3,
                            loser_name:"Openwolf",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "dog",
            elo: 1407.5015667368812,
            region: "OCE",
            slug: "user/7ab7ef39",
            confidence: 2,
            position: 135,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"dog",
            winner_score:3,
            loser_name:"Eccentric_Thistle",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Eccentric_Thistle",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"dog",
                            winner_score:3,
                            loser_name:"Eccentric_Thistle",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "NonchalantVerde",
            elo: 1407.2020884204087,
            region: "NA",
            slug: "user/f1a50e8b",
            confidence: 4,
            position: 136,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"NonchalantVerde",
            winner_score:3,
            loser_name:"Gex",
            loser_score:2
        },

        
        {
            winner_name:"NonchalantVerde",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Gex",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"NonchalantVerde",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "JosesChrist",
            elo: 1406.6373353618376,
            region: "UNK",
            slug: "user/d5028cd4",
            confidence: 8,
            position: 137,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"JosesChrist",
            winner_score:3,
            loser_name:"Espada",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Espada",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"JosesChrist",
                            winner_score:3,
                            loser_name:"Espada",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"JosesChrist",
                            winner_score:3,
                            loser_name:"Espada",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"JosesChrist",
                            winner_score:3,
                            loser_name:"Espada",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Weeb-King",
            elo: 1405.9878824077377,
            region: "NA",
            slug: "user/b3e0db36",
            confidence: 16,
            position: 138,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Weeb-King",
            winner_score:3,
            loser_name:"hotdog8642",
            loser_score:1
        },

        
        {
            winner_name:"Weeb-King",
            winner_score:3,
            loser_name:"hotdog8642",
            loser_score:0
        },

        
        {
            winner_name:"Weeb-King",
            winner_score:3,
            loser_name:"Nirvana",
            loser_score:1
        },

        
        {
            winner_name:"Weeb-King",
            winner_score:3,
            loser_name:"Wool",
            loser_score:0
        },

        
        {
            winner_name:"Weeb-King",
            winner_score:3,
            loser_name:"CharizardX",
            loser_score:0
        },

        
        {
            winner_name:"Weeb-King",
            winner_score:3,
            loser_name:"Speeze",
            loser_score:1
        },

        
        {
            winner_name:"Weeb-King",
            winner_score:3,
            loser_name:"Eternum",
            loser_score:1
        },

        
        {
            winner_name:"Weeb-King",
            winner_score:3,
            loser_name:"Manil",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "hotdog8642",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Weeb-King",
                            winner_score:3,
                            loser_name:"hotdog8642",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Weeb-King",
                            winner_score:3,
                            loser_name:"hotdog8642",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Weeb-King",
                        loser_score:3,
                        winner_name:"hotdog8642",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Speeze",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Weeb-King",
                            winner_score:3,
                            loser_name:"Speeze",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Weeb-King",
                            winner_score:3,
                            loser_name:"Speeze",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "MMDK",
            elo: 1403.3618227462312,
            region: "ASIA",
            slug: "user/c4ffdadf",
            confidence: 2,
            position: 139,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"MMDK",
            winner_score:3,
            loser_name:"L1",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "L1",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"MMDK",
                            winner_score:3,
                            loser_name:"L1",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "ThatScrubDavid",
            elo: 1402.6615803332172,
            region: "NA",
            slug: "user/ca4da892",
            confidence: 4,
            position: 140,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"ThatScrubDavid",
            winner_score:3,
            loser_name:"Rothicus",
            loser_score:0
        },

        
        {
            winner_name:"ThatScrubDavid",
            winner_score:3,
            loser_name:"Crucified_majima",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Rothicus",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"ThatScrubDavid",
                            winner_score:3,
                            loser_name:"Rothicus",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Crucified_majima",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"ThatScrubDavid",
                            winner_score:3,
                            loser_name:"Crucified_majima",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Akihisa Sendo",
            elo: 1400.5964879888522,
            region: "NA",
            slug: "user/fc6f4a3f",
            confidence: 8,
            position: 141,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Akihisa Sendo",
            winner_score:3,
            loser_name:"Hero M#",
            loser_score:0
        },

        
        {
            winner_name:"Akihisa Sendo",
            winner_score:3,
            loser_name:"WheresMyKeys",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "WheresMyKeys",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Akihisa Sendo",
                            winner_score:3,
                            loser_name:"WheresMyKeys",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Akihisa Sendo",
                            winner_score:3,
                            loser_name:"WheresMyKeys",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Rothicus",
            elo: 1397.7909762493605,
            region: "NA",
            slug: "user/aeaa254b",
            confidence: 5,
            position: 142,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Rothicus",
            winner_score:3,
            loser_name:"ZeperTheStar",
            loser_score:0
        },

        
        {
            winner_name:"Rothicus",
            winner_score:3,
            loser_name:"Pattler",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "ZeperTheStar",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Rothicus",
                            winner_score:3,
                            loser_name:"ZeperTheStar",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Rothicus",
                            winner_score:3,
                            loser_name:"ZeperTheStar",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Pattler",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Rothicus",
                            winner_score:3,
                            loser_name:"Pattler",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "MrEater",
            elo: 1390.8908445095144,
            region: "NA",
            slug: "user/bb80314f",
            confidence: 9,
            position: 143,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"MrEater",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:2
        },

        
        {
            winner_name:"MrEater",
            winner_score:3,
            loser_name:"Wool",
            loser_score:2
        },

        
        {
            winner_name:"MrEater",
            winner_score:3,
            loser_name:"Greatmario64",
            loser_score:1
        },

        
        {
            winner_name:"MrEater",
            winner_score:3,
            loser_name:"pdhewitt",
            loser_score:0
        },

        
        {
            winner_name:"MrEater",
            winner_score:3,
            loser_name:"pdhewitt",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Monkey :)",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"MrEater",
                        loser_score:3,
                        winner_name:"Monkey :)",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"MrEater",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"MrEater",
                        loser_score:3,
                        winner_name:"Monkey :)",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "pdhewitt",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"MrEater",
                            winner_score:3,
                            loser_name:"pdhewitt",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"MrEater",
                            winner_score:3,
                            loser_name:"pdhewitt",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Wool",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"MrEater",
                            winner_score:3,
                            loser_name:"Wool",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "AAAA",
            elo: 1390.116665646947,
            region: "EU",
            slug: "user/372c4302",
            confidence: 4,
            position: 144,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"AAAA",
            winner_score:3,
            loser_name:"WhitefangRex",
            loser_score:2
        },

        
        {
            winner_name:"AAAA",
            winner_score:3,
            loser_name:"lisk",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "WhitefangRex",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"AAAA",
                        loser_score:3,
                        winner_name:"WhitefangRex",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"AAAA",
                            winner_score:3,
                            loser_name:"WhitefangRex",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "lisk",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"AAAA",
                            winner_score:3,
                            loser_name:"lisk",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "BUMBACHUNGA",
            elo: 1389.4766833144226,
            region: "NA",
            slug: "user/39dcdc1f",
            confidence: 77,
            position: 145,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"TomoA",
            loser_score:2
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:1
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"MysteryRacer21",
            loser_score:1
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"Reapers Ruling Rat",
            loser_score:0
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"Reapers Ruling Rat",
            loser_score:2
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:2
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:2
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"HCShark10",
            loser_score:2
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"HCShark10",
            loser_score:1
        },

        
        {
            winner_name:"BUMBACHUNGA",
            winner_score:3,
            loser_name:"NonchalantVerde",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Oguri Cap",
            rival_wins: 4,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"BUMBACHUNGA",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"BUMBACHUNGA",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"BUMBACHUNGA",
                        loser_score:3,
                        winner_name:"Oguri Cap",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Reapers Ruling Rat",
            rival_wins: 2,
            rival_losses:3,
            recent_sets: [
                
                        {
                            winner_name:"BUMBACHUNGA",
                            winner_score:3,
                            loser_name:"Reapers Ruling Rat",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"BUMBACHUNGA",
                        loser_score:3,
                        winner_name:"Reapers Ruling Rat",
                        winner_score:0
                    },
            
                    
                    {
                        loser_name:"BUMBACHUNGA",
                        loser_score:3,
                        winner_name:"Reapers Ruling Rat",
                        winner_score:1
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Zturtle102",
            elo: 1388.746918559206,
            region: "NA",
            slug: "user/e0ada70c",
            confidence: 4,
            position: 146,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Zturtle102",
            winner_score:3,
            loser_name:"sabredog",
            loser_score:0
        },

        
        {
            winner_name:"Zturtle102",
            winner_score:3,
            loser_name:"Asmodean95",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "sabredog",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zturtle102",
                            winner_score:3,
                            loser_name:"sabredog",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "NaruKami",
            elo: 1387.755305662934,
            region: "EU",
            slug: "user/a5922fe0",
            confidence: 4,
            position: 147,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"NaruKami",
            winner_score:3,
            loser_name:"D-Nis",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "D-Nis",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"NaruKami",
                            winner_score:3,
                            loser_name:"D-Nis",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"NaruKami",
                            winner_score:3,
                            loser_name:"D-Nis",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Moorcas",
            elo: 1380.3215113016731,
            region: "NA",
            slug: "user/a5a1315a",
            confidence: 12,
            position: 148,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Moorcas",
            winner_score:3,
            loser_name:"Pssych",
            loser_score:1
        },

        
        {
            winner_name:"Moorcas",
            winner_score:3,
            loser_name:"Authentic Matcha Drink",
            loser_score:2
        },

        
        {
            winner_name:"Moorcas",
            winner_score:3,
            loser_name:"Authentic Matcha Drink",
            loser_score:0
        },

        
        {
            winner_name:"Moorcas",
            winner_score:3,
            loser_name:"Carrie",
            loser_score:0
        },

        
        {
            winner_name:"Moorcas",
            winner_score:3,
            loser_name:"Armakilo",
            loser_score:0
        },

        
        {
            winner_name:"Moorcas",
            winner_score:3,
            loser_name:"LukeParry",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Pssych",
            rival_wins: 1,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"Moorcas",
                        loser_score:3,
                        winner_name:"Pssych",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Moorcas",
                            winner_score:3,
                            loser_name:"Pssych",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Moorcas",
                        loser_score:3,
                        winner_name:"Pssych",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Authentic Matcha Drink",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Moorcas",
                            winner_score:3,
                            loser_name:"Authentic Matcha Drink",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Moorcas",
                            winner_score:3,
                            loser_name:"Authentic Matcha Drink",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "hotdog8642",
            elo: 1370.594488083675,
            region: "NA",
            slug: "user/66b96b3f",
            confidence: 16,
            position: 149,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"hotdog8642",
            winner_score:3,
            loser_name:"MetalBlurS",
            loser_score:1
        },

        
        {
            winner_name:"hotdog8642",
            winner_score:3,
            loser_name:"Weeb-King",
            loser_score:0
        },

        
        {
            winner_name:"hotdog8642",
            winner_score:3,
            loser_name:"Wool",
            loser_score:0
        },

        
        {
            winner_name:"hotdog8642",
            winner_score:3,
            loser_name:"DanteRebellionX",
            loser_score:1
        },

        
        {
            winner_name:"hotdog8642",
            winner_score:3,
            loser_name:"CharizardX",
            loser_score:1
        },

        
        {
            winner_name:"hotdog8642",
            winner_score:3,
            loser_name:"Eternum",
            loser_score:0
        },

        
        {
            winner_name:"hotdog8642",
            winner_score:3,
            loser_name:"Kentoki",
            loser_score:1
        },

        
        {
            winner_name:"hotdog8642",
            winner_score:3,
            loser_name:"Arkanjin",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Weeb-King",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"hotdog8642",
                        loser_score:3,
                        winner_name:"Weeb-King",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"hotdog8642",
                        loser_score:3,
                        winner_name:"Weeb-King",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"hotdog8642",
                            winner_score:3,
                            loser_name:"Weeb-King",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Wool",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"hotdog8642",
                            winner_score:3,
                            loser_name:"Wool",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"hotdog8642",
                            winner_score:3,
                            loser_name:"Wool",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Kyle Stormdrain",
            elo: 1365.70844235855,
            region: "NA",
            slug: "user/f0b4996b",
            confidence: 3,
            position: 150,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Kyle Stormdrain",
            winner_score:3,
            loser_name:"yameteAsh",
            loser_score:2
        },

        
        {
            winner_name:"Kyle Stormdrain",
            winner_score:3,
            loser_name:"MrMuerto123",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "yameteAsh",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Kyle Stormdrain",
                        loser_score:3,
                        winner_name:"yameteAsh",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Kyle Stormdrain",
                            winner_score:3,
                            loser_name:"yameteAsh",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "MrMuerto123",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Kyle Stormdrain",
                            winner_score:3,
                            loser_name:"MrMuerto123",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "E30",
            elo: 1364.614370528234,
            region: "NA",
            slug: "user/17970918",
            confidence: 16,
            position: 151,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"E30",
            winner_score:3,
            loser_name:"Sturmfresser",
            loser_score:2
        },

        
        {
            winner_name:"E30",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:0
        },

        
        {
            winner_name:"E30",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:0
        },

        
        {
            winner_name:"E30",
            winner_score:3,
            loser_name:"R. Noble",
            loser_score:0
        },

        
        {
            winner_name:"E30",
            winner_score:3,
            loser_name:"Jay314",
            loser_score:0
        },

        
        {
            winner_name:"E30",
            winner_score:3,
            loser_name:"Yanase Koi",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Fish Liquor",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"E30",
                            winner_score:3,
                            loser_name:"Fish Liquor",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"E30",
                            winner_score:3,
                            loser_name:"Fish Liquor",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Awookanen",
            elo: 1361.5782403576063,
            region: "NA",
            slug: "user/d03874e2",
            confidence: 6,
            position: 152,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Awookanen",
            winner_score:3,
            loser_name:"Kiomi",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Kiomi",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Awookanen",
                            winner_score:3,
                            loser_name:"Kiomi",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Awookanen",
                            winner_score:3,
                            loser_name:"Kiomi",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Garfield",
            elo: 1360.9504344651855,
            region: "NA",
            slug: "user/837fdd82",
            confidence: 7,
            position: 153,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Garfield",
            winner_score:3,
            loser_name:"JOE MAMA",
            loser_score:1
        },

        
        {
            winner_name:"Garfield",
            winner_score:3,
            loser_name:"Donny Tsunami",
            loser_score:0
        },

        
        {
            winner_name:"Garfield",
            winner_score:3,
            loser_name:"Corny",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "JOE MAMA",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Garfield",
                            winner_score:3,
                            loser_name:"JOE MAMA",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Garfield",
                        loser_score:3,
                        winner_name:"JOE MAMA",
                        winner_score:2
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "lupeslounge",
            elo: 1360.918285233725,
            region: "NA",
            slug: "user/6e793038",
            confidence: 4,
            position: 154,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"lupeslounge",
            winner_score:3,
            loser_name:"Sanaito",
            loser_score:1
        },

        
        {
            winner_name:"lupeslounge",
            winner_score:3,
            loser_name:"Zagorsek",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Sanaito",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"lupeslounge",
                            winner_score:3,
                            loser_name:"Sanaito",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Zagorsek",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"lupeslounge",
                            winner_score:3,
                            loser_name:"Zagorsek",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Lavender",
            elo: 1358.3092549947025,
            region: "UNK",
            slug: "user/96ab06a3",
            confidence: 59,
            position: 155,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Zrrkon",
            loser_score:2
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:2
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:2
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:2
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:2
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:0
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Sturmfresser",
            loser_score:0
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"ruby_chan",
            loser_score:2
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Yat0ro",
            loser_score:1
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:2
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:1
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Intimidaving",
            rival_wins: 3,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"Lavender",
                        loser_score:3,
                        winner_name:"Intimidaving",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"Lavender",
                        loser_score:3,
                        winner_name:"Intimidaving",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Lavender",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "LilSoonerFanInMO",
            rival_wins: 4,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Lavender",
                            winner_score:3,
                            loser_name:"LilSoonerFanInMO",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Lavender",
                            winner_score:3,
                            loser_name:"LilSoonerFanInMO",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Lavender",
                        loser_score:3,
                        winner_name:"LilSoonerFanInMO",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "jadestar63",
            rival_wins: 2,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"Lavender",
                        loser_score:3,
                        winner_name:"jadestar63",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"Lavender",
                        loser_score:3,
                        winner_name:"jadestar63",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"Lavender",
                        loser_score:3,
                        winner_name:"jadestar63",
                        winner_score:1
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "wingupingu",
            elo: 1358.0222813207092,
            region: "UNK",
            slug: "user/b738dd0b",
            confidence: 5,
            position: 156,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"wingupingu",
            winner_score:3,
            loser_name:"Bwead",
            loser_score:0
        },

        
        {
            winner_name:"wingupingu",
            winner_score:3,
            loser_name:"10PCSpicyNuggets",
            loser_score:0
        },

        
        {
            winner_name:"wingupingu",
            winner_score:3,
            loser_name:"Juicey",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Bwead",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"wingupingu",
                            winner_score:3,
                            loser_name:"Bwead",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Juicey",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"wingupingu",
                            winner_score:3,
                            loser_name:"Juicey",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "cerdi99",
            elo: 1355.502087323267,
            region: "EU",
            slug: "user/5b5ccf78",
            confidence: 6,
            position: 157,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"cerdi99",
            winner_score:3,
            loser_name:"izank11",
            loser_score:1
        },

        
        {
            winner_name:"cerdi99",
            winner_score:3,
            loser_name:"Donpi",
            loser_score:1
        },

        
        {
            winner_name:"cerdi99",
            winner_score:3,
            loser_name:"Joseca500",
            loser_score:0
        },

        
        {
            winner_name:"cerdi99",
            winner_score:3,
            loser_name:"Ab",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "izank11",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"cerdi99",
                            winner_score:3,
                            loser_name:"izank11",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Donpi",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"cerdi99",
                            winner_score:3,
                            loser_name:"Donpi",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "FX",
            elo: 1355.3722096727427,
            region: "EU",
            slug: "user/aba3853c",
            confidence: 6,
            position: 158,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"FX",
            winner_score:3,
            loser_name:"Feliks",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Feliks",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"FX",
                            winner_score:3,
                            loser_name:"Feliks",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"FX",
                            winner_score:3,
                            loser_name:"Feliks",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "NuclearTaco2042",
            elo: 1355.0301657075277,
            region: "NA",
            slug: "user/fb0eb1bf",
            confidence: 18,
            position: 159,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"NuclearTaco2042",
            winner_score:3,
            loser_name:"Cythrin",
            loser_score:0
        },

        
        {
            winner_name:"NuclearTaco2042",
            winner_score:3,
            loser_name:"YOGAMEWIZARD",
            loser_score:1
        },

        
        {
            winner_name:"NuclearTaco2042",
            winner_score:3,
            loser_name:"DGF",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "YOGAMEWIZARD",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"NuclearTaco2042",
                            winner_score:3,
                            loser_name:"YOGAMEWIZARD",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"NuclearTaco2042",
                            winner_score:3,
                            loser_name:"YOGAMEWIZARD",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Shenanigans_XX",
            elo: 1351.094620978127,
            region: "NA",
            slug: "user/967aab37",
            confidence: 5,
            position: 160,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Shenanigans_XX",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
            loser_score:2
        },

        
        {
            winner_name:"Shenanigans_XX",
            winner_score:3,
            loser_name:"Yanase Koi",
            loser_score:0
        },

        
        {
            winner_name:"Shenanigans_XX",
            winner_score:3,
            loser_name:"tylerGplays",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Yanase Koi",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Shenanigans_XX",
                            winner_score:3,
                            loser_name:"Yanase Koi",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "tylerGplays",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Shenanigans_XX",
                            winner_score:3,
                            loser_name:"tylerGplays",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Rodo",
            elo: 1349.3022932909405,
            region: "EU",
            slug: "user/91de8b95",
            confidence: 5,
            position: 161,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Rodo",
            winner_score:3,
            loser_name:"Guy",
            loser_score:0
        },

        
        {
            winner_name:"Rodo",
            winner_score:3,
            loser_name:"Max",
            loser_score:0
        },

        
        {
            winner_name:"Rodo",
            winner_score:3,
            loser_name:"Asanaka",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Guy",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Rodo",
                            winner_score:3,
                            loser_name:"Guy",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Max",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Rodo",
                            winner_score:3,
                            loser_name:"Max",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Shadowpelt",
            elo: 1348.3386282112658,
            region: "NA",
            slug: "user/de31c924",
            confidence: 11,
            position: 162,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Shadowpelt",
            winner_score:3,
            loser_name:"SpicyChedderJack",
            loser_score:1
        },

        
        {
            winner_name:"Shadowpelt",
            winner_score:3,
            loser_name:"SpicyChedderJack",
            loser_score:1
        },

        
        {
            winner_name:"Shadowpelt",
            winner_score:3,
            loser_name:"SpicyChedderJack",
            loser_score:2
        },

        
        {
            winner_name:"Shadowpelt",
            winner_score:3,
            loser_name:"Senpapi512",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "SpicyChedderJack",
            rival_wins: 4,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Shadowpelt",
                            winner_score:3,
                            loser_name:"SpicyChedderJack",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Shadowpelt",
                            winner_score:3,
                            loser_name:"SpicyChedderJack",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Shadowpelt",
                            winner_score:3,
                            loser_name:"SpicyChedderJack",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Sompursone",
            elo: 1347.307422429641,
            region: "NA",
            slug: "user/6a67672a",
            confidence: 6,
            position: 163,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Sompursone",
            winner_score:3,
            loser_name:"fancyhat",
            loser_score:0
        },

        
        {
            winner_name:"Sompursone",
            winner_score:3,
            loser_name:"KyonHB",
            loser_score:1
        },

        
        {
            winner_name:"Sompursone",
            winner_score:3,
            loser_name:"Trashfox",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "KyonHB",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Sompursone",
                            winner_score:3,
                            loser_name:"KyonHB",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Trashfox",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Sompursone",
                            winner_score:3,
                            loser_name:"Trashfox",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Deux",
            elo: 1345.7050891420206,
            region: "ASIA",
            slug: "user/6c6bd3c9",
            confidence: 5,
            position: 164,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Deux",
            winner_score:3,
            loser_name:"Promilkid",
            loser_score:0
        },

        
        {
            winner_name:"Deux",
            winner_score:3,
            loser_name:"Endmin 67",
            loser_score:0
        },

        
        {
            winner_name:"Deux",
            winner_score:3,
            loser_name:"Riel",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Promilkid",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Deux",
                            winner_score:3,
                            loser_name:"Promilkid",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Endmin 67",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Deux",
                            winner_score:3,
                            loser_name:"Endmin 67",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Spartan",
            elo: 1343.548973203307,
            region: "NA",
            slug: "user/a5982f17",
            confidence: 4,
            position: 165,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Spartan",
            winner_score:3,
            loser_name:"Ibbit",
            loser_score:0
        },

        
        {
            winner_name:"Spartan",
            winner_score:3,
            loser_name:"I Lose",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Ibbit",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Spartan",
                            winner_score:3,
                            loser_name:"Ibbit",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Do It Mix Tho?",
            elo: 1341.6457980059206,
            region: "NA",
            slug: "user/e9a5af54",
            confidence: 4,
            position: 166,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Do It Mix Tho?",
            winner_score:3,
            loser_name:"STONE",
            loser_score:0
        },

        
        {
            winner_name:"Do It Mix Tho?",
            winner_score:3,
            loser_name:"The Doorman",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "The Doorman",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Do It Mix Tho?",
                            winner_score:3,
                            loser_name:"The Doorman",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "LilSoonerFanInMO",
            elo: 1341.5513633680928,
            region: "NA",
            slug: "user/6c0bad01",
            confidence: 31,
            position: 167,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:0
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"Pillowtalk",
            loser_score:2
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:2
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:0
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"BXR",
            loser_score:2
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"BXR",
            loser_score:2
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"Jay314",
            loser_score:0
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"jak_d_ripr",
            loser_score:0
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"jak_d_ripr",
            loser_score:0
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"FGCConex",
            loser_score:1
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:1
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"Cheerustre",
            loser_score:0
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:0
        },

        
        {
            winner_name:"LilSoonerFanInMO",
            winner_score:3,
            loser_name:"mintjulep",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Lavender",
            rival_wins: 1,
            rival_losses:4,
            recent_sets: [
                
                    {
                        loser_name:"LilSoonerFanInMO",
                        loser_score:3,
                        winner_name:"Lavender",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"LilSoonerFanInMO",
                        loser_score:3,
                        winner_name:"Lavender",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"LilSoonerFanInMO",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Shyoshiguy",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"LilSoonerFanInMO",
                        loser_score:3,
                        winner_name:"Shyoshiguy",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"LilSoonerFanInMO",
                            winner_score:3,
                            loser_name:"Shyoshiguy",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"LilSoonerFanInMO",
                        loser_score:3,
                        winner_name:"Shyoshiguy",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "jak_d_ripr",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LilSoonerFanInMO",
                            winner_score:3,
                            loser_name:"jak_d_ripr",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"LilSoonerFanInMO",
                            winner_score:3,
                            loser_name:"jak_d_ripr",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"LilSoonerFanInMO",
                            winner_score:3,
                            loser_name:"jak_d_ripr",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Glinty",
            elo: 1340.7245756856091,
            region: "NA",
            slug: "user/73554805",
            confidence: 12,
            position: 168,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Glinty",
            winner_score:3,
            loser_name:"wubbiq",
            loser_score:2
        },

        
        {
            winner_name:"Glinty",
            winner_score:3,
            loser_name:"ruby_chan",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "wubbiq",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Glinty",
                            winner_score:3,
                            loser_name:"wubbiq",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Glinty",
                            winner_score:3,
                            loser_name:"wubbiq",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Glinty",
                            winner_score:3,
                            loser_name:"wubbiq",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Never Block",
            elo: 1335.0260316782726,
            region: "NA",
            slug: "user/1dc503f3",
            confidence: 6,
            position: 169,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Never Block",
            winner_score:3,
            loser_name:"MetalBlurS",
            loser_score:1
        },

        
        {
            winner_name:"Never Block",
            winner_score:3,
            loser_name:"DanteRebellionX",
            loser_score:2
        },

        
        {
            winner_name:"Never Block",
            winner_score:3,
            loser_name:"jak_d_ripr",
            loser_score:0
        },

        
        {
            winner_name:"Never Block",
            winner_score:3,
            loser_name:"LILBOWT",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "MetalBlurS",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Never Block",
                        loser_score:3,
                        winner_name:"MetalBlurS",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Never Block",
                            winner_score:3,
                            loser_name:"MetalBlurS",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Never Block",
                        loser_score:3,
                        winner_name:"MetalBlurS",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "DanteRebellionX",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Never Block",
                            winner_score:3,
                            loser_name:"DanteRebellionX",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "jak_d_ripr",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Never Block",
                            winner_score:3,
                            loser_name:"jak_d_ripr",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Pillowtalk",
            elo: 1333.8916545210009,
            region: "NA",
            slug: "user/db8a585a",
            confidence: 22,
            position: 170,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:1
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:2
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:0
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Goji",
            loser_score:2
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Mcintosh2002",
            loser_score:2
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Yat0ro",
            loser_score:2
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:1
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Hokage",
            loser_score:0
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Elitebabar25",
            loser_score:0
        },

        
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Cheerustre",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Intimidaving",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Pillowtalk",
                        loser_score:3,
                        winner_name:"Intimidaving",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Pillowtalk",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Pillowtalk",
                            winner_score:3,
                            loser_name:"Intimidaving",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "crazyhead",
            elo: 1333.2894245223938,
            region: "OCE",
            slug: "user/c25d4724",
            confidence: 5,
            position: 171,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"crazyhead",
            winner_score:3,
            loser_name:"Ranga",
            loser_score:2
        },

        
        {
            winner_name:"crazyhead",
            winner_score:3,
            loser_name:"beanie",
            loser_score:1
        },

        
        {
            winner_name:"crazyhead",
            winner_score:3,
            loser_name:"beanie",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "beanie",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"crazyhead",
                            winner_score:3,
                            loser_name:"beanie",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"crazyhead",
                            winner_score:3,
                            loser_name:"beanie",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Ranga",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"crazyhead",
                            winner_score:3,
                            loser_name:"Ranga",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Shyoshiguy",
            elo: 1332.4733857645138,
            region: "EU",
            slug: "user/53532547",
            confidence: 32,
            position: 172,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:0
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:2
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:2
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"BXR",
            loser_score:0
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"BXR",
            loser_score:2
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"BXR",
            loser_score:0
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:1
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"NightWolf3348",
            loser_score:0
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"Swag and Watch",
            loser_score:1
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"Primecore28",
            loser_score:0
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"melody?",
            loser_score:0
        },

        
        {
            winner_name:"Shyoshiguy",
            winner_score:3,
            loser_name:"Dandy Mancannon",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Lavender",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Shyoshiguy",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Shyoshiguy",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Shyoshiguy",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "LilSoonerFanInMO",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Shyoshiguy",
                            winner_score:3,
                            loser_name:"LilSoonerFanInMO",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Shyoshiguy",
                        loser_score:3,
                        winner_name:"LilSoonerFanInMO",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Shyoshiguy",
                            winner_score:3,
                            loser_name:"LilSoonerFanInMO",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "BXR",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Shyoshiguy",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Shyoshiguy",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Shyoshiguy",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Goji",
            elo: 1332.2567946030983,
            region: "NA",
            slug: "user/cfe9de71",
            confidence: 16,
            position: 173,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Goji",
            winner_score:3,
            loser_name:"Tokai Tatum",
            loser_score:0
        },

        
        {
            winner_name:"Goji",
            winner_score:3,
            loser_name:"Tokai Tatum",
            loser_score:1
        },

        
        {
            winner_name:"Goji",
            winner_score:3,
            loser_name:"Mop",
            loser_score:2
        },

        
        {
            winner_name:"Goji",
            winner_score:3,
            loser_name:"Mcintosh2002",
            loser_score:1
        },

        
        {
            winner_name:"Goji",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
        },

        
        {
            winner_name:"Goji",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:2
        },

        
        {
            winner_name:"Goji",
            winner_score:3,
            loser_name:"Blue Thunder",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Mop",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Goji",
                            winner_score:3,
                            loser_name:"Mop",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Goji",
                            winner_score:3,
                            loser_name:"Mop",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Hinotoriz",
            elo: 1331.9440334414614,
            region: "ASIA",
            slug: "user/bde43c0a",
            confidence: 4,
            position: 174,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Hinotoriz",
            winner_score:3,
            loser_name:"BALLxZA",
            loser_score:1
        },

        
        {
            winner_name:"Hinotoriz",
            winner_score:3,
            loser_name:"Manow",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BALLxZA",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Hinotoriz",
                            winner_score:3,
                            loser_name:"BALLxZA",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Ranga",
            elo: 1331.9421780469227,
            region: "OCE",
            slug: "user/9c40bb79",
            confidence: 11,
            position: 175,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Ranga",
            winner_score:3,
            loser_name:"Eccentric_Thistle",
            loser_score:0
        },

        
        {
            winner_name:"Ranga",
            winner_score:3,
            loser_name:"Aether",
            loser_score:0
        },

        
        {
            winner_name:"Ranga",
            winner_score:3,
            loser_name:"Inousann",
            loser_score:2
        },

        
        {
            winner_name:"Ranga",
            winner_score:3,
            loser_name:"Ak!ra",
            loser_score:0
        },

        
        {
            winner_name:"Ranga",
            winner_score:3,
            loser_name:"Fishbones",
            loser_score:1
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Kanzuki",
            elo: 1328.3319306709584,
            region: "NA",
            slug: "user/7d1a7cdc",
            confidence: 2,
            position: 176,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Kanzuki",
            winner_score:3,
            loser_name:"YUKARIMETA",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "YUKARIMETA",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Kanzuki",
                            winner_score:3,
                            loser_name:"YUKARIMETA",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "SegGel2009",
            elo: 1323.8434015857556,
            region: "UNK",
            slug: "user/32b3d907",
            confidence: 2,
            position: 177,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"SegGel2009",
            winner_score:3,
            loser_name:"CrimeSlayer",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "CrimeSlayer",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SegGel2009",
                            winner_score:3,
                            loser_name:"CrimeSlayer",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mith",
            elo: 1323.4932708904892,
            region: "SA",
            slug: "user/6809389f",
            confidence: 8,
            position: 178,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mith",
            winner_score:3,
            loser_name:"Pokedude",
            loser_score:2
        },

        
        {
            winner_name:"Mith",
            winner_score:3,
            loser_name:"Vermillion",
            loser_score:1
        },

        
        {
            winner_name:"Mith",
            winner_score:3,
            loser_name:"Sena",
            loser_score:0
        },

        
        {
            winner_name:"Mith",
            winner_score:3,
            loser_name:"DCGrz",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Pokedude",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Mith",
                        loser_score:3,
                        winner_name:"Pokedude",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Mith",
                            winner_score:3,
                            loser_name:"Pokedude",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Vermillion",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mith",
                            winner_score:3,
                            loser_name:"Vermillion",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Cram",
            elo: 1321.263112092565,
            region: "EU",
            slug: "user/984ce173",
            confidence: 9,
            position: 179,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Cram",
            winner_score:3,
            loser_name:"Noctowlite 13",
            loser_score:1
        },

        
        {
            winner_name:"Cram",
            winner_score:3,
            loser_name:"Artoria Nobunaga",
            loser_score:1
        },

        
        {
            winner_name:"Cram",
            winner_score:3,
            loser_name:"Setsunae",
            loser_score:2
        },

        
        {
            winner_name:"Cram",
            winner_score:3,
            loser_name:"Reb!!",
            loser_score:0
        },

        
        {
            winner_name:"Cram",
            winner_score:3,
            loser_name:"Joseca500",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Noctowlite 13",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Cram",
                            winner_score:3,
                            loser_name:"Noctowlite 13",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "DotFM",
            elo: 1321.2101007581584,
            region: "NA",
            slug: "user/82f8de6c",
            confidence: 2,
            position: 180,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"DotFM",
            winner_score:3,
            loser_name:"StelleIsLost",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "StelleIsLost",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DotFM",
                            winner_score:3,
                            loser_name:"StelleIsLost",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "gamer",
            elo: 1321.2101007581584,
            region: "NA",
            slug: "user/b65de923",
            confidence: 2,
            position: 181,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"gamer",
            winner_score:3,
            loser_name:"falling_robin",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "falling_robin",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"gamer",
                            winner_score:3,
                            loser_name:"falling_robin",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "MobiusRaven",
            elo: 1321.1323898993476,
            region: "NA",
            slug: "user/c1ba8619",
            confidence: 13,
            position: 182,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"MobiusRaven",
            winner_score:3,
            loser_name:"Woe90",
            loser_score:2
        },

        
        {
            winner_name:"MobiusRaven",
            winner_score:3,
            loser_name:"Woe90",
            loser_score:1
        },

        
        {
            winner_name:"MobiusRaven",
            winner_score:3,
            loser_name:"HBKMan",
            loser_score:1
        },

        
        {
            winner_name:"MobiusRaven",
            winner_score:3,
            loser_name:"HBKMan",
            loser_score:0
        },

        
        {
            winner_name:"MobiusRaven",
            winner_score:3,
            loser_name:"Xeagas",
            loser_score:1
        },

        
        {
            winner_name:"MobiusRaven",
            winner_score:3,
            loser_name:"DGF",
            loser_score:2
        },

        
        {
            winner_name:"MobiusRaven",
            winner_score:3,
            loser_name:"Scrappy Sensei",
            loser_score:0
        },

        
        {
            winner_name:"MobiusRaven",
            winner_score:3,
            loser_name:"CocoJudgesYou",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Woe90",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"MobiusRaven",
                        loser_score:3,
                        winner_name:"Woe90",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"MobiusRaven",
                            winner_score:3,
                            loser_name:"Woe90",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"MobiusRaven",
                        loser_score:3,
                        winner_name:"Woe90",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "HBKMan",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"MobiusRaven",
                            winner_score:3,
                            loser_name:"HBKMan",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"MobiusRaven",
                        loser_score:3,
                        winner_name:"HBKMan",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"MobiusRaven",
                            winner_score:3,
                            loser_name:"HBKMan",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Keluna",
            elo: 1320.254035670747,
            region: "UNK",
            slug: "user/6315d9bb",
            confidence: 2,
            position: 183,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Keluna",
            winner_score:3,
            loser_name:"Astuarte",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Astuarte",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Keluna",
                            winner_score:3,
                            loser_name:"Astuarte",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Rennikz",
            elo: 1319.9015111306776,
            region: "NA",
            slug: "user/1ef47506",
            confidence: 8,
            position: 184,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Rennikz",
            winner_score:3,
            loser_name:"Not Shadow Joulton",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Not Shadow Joulton",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Rennikz",
                            winner_score:3,
                            loser_name:"Not Shadow Joulton",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Dave (UNPOSSIBLE)",
            elo: 1318.6643914785072,
            region: "NA",
            slug: "user/658d1883",
            confidence: 12,
            position: 185,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Dave (UNPOSSIBLE)",
            winner_score:3,
            loser_name:"Dr.Ragnarok",
            loser_score:0
        },

        
        {
            winner_name:"Dave (UNPOSSIBLE)",
            winner_score:3,
            loser_name:"AshuraRem",
            loser_score:1
        },

        
        {
            winner_name:"Dave (UNPOSSIBLE)",
            winner_score:3,
            loser_name:"Arvald",
            loser_score:0
        },

        
        {
            winner_name:"Dave (UNPOSSIBLE)",
            winner_score:3,
            loser_name:"GoetiaGC",
            loser_score:0
        },

        
        {
            winner_name:"Dave (UNPOSSIBLE)",
            winner_score:3,
            loser_name:"Haji",
            loser_score:0
        },

        
        {
            winner_name:"Dave (UNPOSSIBLE)",
            winner_score:3,
            loser_name:"Haji",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Dr.Ragnarok",
            rival_wins: 1,
            rival_losses:3,
            recent_sets: [
                
                        {
                            winner_name:"Dave (UNPOSSIBLE)",
                            winner_score:3,
                            loser_name:"Dr.Ragnarok",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Dave (UNPOSSIBLE)",
                        loser_score:3,
                        winner_name:"Dr.Ragnarok",
                        winner_score:0
                    },
            
                    
                    {
                        loser_name:"Dave (UNPOSSIBLE)",
                        loser_score:3,
                        winner_name:"Dr.Ragnarok",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Haji",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Dave (UNPOSSIBLE)",
                            winner_score:3,
                            loser_name:"Haji",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Dave (UNPOSSIBLE)",
                            winner_score:3,
                            loser_name:"Haji",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Imano Ob",
            elo: 1316.1216050225764,
            region: "SA",
            slug: "user/95d8795d",
            confidence: 7,
            position: 186,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Imano Ob",
            winner_score:3,
            loser_name:"Red",
            loser_score:0
        },

        
        {
            winner_name:"Imano Ob",
            winner_score:3,
            loser_name:"Sena",
            loser_score:0
        },

        
        {
            winner_name:"Imano Ob",
            winner_score:3,
            loser_name:"Schwi",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Schwi",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Imano Ob",
                            winner_score:3,
                            loser_name:"Schwi",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Glimbo the Gnome",
            elo: 1310.5404756800021,
            region: "NA",
            slug: "user/35ad67c1",
            confidence: 4,
            position: 187,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Glimbo the Gnome",
            winner_score:3,
            loser_name:"Colossus",
            loser_score:1
        },

        
        {
            winner_name:"Glimbo the Gnome",
            winner_score:3,
            loser_name:"Carrie",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Carrie",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Glimbo the Gnome",
                            winner_score:3,
                            loser_name:"Carrie",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Donny Tsunami",
            elo: 1308.910574624288,
            region: "NA",
            slug: "user/235aef54",
            confidence: 4,
            position: 188,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Donny Tsunami",
            winner_score:3,
            loser_name:"wingupingu",
            loser_score:1
        },

        
        {
            winner_name:"Donny Tsunami",
            winner_score:3,
            loser_name:"I Be Smart",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "wingupingu",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Donny Tsunami",
                            winner_score:3,
                            loser_name:"wingupingu",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Exil",
            elo: 1308.7121181427617,
            region: "NA",
            slug: "user/d70185c5",
            confidence: 15,
            position: 189,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Exil",
            winner_score:3,
            loser_name:"Dr.Ragnarok",
            loser_score:2
        },

        
        {
            winner_name:"Exil",
            winner_score:3,
            loser_name:"Dave (UNPOSSIBLE)",
            loser_score:2
        },

        
        {
            winner_name:"Exil",
            winner_score:3,
            loser_name:"Arvald",
            loser_score:0
        },

        
        {
            winner_name:"Exil",
            winner_score:3,
            loser_name:"GoetiaGC",
            loser_score:0
        },

        
        {
            winner_name:"Exil",
            winner_score:3,
            loser_name:"GoetiaGC",
            loser_score:0
        },

        
        {
            winner_name:"Exil",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:0
        },

        
        {
            winner_name:"Exil",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:0
        },

        
        {
            winner_name:"Exil",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:0
        },

        
        {
            winner_name:"Exil",
            winner_score:3,
            loser_name:"Garumb",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Dr.Ragnarok",
            rival_wins: 1,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"Exil",
                        loser_score:3,
                        winner_name:"Dr.Ragnarok",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"Exil",
                        loser_score:3,
                        winner_name:"Dr.Ragnarok",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Exil",
                            winner_score:3,
                            loser_name:"Dr.Ragnarok",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Forgoten",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Exil",
                            winner_score:3,
                            loser_name:"Forgoten",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Exil",
                            winner_score:3,
                            loser_name:"Forgoten",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Exil",
                            winner_score:3,
                            loser_name:"Forgoten",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Ceasar little",
            elo: 1308.53644689329,
            region: "NA",
            slug: "user/1d706489",
            confidence: 4,
            position: 190,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Ceasar little",
            winner_score:3,
            loser_name:"Mimighoul Master",
            loser_score:2
        },

        
        {
            winner_name:"Ceasar little",
            winner_score:3,
            loser_name:"FGCConex",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Mimighoul Master",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Ceasar little",
                        loser_score:3,
                        winner_name:"Mimighoul Master",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Ceasar little",
                            winner_score:3,
                            loser_name:"Mimighoul Master",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "FGCConex",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Ceasar little",
                            winner_score:3,
                            loser_name:"FGCConex",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "SSBSonic",
            elo: 1304.3119804728758,
            region: "UNK",
            slug: "user/fc6763c6",
            confidence: 8,
            position: 191,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"SSBSonic",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"SSBSonic",
            winner_score:3,
            loser_name:"TheGrizzwald",
            loser_score:0
        },

        
        {
            winner_name:"SSBSonic",
            winner_score:3,
            loser_name:"Sora",
            loser_score:0
        },

        
        {
            winner_name:"SSBSonic",
            winner_score:3,
            loser_name:"Okano35",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Oguri Cap",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SSBSonic",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mallaclaqclaq123",
            elo: 1296.8821002762538,
            region: "NA",
            slug: "user/ee332be2",
            confidence: 8,
            position: 192,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mallaclaqclaq123",
            winner_score:3,
            loser_name:"Zamurai Cris",
            loser_score:0
        },

        
        {
            winner_name:"Mallaclaqclaq123",
            winner_score:3,
            loser_name:"MKQueazy",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "MKQueazy",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mallaclaqclaq123",
                            winner_score:3,
                            loser_name:"MKQueazy",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Mallaclaqclaq123",
                            winner_score:3,
                            loser_name:"MKQueazy",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "sil",
            elo: 1295.7958931239273,
            region: "EU",
            slug: "user/ed4ce029",
            confidence: 5,
            position: 193,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"sil",
            winner_score:3,
            loser_name:"Max",
            loser_score:2
        },

        
        {
            winner_name:"sil",
            winner_score:3,
            loser_name:"NSE",
            loser_score:0
        },

        
        {
            winner_name:"sil",
            winner_score:3,
            loser_name:"Asanaka",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "NSE",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"sil",
                            winner_score:3,
                            loser_name:"NSE",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Asanaka",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"sil",
                            winner_score:3,
                            loser_name:"Asanaka",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "lisk",
            elo: 1290.7511438774877,
            region: "UNK",
            slug: "NONE",
            confidence: 4,
            position: 194,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"lisk",
            winner_score:3,
            loser_name:"Norrin Radd",
            loser_score:0
        },

        
        {
            winner_name:"lisk",
            winner_score:3,
            loser_name:"Fluospace",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Norrin Radd",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"lisk",
                            winner_score:3,
                            loser_name:"Norrin Radd",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Fluospace",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"lisk",
                            winner_score:3,
                            loser_name:"Fluospace",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "SkullRonin13",
            elo: 1290.1830732495043,
            region: "NA",
            slug: "user/dcfad6df",
            confidence: 4,
            position: 195,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"SkullRonin13",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"SkullRonin13",
            winner_score:3,
            loser_name:"TheGrizzwald",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "TheGrizzwald",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SkullRonin13",
                            winner_score:3,
                            loser_name:"TheGrizzwald",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Darklight",
            elo: 1289.8464233158677,
            region: "NA",
            slug: "user/416f7ec8",
            confidence: 3,
            position: 196,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Darklight",
            winner_score:3,
            loser_name:"Real Human",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Real Human",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Darklight",
                            winner_score:3,
                            loser_name:"Real Human",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "JGotchaBEEzy",
            elo: 1289.2599208518564,
            region: "NA",
            slug: "user/f144924e",
            confidence: 7,
            position: 197,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"JGotchaBEEzy",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
        {
            winner_name:"JGotchaBEEzy",
            winner_score:3,
            loser_name:"Jazzcuzzi",
            loser_score:0
        },

        
        {
            winner_name:"JGotchaBEEzy",
            winner_score:3,
            loser_name:"Ruby Slinger",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Oguri Cap",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"JGotchaBEEzy",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Ruby Slinger",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"JGotchaBEEzy",
                            winner_score:3,
                            loser_name:"Ruby Slinger",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Sturmfresser",
            elo: 1284.4671132767412,
            region: "UNK",
            slug: "user/1c7ede55",
            confidence: 10,
            position: 198,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Sturmfresser",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:2
        },

        
        {
            winner_name:"Sturmfresser",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:0
        },

        
        {
            winner_name:"Sturmfresser",
            winner_score:3,
            loser_name:"TvError",
            loser_score:1
        },

        
        {
            winner_name:"Sturmfresser",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Hien",
            elo: 1283.4576677079222,
            region: "UNK",
            slug: "user/9d6befd0",
            confidence: 10,
            position: 199,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Hien",
            winner_score:3,
            loser_name:"RNGG",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "RNGG",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Hien",
                            winner_score:3,
                            loser_name:"RNGG",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Hien",
                            winner_score:3,
                            loser_name:"RNGG",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Hien",
                            winner_score:3,
                            loser_name:"RNGG",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Lord Hoseph Dong",
            elo: 1282.4465746178953,
            region: "NA",
            slug: "user/5bd0d420",
            confidence: 4,
            position: 200,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Lord Hoseph Dong",
            winner_score:3,
            loser_name:"BirdGang",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BirdGang",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Lord Hoseph Dong",
                            winner_score:3,
                            loser_name:"BirdGang",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Lord Hoseph Dong",
                            winner_score:3,
                            loser_name:"BirdGang",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "wubbiq",
            elo: 1278.7974295457163,
            region: "NA",
            slug: "user/4aece8e1",
            confidence: 8,
            position: 201,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"wubbiq",
            winner_score:3,
            loser_name:"Stars",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Stars",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"wubbiq",
                            winner_score:3,
                            loser_name:"Stars",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"wubbiq",
                            winner_score:3,
                            loser_name:"Stars",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"wubbiq",
                            winner_score:3,
                            loser_name:"Stars",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Nago",
            elo: 1278.4697001564684,
            region: "NA",
            slug: "user/c2f3dbb5",
            confidence: 12,
            position: 202,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Nago",
            winner_score:3,
            loser_name:"Sompursone",
            loser_score:2
        },

        
        {
            winner_name:"Nago",
            winner_score:3,
            loser_name:"Xeagas",
            loser_score:2
        },

        
        {
            winner_name:"Nago",
            winner_score:3,
            loser_name:"Scrappy Sensei",
            loser_score:0
        },

        
        {
            winner_name:"Nago",
            winner_score:3,
            loser_name:"ghostlymilk13",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Xeagas",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Nago",
                            winner_score:3,
                            loser_name:"Xeagas",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Nago",
                            winner_score:3,
                            loser_name:"Xeagas",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "ghostlymilk13",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Nago",
                            winner_score:3,
                            loser_name:"ghostlymilk13",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Nago",
                            winner_score:3,
                            loser_name:"ghostlymilk13",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Woe90",
            elo: 1276.9792123450236,
            region: "NA",
            slug: "user/ec318e4c",
            confidence: 16,
            position: 203,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Woe90",
            winner_score:3,
            loser_name:"MobiusRaven",
            loser_score:2
        },

        
        {
            winner_name:"Woe90",
            winner_score:3,
            loser_name:"MobiusRaven",
            loser_score:1
        },

        
        {
            winner_name:"Woe90",
            winner_score:3,
            loser_name:"Xeagas",
            loser_score:2
        },

        
        {
            winner_name:"Woe90",
            winner_score:3,
            loser_name:"Xeagas",
            loser_score:2
        },

        
        {
            winner_name:"Woe90",
            winner_score:3,
            loser_name:"DGF",
            loser_score:0
        },

        
        {
            winner_name:"Woe90",
            winner_score:3,
            loser_name:"Zachary Lacy",
            loser_score:0
        },

        
        {
            winner_name:"Woe90",
            winner_score:3,
            loser_name:"Basil_Underscore",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "MobiusRaven",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Woe90",
                            winner_score:3,
                            loser_name:"MobiusRaven",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Woe90",
                        loser_score:3,
                        winner_name:"MobiusRaven",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Woe90",
                            winner_score:3,
                            loser_name:"MobiusRaven",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "DGF",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Woe90",
                            winner_score:3,
                            loser_name:"DGF",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Woe90",
                            winner_score:3,
                            loser_name:"DGF",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "HBKMan",
            elo: 1276.4758614484472,
            region: "NA",
            slug: "user/61c3b4db",
            confidence: 7,
            position: 204,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"HBKMan",
            winner_score:3,
            loser_name:"MobiusRaven",
            loser_score:1
        },

        
        {
            winner_name:"HBKMan",
            winner_score:3,
            loser_name:"Woe90",
            loser_score:2
        },

        
        {
            winner_name:"HBKMan",
            winner_score:3,
            loser_name:"Xeagas",
            loser_score:1
        },

        
        {
            winner_name:"HBKMan",
            winner_score:3,
            loser_name:"Zachary Lacy",
            loser_score:0
        },

        
        {
            winner_name:"HBKMan",
            winner_score:3,
            loser_name:"DreemWyvern",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "MobiusRaven",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"HBKMan",
                        loser_score:3,
                        winner_name:"MobiusRaven",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"HBKMan",
                            winner_score:3,
                            loser_name:"MobiusRaven",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"HBKMan",
                        loser_score:3,
                        winner_name:"MobiusRaven",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Woe90",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"HBKMan",
                            winner_score:3,
                            loser_name:"Woe90",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Xeagas",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"HBKMan",
                            winner_score:3,
                            loser_name:"Xeagas",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "raiden",
            elo: 1273.2330228906,
            region: "NA",
            slug: "user/3a67c8af",
            confidence: 4,
            position: 205,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"raiden",
            winner_score:3,
            loser_name:"IRONGOD",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "IRONGOD",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"raiden",
                            winner_score:3,
                            loser_name:"IRONGOD",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"raiden",
                            winner_score:3,
                            loser_name:"IRONGOD",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "BXR",
            elo: 1272.4723708005185,
            region: "NA",
            slug: "user/5106f940",
            confidence: 90,
            position: 206,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"結月有希 ~ Yuzuki Yuki",
            loser_score:2
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"Mimighoul Master",
            loser_score:2
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"BingDiaoQWQ",
            loser_score:0
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:2
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:0
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"Shadowpelt",
            loser_score:0
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"Shadowpelt",
            loser_score:1
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"Sturmfresser",
            loser_score:2
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"FunkyBoy",
            loser_score:2
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"FunkyBoy",
            loser_score:2
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"Mcintosh2002",
            loser_score:0
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"ruby_chan",
            loser_score:2
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:1
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "結月有希 ~ Yuzuki Yuki",
            rival_wins: 1,
            rival_losses:5,
            recent_sets: [
                
                    {
                        loser_name:"BXR",
                        loser_score:3,
                        winner_name:"結月有希 ~ Yuzuki Yuki",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"BXR",
                        loser_score:3,
                        winner_name:"結月有希 ~ Yuzuki Yuki",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"BXR",
                        loser_score:3,
                        winner_name:"結月有希 ~ Yuzuki Yuki",
                        winner_score:2
                    },
            
                    
            ]
            },

            
            {
            rival_name: "SpicyChedderJack",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BXR",
                            winner_score:3,
                            loser_name:"SpicyChedderJack",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"BXR",
                            winner_score:3,
                            loser_name:"SpicyChedderJack",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"BXR",
                            winner_score:3,
                            loser_name:"SpicyChedderJack",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "BeanutButterBud",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BXR",
                            winner_score:3,
                            loser_name:"BeanutButterBud",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"BXR",
                            winner_score:3,
                            loser_name:"BeanutButterBud",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"BXR",
                            winner_score:3,
                            loser_name:"BeanutButterBud",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "beanie",
            elo: 1271.288069134573,
            region: "OCE",
            slug: "user/9cb020c2",
            confidence: 4,
            position: 207,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"beanie",
            winner_score:3,
            loser_name:"Eccentric_Thistle",
            loser_score:0
        },

        
        {
            winner_name:"beanie",
            winner_score:3,
            loser_name:"miofa",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "miofa",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"beanie",
                            winner_score:3,
                            loser_name:"miofa",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Eccentric_Thistle",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"beanie",
                            winner_score:3,
                            loser_name:"Eccentric_Thistle",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Doogong",
            elo: 1263.5006777788758,
            region: "EU",
            slug: "user/4e28951b",
            confidence: 4,
            position: 208,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Doogong",
            winner_score:3,
            loser_name:"Vilkijs",
            loser_score:2
        },

        
        {
            winner_name:"Doogong",
            winner_score:3,
            loser_name:"Chidz",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Vilkijs",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Doogong",
                            winner_score:3,
                            loser_name:"Vilkijs",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Chidz",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Doogong",
                            winner_score:3,
                            loser_name:"Chidz",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Wear-Tear-Rust",
            elo: 1263.495360689916,
            region: "NA",
            slug: "user/31112584",
            confidence: 3,
            position: 209,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Wear-Tear-Rust",
            winner_score:3,
            loser_name:"Sovereign",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Sovereign",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Wear-Tear-Rust",
                            winner_score:3,
                            loser_name:"Sovereign",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "A-Rew",
            elo: 1262.5124757433143,
            region: "ASIA",
            slug: "user/9680cb1d",
            confidence: 2,
            position: 210,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"A-Rew",
            winner_score:3,
            loser_name:"Raranrorn",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Raranrorn",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"A-Rew",
                            winner_score:3,
                            loser_name:"Raranrorn",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Burn0ut",
            elo: 1262.4290738575996,
            region: "NA",
            slug: "user/bdd5a33d",
            confidence: 5,
            position: 211,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Burn0ut",
            winner_score:3,
            loser_name:"JOE MAMA",
            loser_score:2
        },

        
        {
            winner_name:"Burn0ut",
            winner_score:3,
            loser_name:"Garfield",
            loser_score:1
        },

        
        {
            winner_name:"Burn0ut",
            winner_score:3,
            loser_name:"FMBrosuke",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "JOE MAMA",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Burn0ut",
                            winner_score:3,
                            loser_name:"JOE MAMA",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Burn0ut",
                        loser_score:3,
                        winner_name:"JOE MAMA",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Garfield",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Burn0ut",
                            winner_score:3,
                            loser_name:"Garfield",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "hyperHICO",
            elo: 1259.2721599046365,
            region: "NA",
            slug: "user/7d316eac",
            confidence: 4,
            position: 212,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"hyperHICO",
            winner_score:3,
            loser_name:"Johnny Tatsumi",
            loser_score:0
        },

        
        {
            winner_name:"hyperHICO",
            winner_score:3,
            loser_name:"Babel",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Johnny Tatsumi",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"hyperHICO",
                            winner_score:3,
                            loser_name:"Johnny Tatsumi",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Babel",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"hyperHICO",
                            winner_score:3,
                            loser_name:"Babel",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "LuckyNaegi",
            elo: 1258.6691526890847,
            region: "NA",
            slug: "user/84d50933",
            confidence: 31,
            position: 213,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:2
        },

        
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"JGotchaBEEzy",
            loser_score:0
        },

        
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"Trickster?",
            loser_score:0
        },

        
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"Trickster?",
            loser_score:0
        },

        
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"Nevaltion",
            loser_score:1
        },

        
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"Yanase Koi",
            loser_score:0
        },

        
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"Arcaknight7s",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Trickster?",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"LuckyNaegi",
                            winner_score:3,
                            loser_name:"Trickster?",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"LuckyNaegi",
                        loser_score:3,
                        winner_name:"Trickster?",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"LuckyNaegi",
                            winner_score:3,
                            loser_name:"Trickster?",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Noctowlite 13",
            elo: 1255.0762126610678,
            region: "EU",
            slug: "user/a672a454",
            confidence: 4,
            position: 214,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Noctowlite 13",
            winner_score:3,
            loser_name:"Donpi",
            loser_score:1
        },

        
        {
            winner_name:"Noctowlite 13",
            winner_score:3,
            loser_name:"SleepyheadDX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "SleepyheadDX",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Noctowlite 13",
                            winner_score:3,
                            loser_name:"SleepyheadDX",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Donpi",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Noctowlite 13",
                            winner_score:3,
                            loser_name:"Donpi",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Trickster?",
            elo: 1254.1364688040346,
            region: "NA",
            slug: "user/84628656",
            confidence: 13,
            position: 215,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Trickster?",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:2
        },

        
        {
            winner_name:"Trickster?",
            winner_score:3,
            loser_name:"HCShark10",
            loser_score:2
        },

        
        {
            winner_name:"Trickster?",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:0
        },

        
        {
            winner_name:"Trickster?",
            winner_score:3,
            loser_name:"Yanase Koi",
            loser_score:0
        },

        
        {
            winner_name:"Trickster?",
            winner_score:3,
            loser_name:"Rodimus Prime",
            loser_score:1
        },

        
        {
            winner_name:"Trickster?",
            winner_score:3,
            loser_name:"Rodimus Prime",
            loser_score:0
        },

        
        {
            winner_name:"Trickster?",
            winner_score:3,
            loser_name:"Chriswill1984",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LuckyNaegi",
            rival_wins: 1,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Trickster?",
                        loser_score:3,
                        winner_name:"LuckyNaegi",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Trickster?",
                            winner_score:3,
                            loser_name:"LuckyNaegi",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Trickster?",
                        loser_score:3,
                        winner_name:"LuckyNaegi",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Oguri Cap",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Trickster?",
                        loser_score:3,
                        winner_name:"Oguri Cap",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Trickster?",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Rodimus Prime",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Trickster?",
                            winner_score:3,
                            loser_name:"Rodimus Prime",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Trickster?",
                            winner_score:3,
                            loser_name:"Rodimus Prime",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Canned",
            elo: 1253.3607588789093,
            region: "NA",
            slug: "user/bab3159b",
            confidence: 4,
            position: 216,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Canned",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:0
        },

        
        {
            winner_name:"Canned",
            winner_score:3,
            loser_name:"Redlykerozes",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Patneko",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Canned",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "FunkyBoy",
            elo: 1251.9565955854298,
            region: "NA",
            slug: "user/d844d130",
            confidence: 5,
            position: 217,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"FunkyBoy",
            winner_score:3,
            loser_name:"SpicyChedderJack",
            loser_score:0
        },

        
        {
            winner_name:"FunkyBoy",
            winner_score:3,
            loser_name:"BeanutButterBud",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "SpicyChedderJack",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"FunkyBoy",
                        loser_score:3,
                        winner_name:"SpicyChedderJack",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"FunkyBoy",
                            winner_score:3,
                            loser_name:"SpicyChedderJack",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "BeanutButterBud",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"FunkyBoy",
                            winner_score:3,
                            loser_name:"BeanutButterBud",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "I Be Smart",
            elo: 1249.457959462778,
            region: "NA",
            slug: "user/efa42be5",
            confidence: 5,
            position: 218,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"I Be Smart",
            winner_score:3,
            loser_name:"10PCSpicyNuggets",
            loser_score:0
        },

        
        {
            winner_name:"I Be Smart",
            winner_score:3,
            loser_name:"kaen",
            loser_score:0
        },

        
        {
            winner_name:"I Be Smart",
            winner_score:3,
            loser_name:"Barnstormer",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "10PCSpicyNuggets",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"I Be Smart",
                            winner_score:3,
                            loser_name:"10PCSpicyNuggets",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "kaen",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"I Be Smart",
                            winner_score:3,
                            loser_name:"kaen",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Duder963",
            elo: 1241.303494779468,
            region: "NA",
            slug: "user/9948288f",
            confidence: 4,
            position: 219,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Duder963",
            winner_score:3,
            loser_name:"Asmodean95",
            loser_score:2
        },

        
        {
            winner_name:"Duder963",
            winner_score:3,
            loser_name:"I Lose",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "I Lose",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Duder963",
                            winner_score:3,
                            loser_name:"I Lose",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Asmodean95",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Duder963",
                            winner_score:3,
                            loser_name:"Asmodean95",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Joridy",
            elo: 1237.6312368174606,
            region: "ASIA",
            slug: "user/7f625bcc",
            confidence: 2,
            position: 220,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Joridy",
            winner_score:3,
            loser_name:"Zesaming",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Zesaming",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Joridy",
                            winner_score:3,
                            loser_name:"Zesaming",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Will Power",
            elo: 1236.9181987428049,
            region: "NA",
            slug: "user/7107641c",
            confidence: 4,
            position: 221,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Will Power",
            winner_score:3,
            loser_name:"MobiusRaven",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "MobiusRaven",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Will Power",
                            winner_score:3,
                            loser_name:"MobiusRaven",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Will Power",
                            winner_score:3,
                            loser_name:"MobiusRaven",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Cataclysm",
            elo: 1233.182971360184,
            region: "NA",
            slug: "user/767d0a59",
            confidence: 4,
            position: 222,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Cataclysm",
            winner_score:3,
            loser_name:"Armakilo",
            loser_score:0
        },

        
        {
            winner_name:"Cataclysm",
            winner_score:3,
            loser_name:"LeDom",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LeDom",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Cataclysm",
                            winner_score:3,
                            loser_name:"LeDom",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "BrazenWhiteRose",
            elo: 1231.720351966729,
            region: "UNK",
            slug: "user/765c53cc",
            confidence: 19,
            position: 223,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"BrazenWhiteRose",
            winner_score:3,
            loser_name:"BingDiaoQWQ",
            loser_score:1
        },

        
        {
            winner_name:"BrazenWhiteRose",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:2
        },

        
        {
            winner_name:"BrazenWhiteRose",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:1
        },

        
        {
            winner_name:"BrazenWhiteRose",
            winner_score:3,
            loser_name:"BXR",
            loser_score:0
        },

        
        {
            winner_name:"BrazenWhiteRose",
            winner_score:3,
            loser_name:"BXR",
            loser_score:1
        },

        
        {
            winner_name:"BrazenWhiteRose",
            winner_score:3,
            loser_name:"Jay314",
            loser_score:0
        },

        
        {
            winner_name:"BrazenWhiteRose",
            winner_score:3,
            loser_name:"jak_d_ripr",
            loser_score:2
        },

        
        {
            winner_name:"BrazenWhiteRose",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:2
        },

        
        {
            winner_name:"BrazenWhiteRose",
            winner_score:3,
            loser_name:"Dandy Mancannon",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BXR",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BrazenWhiteRose",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"BrazenWhiteRose",
                            winner_score:3,
                            loser_name:"BXR",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "DisgustinglyWashedEggs",
            elo: 1231.4342774008192,
            region: "UNK",
            slug: "user/083e6044",
            confidence: 3,
            position: 224,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"DisgustinglyWashedEggs",
            winner_score:3,
            loser_name:"Fluospace",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Fluospace",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DisgustinglyWashedEggs",
                            winner_score:3,
                            loser_name:"Fluospace",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Jrock",
            elo: 1229.196354054455,
            region: "NA",
            slug: "user/9f54ff46",
            confidence: 6,
            position: 225,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Jrock",
            winner_score:3,
            loser_name:"Garryth",
            loser_score:0
        },

        
        {
            winner_name:"Jrock",
            winner_score:3,
            loser_name:"The Doorman",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Garryth",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Jrock",
                            winner_score:3,
                            loser_name:"Garryth",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Psyco",
            elo: 1227.1065350179206,
            region: "ASIA",
            slug: "user/1df290d4",
            confidence: 2,
            position: 226,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Psyco",
            winner_score:3,
            loser_name:"Weebmaru",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Weebmaru",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Psyco",
                            winner_score:3,
                            loser_name:"Weebmaru",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mcintosh2002",
            elo: 1226.514318967265,
            region: "NA",
            slug: "user/446391b4",
            confidence: 16,
            position: 227,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mcintosh2002",
            winner_score:3,
            loser_name:"ruby_chan",
            loser_score:2
        },

        
        {
            winner_name:"Mcintosh2002",
            winner_score:3,
            loser_name:"Jay314",
            loser_score:0
        },

        
        {
            winner_name:"Mcintosh2002",
            winner_score:3,
            loser_name:"JrJam",
            loser_score:2
        },

        
        {
            winner_name:"Mcintosh2002",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:0
        },

        
        {
            winner_name:"Mcintosh2002",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:0
        },

        
        {
            winner_name:"Mcintosh2002",
            winner_score:3,
            loser_name:"Yexrobd",
            loser_score:0
        },

        
        {
            winner_name:"Mcintosh2002",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Yexrobd",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mcintosh2002",
                            winner_score:3,
                            loser_name:"Yexrobd",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Mcintosh2002",
                            winner_score:3,
                            loser_name:"Yexrobd",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Chicken Fish",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mcintosh2002",
                            winner_score:3,
                            loser_name:"Chicken Fish",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Mcintosh2002",
                            winner_score:3,
                            loser_name:"Chicken Fish",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "King_Rasta",
            elo: 1222.6590366736843,
            region: "EU",
            slug: "user/d43960c0",
            confidence: 6,
            position: 228,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"King_Rasta",
            winner_score:3,
            loser_name:"Yemster",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Yemster",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"King_Rasta",
                            winner_score:3,
                            loser_name:"Yemster",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"King_Rasta",
                            winner_score:3,
                            loser_name:"Yemster",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Bwead",
            elo: 1215.1928230452427,
            region: "NA",
            slug: "user/184d4fa1",
            confidence: 4,
            position: 229,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Bwead",
            winner_score:3,
            loser_name:"kaen",
            loser_score:0
        },

        
        {
            winner_name:"Bwead",
            winner_score:3,
            loser_name:"Barnstormer",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Barnstormer",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Bwead",
                            winner_score:3,
                            loser_name:"Barnstormer",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Soulkitten23",
            elo: 1215.0329374700314,
            region: "NA",
            slug: "user/fc8d6bc7",
            confidence: 3,
            position: 230,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Soulkitten23",
            winner_score:3,
            loser_name:"GamingWarthog",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "GamingWarthog",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Soulkitten23",
                            winner_score:3,
                            loser_name:"GamingWarthog",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Thejimmy246",
            elo: 1208.3968664361728,
            region: "NA",
            slug: "user/721214b2",
            confidence: 4,
            position: 231,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Thejimmy246",
            winner_score:3,
            loser_name:"Azor DC",
            loser_score:0
        },

        
        {
            winner_name:"Thejimmy246",
            winner_score:3,
            loser_name:"MH Rox",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Azor DC",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Thejimmy246",
                            winner_score:3,
                            loser_name:"Azor DC",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "MH Rox",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Thejimmy246",
                            winner_score:3,
                            loser_name:"MH Rox",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "izank11",
            elo: 1208.0486796934156,
            region: "EU",
            slug: "user/21a74f03",
            confidence: 9,
            position: 232,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"izank11",
            winner_score:3,
            loser_name:"ColdMill",
            loser_score:2
        },

        
        {
            winner_name:"izank11",
            winner_score:3,
            loser_name:"Cram",
            loser_score:1
        },

        
        {
            winner_name:"izank11",
            winner_score:3,
            loser_name:"Donpi",
            loser_score:0
        },

        
        {
            winner_name:"izank11",
            winner_score:3,
            loser_name:"Makoche",
            loser_score:0
        },

        
        {
            winner_name:"izank11",
            winner_score:3,
            loser_name:"TG",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Cram",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"izank11",
                            winner_score:3,
                            loser_name:"Cram",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "ColdMill",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"izank11",
                            winner_score:3,
                            loser_name:"ColdMill",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Cage4296",
            elo: 1207.7561268341542,
            region: "NA",
            slug: "user/49cbc4d8",
            confidence: 3,
            position: 233,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Cage4296",
            winner_score:3,
            loser_name:"Filter",
            loser_score:2
        },

        
        {
            winner_name:"Cage4296",
            winner_score:3,
            loser_name:"Famine",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Filter",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Cage4296",
                            winner_score:3,
                            loser_name:"Filter",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Cage4296",
                        loser_score:3,
                        winner_name:"Filter",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Famine",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Cage4296",
                            winner_score:3,
                            loser_name:"Famine",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Hee-Homeboy",
            elo: 1206.2350806415225,
            region: "NA",
            slug: "user/da9a49ee",
            confidence: 6,
            position: 234,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Hee-Homeboy",
            winner_score:3,
            loser_name:"DGF",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "DGF",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Hee-Homeboy",
                            winner_score:3,
                            loser_name:"DGF",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Hee-Homeboy",
                            winner_score:3,
                            loser_name:"DGF",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Nirvana",
            elo: 1205.1265859041264,
            region: "NA",
            slug: "user/122c8f1a",
            confidence: 4,
            position: 235,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Nirvana",
            winner_score:3,
            loser_name:"Kentoki",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Kentoki",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Nirvana",
                            winner_score:3,
                            loser_name:"Kentoki",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Nirvana",
                            winner_score:3,
                            loser_name:"Kentoki",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Donpi",
            elo: 1204.2983219298778,
            region: "EU",
            slug: "user/fbcc0f46",
            confidence: 7,
            position: 236,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Donpi",
            winner_score:3,
            loser_name:"Reb!!",
            loser_score:1
        },

        
        {
            winner_name:"Donpi",
            winner_score:3,
            loser_name:"Panda Yeux",
            loser_score:0
        },

        
        {
            winner_name:"Donpi",
            winner_score:3,
            loser_name:"TG",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Panda Yeux",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Donpi",
                            winner_score:3,
                            loser_name:"Panda Yeux",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "ruby_chan",
            elo: 1200.4178894242345,
            region: "NA",
            slug: "user/55350b7a",
            confidence: 12,
            position: 237,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"ruby_chan",
            winner_score:3,
            loser_name:"Yat0ro",
            loser_score:0
        },

        
        {
            winner_name:"ruby_chan",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"ruby_chan",
            winner_score:3,
            loser_name:"Xiii",
            loser_score:1
        },

        
        {
            winner_name:"ruby_chan",
            winner_score:3,
            loser_name:"Basil_Underscore",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Wool",
            elo: 1199.817821601965,
            region: "NA",
            slug: "user/15219533",
            confidence: 16,
            position: 238,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Wool",
            winner_score:3,
            loser_name:"EX Falchion",
            loser_score:0
        },

        
        {
            winner_name:"Wool",
            winner_score:3,
            loser_name:"SABER",
            loser_score:0
        },

        
        {
            winner_name:"Wool",
            winner_score:3,
            loser_name:"Greatmario64",
            loser_score:0
        },

        
        {
            winner_name:"Wool",
            winner_score:3,
            loser_name:"pdhewitt",
            loser_score:0
        },

        
        {
            winner_name:"Wool",
            winner_score:3,
            loser_name:"Play Melty",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Play Melty",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Wool",
                            winner_score:3,
                            loser_name:"Play Melty",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Wool",
                            winner_score:3,
                            loser_name:"Play Melty",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "GideonTG",
            elo: 1196.7865083698075,
            region: "EU",
            slug: "user/687b01f8",
            confidence: 6,
            position: 239,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"GideonTG",
            winner_score:3,
            loser_name:"Clob",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Clob",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"GideonTG",
                            winner_score:3,
                            loser_name:"Clob",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"GideonTG",
                            winner_score:3,
                            loser_name:"Clob",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Sanaito",
            elo: 1195.9787746238255,
            region: "NA",
            slug: "user/4f12aafb",
            confidence: 4,
            position: 240,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Sanaito",
            winner_score:3,
            loser_name:"Zagorsek",
            loser_score:1
        },

        
        {
            winner_name:"Sanaito",
            winner_score:3,
            loser_name:"Foam Root",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Zagorsek",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Sanaito",
                            winner_score:3,
                            loser_name:"Zagorsek",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Yat0ro",
            elo: 1195.3606130985206,
            region: "ASIA",
            slug: "user/7c8a7f9a",
            confidence: 21,
            position: 241,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Yat0ro",
            winner_score:3,
            loser_name:"Shermies Bravest Hamster",
            loser_score:0
        },

        
        {
            winner_name:"Yat0ro",
            winner_score:3,
            loser_name:"Jay314",
            loser_score:0
        },

        
        {
            winner_name:"Yat0ro",
            winner_score:3,
            loser_name:"Elitebabar25",
            loser_score:1
        },

        
        {
            winner_name:"Yat0ro",
            winner_score:3,
            loser_name:"FGCConex",
            loser_score:0
        },

        
        {
            winner_name:"Yat0ro",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:0
        },

        
        {
            winner_name:"Yat0ro",
            winner_score:3,
            loser_name:"Speed Weed",
            loser_score:0
        },

        
        {
            winner_name:"Yat0ro",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Shermies Bravest Hamster",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Yat0ro",
                            winner_score:3,
                            loser_name:"Shermies Bravest Hamster",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Yat0ro",
                            winner_score:3,
                            loser_name:"Shermies Bravest Hamster",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Elitebabar25",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Yat0ro",
                            winner_score:3,
                            loser_name:"Elitebabar25",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Yat0ro",
                            winner_score:3,
                            loser_name:"Elitebabar25",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Fish Liquor",
            elo: 1194.0419448297012,
            region: "NA",
            slug: "user/660ad9c1",
            confidence: 65,
            position: 242,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:1
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"BrazenWhiteRose",
            loser_score:0
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:0
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Shermies Bravest Hamster",
            loser_score:0
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Shermies Bravest Hamster",
            loser_score:0
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Gman",
            loser_score:1
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Gman",
            loser_score:1
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Rulership",
            loser_score:1
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"jak_d_ripr",
            loser_score:1
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Regulus",
            loser_score:1
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Zarlet",
            loser_score:0
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Zarlet",
            loser_score:1
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Zarlet",
            loser_score:0
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:2
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Shermies Bravest Hamster",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"Fish Liquor",
                            winner_score:3,
                            loser_name:"Shermies Bravest Hamster",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Fish Liquor",
                        loser_score:3,
                        winner_name:"Shermies Bravest Hamster",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"Fish Liquor",
                        loser_score:3,
                        winner_name:"Shermies Bravest Hamster",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Zarlet",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Fish Liquor",
                            winner_score:3,
                            loser_name:"Zarlet",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Fish Liquor",
                            winner_score:3,
                            loser_name:"Zarlet",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Fish Liquor",
                            winner_score:3,
                            loser_name:"Zarlet",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Intimidaving",
            elo: 1192.6349732226274,
            region: "NA",
            slug: "user/e896ee0b",
            confidence: 68,
            position: 243,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Tokai Tatum",
            loser_score:2
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:2
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Cythrin",
            loser_score:0
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Cythrin",
            loser_score:2
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:2
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:2
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"HCShark10",
            loser_score:2
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:1
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Pillowtalk",
            loser_score:0
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:2
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:0
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Goji",
            loser_score:2
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"BrazenWhiteRose",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Lavender",
            rival_wins: 3,
            rival_losses:3,
            recent_sets: [
                
                        {
                            winner_name:"Intimidaving",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Intimidaving",
                            winner_score:3,
                            loser_name:"Lavender",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Intimidaving",
                        loser_score:3,
                        winner_name:"Lavender",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Cythrin",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Intimidaving",
                        loser_score:3,
                        winner_name:"Cythrin",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"Intimidaving",
                        loser_score:3,
                        winner_name:"Cythrin",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Intimidaving",
                            winner_score:3,
                            loser_name:"Cythrin",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "HCShark10",
            rival_wins: 1,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"Intimidaving",
                        loser_score:3,
                        winner_name:"HCShark10",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"Intimidaving",
                        loser_score:3,
                        winner_name:"HCShark10",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Intimidaving",
                            winner_score:3,
                            loser_name:"HCShark10",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Shermies Bravest Hamster",
            elo: 1192.3213634469678,
            region: "NA",
            slug: "user/90465418",
            confidence: 14,
            position: 244,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Shermies Bravest Hamster",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:1
        },

        
        {
            winner_name:"Shermies Bravest Hamster",
            winner_score:3,
            loser_name:"Goji",
            loser_score:1
        },

        
        {
            winner_name:"Shermies Bravest Hamster",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"Shermies Bravest Hamster",
            winner_score:3,
            loser_name:"TvError",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Fish Liquor",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Shermies Bravest Hamster",
                        loser_score:3,
                        winner_name:"Fish Liquor",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Shermies Bravest Hamster",
                            winner_score:3,
                            loser_name:"Fish Liquor",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Shermies Bravest Hamster",
                            winner_score:3,
                            loser_name:"Fish Liquor",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Vermillion",
            elo: 1192.0751511263352,
            region: "SA",
            slug: "user/ab8df99a",
            confidence: 3,
            position: 245,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Vermillion",
            winner_score:3,
            loser_name:"Pastrock",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Pastrock",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Vermillion",
                            winner_score:3,
                            loser_name:"Pastrock",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Authentic Matcha Drink",
            elo: 1191.83068598033,
            region: "NA",
            slug: "user/4fce4e32",
            confidence: 5,
            position: 246,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Authentic Matcha Drink",
            winner_score:3,
            loser_name:"Glimbo the Gnome",
            loser_score:2
        },

        
        {
            winner_name:"Authentic Matcha Drink",
            winner_score:3,
            loser_name:"Colossus",
            loser_score:1
        },

        
        {
            winner_name:"Authentic Matcha Drink",
            winner_score:3,
            loser_name:"Sicras",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Glimbo the Gnome",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Authentic Matcha Drink",
                            winner_score:3,
                            loser_name:"Glimbo the Gnome",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Colossus",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Authentic Matcha Drink",
                            winner_score:3,
                            loser_name:"Colossus",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Sovereign",
            elo: 1188.406817286646,
            region: "NA",
            slug: "user/bf9fe465",
            confidence: 3,
            position: 247,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Sovereign",
            winner_score:3,
            loser_name:"KyonHB",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "KyonHB",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Sovereign",
                            winner_score:3,
                            loser_name:"KyonHB",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Xeagas",
            elo: 1188.1825013092978,
            region: "NA",
            slug: "user/07774503",
            confidence: 11,
            position: 248,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Xeagas",
            winner_score:3,
            loser_name:"Zachary Lacy",
            loser_score:0
        },

        
        {
            winner_name:"Xeagas",
            winner_score:3,
            loser_name:"Zachary Lacy",
            loser_score:0
        },

        
        {
            winner_name:"Xeagas",
            winner_score:3,
            loser_name:"DreemWyvern",
            loser_score:1
        },

        
        {
            winner_name:"Xeagas",
            winner_score:3,
            loser_name:"Lucy the Lamia",
            loser_score:1
        },

        
        {
            winner_name:"Xeagas",
            winner_score:3,
            loser_name:"Scrappy Sensei",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Zachary Lacy",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Xeagas",
                            winner_score:3,
                            loser_name:"Zachary Lacy",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Xeagas",
                            winner_score:3,
                            loser_name:"Zachary Lacy",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "antlandking",
            elo: 1187.184111618932,
            region: "EU",
            slug: "user/9efd322a",
            confidence: 3,
            position: 249,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"antlandking",
            winner_score:3,
            loser_name:"Vilkijs",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Vilkijs",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"antlandking",
                            winner_score:3,
                            loser_name:"Vilkijs",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "EX Falchion",
            elo: 1185.6335765358704,
            region: "NA",
            slug: "user/7929fcfc",
            confidence: 15,
            position: 250,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"EX Falchion",
            winner_score:3,
            loser_name:"Wool",
            loser_score:2
        },

        
        {
            winner_name:"EX Falchion",
            winner_score:3,
            loser_name:"Greatmario64",
            loser_score:0
        },

        
        {
            winner_name:"EX Falchion",
            winner_score:3,
            loser_name:"MisfitxPanda",
            loser_score:0
        },

        
        {
            winner_name:"EX Falchion",
            winner_score:3,
            loser_name:"Tortree",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Tortree",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"EX Falchion",
                            winner_score:3,
                            loser_name:"Tortree",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"EX Falchion",
                            winner_score:3,
                            loser_name:"Tortree",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "MisfitxPanda",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"EX Falchion",
                            winner_score:3,
                            loser_name:"MisfitxPanda",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"EX Falchion",
                            winner_score:3,
                            loser_name:"MisfitxPanda",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "winderling",
            elo: 1183.7570884152042,
            region: "UNK",
            slug: "user/96021352",
            confidence: 4,
            position: 251,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"winderling",
            winner_score:3,
            loser_name:"Occurring Gap",
            loser_score:2
        },

        
        {
            winner_name:"winderling",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Tron_ultimate_XX",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"winderling",
                            winner_score:3,
                            loser_name:"Tron_ultimate_XX",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "DanteRebellionX",
            elo: 1180.833458721624,
            region: "NA",
            slug: "user/a26b48ff",
            confidence: 12,
            position: 252,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"DanteRebellionX",
            winner_score:3,
            loser_name:"MetalBlurS",
            loser_score:2
        },

        
        {
            winner_name:"DanteRebellionX",
            winner_score:3,
            loser_name:"seenubuck",
            loser_score:1
        },

        
        {
            winner_name:"DanteRebellionX",
            winner_score:3,
            loser_name:"CharizardX",
            loser_score:1
        },

        
        {
            winner_name:"DanteRebellionX",
            winner_score:3,
            loser_name:"jak_d_ripr",
            loser_score:1
        },

        
        {
            winner_name:"DanteRebellionX",
            winner_score:3,
            loser_name:"LeDom",
            loser_score:2
        },

        
        {
            winner_name:"DanteRebellionX",
            winner_score:3,
            loser_name:"Manil",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "MetalBlurS",
            rival_wins: 1,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"DanteRebellionX",
                        loser_score:3,
                        winner_name:"MetalBlurS",
                        winner_score:0
                    },
            
                    
                    {
                        loser_name:"DanteRebellionX",
                        loser_score:3,
                        winner_name:"MetalBlurS",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"DanteRebellionX",
                            winner_score:3,
                            loser_name:"MetalBlurS",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "CharizardX",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DanteRebellionX",
                            winner_score:3,
                            loser_name:"CharizardX",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "SpicyChedderJack",
            elo: 1177.1594231695424,
            region: "NA",
            slug: "user/2321d491",
            confidence: 24,
            position: 253,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"SpicyChedderJack",
            winner_score:3,
            loser_name:"Shadowpelt",
            loser_score:1
        },

        
        {
            winner_name:"SpicyChedderJack",
            winner_score:3,
            loser_name:"FunkyBoy",
            loser_score:1
        },

        
        {
            winner_name:"SpicyChedderJack",
            winner_score:3,
            loser_name:"BeanutButterBud",
            loser_score:2
        },

        
        {
            winner_name:"SpicyChedderJack",
            winner_score:3,
            loser_name:"BeanutButterBud",
            loser_score:1
        },

        
        {
            winner_name:"SpicyChedderJack",
            winner_score:3,
            loser_name:"BeanutButterBud",
            loser_score:1
        },

        
        {
            winner_name:"SpicyChedderJack",
            winner_score:3,
            loser_name:"Sonickick",
            loser_score:1
        },

        
        {
            winner_name:"SpicyChedderJack",
            winner_score:3,
            loser_name:"Spectrum",
            loser_score:2
        },

        
        {
            winner_name:"SpicyChedderJack",
            winner_score:3,
            loser_name:"Senpapi512",
            loser_score:2
        },

        
        {
            winner_name:"SpicyChedderJack",
            winner_score:3,
            loser_name:"Konk",
            loser_score:0
        },

        
        {
            winner_name:"SpicyChedderJack",
            winner_score:3,
            loser_name:"Renna",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Shadowpelt",
            rival_wins: 1,
            rival_losses:4,
            recent_sets: [
                
                    {
                        loser_name:"SpicyChedderJack",
                        loser_score:3,
                        winner_name:"Shadowpelt",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"SpicyChedderJack",
                        loser_score:3,
                        winner_name:"Shadowpelt",
                        winner_score:1
                    },
            
                    
                    {
                        loser_name:"SpicyChedderJack",
                        loser_score:3,
                        winner_name:"Shadowpelt",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "BeanutButterBud",
            rival_wins: 3,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"SpicyChedderJack",
                            winner_score:3,
                            loser_name:"BeanutButterBud",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"SpicyChedderJack",
                            winner_score:3,
                            loser_name:"BeanutButterBud",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"SpicyChedderJack",
                        loser_score:3,
                        winner_name:"BeanutButterBud",
                        winner_score:1
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Vollrath",
            elo: 1175.5523308419818,
            region: "NA",
            slug: "user/2545f973",
            confidence: 6,
            position: 254,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Vollrath",
            winner_score:3,
            loser_name:"Gold InGarnet",
            loser_score:0
        },

        
        {
            winner_name:"Vollrath",
            winner_score:3,
            loser_name:"Scuts",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Scuts",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Vollrath",
                            winner_score:3,
                            loser_name:"Scuts",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Feliks",
            elo: 1174.6404934595041,
            region: "EU",
            slug: "user/1c3a9a90",
            confidence: 6,
            position: 255,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Feliks",
            winner_score:3,
            loser_name:"SifTheAbyss",
            loser_score:2
        },

        
        {
            winner_name:"Feliks",
            winner_score:3,
            loser_name:"KazuFoxFire",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "SifTheAbyss",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Feliks",
                            winner_score:3,
                            loser_name:"SifTheAbyss",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Feliks",
                            winner_score:3,
                            loser_name:"SifTheAbyss",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "KazuFoxFire",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Feliks",
                            winner_score:3,
                            loser_name:"KazuFoxFire",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Feliks",
                            winner_score:3,
                            loser_name:"KazuFoxFire",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Lant",
            elo: 1173.973339858397,
            region: "NA",
            slug: "user/d59b652b",
            confidence: 10,
            position: 256,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Lant",
            winner_score:3,
            loser_name:"Gold InGarnet",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Gold InGarnet",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Lant",
                            winner_score:3,
                            loser_name:"Gold InGarnet",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Lant",
                            winner_score:3,
                            loser_name:"Gold InGarnet",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Lant",
                            winner_score:3,
                            loser_name:"Gold InGarnet",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "seenubuck",
            elo: 1172.8945053325306,
            region: "NA",
            slug: "user/af6d22a3",
            confidence: 5,
            position: 257,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"seenubuck",
            winner_score:3,
            loser_name:"Larp",
            loser_score:2
        },

        
        {
            winner_name:"seenubuck",
            winner_score:3,
            loser_name:"anonanon",
            loser_score:0
        },

        
        {
            winner_name:"seenubuck",
            winner_score:3,
            loser_name:"Manil",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Larp",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"seenubuck",
                            winner_score:3,
                            loser_name:"Larp",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "anonanon",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"seenubuck",
                            winner_score:3,
                            loser_name:"anonanon",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "[ BK SAS ]",
            elo: 1171.7218377822855,
            region: "EU",
            slug: "user/5a096415",
            confidence: 3,
            position: 258,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"[ BK SAS ]",
            winner_score:3,
            loser_name:"Jyon",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Jyon",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"[ BK SAS ]",
                            winner_score:3,
                            loser_name:"Jyon",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Moontide",
            elo: 1170.0774610827611,
            region: "UNK",
            slug: "user/22493f85",
            confidence: 8,
            position: 259,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Moontide",
            winner_score:3,
            loser_name:"Moose",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Moose",
            rival_wins: 4,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Moontide",
                            winner_score:3,
                            loser_name:"Moose",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Moontide",
                            winner_score:3,
                            loser_name:"Moose",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Moontide",
                            winner_score:3,
                            loser_name:"Moose",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Vilkijs",
            elo: 1167.8662062563976,
            region: "EU",
            slug: "user/15a3d130",
            confidence: 4,
            position: 260,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Vilkijs",
            winner_score:3,
            loser_name:"Jyon",
            loser_score:0
        },

        
        {
            winner_name:"Vilkijs",
            winner_score:3,
            loser_name:"Sand",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Sand",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Vilkijs",
                            winner_score:3,
                            loser_name:"Sand",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Treehell",
            elo: 1166.278814281526,
            region: "NA",
            slug: "user/51fc25d3",
            confidence: 4,
            position: 261,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Treehell",
            winner_score:3,
            loser_name:"RavenCaol",
            loser_score:2
        },

        
        {
            winner_name:"Treehell",
            winner_score:3,
            loser_name:"EnnisHam",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "RavenCaol",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Treehell",
                            winner_score:3,
                            loser_name:"RavenCaol",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "EnnisHam",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Treehell",
                            winner_score:3,
                            loser_name:"EnnisHam",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Verje",
            elo: 1163.3975367050077,
            region: "NA",
            slug: "user/c64d66b4",
            confidence: 3,
            position: 262,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Verje",
            winner_score:3,
            loser_name:"Okano35",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Okano35",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Verje",
                            winner_score:3,
                            loser_name:"Okano35",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "StelleIsLost",
            elo: 1163.1784845741613,
            region: "NA",
            slug: "user/01a335f2",
            confidence: 2,
            position: 263,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"StelleIsLost",
            winner_score:3,
            loser_name:"ShadowJin",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "ShadowJin",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"StelleIsLost",
                            winner_score:3,
                            loser_name:"ShadowJin",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "FMBrosuke",
            elo: 1161.3973433095866,
            region: "NA",
            slug: "user/87ac43fb",
            confidence: 3,
            position: 264,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"FMBrosuke",
            winner_score:3,
            loser_name:"GearDragon",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "GearDragon",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"FMBrosuke",
                            winner_score:3,
                            loser_name:"GearDragon",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "CharizardX",
            elo: 1158.7095658477915,
            region: "NA",
            slug: "user/0948b393",
            confidence: 8,
            position: 265,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"CharizardX",
            winner_score:3,
            loser_name:"Eternum",
            loser_score:1
        },

        
        {
            winner_name:"CharizardX",
            winner_score:3,
            loser_name:"LeDom",
            loser_score:0
        },

        
        {
            winner_name:"CharizardX",
            winner_score:3,
            loser_name:"Lalo",
            loser_score:0
        },

        
        {
            winner_name:"CharizardX",
            winner_score:3,
            loser_name:"Lalo",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Lalo",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"CharizardX",
                            winner_score:3,
                            loser_name:"Lalo",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"CharizardX",
                            winner_score:3,
                            loser_name:"Lalo",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Speeze",
            elo: 1155.1209467281296,
            region: "NA",
            slug: "user/e3f7ad75",
            confidence: 6,
            position: 266,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Speeze",
            winner_score:3,
            loser_name:"Lalo",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Lalo",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Speeze",
                            winner_score:3,
                            loser_name:"Lalo",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Speeze",
                            winner_score:3,
                            loser_name:"Lalo",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "BetaTester881",
            elo: 1153.7657699218098,
            region: "UNK",
            slug: "user/fa6091d8",
            confidence: 2,
            position: 267,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"BetaTester881",
            winner_score:3,
            loser_name:"Joridy",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Joridy",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BetaTester881",
                            winner_score:3,
                            loser_name:"Joridy",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Gman",
            elo: 1152.4826736749585,
            region: "NA",
            slug: "user/7dcfb248",
            confidence: 18,
            position: 268,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Gman",
            winner_score:3,
            loser_name:"BrazenWhiteRose",
            loser_score:0
        },

        
        {
            winner_name:"Gman",
            winner_score:3,
            loser_name:"Mcintosh2002",
            loser_score:2
        },

        
        {
            winner_name:"Gman",
            winner_score:3,
            loser_name:"Mmeaninglessnamee",
            loser_score:0
        },

        
        {
            winner_name:"Gman",
            winner_score:3,
            loser_name:"Yanase Koi",
            loser_score:0
        },

        
        {
            winner_name:"Gman",
            winner_score:3,
            loser_name:"Spyder_306",
            loser_score:2
        },

        
        {
            winner_name:"Gman",
            winner_score:3,
            loser_name:"Pepega",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BrazenWhiteRose",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Gman",
                            winner_score:3,
                            loser_name:"BrazenWhiteRose",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Gman",
                            winner_score:3,
                            loser_name:"BrazenWhiteRose",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Iris",
            elo: 1150.8116432716129,
            region: "NA",
            slug: "user/e66fed6c",
            confidence: 6,
            position: 269,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Iris",
            winner_score:3,
            loser_name:"Lupin X",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Lupin X",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Iris",
                            winner_score:3,
                            loser_name:"Lupin X",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Iris",
                            winner_score:3,
                            loser_name:"Lupin X",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Rulership",
            elo: 1143.502137775312,
            region: "NA",
            slug: "user/3a11b14d",
            confidence: 6,
            position: 270,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Rulership",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
        {
            winner_name:"Rulership",
            winner_score:3,
            loser_name:"Sweetener",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Colossus",
            elo: 1143.5009909911607,
            region: "NA",
            slug: "user/4ec8ccc0",
            confidence: 3,
            position: 271,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Colossus",
            winner_score:3,
            loser_name:"The Esquire",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "The Esquire",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Colossus",
                            winner_score:3,
                            loser_name:"The Esquire",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Hokage",
            elo: 1142.8780012220395,
            region: "NA",
            slug: "user/ed8a12d0",
            confidence: 4,
            position: 272,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Hokage",
            winner_score:3,
            loser_name:"mintjulep",
            loser_score:0
        },

        
        {
            winner_name:"Hokage",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Tron_ultimate_XX",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Hokage",
                            winner_score:3,
                            loser_name:"Tron_ultimate_XX",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "mintjulep",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Hokage",
                            winner_score:3,
                            loser_name:"mintjulep",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Velvet",
            elo: 1142.833141223162,
            region: "NA",
            slug: "user/09ecd1a7",
            confidence: 8,
            position: 273,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Velvet",
            winner_score:3,
            loser_name:"Omicron Austin",
            loser_score:2
        },

        
        {
            winner_name:"Velvet",
            winner_score:3,
            loser_name:"Omicron Austin",
            loser_score:0
        },

        
        {
            winner_name:"Velvet",
            winner_score:3,
            loser_name:"Gold InGarnet",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Omicron Austin",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Velvet",
                            winner_score:3,
                            loser_name:"Omicron Austin",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"Velvet",
                        loser_score:3,
                        winner_name:"Omicron Austin",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Velvet",
                            winner_score:3,
                            loser_name:"Omicron Austin",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Gold InGarnet",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Velvet",
                            winner_score:3,
                            loser_name:"Gold InGarnet",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Monomin",
            elo: 1140.2334211955972,
            region: "ASIA",
            slug: "user/dec4d91c",
            confidence: 1,
            position: 274,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "BALLxZA",
            elo: 1138.470577950383,
            region: "ASIA",
            slug: "user/c1b22919",
            confidence: 2,
            position: 275,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"BALLxZA",
            winner_score:3,
            loser_name:"Nice|Night|",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Nice|Night|",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BALLxZA",
                            winner_score:3,
                            loser_name:"Nice|Night|",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "R. Noble",
            elo: 1137.9374598507752,
            region: "NA",
            slug: "user/56d930bb",
            confidence: 3,
            position: 276,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"R. Noble",
            winner_score:3,
            loser_name:"TheGrizzwald",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "TheGrizzwald",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"R. Noble",
                            winner_score:3,
                            loser_name:"TheGrizzwald",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Johnny Tatsumi",
            elo: 1132.4103158342584,
            region: "NA",
            slug: "user/d09de9c8",
            confidence: 4,
            position: 277,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Johnny Tatsumi",
            winner_score:3,
            loser_name:"Taki",
            loser_score:1
        },

        
        {
            winner_name:"Johnny Tatsumi",
            winner_score:3,
            loser_name:"JBC6382",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Taki",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Johnny Tatsumi",
                            winner_score:3,
                            loser_name:"Taki",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Sorana",
            elo: 1131.9734210895165,
            region: "UNK",
            slug: "user/185022ba",
            confidence: 4,
            position: 278,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Sorana",
            winner_score:3,
            loser_name:"JR121",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "JR121",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Sorana",
                            winner_score:3,
                            loser_name:"JR121",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Larp",
            elo: 1131.2189602229298,
            region: "NA",
            slug: "user/b4d8578e",
            confidence: 4,
            position: 279,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Larp",
            winner_score:3,
            loser_name:"Kentoki",
            loser_score:0
        },

        
        {
            winner_name:"Larp",
            winner_score:3,
            loser_name:"LILBOWT",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Kentoki",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Larp",
                            winner_score:3,
                            loser_name:"Kentoki",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Openwolf",
            elo: 1129.6111071084756,
            region: "EU",
            slug: "user/3027c583",
            confidence: 6,
            position: 280,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Openwolf",
            winner_score:3,
            loser_name:"Delta",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Delta",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Openwolf",
                            winner_score:3,
                            loser_name:"Delta",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Openwolf",
                            winner_score:3,
                            loser_name:"Delta",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Nevaltion",
            elo: 1123.896313146072,
            region: "NA",
            slug: "user/426ff9a4",
            confidence: 3,
            position: 281,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Nevaltion",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Fish Liquor",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Nevaltion",
                            winner_score:3,
                            loser_name:"Fish Liquor",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Not Shadow Joulton",
            elo: 1115.9643999623713,
            region: "UNK",
            slug: "user/3280cc9d",
            confidence: 7,
            position: 282,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Not Shadow Joulton",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Azor DC",
            elo: 1113.563946153006,
            region: "NA",
            slug: "user/2bfab1f8",
            confidence: 4,
            position: 283,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Azor DC",
            winner_score:3,
            loser_name:"Taki",
            loser_score:0
        },

        
        {
            winner_name:"Azor DC",
            winner_score:3,
            loser_name:"JBC6382",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "JBC6382",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Azor DC",
                            winner_score:3,
                            loser_name:"JBC6382",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "fancyhat",
            elo: 1112.4259864339353,
            region: "NA",
            slug: "user/7eb3a1cb",
            confidence: 4,
            position: 284,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"fancyhat",
            winner_score:3,
            loser_name:"KyonHB",
            loser_score:0
        },

        
        {
            winner_name:"fancyhat",
            winner_score:3,
            loser_name:"Trashfox",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "KyonHB",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"fancyhat",
                            winner_score:3,
                            loser_name:"KyonHB",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Trashfox",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"fancyhat",
                            winner_score:3,
                            loser_name:"Trashfox",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Carrie",
            elo: 1112.1127367196627,
            region: "NA",
            slug: "user/c2d92d7a",
            confidence: 4,
            position: 285,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Carrie",
            winner_score:3,
            loser_name:"Tack7800",
            loser_score:2
        },

        
        {
            winner_name:"Carrie",
            winner_score:3,
            loser_name:"Sicras",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Sicras",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Carrie",
                            winner_score:3,
                            loser_name:"Sicras",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Tack7800",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Carrie",
                            winner_score:3,
                            loser_name:"Tack7800",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Artoria Nobunaga",
            elo: 1111.6469087343553,
            region: "JPN",
            slug: "user/61b6bcce",
            confidence: 6,
            position: 286,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Artoria Nobunaga",
            winner_score:3,
            loser_name:"izank11",
            loser_score:2
        },

        
        {
            winner_name:"Artoria Nobunaga",
            winner_score:3,
            loser_name:"Setsunae",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Shoji",
            elo: 1111.5933980267982,
            region: "NA",
            slug: "user/dc7ae033",
            confidence: 1,
            position: 287,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Eccentric_Thistle",
            elo: 1110.025264890511,
            region: "OCE",
            slug: "user/8560f933",
            confidence: 9,
            position: 288,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Eccentric_Thistle",
            winner_score:3,
            loser_name:"Aether",
            loser_score:2
        },

        
        {
            winner_name:"Eccentric_Thistle",
            winner_score:3,
            loser_name:"Keanu",
            loser_score:0
        },

        
        {
            winner_name:"Eccentric_Thistle",
            winner_score:3,
            loser_name:"Fudge Harvey Oswald",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Keanu",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Eccentric_Thistle",
                            winner_score:3,
                            loser_name:"Keanu",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Ibbit",
            elo: 1103.3280726584896,
            region: "UNK",
            slug: "user/162768aa",
            confidence: 4,
            position: 289,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Ibbit",
            winner_score:3,
            loser_name:"Zturtle102",
            loser_score:2
        },

        
        {
            winner_name:"Ibbit",
            winner_score:3,
            loser_name:"Duder963",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Zturtle102",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Ibbit",
                            winner_score:3,
                            loser_name:"Zturtle102",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Guy",
            elo: 1099.0029179800679,
            region: "EU",
            slug: "user/33529f9c",
            confidence: 3,
            position: 290,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Guy",
            winner_score:3,
            loser_name:"SuppIns",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "SuppIns",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Guy",
                            winner_score:3,
                            loser_name:"SuppIns",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "X-Cal",
            elo: 1098.203112943179,
            region: "NA",
            slug: "user/9214d207",
            confidence: 2,
            position: 291,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "BeanutButterBud",
            elo: 1097.957956820818,
            region: "NA",
            slug: "user/88d57280",
            confidence: 13,
            position: 292,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"BeanutButterBud",
            winner_score:3,
            loser_name:"SpicyChedderJack",
            loser_score:1
        },

        
        {
            winner_name:"BeanutButterBud",
            winner_score:3,
            loser_name:"SpicyChedderJack",
            loser_score:2
        },

        
        {
            winner_name:"BeanutButterBud",
            winner_score:3,
            loser_name:"Konk",
            loser_score:0
        },

        
        {
            winner_name:"BeanutButterBud",
            winner_score:3,
            loser_name:"Renna",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "SpicyChedderJack",
            rival_wins: 2,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"BeanutButterBud",
                        loser_score:3,
                        winner_name:"SpicyChedderJack",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"BeanutButterBud",
                        loser_score:3,
                        winner_name:"SpicyChedderJack",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"BeanutButterBud",
                            winner_score:3,
                            loser_name:"SpicyChedderJack",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Renna",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BeanutButterBud",
                            winner_score:3,
                            loser_name:"Renna",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "KoreanPanda",
            elo: 1095.9837325663912,
            region: "NA",
            slug: "user/b2536a26",
            confidence: 3,
            position: 293,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"KoreanPanda",
            winner_score:3,
            loser_name:"Foam Root",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Foam Root",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"KoreanPanda",
                            winner_score:3,
                            loser_name:"Foam Root",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "SleepyheadDX",
            elo: 1093.4988637210797,
            region: "EU",
            slug: "user/d2d60ba3",
            confidence: 3,
            position: 294,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"SleepyheadDX",
            winner_score:3,
            loser_name:"Makoche",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Makoche",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SleepyheadDX",
                            winner_score:3,
                            loser_name:"Makoche",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Neemo",
            elo: 1090.447847770587,
            region: "NA",
            slug: "user/aa2ad176",
            confidence: 1,
            position: 295,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Aether",
            elo: 1089.9865803312837,
            region: "OCE",
            slug: "user/a34e6559",
            confidence: 3,
            position: 296,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Aether",
            winner_score:3,
            loser_name:"Fishbones",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Fishbones",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Aether",
                            winner_score:3,
                            loser_name:"Fishbones",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Eternum",
            elo: 1086.5695283272985,
            region: "NA",
            slug: "user/d52c923c",
            confidence: 8,
            position: 297,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Eternum",
            winner_score:3,
            loser_name:"LeDom",
            loser_score:0
        },

        
        {
            winner_name:"Eternum",
            winner_score:3,
            loser_name:"Lalo",
            loser_score:2
        },

        
        {
            winner_name:"Eternum",
            winner_score:3,
            loser_name:"Lalo",
            loser_score:0
        },

        
        {
            winner_name:"Eternum",
            winner_score:3,
            loser_name:"Arkanjin",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Lalo",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Eternum",
                            winner_score:3,
                            loser_name:"Lalo",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Eternum",
                            winner_score:3,
                            loser_name:"Lalo",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Jay314",
            elo: 1083.923263689802,
            region: "NA",
            slug: "user/f9b0632f",
            confidence: 20,
            position: 298,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Jay314",
            winner_score:3,
            loser_name:"Elitebabar25",
            loser_score:0
        },

        
        {
            winner_name:"Jay314",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:2
        },

        
        {
            winner_name:"Jay314",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:1
        },

        
        {
            winner_name:"Jay314",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:0
        },

        
        {
            winner_name:"Jay314",
            winner_score:3,
            loser_name:"Cheerustre",
            loser_score:2
        },

        
        {
            winner_name:"Jay314",
            winner_score:3,
            loser_name:"Special Schmix",
            loser_score:2
        },

        
        {
            winner_name:"Jay314",
            winner_score:3,
            loser_name:"Special Schmix",
            loser_score:0
        },

        
        {
            winner_name:"Jay314",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Chicken Fish",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Jay314",
                            winner_score:3,
                            loser_name:"Chicken Fish",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Jay314",
                            winner_score:3,
                            loser_name:"Chicken Fish",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Jay314",
                            winner_score:3,
                            loser_name:"Chicken Fish",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Special Schmix",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Jay314",
                            winner_score:3,
                            loser_name:"Special Schmix",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Jay314",
                            winner_score:3,
                            loser_name:"Special Schmix",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Real Human",
            elo: 1083.6947146455243,
            region: "NA",
            slug: "user/d0a2e213",
            confidence: 2,
            position: 299,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Real Human",
            winner_score:3,
            loser_name:"Mage",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Mage",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Real Human",
                            winner_score:3,
                            loser_name:"Mage",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Xeora AMV",
            elo: 1078.9716783547074,
            region: "NA",
            slug: "user/d992913a",
            confidence: 2,
            position: 300,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Poogen",
            elo: 1075.1470638908745,
            region: "EU",
            slug: "user/074204cf",
            confidence: 3,
            position: 301,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Poogen",
            winner_score:3,
            loser_name:"Norrin Radd",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Norrin Radd",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Poogen",
                            winner_score:3,
                            loser_name:"Norrin Radd",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "miofa",
            elo: 1075.0057446612116,
            region: "OCE",
            slug: "user/57a8c7e6",
            confidence: 3,
            position: 302,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"miofa",
            winner_score:3,
            loser_name:"Inousann",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Inousann",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"miofa",
                            winner_score:3,
                            loser_name:"Inousann",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Pastrock",
            elo: 1063.7635565959292,
            region: "SA",
            slug: "user/5c0952ca",
            confidence: 3,
            position: 303,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Pastrock",
            winner_score:3,
            loser_name:"Imano Ob",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Imano Ob",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Pastrock",
                            winner_score:3,
                            loser_name:"Imano Ob",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Archie",
            elo: 1056.1925951048815,
            region: "EU",
            slug: "user/14ab27a0",
            confidence: 2,
            position: 304,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "sabredog",
            elo: 1055.2428231519261,
            region: "NA",
            slug: "user/69784522",
            confidence: 3,
            position: 305,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"sabredog",
            winner_score:3,
            loser_name:"M4dK1ng",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "M4dK1ng",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"sabredog",
                            winner_score:3,
                            loser_name:"M4dK1ng",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "JrJam",
            elo: 1055.0652671986716,
            region: "NA",
            slug: "user/21423639",
            confidence: 3,
            position: 306,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"JrJam",
            winner_score:3,
            loser_name:"Primecore28",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Primecore28",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"JrJam",
                            winner_score:3,
                            loser_name:"Primecore28",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Red",
            elo: 1053.8407340848287,
            region: "SA",
            slug: "user/b7500998",
            confidence: 3,
            position: 307,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Red",
            winner_score:3,
            loser_name:"DCGrz",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "DCGrz",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Red",
                            winner_score:3,
                            loser_name:"DCGrz",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Garryth",
            elo: 1050.501463297053,
            region: "UNK",
            slug: "user/224be1e3",
            confidence: 3,
            position: 308,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Garryth",
            winner_score:3,
            loser_name:"PhilSchwifty",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "PhilSchwifty",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Garryth",
                            winner_score:3,
                            loser_name:"PhilSchwifty",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Crisis_Core",
            elo: 1048.566023861511,
            region: "EU",
            slug: "user/506a3c77",
            confidence: 3,
            position: 309,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Crisis_Core",
            winner_score:3,
            loser_name:"ColdMill",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "ColdMill",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Crisis_Core",
                            winner_score:3,
                            loser_name:"ColdMill",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "STONE",
            elo: 1048.5533280080854,
            region: "UNK",
            slug: "NONE",
            confidence: 3,
            position: 310,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"STONE",
            winner_score:3,
            loser_name:"Samael",
            loser_score:2
        },

        
        {
            winner_name:"STONE",
            winner_score:3,
            loser_name:"Cytosine",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Cytosine",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"STONE",
                            winner_score:3,
                            loser_name:"Cytosine",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Samael",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"STONE",
                            winner_score:3,
                            loser_name:"Samael",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "PHI",
            elo: 1046.9995112448191,
            region: "ASIA",
            slug: "user/c126dc36",
            confidence: 1,
            position: 311,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "AshuraRem",
            elo: 1045.8170486949919,
            region: "NA",
            slug: "user/deab881b",
            confidence: 3,
            position: 312,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"AshuraRem",
            winner_score:3,
            loser_name:"Garumb",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Garumb",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"AshuraRem",
                            winner_score:3,
                            loser_name:"Garumb",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Promilkid",
            elo: 1045.6236183508918,
            region: "ASIA",
            slug: "user/6bd99ddc",
            confidence: 3,
            position: 313,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Promilkid",
            winner_score:3,
            loser_name:"Riel",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Riel",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Promilkid",
                            winner_score:3,
                            loser_name:"Riel",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Vurger",
            elo: 1044.8398082673282,
            region: "NA",
            slug: "user/72d44357",
            confidence: 2,
            position: 314,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Zagorsek",
            elo: 1044.6545996541954,
            region: "NA",
            slug: "user/bd9ed189",
            confidence: 3,
            position: 315,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Zagorsek",
            winner_score:3,
            loser_name:"Foam Root",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Foam Root",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zagorsek",
                            winner_score:3,
                            loser_name:"Foam Root",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Night_Hunter47",
            elo: 1031.0451178263459,
            region: "UNK",
            slug: "user/ce6ace6e",
            confidence: 3,
            position: 316,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Night_Hunter47",
            winner_score:3,
            loser_name:"TheGrizzwald",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "TheGrizzwald",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Night_Hunter47",
                            winner_score:3,
                            loser_name:"TheGrizzwald",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Link Pendrago",
            elo: 1030.7267764387589,
            region: "NA",
            slug: "user/90df00fa",
            confidence: 4,
            position: 317,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Setsunae",
            elo: 1030.5677653702915,
            region: "EU",
            slug: "user/75bc6a9f",
            confidence: 3,
            position: 318,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Setsunae",
            winner_score:3,
            loser_name:"Ab",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Ab",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Setsunae",
                            winner_score:3,
                            loser_name:"Ab",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "DGF",
            elo: 1028.6313878851424,
            region: "NA",
            slug: "user/567c6499",
            confidence: 13,
            position: 319,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"DGF",
            winner_score:3,
            loser_name:"Lucy the Lamia",
            loser_score:0
        },

        
        {
            winner_name:"DGF",
            winner_score:3,
            loser_name:"EMP_Obama",
            loser_score:0
        },

        
        {
            winner_name:"DGF",
            winner_score:3,
            loser_name:"Blue Thunder",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "EMP_Obama",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DGF",
                            winner_score:3,
                            loser_name:"EMP_Obama",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"DGF",
                            winner_score:3,
                            loser_name:"EMP_Obama",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Commiku",
            elo: 1028.359169800397,
            region: "UNK",
            slug: "user/04198acf",
            confidence: 2,
            position: 320,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Jazzcuzzi",
            elo: 1024.3356111261282,
            region: "NA",
            slug: "user/3326c44c",
            confidence: 5,
            position: 321,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Jazzcuzzi",
            winner_score:3,
            loser_name:"TRON",
            loser_score:1
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "10PCSpicyNuggets",
            elo: 1023.1211174845313,
            region: "NA",
            slug: "user/f5b995bb",
            confidence: 3,
            position: 322,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"10PCSpicyNuggets",
            winner_score:3,
            loser_name:"Corny",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Corny",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"10PCSpicyNuggets",
                            winner_score:3,
                            loser_name:"Corny",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "SifTheAbyss",
            elo: 1022.8293596436104,
            region: "EU",
            slug: "user/698fd8d9",
            confidence: 4,
            position: 323,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"SifTheAbyss",
            winner_score:3,
            loser_name:"Clob",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Clob",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SifTheAbyss",
                            winner_score:3,
                            loser_name:"Clob",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"SifTheAbyss",
                            winner_score:3,
                            loser_name:"Clob",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "PhilSchwifty",
            elo: 1022.0240009012388,
            region: "NA",
            slug: "user/c1562482",
            confidence: 5,
            position: 324,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"PhilSchwifty",
            winner_score:3,
            loser_name:"Cytosine",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Cytosine",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"PhilSchwifty",
                            winner_score:3,
                            loser_name:"Cytosine",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "The Esquire",
            elo: 1021.4782645446825,
            region: "NA",
            slug: "user/166e4773",
            confidence: 3,
            position: 325,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"The Esquire",
            winner_score:3,
            loser_name:"Tack7800",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Tack7800",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"The Esquire",
                            winner_score:3,
                            loser_name:"Tack7800",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Luff",
            elo: 1021.3863473751707,
            region: "NA",
            slug: "user/5e00823d",
            confidence: 2,
            position: 326,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Corny",
            elo: 1019.4986424819682,
            region: "NA",
            slug: "user/634f1262",
            confidence: 3,
            position: 327,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Corny",
            winner_score:3,
            loser_name:"Juicey",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Juicey",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Corny",
                            winner_score:3,
                            loser_name:"Juicey",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "fancytuna",
            elo: 1019.1940657928977,
            region: "NA",
            slug: "user/e6362858",
            confidence: 1,
            position: 328,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "anonanon",
            elo: 1017.3096766950671,
            region: "NA",
            slug: "user/b7ee11ee",
            confidence: 4,
            position: 329,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"anonanon",
            winner_score:3,
            loser_name:"LILBOWT",
            loser_score:0
        },

        
        {
            winner_name:"anonanon",
            winner_score:3,
            loser_name:"Gree",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LILBOWT",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"anonanon",
                            winner_score:3,
                            loser_name:"LILBOWT",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mmeaninglessnamee",
            elo: 1016.5107053478355,
            region: "NA",
            slug: "user/11548f19",
            confidence: 3,
            position: 330,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mmeaninglessnamee",
            winner_score:3,
            loser_name:"Pepega",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Pepega",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mmeaninglessnamee",
                            winner_score:3,
                            loser_name:"Pepega",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "TakeYourTime",
            elo: 1016.4142985843971,
            region: "EU",
            slug: "user/d0fb9d0d",
            confidence: 2,
            position: 331,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Famine",
            elo: 1010.3251891172024,
            region: "NA",
            slug: "user/7b072f4f",
            confidence: 2,
            position: 332,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Yanase Koi",
            elo: 1010.0548320217965,
            region: "NA",
            slug: "user/d0181ec4",
            confidence: 25,
            position: 333,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Yanase Koi",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
        {
            winner_name:"Yanase Koi",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:0
        },

        
        {
            winner_name:"Yanase Koi",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:2
        },

        
        {
            winner_name:"Yanase Koi",
            winner_score:3,
            loser_name:"Rulership",
            loser_score:1
        },

        
        {
            winner_name:"Yanase Koi",
            winner_score:3,
            loser_name:"Elitebabar25",
            loser_score:0
        },

        
        {
            winner_name:"Yanase Koi",
            winner_score:3,
            loser_name:"TheGrizzwald",
            loser_score:0
        },

        
        {
            winner_name:"Yanase Koi",
            winner_score:3,
            loser_name:"TheGrizzwald",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Patneko",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Yanase Koi",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Yanase Koi",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Yanase Koi",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "MrMuerto123",
            elo: 1009.2840839175076,
            region: "NA",
            slug: "user/ec3b5f0a",
            confidence: 2,
            position: 334,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "mimi",
            elo: 1003.4370707872483,
            region: "NA",
            slug: "user/d6eaad75",
            confidence: 1,
            position: 335,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "jak_d_ripr",
            elo: 1002.4234790085362,
            region: "NA",
            slug: "user/0827c2d3",
            confidence: 11,
            position: 336,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"jak_d_ripr",
            winner_score:3,
            loser_name:"LILBOWT",
            loser_score:0
        },

        
        {
            winner_name:"jak_d_ripr",
            winner_score:3,
            loser_name:"DubKun",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "DubKun",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"jak_d_ripr",
                            winner_score:3,
                            loser_name:"DubKun",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"jak_d_ripr",
                            winner_score:3,
                            loser_name:"DubKun",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Elitebabar25",
            elo: 997.7324115948684,
            region: "EU",
            slug: "user/866cd5d9",
            confidence: 19,
            position: 337,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Elitebabar25",
            winner_score:3,
            loser_name:"Jazzcuzzi",
            loser_score:2
        },

        
        {
            winner_name:"Elitebabar25",
            winner_score:3,
            loser_name:"luckidyne",
            loser_score:2
        },

        
        {
            winner_name:"Elitebabar25",
            winner_score:3,
            loser_name:"Rodimus Prime",
            loser_score:0
        },

        
        {
            winner_name:"Elitebabar25",
            winner_score:3,
            loser_name:"Mookeh",
            loser_score:1
        },

        
        {
            winner_name:"Elitebabar25",
            winner_score:3,
            loser_name:"melody?",
            loser_score:1
        },

        
        {
            winner_name:"Elitebabar25",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
        {
            winner_name:"Elitebabar25",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "melody?",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Elitebabar25",
                            winner_score:3,
                            loser_name:"melody?",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Elitebabar25",
                            winner_score:3,
                            loser_name:"melody?",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "luckidyne",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Elitebabar25",
                            winner_score:3,
                            loser_name:"luckidyne",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Elitebabar25",
                            winner_score:3,
                            loser_name:"luckidyne",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Sena",
            elo: 997.1467581269762,
            region: "SA",
            slug: "user/6fb86b37",
            confidence: 3,
            position: 338,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Sena",
            winner_score:3,
            loser_name:"Pigeta",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Pigeta",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Sena",
                            winner_score:3,
                            loser_name:"Pigeta",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Regulus",
            elo: 996.896430417601,
            region: "NA",
            slug: "user/0fdc85d2",
            confidence: 3,
            position: 339,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Regulus",
            winner_score:3,
            loser_name:"Pepega",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Pepega",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Regulus",
                            winner_score:3,
                            loser_name:"Pepega",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Armakilo",
            elo: 995.6087658663572,
            region: "NA",
            slug: "user/9529c4c8",
            confidence: 3,
            position: 340,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Armakilo",
            winner_score:3,
            loser_name:"Dinner",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Dinner",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Armakilo",
                            winner_score:3,
                            loser_name:"Dinner",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "LeDom",
            elo: 994.1466403150907,
            region: "NA",
            slug: "user/b5d2a392",
            confidence: 10,
            position: 341,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"LeDom",
            winner_score:3,
            loser_name:"seenubuck",
            loser_score:2
        },

        
        {
            winner_name:"LeDom",
            winner_score:3,
            loser_name:"LukeParry",
            loser_score:0
        },

        
        {
            winner_name:"LeDom",
            winner_score:3,
            loser_name:"Manil",
            loser_score:1
        },

        
        {
            winner_name:"LeDom",
            winner_score:3,
            loser_name:"Kentoki",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LukeParry",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LeDom",
                            winner_score:3,
                            loser_name:"LukeParry",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Lalo",
            elo: 993.5176345980874,
            region: "NA",
            slug: "user/3835e240",
            confidence: 11,
            position: 342,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Lalo",
            winner_score:3,
            loser_name:"MetalBlurS",
            loser_score:2
        },

        
        {
            winner_name:"Lalo",
            winner_score:3,
            loser_name:"Arkanjin",
            loser_score:0
        },

        
        {
            winner_name:"Lalo",
            winner_score:3,
            loser_name:"NsGamer",
            loser_score:0
        },

        
        {
            winner_name:"Lalo",
            winner_score:3,
            loser_name:"Abenson",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "NsGamer",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Lalo",
                            winner_score:3,
                            loser_name:"NsGamer",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Lalo",
                            winner_score:3,
                            loser_name:"NsGamer",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "FGCConex",
            elo: 988.3379276413569,
            region: "NA",
            slug: "user/fbefc4eb",
            confidence: 9,
            position: 343,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"FGCConex",
            winner_score:3,
            loser_name:"Shyoshiguy",
            loser_score:-1
        },

        
        {
            winner_name:"FGCConex",
            winner_score:3,
            loser_name:"Zarlet",
            loser_score:1
        },

        
        {
            winner_name:"FGCConex",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Cure Dynamic",
            elo: 988.2711407620029,
            region: "NA",
            slug: "user/c8fe8393",
            confidence: 4,
            position: 344,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Ssj3enderman",
            elo: 986.3556720489102,
            region: "NA",
            slug: "user/99442bb3",
            confidence: 4,
            position: 345,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Ssj3enderman",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Patneko",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Ssj3enderman",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "GamingWarthog",
            elo: 986.0518629726006,
            region: "NA",
            slug: "user/4387cc66",
            confidence: 2,
            position: 346,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Gold InGarnet",
            elo: 985.9702569777961,
            region: "NA",
            slug: "user/fd7d2aa6",
            confidence: 11,
            position: 347,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Gold InGarnet",
            winner_score:3,
            loser_name:"PhilSchwifty",
            loser_score:2
        },

        
        {
            winner_name:"Gold InGarnet",
            winner_score:3,
            loser_name:"Scuts",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "PhilSchwifty",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Gold InGarnet",
                            winner_score:3,
                            loser_name:"PhilSchwifty",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Gold InGarnet",
                            winner_score:3,
                            loser_name:"PhilSchwifty",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Arvald",
            elo: 985.0514116292871,
            region: "NA",
            slug: "user/b3740aa8",
            confidence: 13,
            position: 348,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Arvald",
            winner_score:3,
            loser_name:"Haji",
            loser_score:0
        },

        
        {
            winner_name:"Arvald",
            winner_score:3,
            loser_name:"Garumb",
            loser_score:0
        },

        
        {
            winner_name:"Arvald",
            winner_score:3,
            loser_name:"Richi the Moon",
            loser_score:0
        },

        
        {
            winner_name:"Arvald",
            winner_score:3,
            loser_name:"AlexNomas",
            loser_score:0
        },

        
        {
            winner_name:"Arvald",
            winner_score:3,
            loser_name:"AlexNomas",
            loser_score:0
        },

        
        {
            winner_name:"Arvald",
            winner_score:3,
            loser_name:"AlexNomas",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "AlexNomas",
            rival_wins: 3,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Arvald",
                            winner_score:3,
                            loser_name:"AlexNomas",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Arvald",
                            winner_score:3,
                            loser_name:"AlexNomas",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Arvald",
                            winner_score:3,
                            loser_name:"AlexNomas",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "RavenCaol",
            elo: 984.8711651361283,
            region: "UNK",
            slug: "user/bf47b7d7",
            confidence: 3,
            position: 349,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"RavenCaol",
            winner_score:3,
            loser_name:"EnnisHam",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "EnnisHam",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"RavenCaol",
                            winner_score:3,
                            loser_name:"EnnisHam",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Riko",
            elo: 983.950430041564,
            region: "NA",
            slug: "user/9d12e825",
            confidence: 2,
            position: 350,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "LukeParry",
            elo: 983.7645797853531,
            region: "NA",
            slug: "user/9ce70d33",
            confidence: 3,
            position: 351,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"LukeParry",
            winner_score:3,
            loser_name:"KiaRio",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "KiaRio",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LukeParry",
                            winner_score:3,
                            loser_name:"KiaRio",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "GooeyLagoon",
            elo: 981.7266698067243,
            region: "NA",
            slug: "user/30406b52",
            confidence: 2,
            position: 352,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "GoetiaGC",
            elo: 979.7866871897027,
            region: "NA",
            slug: "user/303576d6",
            confidence: 13,
            position: 353,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"GoetiaGC",
            winner_score:3,
            loser_name:"Arvald",
            loser_score:2
        },

        
        {
            winner_name:"GoetiaGC",
            winner_score:3,
            loser_name:"Arvald",
            loser_score:1
        },

        
        {
            winner_name:"GoetiaGC",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:0
        },

        
        {
            winner_name:"GoetiaGC",
            winner_score:3,
            loser_name:"Garumb",
            loser_score:0
        },

        
        {
            winner_name:"GoetiaGC",
            winner_score:3,
            loser_name:"AlexNomas",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Forgoten",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"GoetiaGC",
                        loser_score:3,
                        winner_name:"Forgoten",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"GoetiaGC",
                            winner_score:3,
                            loser_name:"Forgoten",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Arvald",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"GoetiaGC",
                            winner_score:3,
                            loser_name:"Arvald",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"GoetiaGC",
                            winner_score:3,
                            loser_name:"Arvald",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Samael",
            elo: 977.8718520293155,
            region: "NA",
            slug: "user/c1665a3e",
            confidence: 2,
            position: 354,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Max",
            elo: 977.414950814551,
            region: "EU",
            slug: "user/9003a99c",
            confidence: 2,
            position: 355,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "MH Rox",
            elo: 975.789065359559,
            region: "NA",
            slug: "user/7a992013",
            confidence: 2,
            position: 356,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Babel",
            elo: 975.4209123109556,
            region: "NA",
            slug: "user/61365b1a",
            confidence: 2,
            position: 357,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Endmin 67",
            elo: 971.7355815791324,
            region: "ASIA",
            slug: "user/85e9d2c6",
            confidence: 2,
            position: 358,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Arcaknight7s",
            elo: 970.3034913319302,
            region: "NA",
            slug: "user/616cca2c",
            confidence: 2,
            position: 359,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Ruby Slinger",
            elo: 968.9202784812165,
            region: "NA",
            slug: "user/196a9e35",
            confidence: 2,
            position: 360,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Hero M#",
            elo: 965.952585314904,
            region: "NA",
            slug: "user/d405cd37",
            confidence: 4,
            position: 361,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "JR121",
            elo: 964.7771312386806,
            region: "NA",
            slug: "user/482bb1df",
            confidence: 2,
            position: 362,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Reb!!",
            elo: 964.5013350409598,
            region: "EU",
            slug: "user/94d6acd4",
            confidence: 3,
            position: 363,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Reb!!",
            winner_score:3,
            loser_name:"Makoche",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Makoche",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Reb!!",
                            winner_score:3,
                            loser_name:"Makoche",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Asmodean95",
            elo: 963.734663588338,
            region: "NA",
            slug: "user/bb0717a6",
            confidence: 2,
            position: 364,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Trillion-Crows",
            elo: 958.9487103974672,
            region: "NA",
            slug: "user/1f204c28",
            confidence: 4,
            position: 365,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Sonickick",
            elo: 956.4526164049956,
            region: "NA",
            slug: "user/618804cf",
            confidence: 2,
            position: 366,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "L1",
            elo: 951.3615854914192,
            region: "ASIA",
            slug: "user/8337f031",
            confidence: 1,
            position: 367,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Dark Slayer",
            elo: 951.3330048300933,
            region: "NA",
            slug: "user/e7fe8bbc",
            confidence: 2,
            position: 368,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Snackcakes",
            elo: 950.8450537993219,
            region: "NA",
            slug: "user/2a85e43f",
            confidence: 4,
            position: 369,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Spectrum",
            elo: 950.6980403510881,
            region: "NA",
            slug: "user/3cddb197",
            confidence: 2,
            position: 370,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "PlutOh",
            elo: 947.9788513626183,
            region: "NA",
            slug: "user/c72360b0",
            confidence: 2,
            position: 371,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "SABER",
            elo: 946.0094401637812,
            region: "UNK",
            slug: "user/2955cbd9",
            confidence: 3,
            position: 372,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"SABER",
            winner_score:3,
            loser_name:"Pikmin",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Pikmin",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SABER",
                            winner_score:3,
                            loser_name:"Pikmin",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "DCGrz",
            elo: 945.1582708097554,
            region: "SA",
            slug: "user/fa3b57bc",
            confidence: 5,
            position: 373,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"DCGrz",
            winner_score:3,
            loser_name:"Schwi",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Schwi",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DCGrz",
                            winner_score:3,
                            loser_name:"Schwi",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Astuarte",
            elo: 939.0248720094353,
            region: "NA",
            slug: "user/5ae7b136",
            confidence: 2,
            position: 374,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Senpapi512",
            elo: 938.8865634713361,
            region: "NA",
            slug: "user/b081a8fc",
            confidence: 2,
            position: 375,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Haji",
            elo: 936.4250610488283,
            region: "NA",
            slug: "user/f6448670",
            confidence: 8,
            position: 376,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Haji",
            winner_score:3,
            loser_name:"GoetiaGC",
            loser_score:1
        },

        
        {
            winner_name:"Haji",
            winner_score:3,
            loser_name:"Richi the Moon",
            loser_score:0
        },

        
        {
            winner_name:"Haji",
            winner_score:3,
            loser_name:"JayNy",
            loser_score:0
        },

        
        {
            winner_name:"Haji",
            winner_score:3,
            loser_name:"AlexNomas",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Richi the Moon",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Haji",
                            winner_score:3,
                            loser_name:"Richi the Moon",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Zachary Lacy",
            elo: 936.3021161851784,
            region: "NA",
            slug: "user/757a10f1",
            confidence: 7,
            position: 377,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Zachary Lacy",
            winner_score:3,
            loser_name:"DGF",
            loser_score:2
        },

        
        {
            winner_name:"Zachary Lacy",
            winner_score:3,
            loser_name:"Scrappy Sensei",
            loser_score:0
        },

        
        {
            winner_name:"Zachary Lacy",
            winner_score:3,
            loser_name:"Scrappy Sensei",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Scrappy Sensei",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zachary Lacy",
                            winner_score:3,
                            loser_name:"Scrappy Sensei",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Zachary Lacy",
                            winner_score:3,
                            loser_name:"Scrappy Sensei",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "DGF",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zachary Lacy",
                            winner_score:3,
                            loser_name:"DGF",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Norrin Radd",
            elo: 935.6866507631784,
            region: "EU",
            slug: "user/62b0c821",
            confidence: 3,
            position: 378,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Norrin Radd",
            winner_score:3,
            loser_name:"IdontKnowMyName",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "IdontKnowMyName",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Norrin Radd",
                            winner_score:3,
                            loser_name:"IdontKnowMyName",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Xiii",
            elo: 935.3615585404373,
            region: "NA",
            slug: "user/d3fb358d",
            confidence: 2,
            position: 379,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Crucified_majima",
            elo: 933.7798857638775,
            region: "NA",
            slug: "user/79b58fdd",
            confidence: 3,
            position: 380,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Crucified_majima",
            winner_score:3,
            loser_name:"Pattler",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Pattler",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Crucified_majima",
                            winner_score:3,
                            loser_name:"Pattler",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Zarlet",
            elo: 929.0779841939618,
            region: "NA",
            slug: "user/f7d2e818",
            confidence: 14,
            position: 381,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Zarlet",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:2
        },

        
        {
            winner_name:"Zarlet",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:1
        },

        
        {
            winner_name:"Zarlet",
            winner_score:3,
            loser_name:"Duel",
            loser_score:2
        },

        
        {
            winner_name:"Zarlet",
            winner_score:3,
            loser_name:"Duel",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Duel",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zarlet",
                            winner_score:3,
                            loser_name:"Duel",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Zarlet",
                            winner_score:3,
                            loser_name:"Duel",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "NSE",
            elo: 928.4743926184085,
            region: "EU",
            slug: "user/fb26c7b1",
            confidence: 3,
            position: 382,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"NSE",
            winner_score:3,
            loser_name:"SuppIns",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "SuppIns",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"NSE",
                            winner_score:3,
                            loser_name:"SuppIns",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Greatmario64",
            elo: 924.3498034808651,
            region: "NA",
            slug: "user/a25e81b9",
            confidence: 6,
            position: 383,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Greatmario64",
            winner_score:3,
            loser_name:"LightSpeed",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LightSpeed",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Greatmario64",
                            winner_score:3,
                            loser_name:"LightSpeed",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Greatmario64",
                            winner_score:3,
                            loser_name:"LightSpeed",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Dinner",
            elo: 921.8460556653828,
            region: "NA",
            slug: "user/a9c90d56",
            confidence: 2,
            position: 384,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Joseca500",
            elo: 921.5445623851921,
            region: "EU",
            slug: "user/ad94c00c",
            confidence: 2,
            position: 385,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Manow",
            elo: 919.8076443001775,
            region: "ASIA",
            slug: "user/0269e4c9",
            confidence: 1,
            position: 386,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "ZeperTheStar",
            elo: 917.4378233673709,
            region: "NA",
            slug: "user/c35d9549",
            confidence: 3,
            position: 387,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"ZeperTheStar",
            winner_score:3,
            loser_name:"Crucified_majima",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Crucified_majima",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"ZeperTheStar",
                            winner_score:3,
                            loser_name:"Crucified_majima",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "luckidyne",
            elo: 916.897087134147,
            region: "UNK",
            slug: "user/13f24174",
            confidence: 2,
            position: 388,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "DreemWyvern",
            elo: 915.7481618593878,
            region: "NA",
            slug: "user/3e6d4bda",
            confidence: 2,
            position: 389,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "I Lose",
            elo: 911.9857184314305,
            region: "NA",
            slug: "user/c36f093c",
            confidence: 3,
            position: 390,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"I Lose",
            winner_score:3,
            loser_name:"M4dK1ng",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "M4dK1ng",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"I Lose",
                            winner_score:3,
                            loser_name:"M4dK1ng",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Zamurai Cris",
            elo: 910.97078943153,
            region: "NA",
            slug: "user/3bbfaf54",
            confidence: 4,
            position: 391,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "tylerGplays",
            elo: 910.8262138305865,
            region: "UNK",
            slug: "user/19b49def",
            confidence: 2,
            position: 392,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Chicken Fish",
            elo: 910.7478448030757,
            region: "EU",
            slug: "user/dbfd16f6",
            confidence: 31,
            position: 393,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Chicken Fish",
            winner_score:3,
            loser_name:"Occurring Gap",
            loser_score:2
        },

        
        {
            winner_name:"Chicken Fish",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
            loser_score:2
        },

        
        {
            winner_name:"Chicken Fish",
            winner_score:3,
            loser_name:"jak_d_ripr",
            loser_score:2
        },

        
        {
            winner_name:"Chicken Fish",
            winner_score:3,
            loser_name:"Elitebabar25",
            loser_score:1
        },

        
        {
            winner_name:"Chicken Fish",
            winner_score:3,
            loser_name:"Cheerustre",
            loser_score:2
        },

        
        {
            winner_name:"Chicken Fish",
            winner_score:3,
            loser_name:"AngryCheese",
            loser_score:2
        },

        
        {
            winner_name:"Chicken Fish",
            winner_score:3,
            loser_name:"Mookeh",
            loser_score:0
        },

        
        {
            winner_name:"Chicken Fish",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
        {
            winner_name:"Chicken Fish",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "XJ-9",
            elo: 910.715566878981,
            region: "NA",
            slug: "user/c5542724",
            confidence: 1,
            position: 394,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Fluospace",
            elo: 906.9143370870282,
            region: "EU",
            slug: "user/db40fd2a",
            confidence: 2,
            position: 395,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "TheGrizzwald",
            elo: 902.898269330249,
            region: "NA",
            slug: "user/13c9c8bf",
            confidence: 13,
            position: 396,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"TheGrizzwald",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:-1
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Cheerustre",
            elo: 901.8793959930138,
            region: "NA",
            slug: "user/7f275363",
            confidence: 10,
            position: 397,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Cheerustre",
            winner_score:3,
            loser_name:"Swag and Watch",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Swag and Watch",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Cheerustre",
                            winner_score:3,
                            loser_name:"Swag and Watch",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Cheerustre",
                            winner_score:3,
                            loser_name:"Swag and Watch",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "AngryCheese",
            elo: 896.6678370945924,
            region: "UNK",
            slug: "user/b8331d2d",
            confidence: 2,
            position: 398,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "kaen",
            elo: 896.0155702440034,
            region: "NA",
            slug: "user/639483ac",
            confidence: 2,
            position: 399,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "CrimeSlayer",
            elo: 894.010263121754,
            region: "NA",
            slug: "user/7b662247",
            confidence: 2,
            position: 400,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "NightWolf3348",
            elo: 891.975258531131,
            region: "UNK",
            slug: "user/648eab47",
            confidence: 2,
            position: 401,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "D-Nis",
            elo: 889.5401738463113,
            region: "EU",
            slug: "user/9063df17",
            confidence: 2,
            position: 402,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "MisfitxPanda",
            elo: 889.4470162611278,
            region: "NA",
            slug: "user/1140519e",
            confidence: 2,
            position: 403,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Forgoten",
            elo: 887.2063177819202,
            region: "NA",
            slug: "user/d60ab447",
            confidence: 22,
            position: 404,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Forgoten",
            winner_score:3,
            loser_name:"Arvald",
            loser_score:0
        },

        
        {
            winner_name:"Forgoten",
            winner_score:3,
            loser_name:"GoetiaGC",
            loser_score:0
        },

        
        {
            winner_name:"Forgoten",
            winner_score:3,
            loser_name:"Haji",
            loser_score:1
        },

        
        {
            winner_name:"Forgoten",
            winner_score:3,
            loser_name:"Garumb",
            loser_score:0
        },

        
        {
            winner_name:"Forgoten",
            winner_score:3,
            loser_name:"Richi the Moon",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "GoetiaGC",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Forgoten",
                            winner_score:3,
                            loser_name:"GoetiaGC",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Forgoten",
                        loser_score:3,
                        winner_name:"GoetiaGC",
                        winner_score:0
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Yexrobd",
            elo: 884.7047037310437,
            region: "NA",
            slug: "user/db009a46",
            confidence: 2,
            position: 405,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Chidz",
            elo: 884.2377964365094,
            region: "EU",
            slug: "user/519aa3b4",
            confidence: 2,
            position: 406,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "GearDragon",
            elo: 882.9792850632039,
            region: "NA",
            slug: "user/91ccb79e",
            confidence: 2,
            position: 407,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Troggz93",
            elo: 880.6175952049861,
            region: "NA",
            slug: "user/7b5a423d",
            confidence: 7,
            position: 408,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Swag and Watch",
            elo: 872.1311056886893,
            region: "NA",
            slug: "user/11736757",
            confidence: 8,
            position: 409,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Swag and Watch",
            winner_score:3,
            loser_name:"Chicken Fish",
            loser_score:2
        },

        
        {
            winner_name:"Swag and Watch",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Tron_ultimate_XX",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Swag and Watch",
                            winner_score:3,
                            loser_name:"Tron_ultimate_XX",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Swag and Watch",
                            winner_score:3,
                            loser_name:"Tron_ultimate_XX",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Chicken Fish",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Swag and Watch",
                            winner_score:3,
                            loser_name:"Chicken Fish",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Swag and Watch",
                            winner_score:3,
                            loser_name:"Chicken Fish",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "pdhewitt",
            elo: 872.0874967059907,
            region: "NA",
            slug: "user/6f730045",
            confidence: 4,
            position: 410,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Sora",
            elo: 872.0834278722031,
            region: "NA",
            slug: "user/8b5441d9",
            confidence: 2,
            position: 411,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "falling_robin",
            elo: 871.687007805879,
            region: "NA",
            slug: "user/9e4a95f3",
            confidence: 2,
            position: 412,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Scuts",
            elo: 871.5730639451748,
            region: "NA",
            slug: "user/73c69d4e",
            confidence: 3,
            position: 413,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Scuts",
            winner_score:3,
            loser_name:"Twak",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Twak",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Scuts",
                            winner_score:3,
                            loser_name:"Twak",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "The Doorman",
            elo: 867.2209066794737,
            region: "NA",
            slug: "user/d6d6308d",
            confidence: 2,
            position: 414,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Konk",
            elo: 866.8012050674037,
            region: "NA",
            slug: "user/63a6f7e9",
            confidence: 2,
            position: 415,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Cow",
            elo: 865.6205960362295,
            region: "NA",
            slug: "user/27945744",
            confidence: 2,
            position: 416,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Basil_Underscore",
            elo: 865.365025756911,
            region: "NA",
            slug: "user/53028014",
            confidence: 4,
            position: 417,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Zesaming",
            elo: 864.6555878370154,
            region: "UNK",
            slug: "user/7c5aa4d0",
            confidence: 1,
            position: 418,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "WheresMyKeys",
            elo: 863.3701636412376,
            region: "NA",
            slug: "user/cce78c7b",
            confidence: 2,
            position: 419,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Primecore28",
            elo: 858.9231357707372,
            region: "NA",
            slug: "user/d79f1d24",
            confidence: 2,
            position: 420,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "KazuFoxFire",
            elo: 858.1499054118315,
            region: "UNK",
            slug: "user/c211b99a",
            confidence: 4,
            position: 421,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Pattler",
            elo: 857.1581235466128,
            region: "NA",
            slug: "user/f79d28d7",
            confidence: 2,
            position: 422,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Asanaka",
            elo: 854.2462815075125,
            region: "EU",
            slug: "user/94deca91",
            confidence: 2,
            position: 423,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Wynzki",
            elo: 853.4814196202585,
            region: "NA",
            slug: "user/d9473976",
            confidence: 2,
            position: 424,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "KyonHB",
            elo: 852.736358926612,
            region: "NA",
            slug: "user/ecdea93a",
            confidence: 6,
            position: 425,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"KyonHB",
            winner_score:3,
            loser_name:"Trashfox",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Yemster",
            elo: 850.6402061885232,
            region: "UNK",
            slug: "user/d32258cf",
            confidence: 2,
            position: 426,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "NepGear",
            elo: 849.531549040955,
            region: "NA",
            slug: "user/8ba5a69e",
            confidence: 2,
            position: 427,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Matau32",
            elo: 849.0909711223527,
            region: "UNK",
            slug: "user/62835d94",
            confidence: 4,
            position: 428,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Raranrorn",
            elo: 846.2029683725841,
            region: "ASIA",
            slug: "user/daaac772",
            confidence: 1,
            position: 429,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Mage",
            elo: 845.7572157195096,
            region: "NA",
            slug: "user/42a31717",
            confidence: 2,
            position: 430,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Rodimus Prime",
            elo: 845.1728018000855,
            region: "NA",
            slug: "user/821eef35",
            confidence: 14,
            position: 431,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Rodimus Prime",
            winner_score:3,
            loser_name:"Ssj3enderman",
            loser_score:2
        },

        
        {
            winner_name:"Rodimus Prime",
            winner_score:3,
            loser_name:"Durandal",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Panda Yeux",
            elo: 842.9450303747515,
            region: "EU",
            slug: "user/91034fee",
            confidence: 2,
            position: 432,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Speed Weed",
            elo: 841.4493583392718,
            region: "NA",
            slug: "user/f534db4c",
            confidence: 2,
            position: 433,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Jyon",
            elo: 841.1435222303344,
            region: "SA",
            slug: "user/ec69faa3",
            confidence: 2,
            position: 434,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "KiaRio",
            elo: 836.4122823501826,
            region: "NA",
            slug: "user/053db759",
            confidence: 2,
            position: 435,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Inousann",
            elo: 834.10033127296,
            region: "OCE",
            slug: "user/5dcb3ec7",
            confidence: 3,
            position: 436,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Inousann",
            winner_score:3,
            loser_name:"Fudge Harvey Oswald",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Fudge Harvey Oswald",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Inousann",
                            winner_score:3,
                            loser_name:"Fudge Harvey Oswald",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Espada",
            elo: 834.0486620919288,
            region: "NA",
            slug: "user/92297e78",
            confidence: 4,
            position: 437,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Okano35",
            elo: 833.0784295607491,
            region: "NA",
            slug: "user/c9ac63b5",
            confidence: 2,
            position: 438,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "MKQueazy",
            elo: 825.166215880317,
            region: "NA",
            slug: "user/ed91b2fb",
            confidence: 2,
            position: 439,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Ak!ra",
            elo: 823.7761832187651,
            region: "OCE",
            slug: "user/567495bb",
            confidence: 1,
            position: 440,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Sand",
            elo: 823.1859856985304,
            region: "UNK",
            slug: "user/e94cec90",
            confidence: 2,
            position: 441,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Lucy the Lamia",
            elo: 822.4522076553369,
            region: "NA",
            slug: "user/9b67998a",
            confidence: 4,
            position: 442,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Lucy the Lamia",
            winner_score:3,
            loser_name:"CocoJudgesYou",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "CocoJudgesYou",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Lucy the Lamia",
                            winner_score:3,
                            loser_name:"CocoJudgesYou",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "warxt",
            elo: 820.5610918852888,
            region: "UNK",
            slug: "user/93caff34",
            confidence: 5,
            position: 443,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"warxt",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Tron_ultimate_XX",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"warxt",
                            winner_score:3,
                            loser_name:"Tron_ultimate_XX",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Keanu",
            elo: 818.9385152964768,
            region: "OCE",
            slug: "user/dd17975a",
            confidence: 2,
            position: 444,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Special Schmix",
            elo: 817.6070856752075,
            region: "NA",
            slug: "user/3c1c102a",
            confidence: 4,
            position: 445,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Redlykerozes",
            elo: 817.073872177871,
            region: "NA",
            slug: "user/fe498354",
            confidence: 4,
            position: 446,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Manil",
            elo: 812.8531934420247,
            region: "NA",
            slug: "user/b386a129",
            confidence: 5,
            position: 447,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Manil",
            winner_score:3,
            loser_name:"Abenson",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Abenson",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Manil",
                            winner_score:3,
                            loser_name:"Abenson",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Renna",
            elo: 811.2172521366547,
            region: "NA",
            slug: "user/9fed2107",
            confidence: 2,
            position: 448,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Weebmaru",
            elo: 809.2336278791585,
            region: "ASIA",
            slug: "user/782cc87f",
            confidence: 1,
            position: 449,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "ArcEltare",
            elo: 806.8363076753194,
            region: "NA",
            slug: "user/7a84ab4a",
            confidence: 2,
            position: 450,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "IdontKnowMyName",
            elo: 806.344500735559,
            region: "EU",
            slug: "user/58054db8",
            confidence: 2,
            position: 451,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Ab",
            elo: 806.0933460699642,
            region: "EU",
            slug: "user/df0b46f3",
            confidence: 2,
            position: 452,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "IRONGOD",
            elo: 804.9656582162197,
            region: "NA",
            slug: "user/2afafb89",
            confidence: 2,
            position: 453,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Spyder_306",
            elo: 804.2460666090006,
            region: "NA",
            slug: "user/d308c688",
            confidence: 12,
            position: 454,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Spyder_306",
            winner_score:3,
            loser_name:"icy crystals",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Kentoki",
            elo: 802.5265034270053,
            region: "NA",
            slug: "user/1aecfdd1",
            confidence: 7,
            position: 455,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Kentoki",
            winner_score:3,
            loser_name:"Gree",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Makoche",
            elo: 797.4095756462281,
            region: "EU",
            slug: "user/036e9ab7",
            confidence: 5,
            position: 456,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Makoche",
            winner_score:3,
            loser_name:"Artoria Nobunaga",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Artoria Nobunaga",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Makoche",
                            winner_score:3,
                            loser_name:"Artoria Nobunaga",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "EnnisHam",
            elo: 796.0881016746814,
            region: "NA",
            slug: "user/6a94305f",
            confidence: 2,
            position: 457,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Garumb",
            elo: 795.1813673642819,
            region: "NA",
            slug: "user/00d0529e",
            confidence: 10,
            position: 458,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Garumb",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:2
        },

        
        {
            winner_name:"Garumb",
            winner_score:3,
            loser_name:"JayNy",
            loser_score:0
        },

        
        {
            winner_name:"Garumb",
            winner_score:3,
            loser_name:"AlexNomas",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Forgoten",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Garumb",
                        loser_score:3,
                        winner_name:"Forgoten",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Garumb",
                            winner_score:3,
                            loser_name:"Forgoten",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Fudge Harvey Oswald",
            elo: 781.196995979478,
            region: "OCE",
            slug: "user/3689f903",
            confidence: 2,
            position: 459,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Mookeh",
            elo: 778.5107934265573,
            region: "UNK",
            slug: "user/dc4ad8b8",
            confidence: 4,
            position: 460,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Sweetener",
            elo: 776.7181871753327,
            region: "NA",
            slug: "user/ef4f3289",
            confidence: 2,
            position: 461,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Chriswill1984",
            elo: 776.5091481097563,
            region: "NA",
            slug: "user/33b0ac61",
            confidence: 2,
            position: 462,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Stars",
            elo: 774.8631214414839,
            region: "NA",
            slug: "user/542c1448",
            confidence: 4,
            position: 463,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Tortree",
            elo: 765.5583652099872,
            region: "NA",
            slug: "user/91bb4fdd",
            confidence: 2,
            position: 464,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Durandal",
            elo: 764.6794896340659,
            region: "NA",
            slug: "user/cdfdb725",
            confidence: 4,
            position: 465,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Schwi",
            elo: 761.6793455737034,
            region: "SA",
            slug: "user/fe1959d8",
            confidence: 2,
            position: 466,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Juicey",
            elo: 755.7852217627424,
            region: "NA",
            slug: "user/cb473b9b",
            confidence: 2,
            position: 467,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "TG",
            elo: 750.3663333288004,
            region: "EU",
            slug: "user/5a9c11f4",
            confidence: 2,
            position: 468,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Tack7800",
            elo: 749.4115646218315,
            region: "NA",
            slug: "user/f129e65c",
            confidence: 2,
            position: 469,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "ShadowJin",
            elo: 748.6977042430583,
            region: "NA",
            slug: "user/f5e32230",
            confidence: 1,
            position: 470,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Fishbones",
            elo: 748.6537935590738,
            region: "OCE",
            slug: "user/45f60344",
            confidence: 2,
            position: 471,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Moose",
            elo: 737.6123821781945,
            region: "NA",
            slug: "user/7c2711a3",
            confidence: 6,
            position: 472,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Scrappy Sensei",
            elo: 734.4698945160503,
            region: "NA",
            slug: "user/49dfa850",
            confidence: 9,
            position: 473,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Scrappy Sensei",
            winner_score:3,
            loser_name:"WooperTM",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "ghostlymilk13",
            elo: 731.6806080001085,
            region: "NA",
            slug: "user/a2e111cc",
            confidence: 2,
            position: 474,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Cytosine",
            elo: 726.6792421690692,
            region: "NA",
            slug: "user/0a3458f5",
            confidence: 4,
            position: 475,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Pigeta",
            elo: 722.6137442433441,
            region: "SA",
            slug: "user/c4451f1b",
            confidence: 2,
            position: 476,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Arkanjin",
            elo: 721.6437306679904,
            region: "NA",
            slug: "user/5368fadd",
            confidence: 4,
            position: 477,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Nice|Night|",
            elo: 718.6502985285791,
            region: "ASIA",
            slug: "user/7c5276e0",
            confidence: 1,
            position: 478,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "mintjulep",
            elo: 715.521060970134,
            region: "NA",
            slug: "user/4e591699",
            confidence: 6,
            position: 479,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "CocoJudgesYou",
            elo: 715.2152582178778,
            region: "NA",
            slug: "user/c879ce4d",
            confidence: 3,
            position: 480,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"CocoJudgesYou",
            winner_score:3,
            loser_name:"WooperTM",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "WooperTM",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"CocoJudgesYou",
                            winner_score:3,
                            loser_name:"WooperTM",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "LILBOWT",
            elo: 712.8155383204905,
            region: "NA",
            slug: "user/041dbfc0",
            confidence: 4,
            position: 481,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Riel",
            elo: 712.4932792096968,
            region: "ASIA",
            slug: "user/3621c602",
            confidence: 2,
            position: 482,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Sicras",
            elo: 712.2510227281093,
            region: "NA",
            slug: "user/8534adee",
            confidence: 2,
            position: 483,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Lupin X",
            elo: 710.166944788273,
            region: "NA",
            slug: "user/31dbf9e5",
            confidence: 2,
            position: 484,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "TRON",
            elo: 701.9725978818158,
            region: "NA",
            slug: "user/0518b11f",
            confidence: 2,
            position: 485,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Delta",
            elo: 698.1249292185997,
            region: "EU",
            slug: "user/854e48e3",
            confidence: 2,
            position: 486,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Clob",
            elo: 689.52472523902,
            region: "EU",
            slug: "user/3080f07a",
            confidence: 4,
            position: 487,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "TvError",
            elo: 687.703873316349,
            region: "EU",
            slug: "user/870a084e",
            confidence: 2,
            position: 488,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Taki",
            elo: 684.657606728624,
            region: "NA",
            slug: "user/11f397a2",
            confidence: 2,
            position: 489,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Play Melty",
            elo: 684.0926888391717,
            region: "UNK",
            slug: "user/86702c6c",
            confidence: 2,
            position: 490,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "YUKARIMETA",
            elo: 682.8463416990642,
            region: "NA",
            slug: "user/3a8a318e",
            confidence: 2,
            position: 491,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "M4dK1ng",
            elo: 680.9547877492079,
            region: "NA",
            slug: "user/88f5d1c3",
            confidence: 2,
            position: 492,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "DubKun",
            elo: 675.5012029320751,
            region: "NA",
            slug: "user/9b2ca0f4",
            confidence: 2,
            position: 493,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Twak",
            elo: 664.854275233383,
            region: "NA",
            slug: "user/25ab2217",
            confidence: 2,
            position: 494,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "EMP_Obama",
            elo: 656.3535442910401,
            region: "NA",
            slug: "user/c37474ec",
            confidence: 2,
            position: 495,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Foam Root",
            elo: 648.0260037090392,
            region: "NA",
            slug: "user/1c53abf2",
            confidence: 3,
            position: 496,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Barnstormer",
            elo: 642.2838387295643,
            region: "NA",
            slug: "user/85a6c011",
            confidence: 2,
            position: 497,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "JBC6382",
            elo: 641.0224150896581,
            region: "UNK",
            slug: "user/f4951a0d",
            confidence: 2,
            position: 498,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "NsGamer",
            elo: 640.51253728402,
            region: "NA",
            slug: "user/72788091",
            confidence: 2,
            position: 499,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "melody?",
            elo: 628.7871229735904,
            region: "NA",
            slug: "user/b4ee975c",
            confidence: 4,
            position: 500,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Blue Thunder",
            elo: 621.6411021624256,
            region: "NA",
            slug: "user/88c8306b",
            confidence: 8,
            position: 501,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Trashfox",
            elo: 619.357055668877,
            region: "NA",
            slug: "user/c90ad254",
            confidence: 4,
            position: 502,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Pikmin",
            elo: 614.788616290461,
            region: "NA",
            slug: "user/7a9746a9",
            confidence: 2,
            position: 503,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Tron_ultimate_XX",
            elo: 612.2371064614908,
            region: "EU",
            slug: "user/f1c9d121",
            confidence: 22,
            position: 504,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Tron_ultimate_XX",
            winner_score:3,
            loser_name:"Forgoten",
            loser_score:1
        },

        
        {
            winner_name:"Tron_ultimate_XX",
            winner_score:3,
            loser_name:"Dandy Mancannon",
            loser_score:0
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Dandy Mancannon",
            elo: 602.8916394652279,
            region: "NA",
            slug: "user/baf7e431",
            confidence: 3,
            position: 505,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "SuppIns",
            elo: 596.0331573371245,
            region: "EU",
            slug: "user/61cd68b8",
            confidence: 2,
            position: 506,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Pepega",
            elo: 581.3677311429478,
            region: "NA",
            slug: "user/dccc5171",
            confidence: 4,
            position: 507,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Duel",
            elo: 550.1660071346354,
            region: "UNK",
            slug: "user/de8a8b12",
            confidence: 2,
            position: 508,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Abenson",
            elo: 531.5580586897333,
            region: "NA",
            slug: "user/f8a33f5b",
            confidence: 2,
            position: 509,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "LightSpeed",
            elo: 489.0316030783638,
            region: "NA",
            slug: "user/ce1048cc",
            confidence: 2,
            position: 510,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Gree",
            elo: 463.7764079419193,
            region: "NA",
            slug: "user/f74a9f8e",
            confidence: 2,
            position: 511,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Richi the Moon",
            elo: 463.2660437125677,
            region: "NA",
            slug: "user/3927d758",
            confidence: 4,
            position: 512,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "JayNy",
            elo: 399.4300425227541,
            region: "NA",
            slug: "user/5b719931",
            confidence: 2,
            position: 513,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "WooperTM",
            elo: 396.1846756480115,
            region: "NA",
            slug: "user/8eb10c4d",
            confidence: 2,
            position: 514,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "icy crystals",
            elo: 378.13500009207644,
            region: "NA",
            slug: "user/83d0732c",
            confidence: 4,
            position: 515,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "AlexNomas",
            elo: 359.4179506015882,
            region: "NA",
            slug: "user/5f99ecad",
            confidence: 8,
            position: 516,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    

];
