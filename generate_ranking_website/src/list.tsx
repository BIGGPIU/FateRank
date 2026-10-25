
export const DATE_CREATED = "2026/10/25"

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
            username: "Cykes_02",
            elo: 2208.337551666749,
            region: "NA",
            slug: "user/1aaf3e94",
            confidence: 29,
            position: 1,
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
            loser_name:"Sonikun",
            loser_score:2
        },

        
        {
            winner_name:"Cykes_02",
            winner_score:3,
            loser_name:"TomoA",
            loser_score:1
        },

        
        {
            winner_name:"Cykes_02",
            winner_score:3,
            loser_name:"Monkey :)",
            loser_score:0
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
            loser_name:"Reapers Ruling Rat",
            loser_score:1
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
            rival_name: "Sonikun",
            rival_wins: 10,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "TomoA",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"TomoA",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"TomoA",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"TomoA",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Monkey :)",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Cykes_02",
                            winner_score:3,
                            loser_name:"Monkey :)",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Tumbleweed",
            elo: 2119.3958138868506,
            region: "EU",
            slug: "user/944de247",
            confidence: 14,
            position: 2,
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
            username: "NAKAKAPAGPABAGABAG",
            elo: 2090.4113180572776,
            region: "NA",
            slug: "user/6f5e9b4b",
            confidence: 6,
            position: 3,
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
            username: "KingofNinjas789",
            elo: 2079.6853351245286,
            region: "NA",
            slug: "user/81cc3da6",
            confidence: 74,
            position: 4,
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
            loser_name:"Sprite",
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
            loser_name:"Gex",
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
            elo: 1984.0455941661207,
            region: "NA",
            slug: "user/e602d6bb",
            confidence: 24,
            position: 5,
            player_info: {
                best_wins: [
                    
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
            loser_name:"Mahihkan Sky",
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
            loser_name:"Gex",
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
            elo: 1955.8737475384885,
            region: "NA",
            slug: "user/2d529950",
            confidence: 100,
            position: 6,
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
            loser_score:0
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
            loser_name:"Mahihkan Sky",
            loser_score:1
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

        
                ],
                rivals: [
                    
            {
            rival_name: "LuchikaDRS",
            rival_wins: 11,
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

            
            {
            rival_name: "E2DEKU",
            rival_wins: 8,
            rival_losses:3,
            recent_sets: [
                
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"E2DEKU",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"E2DEKU",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"E2DEKU",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Gex",
            rival_wins: 10,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Sonikun",
                            winner_score:3,
                            loser_name:"Gex",
                            loser_score:2
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
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Spritecranberry145829103",
            elo: 1919.7835835991307,
            region: "UNK",
            slug: "user/be47db16",
            confidence: 18,
            position: 7,
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
            username: "Ryazo",
            elo: 1910.912304996735,
            region: "NA",
            slug: "user/0c038e56",
            confidence: 32,
            position: 8,
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
            loser_name:"Lotad",
            loser_score:2
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
            username: "LuchikaDRS",
            elo: 1901.4437091515474,
            region: "NA",
            slug: "user/d6c43847",
            confidence: 52,
            position: 9,
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
            loser_name:"Chopsuey",
            loser_score:2
        },

        
        {
            winner_name:"LuchikaDRS",
            winner_score:3,
            loser_name:"Chopsuey",
            loser_score:1
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
            loser_name:"E2DEKU",
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
            loser_name:"Burnt Bread",
            loser_score:0
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
            loser_name:"Mastrcheap",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Sonikun",
            rival_wins: 1,
            rival_losses:11,
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
            rival_name: "Chopsuey",
            rival_wins: 10,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LuchikaDRS",
                            winner_score:3,
                            loser_name:"Chopsuey",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"LuchikaDRS",
                            winner_score:3,
                            loser_name:"Chopsuey",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"LuchikaDRS",
                            winner_score:3,
                            loser_name:"Chopsuey",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Burnt Bread",
            rival_wins: 6,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LuchikaDRS",
                            winner_score:3,
                            loser_name:"Burnt Bread",
                            loser_score:0
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
                            loser_name:"Burnt Bread",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "rat",
            elo: 1878.2136088628756,
            region: "OCE",
            slug: "user/73e8d816",
            confidence: 4,
            position: 10,
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
            username: "katy",
            elo: 1877.7633367900114,
            region: "NA",
            slug: "user/e6bf5fc5",
            confidence: 12,
            position: 11,
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
            username: "Monkey4012",
            elo: 1872.4893456096145,
            region: "NA",
            slug: "user/2706d2c5",
            confidence: 12,
            position: 12,
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
            elo: 1851.9528480952367,
            region: "NA",
            slug: "user/d875b9a3",
            confidence: 13,
            position: 13,
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
            loser_name:"Sturmfresser",
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
            username: "LA CAMA",
            elo: 1837.5329903277868,
            region: "UNK",
            slug: "user/a23f4764",
            confidence: 8,
            position: 14,
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
            username: "hashimo",
            elo: 1828.4850710178775,
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
            loser_name:"FenneccyFoxMV",
            loser_score:1
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
            username: "Chopsuey",
            elo: 1809.1945227407386,
            region: "NA",
            slug: "user/5e94fdfd",
            confidence: 30,
            position: 16,
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
            username: "RuneKat",
            elo: 1806.31010913605,
            region: "NA",
            slug: "user/5bfb1975",
            confidence: 4,
            position: 17,
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
            username: "Mahihkan Sky",
            elo: 1797.9533575118792,
            region: "NA",
            slug: "user/1981f799",
            confidence: 15,
            position: 18,
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

            
                ]
            }
        },

    
        {
            username: "L'Winner",
            elo: 1793.41465118561,
            region: "OCE",
            slug: "user/6cac5c3a",
            confidence: 12,
            position: 19,
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
            loser_name:"Ranga",
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
            loser_name:"wicca",
            loser_score:0
        },

        
        {
            winner_name:"L'Winner",
            winner_score:3,
            loser_name:"wicca",
            loser_score:1
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
            loser_name:"iDeeKay",
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
            rival_name: "wicca",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"L'Winner",
                            winner_score:3,
                            loser_name:"wicca",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"L'Winner",
                            winner_score:3,
                            loser_name:"wicca",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "iDeeKay",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"L'Winner",
                            winner_score:3,
                            loser_name:"iDeeKay",
                            loser_score:1
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
            position: 20,
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
            elo: 1785.8430295839669,
            region: "UNK",
            slug: "user/5976380f",
            confidence: 20,
            position: 21,
            player_info: {
                best_wins: [
                    
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
            loser_name:"Gex",
            loser_score:1
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
            loser_name:"Serene Smile",
            loser_score:0
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
            elo: 1783.9987634764473,
            region: "NA",
            slug: "user/14cf793e",
            confidence: 4,
            position: 22,
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
            username: "Hachi",
            elo: 1782.7036288010265,
            region: "NA",
            slug: "user/6ab1f2a8",
            confidence: 14,
            position: 23,
            player_info: {
                best_wins: [
                    
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
            loser_name:"Chopsuey",
            loser_score:0
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
            username: "Ronan Healy",
            elo: 1778.3771415284502,
            region: "NA",
            slug: "user/c8cdfd3a",
            confidence: 29,
            position: 24,
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
            loser_name:"NuclearTaco2042",
            loser_score:1
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
            loser_name:"Goji",
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
            loser_name:"BXR",
            loser_score:0
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
            loser_name:"EX Falchion",
            loser_score:2
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
            username: "Sprite",
            elo: 1768.5544449921797,
            region: "NA",
            slug: "user/189e57fd",
            confidence: 19,
            position: 25,
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
            username: "Guapo",
            elo: 1761.1575629323831,
            region: "NA",
            slug: "user/8512922f",
            confidence: 15,
            position: 26,
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
            username: "Charamie",
            elo: 1760.7136470179894,
            region: "ASIA",
            slug: "user/0a0375e6",
            confidence: 4,
            position: 27,
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
            username: "Mldorli",
            elo: 1759.053378817615,
            region: "NA",
            slug: "user/6ea2e0a7",
            confidence: 10,
            position: 28,
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
            loser_name:"Anima",
            loser_score:2
        },

        
        {
            winner_name:"Mldorli",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
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

        
        {
            winner_name:"Mldorli",
            winner_score:3,
            loser_name:"Night_Hunter47",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Gex",
            rival_wins: 3,
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
            rival_name: "Anima",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mldorli",
                            winner_score:3,
                            loser_name:"Anima",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Lotad",
            elo: 1754.2475906336124,
            region: "NA",
            slug: "user/a85715a4",
            confidence: 19,
            position: 29,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"E2DEKU",
            loser_score:1
        },

        
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"Gex",
            loser_score:0
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
            loser_name:"HCShark10",
            loser_score:0
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
            loser_name:"BUMBACHUNGA",
            loser_score:1
        },

        
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"BUMBACHUNGA",
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

        
        {
            winner_name:"Lotad",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "BUMBACHUNGA",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Lotad",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Lotad",
                            winner_score:3,
                            loser_name:"BUMBACHUNGA",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "LuckyNaegi",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Lotad",
                            winner_score:3,
                            loser_name:"LuckyNaegi",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Lotad",
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
            username: "Pokke",
            elo: 1731.5629150581826,
            region: "NA",
            slug: "user/a15d56a9",
            confidence: 5,
            position: 30,
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
            username: "Zhen",
            elo: 1727.1892513892751,
            region: "NA",
            slug: "user/2d24630c",
            confidence: 9,
            position: 31,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Zhen",
            winner_score:3,
            loser_name:"Deighta",
            loser_score:0
        },

        
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

        
        {
            winner_name:"Zhen",
            winner_score:3,
            loser_name:"Vaporish",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Deighta",
            rival_wins: 1,
            rival_losses:3,
            recent_sets: [
                
                    {
                        loser_name:"Zhen",
                        loser_score:3,
                        winner_name:"Deighta",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"Zhen",
                        loser_score:3,
                        winner_name:"Deighta",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"Zhen",
                            winner_score:3,
                            loser_name:"Deighta",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "JR121",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zhen",
                            winner_score:3,
                            loser_name:"JR121",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Zhen",
                            winner_score:3,
                            loser_name:"JR121",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Vaporish",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Zhen",
                            winner_score:3,
                            loser_name:"Vaporish",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "LLon",
            elo: 1725.6879405838877,
            region: "KOR",
            slug: "user/27295b2c",
            confidence: 22,
            position: 32,
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
            username: "Crackin Atkins",
            elo: 1723.2932076053019,
            region: "NA",
            slug: "user/2455f196",
            confidence: 8,
            position: 33,
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
            username: "Megu",
            elo: 1718.42665283033,
            region: "UNK",
            slug: "user/670d2170",
            confidence: 2,
            position: 34,
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
            username: "MegMari_OTP",
            elo: 1711.6888392643646,
            region: "NA",
            slug: "user/ded8d290",
            confidence: 3,
            position: 35,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"MegMari_OTP",
            winner_score:3,
            loser_name:"JuneBug",
            loser_score:0
        },

        
        {
            winner_name:"MegMari_OTP",
            winner_score:3,
            loser_name:"tdog_93",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "JuneBug",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"MegMari_OTP",
                            winner_score:3,
                            loser_name:"JuneBug",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "tdog_93",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"MegMari_OTP",
                            winner_score:3,
                            loser_name:"tdog_93",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "TomoA",
            elo: 1706.6756230441367,
            region: "NA",
            slug: "user/416ca15a",
            confidence: 52,
            position: 36,
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
            loser_name:"Burnt Bread",
            loser_score:0
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
            rival_name: "Burnt Bread",
            rival_wins: 1,
            rival_losses:7,
            recent_sets: [
                
                    {
                        loser_name:"TomoA",
                        loser_score:3,
                        winner_name:"Burnt Bread",
                        winner_score:1
                    },
            
                    
                        {
                            winner_name:"TomoA",
                            winner_score:3,
                            loser_name:"Burnt Bread",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"TomoA",
                        loser_score:3,
                        winner_name:"Burnt Bread",
                        winner_score:0
                    },
            
                    
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Rhyllis",
            elo: 1702.5363960142026,
            region: "NA",
            slug: "user/b85a5251",
            confidence: 4,
            position: 37,
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
            username: "Yui",
            elo: 1700.0444629146502,
            region: "NA",
            slug: "user/d52d4bc0",
            confidence: 24,
            position: 38,
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
            loser_name:"Mahihkan Sky",
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
            rival_name: "Mahihkan Sky",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Yui",
                            winner_score:3,
                            loser_name:"Mahihkan Sky",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Yui",
                            winner_score:3,
                            loser_name:"Mahihkan Sky",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Yui",
                            winner_score:3,
                            loser_name:"Mahihkan Sky",
                            loser_score:2
                        },
                
                        
            ]
            },

            
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

            
                ]
            }
        },

    
        {
            username: "Fujyno",
            elo: 1697.53059699817,
            region: "EU",
            slug: "user/ff2f0dc4",
            confidence: 4,
            position: 39,
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
            username: "Oolong",
            elo: 1691.03302855495,
            region: "NA",
            slug: "user/6aa40c20",
            confidence: 4,
            position: 40,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Oolong",
            winner_score:3,
            loser_name:"Jaey",
            loser_score:0
        },

        
        {
            winner_name:"Oolong",
            winner_score:3,
            loser_name:"Laquai",
            loser_score:0
        },

        
        {
            winner_name:"Oolong",
            winner_score:3,
            loser_name:"avaunt",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "avaunt",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Oolong",
                            winner_score:3,
                            loser_name:"avaunt",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Laquai",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Oolong",
                            winner_score:3,
                            loser_name:"Laquai",
                            loser_score:0
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
            position: 41,
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
            position: 42,
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
            username: "E2DEKU",
            elo: 1687.946844250299,
            region: "NA",
            slug: "user/29555b35",
            confidence: 70,
            position: 43,
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
            loser_name:"Anima",
            loser_score:1
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
            loser_name:"HCShark10",
            loser_score:0
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
            rival_losses:8,
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
                        winner_score:0
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
            rival_name: "Patneko",
            rival_wins: 6,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"E2DEKU",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"E2DEKU",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"E2DEKU",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:1
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

            
                ]
            }
        },

    
        {
            username: "shadowPR",
            elo: 1685.3309799349838,
            region: "UNK",
            slug: "user/3a79de82",
            confidence: 10,
            position: 44,
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
            username: "Snake Eater",
            elo: 1682.524410533487,
            region: "NA",
            slug: "user/63d5cb8d",
            confidence: 3,
            position: 45,
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
            username: "Iota",
            elo: 1679.7857667528797,
            region: "NA",
            slug: "user/3a631faa",
            confidence: 12,
            position: 46,
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
            username: "Gex",
            elo: 1677.313582110351,
            region: "UNK",
            slug: "user/55542af6",
            confidence: 81,
            position: 47,
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
            loser_name:"Burnt Bread",
            loser_score:0
        },

        
        {
            winner_name:"Gex",
            winner_score:3,
            loser_name:"Anima",
            loser_score:2
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
            rival_wins: 7,
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
                            loser_score:1
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
            username: "MysteryRacer21",
            elo: 1674.3596494930632,
            region: "UNK",
            slug: "user/acdcd517",
            confidence: 19,
            position: 48,
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
            username: "Burnt Bread",
            elo: 1674.2971740978264,
            region: "UNK",
            slug: "user/c8f8515c",
            confidence: 33,
            position: 49,
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
            loser_name:"TomoA",
            loser_score:1
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
            loser_name:"Serene Smile",
            loser_score:0
        },

        
        {
            winner_name:"Burnt Bread",
            winner_score:3,
            loser_name:"Oguri Cap",
            loser_score:0
        },

        
        {
            winner_name:"Burnt Bread",
            winner_score:3,
            loser_name:"LitAtNightShow",
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
            rival_wins: 7,
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
            rival_name: "Serene Smile",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Burnt Bread",
                            winner_score:3,
                            loser_name:"Serene Smile",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Burnt Bread",
                            winner_score:3,
                            loser_name:"Serene Smile",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Burnt Bread",
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
            position: 50,
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
            position: 51,
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
            username: "Raich",
            elo: 1666.7764035773857,
            region: "NA",
            slug: "user/792c29de",
            confidence: 74,
            position: 52,
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
            loser_name:"MegMari_OTP",
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
            loser_name:"DaBelowZero",
            loser_score:1
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
            loser_name:"Laspanditas",
            loser_score:0
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
            loser_name:"FourSwordKirby",
            loser_score:2
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
            loser_name:"thechriss2004s",
            loser_score:1
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"JuneBug",
            loser_score:0
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
            loser_name:"MrEater",
            loser_score:1
        },

        
        {
            winner_name:"Raich",
            winner_score:3,
            loser_name:"NuclearTaco2042",
            loser_score:0
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
            username: "Deighta",
            elo: 1666.3066655811856,
            region: "NA",
            slug: "user/3b5ed3ac",
            confidence: 9,
            position: 53,
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
            loser_name:"Zhen",
            loser_score:1
        },

        
        {
            winner_name:"Deighta",
            winner_score:3,
            loser_name:"Zhen",
            loser_score:2
        },

        
        {
            winner_name:"Deighta",
            winner_score:3,
            loser_name:"JR121",
            loser_score:0
        },

        
        {
            winner_name:"Deighta",
            winner_score:3,
            loser_name:"Stars",
            loser_score:0
        },

        
        {
            winner_name:"Deighta",
            winner_score:3,
            loser_name:"Moose",
            loser_score:0
        },

        
        {
            winner_name:"Deighta",
            winner_score:3,
            loser_name:"Moose",
            loser_score:2
        },

        
        {
            winner_name:"Deighta",
            winner_score:3,
            loser_name:"SilverTabby",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Zhen",
            rival_wins: 3,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Deighta",
                            winner_score:3,
                            loser_name:"Zhen",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Deighta",
                            winner_score:3,
                            loser_name:"Zhen",
                            loser_score:1
                        },
                
                        
                    {
                        loser_name:"Deighta",
                        loser_score:3,
                        winner_name:"Zhen",
                        winner_score:0
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Moose",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Deighta",
                            winner_score:3,
                            loser_name:"Moose",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Deighta",
                            winner_score:3,
                            loser_name:"Moose",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "JR121",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Deighta",
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
            username: "結月有希 ~ Yuzuki Yuki",
            elo: 1664.514764799793,
            region: "NA",
            slug: "user/326a2268",
            confidence: 10,
            position: 54,
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
            username: "Monkey :)",
            elo: 1662.346739388393,
            region: "NA",
            slug: "user/40a2c783",
            confidence: 56,
            position: 55,
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
            loser_name:"YOGAMEWIZARD",
            loser_score:1
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
            loser_name:"Yellow_SB2",
            loser_score:2
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
            loser_name:"Wool",
            loser_score:0
        },

        
        {
            winner_name:"Monkey :)",
            winner_score:3,
            loser_name:"Intimidaving",
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
            rival_name: "Yellow_SB2",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Monkey :)",
                            winner_score:3,
                            loser_name:"Yellow_SB2",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Monkey :)",
                            winner_score:3,
                            loser_name:"Yellow_SB2",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Monkey :)",
                            winner_score:3,
                            loser_name:"Yellow_SB2",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Pokedude",
            elo: 1662.1603753490565,
            region: "UNK",
            slug: "user/9f4bf6c5",
            confidence: 15,
            position: 56,
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
            username: "Luke1235",
            elo: 1657.1341564201257,
            region: "EU",
            slug: "user/28427a09",
            confidence: 9,
            position: 57,
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
            username: "Kreation",
            elo: 1655.7414908475098,
            region: "SA",
            slug: "user/8608bd2f",
            confidence: 10,
            position: 58,
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
            username: "SethMitchy",
            elo: 1652.4688522779154,
            region: "NA",
            slug: "user/6c82c752",
            confidence: 2,
            position: 59,
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
            username: "Shrub",
            elo: 1647.7591835741546,
            region: "NA",
            slug: "user/432f2103",
            confidence: 6,
            position: 60,
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
            username: "DaBelowZero",
            elo: 1643.609356684456,
            region: "NA",
            slug: "user/f2206539",
            confidence: 12,
            position: 61,
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
            username: "Yat",
            elo: 1643.1846705931534,
            region: "NA",
            slug: "user/d80c1c6d",
            confidence: 4,
            position: 62,
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
            username: "Mastrcheap",
            elo: 1643.0479920068083,
            region: "NA",
            slug: "user/1e186b5c",
            confidence: 33,
            position: 63,
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
            loser_score:1
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
            rival_wins: 9,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mastrcheap",
                            winner_score:3,
                            loser_name:"Serene Smile",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Mastrcheap",
                            winner_score:3,
                            loser_name:"Serene Smile",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Mastrcheap",
                            winner_score:3,
                            loser_name:"Serene Smile",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Duckator",
            elo: 1641.2133589176246,
            region: "NA",
            slug: "user/4f876735",
            confidence: 6,
            position: 64,
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
            username: "Mr.Pengu",
            elo: 1639.911845517407,
            region: "NA",
            slug: "user/20910131",
            confidence: 26,
            position: 65,
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
            username: "Raoden",
            elo: 1629.2954884921926,
            region: "OCE",
            slug: "user/6d13f391",
            confidence: 12,
            position: 66,
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
            loser_name:"crazyhead",
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
            username: "Chosen Undead",
            elo: 1618.35814764913,
            region: "NA",
            slug: "user/88f2eca3",
            confidence: 5,
            position: 67,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Chosen Undead",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:1
        },

        
        {
            winner_name:"Chosen Undead",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:2
        },

        
        {
            winner_name:"Chosen Undead",
            winner_score:3,
            loser_name:"Lucy the Lamia",
            loser_score:0
        },

        
        {
            winner_name:"Chosen Undead",
            winner_score:3,
            loser_name:"Jay314",
            loser_score:1
        },

        
        {
            winner_name:"Chosen Undead",
            winner_score:3,
            loser_name:"Zarlet",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Fish Liquor",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Chosen Undead",
                            winner_score:3,
                            loser_name:"Fish Liquor",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "jadestar63",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Chosen Undead",
                            winner_score:3,
                            loser_name:"jadestar63",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Jay314",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Chosen Undead",
                            winner_score:3,
                            loser_name:"Jay314",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mimighoul Master",
            elo: 1607.7468060145636,
            region: "NA",
            slug: "user/1c7daef6",
            confidence: 13,
            position: 68,
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
            username: "Night",
            elo: 1606.977777123809,
            region: "NA",
            slug: "user/8ae49298",
            confidence: 18,
            position: 69,
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
            loser_name:"Mcintosh2002",
            loser_score:0
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
            username: "Anima",
            elo: 1604.2273411106676,
            region: "NA",
            slug: "user/baf89dd1",
            confidence: 13,
            position: 70,
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
            loser_name:"Oguri Cap",
            loser_score:1
        },

        
        {
            winner_name:"Anima",
            winner_score:3,
            loser_name:"SSBSonic",
            loser_score:2
        },

        
        {
            winner_name:"Anima",
            winner_score:3,
            loser_name:"LuckyNaegi",
            loser_score:0
        },

        
        {
            winner_name:"Anima",
            winner_score:3,
            loser_name:"Mehkifan",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "SSBSonic",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Anima",
                            winner_score:3,
                            loser_name:"SSBSonic",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Oguri Cap",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Anima",
                            winner_score:3,
                            loser_name:"Oguri Cap",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Occurring Gap",
            elo: 1594.5686892803647,
            region: "NA",
            slug: "user/6dc179d6",
            confidence: 12,
            position: 71,
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
            username: "MerrliT",
            elo: 1593.2290859261375,
            region: "UNK",
            slug: "user/c5d9cd33",
            confidence: 6,
            position: 72,
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
            username: "Reapers Ruling Rat",
            elo: 1592.1526409348055,
            region: "NA",
            slug: "user/fcc41777",
            confidence: 52,
            position: 73,
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
            loser_name:"Zrrkon",
            loser_score:2
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
            loser_name:"jadestar63",
            loser_score:0
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
            loser_name:"bweans",
            loser_score:0
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
            loser_name:"Intimidaving",
            loser_score:1
        },

        
        {
            winner_name:"Reapers Ruling Rat",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
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
            username: "Reilly",
            elo: 1591.4392091697327,
            region: "NA",
            slug: "user/6c5e9735",
            confidence: 36,
            position: 74,
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
            loser_name:"NepGear",
            loser_score:1
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
            loser_name:"Luff",
            loser_score:0
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
            loser_name:"coolcalmsam",
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
            rival_name: "NepGear",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Reilly",
                            winner_score:3,
                            loser_name:"NepGear",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Reilly",
                            winner_score:3,
                            loser_name:"NepGear",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Reilly",
                            winner_score:3,
                            loser_name:"NepGear",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "coolcalmsam",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Reilly",
                            winner_score:3,
                            loser_name:"coolcalmsam",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Reilly",
                            winner_score:3,
                            loser_name:"coolcalmsam",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Reilly",
                            winner_score:3,
                            loser_name:"coolcalmsam",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "SmolSquish",
            elo: 1588.8570390941998,
            region: "UNK",
            slug: "user/33ac8302",
            confidence: 4,
            position: 75,
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
            username: "Trashy",
            elo: 1581.865076717016,
            region: "EU",
            slug: "user/8120d84f",
            confidence: 12,
            position: 76,
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
            username: "Filter",
            elo: 1579.1457072466023,
            region: "NA",
            slug: "user/bc6a4201",
            confidence: 3,
            position: 77,
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
            username: "JOE MAMA",
            elo: 1574.4790573679265,
            region: "NA",
            slug: "user/dbbc84f4",
            confidence: 10,
            position: 78,
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
            username: "Cythrin",
            elo: 1572.2346447725943,
            region: "NA",
            slug: "user/11c04680",
            confidence: 18,
            position: 79,
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
            username: "Brigadier_BunBun",
            elo: 1568.1337267933302,
            region: "NA",
            slug: "user/fb893722",
            confidence: 2,
            position: 80,
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
            username: "Laspanditas",
            elo: 1554.1509301372914,
            region: "NA",
            slug: "user/234bd946",
            confidence: 17,
            position: 81,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Laspanditas",
            winner_score:3,
            loser_name:"Nago",
            loser_score:2
        },

        
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
            loser_name:"nebbu",
            loser_score:1
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
            loser_name:"Blaze71",
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
            username: "FenneccyFoxMV",
            elo: 1551.5523959147176,
            region: "NA",
            slug: "user/b7c99cb3",
            confidence: 10,
            position: 82,
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
            username: "Twimmy",
            elo: 1549.2752317769746,
            region: "NA",
            slug: "user/f029cf7d",
            confidence: 7,
            position: 83,
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
            username: "Tucky",
            elo: 1548.2328937668192,
            region: "NA",
            slug: "user/3ee16c36",
            confidence: 2,
            position: 84,
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
            username: "alanae",
            elo: 1541.1104303147763,
            region: "EU",
            slug: "user/1a64177b",
            confidence: 15,
            position: 85,
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
            username: "Dr.Ragnarok",
            elo: 1540.7643251657873,
            region: "NA",
            slug: "user/e62334f2",
            confidence: 20,
            position: 86,
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
            username: "FourSwordKirby",
            elo: 1539.804584496189,
            region: "NA",
            slug: "user/df0d8159",
            confidence: 24,
            position: 87,
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
            username: "Jaey",
            elo: 1538.3774834226228,
            region: "NA",
            slug: "user/bf2e81fb",
            confidence: 7,
            position: 88,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Jaey",
            winner_score:3,
            loser_name:"UpgradetheThing",
            loser_score:0
        },

        
        {
            winner_name:"Jaey",
            winner_score:3,
            loser_name:"UpgradetheThing",
            loser_score:1
        },

        
        {
            winner_name:"Jaey",
            winner_score:3,
            loser_name:"Laquai",
            loser_score:1
        },

        
        {
            winner_name:"Jaey",
            winner_score:3,
            loser_name:"avaunt",
            loser_score:0
        },

        
        {
            winner_name:"Jaey",
            winner_score:3,
            loser_name:"HyperDarkAwesome",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "UpgradetheThing",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Jaey",
                            winner_score:3,
                            loser_name:"UpgradetheThing",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Jaey",
                            winner_score:3,
                            loser_name:"UpgradetheThing",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "HyperDarkAwesome",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Jaey",
                            winner_score:3,
                            loser_name:"HyperDarkAwesome",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Laquai",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Jaey",
                            winner_score:3,
                            loser_name:"Laquai",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Edgelord44",
            elo: 1536.2796849619378,
            region: "NA",
            slug: "user/855d114b",
            confidence: 8,
            position: 89,
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
            username: "LouieTheKraken",
            elo: 1534.8957510626547,
            region: "EU",
            slug: "user/3becead3",
            confidence: 8,
            position: 90,
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
            username: "Bojack",
            elo: 1534.6466953865122,
            region: "NA",
            slug: "user/958b43af",
            confidence: 12,
            position: 91,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Bojack",
            winner_score:3,
            loser_name:"Moontide",
            loser_score:0
        },

        
        {
            winner_name:"Bojack",
            winner_score:3,
            loser_name:"Lant",
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
            username: "Tokai Tatum",
            elo: 1530.5515620498675,
            region: "NA",
            slug: "user/97273aba",
            confidence: 24,
            position: 92,
            player_info: {
                best_wins: [
                    
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
            loser_name:"jadestar63",
            loser_score:1
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
            loser_name:"Fish Liquor",
            loser_score:1
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
            username: "Valcan",
            elo: 1529.1465267311705,
            region: "ASIA",
            slug: "user/7ac74f62",
            confidence: 4,
            position: 93,
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
            position: 94,
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
            username: "YOGAMEWIZARD",
            elo: 1523.3799894323365,
            region: "NA",
            slug: "user/38b9de27",
            confidence: 18,
            position: 95,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"YOGAMEWIZARD",
            winner_score:3,
            loser_name:"Spritecranberry145829103",
            loser_score:2
        },

        
        {
            winner_name:"YOGAMEWIZARD",
            winner_score:3,
            loser_name:"Ryazo",
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
            username: "Lukiro",
            elo: 1520.5804114515506,
            region: "NA",
            slug: "user/537b5669",
            confidence: 5,
            position: 96,
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
            username: "BirdGang",
            elo: 1520.3147061197712,
            region: "NA",
            slug: "user/fc2cce1c",
            confidence: 4,
            position: 97,
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
            username: "Midboss",
            elo: 1519.1516302197188,
            region: "NA",
            slug: "user/f2e6f8ac",
            confidence: 9,
            position: 98,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Midboss",
            winner_score:3,
            loser_name:"Sorana",
            loser_score:0
        },

        
        {
            winner_name:"Midboss",
            winner_score:3,
            loser_name:"Vollrath",
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
            username: "thechriss2004s",
            elo: 1518.5088868752823,
            region: "UNK",
            slug: "user/c2944890",
            confidence: 55,
            position: 99,
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
            loser_name:"Ace Wonder",
            loser_score:2
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
            loser_name:"EX Falchion",
            loser_score:0
        },

        
        {
            winner_name:"thechriss2004s",
            winner_score:3,
            loser_name:"EX Falchion",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Ace Wonder",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"thechriss2004s",
                            winner_score:3,
                            loser_name:"Ace Wonder",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"thechriss2004s",
                            winner_score:3,
                            loser_name:"Ace Wonder",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"thechriss2004s",
                            winner_score:3,
                            loser_name:"Ace Wonder",
                            loser_score:2
                        },
                
                        
            ]
            },

            
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

            
                ]
            }
        },

    
        {
            username: "Orrax / Luke",
            elo: 1508.590303903521,
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
            username: "Hakari882",
            elo: 1506.770059743111,
            region: "ASIA",
            slug: "user/2e632b3e",
            confidence: 4,
            position: 101,
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
            position: 102,
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
            username: "Serene Smile",
            elo: 1504.873811677922,
            region: "NA",
            slug: "user/3b3752be",
            confidence: 42,
            position: 103,
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
            loser_name:"bweans",
            loser_score:2
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

        
        {
            winner_name:"Serene Smile",
            winner_score:3,
            loser_name:"Sturmfresser",
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

            
                ]
            }
        },

    
        {
            username: "GEN D",
            elo: 1504.1207245369017,
            region: "NA",
            slug: "user/c913b1b3",
            confidence: 12,
            position: 104,
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
            username: "MobiusRaven",
            elo: 1503.201559464932,
            region: "NA",
            slug: "user/c1ba8619",
            confidence: 13,
            position: 105,
            player_info: {
                best_wins: [
                    
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
            loser_name:"DGF",
            loser_score:2
        },

        
        {
            winner_name:"MobiusRaven",
            winner_score:3,
            loser_name:"CocoJudgesYou",
            loser_score:0
        },

        
        {
            winner_name:"MobiusRaven",
            winner_score:3,
            loser_name:"Scrappy Sensei",
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
            username: "BotanIsMyOshi69",
            elo: 1502.9634525152017,
            region: "NA",
            slug: "user/8a147aaa",
            confidence: 6,
            position: 106,
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
            username: "HCShark10",
            elo: 1500.518942880121,
            region: "NA",
            slug: "user/4595b8d4",
            confidence: 17,
            position: 107,
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
            loser_name:"Cytosine",
            loser_score:0
        },

        
        {
            winner_name:"HCShark10",
            winner_score:3,
            loser_name:"Durandal",
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
            username: "Masive",
            elo: 1499.2525160361724,
            region: "NA",
            slug: "user/070aa910",
            confidence: 8,
            position: 108,
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
            username: "gemi+",
            elo: 1498.1912828096072,
            region: "NA",
            slug: "user/8fffb7eb",
            confidence: 4,
            position: 109,
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
            loser_name:"Larp",
            loser_score:0
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
            username: "JuneBug",
            elo: 1497.1944818344703,
            region: "NA",
            slug: "user/b51b59bf",
            confidence: 8,
            position: 110,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"JuneBug",
            winner_score:3,
            loser_name:"Laspanditas",
            loser_score:2
        },

        
        {
            winner_name:"JuneBug",
            winner_score:3,
            loser_name:"CrimShade",
            loser_score:2
        },

        
        {
            winner_name:"JuneBug",
            winner_score:3,
            loser_name:"nebbu",
            loser_score:0
        },

        
        {
            winner_name:"JuneBug",
            winner_score:3,
            loser_name:"Blaze71",
            loser_score:1
        },

        
        {
            winner_name:"JuneBug",
            winner_score:3,
            loser_name:"talking_chicken",
            loser_score:0
        },

        
        {
            winner_name:"JuneBug",
            winner_score:3,
            loser_name:"Takahiro",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Laspanditas",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"JuneBug",
                            winner_score:3,
                            loser_name:"Laspanditas",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "nebbu",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"JuneBug",
                            winner_score:3,
                            loser_name:"nebbu",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "RNGG",
            elo: 1496.5484726969853,
            region: "UNK",
            slug: "user/3a7bb97c",
            confidence: 20,
            position: 111,
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
            username: "Coffee Farmer",
            elo: 1492.9494894099262,
            region: "EU",
            slug: "user/e222bfab",
            confidence: 6,
            position: 112,
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
            username: "Wecondo",
            elo: 1491.366060941338,
            region: "NA",
            slug: "user/aae69048",
            confidence: 6,
            position: 113,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Wecondo",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:1
        },

        
        {
            winner_name:"Wecondo",
            winner_score:3,
            loser_name:"Sonikun",
            loser_score:0
        },

        
        {
            winner_name:"Wecondo",
            winner_score:3,
            loser_name:"Mldorli",
            loser_score:2
        },

        
        {
            winner_name:"Wecondo",
            winner_score:3,
            loser_name:"CoolmasterJG",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Sonikun",
            rival_wins: 2,
            rival_losses:1,
            recent_sets: [
                
                        {
                            winner_name:"Wecondo",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Wecondo",
                            winner_score:3,
                            loser_name:"Sonikun",
                            loser_score:0
                        },
                
                        
                    {
                        loser_name:"Wecondo",
                        loser_score:3,
                        winner_name:"Sonikun",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "Mldorli",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Wecondo",
                            winner_score:3,
                            loser_name:"Mldorli",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"Wecondo",
                            winner_score:3,
                            loser_name:"Mldorli",
                            loser_score:2
                        },
                
                        
            ]
            },

            
            {
            rival_name: "CoolmasterJG",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Wecondo",
                            winner_score:3,
                            loser_name:"CoolmasterJG",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "HBKMan",
            elo: 1487.4106415742383,
            region: "NA",
            slug: "user/61c3b4db",
            confidence: 7,
            position: 114,
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
            loser_name:"Xeagas",
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
            loser_name:"DreemWyvern",
            loser_score:2
        },

        
        {
            winner_name:"HBKMan",
            winner_score:3,
            loser_name:"Zachary Lacy",
            loser_score:0
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
            username: "Champo",
            elo: 1486.8660677975554,
            region: "ASIA",
            slug: "user/ebbefec3",
            confidence: 4,
            position: 115,
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
            username: "Zeden",
            elo: 1486.2693468220116,
            region: "EU",
            slug: "user/adf5f249",
            confidence: 4,
            position: 116,
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
            username: "BingDiaoQWQ",
            elo: 1478.7897545623657,
            region: "ASIA",
            slug: "user/6bb4bdb4",
            confidence: 15,
            position: 117,
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
            username: "Mop",
            elo: 1476.5475335400045,
            region: "NA",
            slug: "user/fac03a9e",
            confidence: 6,
            position: 118,
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
            username: "Xeagas",
            elo: 1472.2078194402338,
            region: "NA",
            slug: "user/07774503",
            confidence: 16,
            position: 119,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Xeagas",
            winner_score:3,
            loser_name:"amberrr",
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
            loser_name:"DreemWyvern",
            loser_score:1
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
            loser_name:"Zachary Lacy",
            loser_score:0
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
            loser_name:"CocoJudgesYou",
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
            rival_name: "DreemWyvern",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                    {
                        loser_name:"Xeagas",
                        loser_score:3,
                        winner_name:"DreemWyvern",
                        winner_score:2
                    },
            
                    
                    {
                        loser_name:"Xeagas",
                        loser_score:3,
                        winner_name:"DreemWyvern",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"Xeagas",
                            winner_score:3,
                            loser_name:"DreemWyvern",
                            loser_score:1
                        },
                
                        
            ]
            },

            
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
            username: "Karlaaaa",
            elo: 1467.3315872932792,
            region: "EU",
            slug: "user/7eb3b2b2",
            confidence: 5,
            position: 120,
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
            username: "MrEater",
            elo: 1465.2397641594114,
            region: "NA",
            slug: "user/bb80314f",
            confidence: 9,
            position: 121,
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
            username: "Oguri Cap",
            elo: 1461.3581584849471,
            region: "UNK",
            slug: "user/c7e96de0",
            confidence: 80,
            position: 122,
            player_info: {
                best_wins: [
                    
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
            loser_name:"jadestar63",
            loser_score:2
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

        
        {
            winner_name:"Oguri Cap",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:1
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
            loser_name:"Fish Liquor",
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
            rival_name: "Sora",
            rival_wins: 6,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Oguri Cap",
                            winner_score:3,
                            loser_name:"Sora",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Oguri Cap",
                            winner_score:3,
                            loser_name:"Sora",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Oguri Cap",
                            winner_score:3,
                            loser_name:"Sora",
                            loser_score:0
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
            username: "Kiomi",
            elo: 1461.2685320823243,
            region: "NA",
            slug: "user/1c28cd2f",
            confidence: 6,
            position: 123,
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
            username: "BigSloth",
            elo: 1459.8284434189545,
            region: "NA",
            slug: "user/8effeeb2",
            confidence: 1,
            position: 124,
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
            username: "yameteAsh",
            elo: 1458.2918449475849,
            region: "NA",
            slug: "user/4bdff17b",
            confidence: 7,
            position: 125,
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
            position: 126,
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
            username: "NuclearTaco2042",
            elo: 1455.0653204612715,
            region: "NA",
            slug: "user/fb0eb1bf",
            confidence: 18,
            position: 127,
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
            username: "dog",
            elo: 1454.0132949260624,
            region: "OCE",
            slug: "user/7ab7ef39",
            confidence: 2,
            position: 128,
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
            username: "Zrrkon",
            elo: 1450.7029985730205,
            region: "NA",
            slug: "user/6db54991",
            confidence: 22,
            position: 129,
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
            loser_name:"Shermies Bravest Hamster",
            loser_score:1
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
            loser_name:"Yat0ro",
            loser_score:0
        },

        
        {
            winner_name:"Zrrkon",
            winner_score:3,
            loser_name:"Yat0ro",
            loser_score:0
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
            username: "Patneko",
            elo: 1447.4926094407383,
            region: "NA",
            slug: "user/01913282",
            confidence: 83,
            position: 130,
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

            
                ]
            }
        },

    
        {
            username: "NonchalantVerde",
            elo: 1445.2870692235686,
            region: "NA",
            slug: "user/f1a50e8b",
            confidence: 4,
            position: 131,
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
            username: "jadestar63",
            elo: 1438.2054068943182,
            region: "NA",
            slug: "user/1a73f5dc",
            confidence: 57,
            position: 132,
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
            loser_name:"Reilly",
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
            loser_name:"Tokai Tatum",
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
            loser_name:"Zrrkon",
            loser_score:2
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
            loser_name:"bweans",
            loser_score:0
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
            loser_name:"Shyoshiguy",
            loser_score:2
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"Pillowtalk",
            loser_score:2
        },

        
        {
            winner_name:"jadestar63",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
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
            username: "Do It Mix Tho?",
            elo: 1437.4662285631532,
            region: "NA",
            slug: "user/e9a5af54",
            confidence: 4,
            position: 133,
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
            username: "Peepohold",
            elo: 1434.4013511378437,
            region: "EU",
            slug: "user/d0ae9e5c",
            confidence: 8,
            position: 134,
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
            username: "Omicron Austin",
            elo: 1431.7915591749938,
            region: "NA",
            slug: "user/9064ea66",
            confidence: 6,
            position: 135,
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
            username: "Zerochel",
            elo: 1430.4447512325132,
            region: "EU",
            slug: "user/377ce5d9",
            confidence: 4,
            position: 136,
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
            position: 137,
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
            position: 138,
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
            username: "BUMBACHUNGA",
            elo: 1423.5096479941012,
            region: "NA",
            slug: "user/39dcdc1f",
            confidence: 87,
            position: 139,
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
            loser_name:"NonchalantVerde",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LuckyNaegi",
            rival_wins: 6,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BUMBACHUNGA",
                            winner_score:3,
                            loser_name:"LuckyNaegi",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"BUMBACHUNGA",
                            winner_score:3,
                            loser_name:"LuckyNaegi",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"BUMBACHUNGA",
                            winner_score:3,
                            loser_name:"LuckyNaegi",
                            loser_score:2
                        },
                
                        
            ]
            },

            
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

            
                ]
            }
        },

    
        {
            username: "UpgradetheThing",
            elo: 1423.3185035436993,
            region: "NA",
            slug: "user/5f5ba9a4",
            confidence: 5,
            position: 140,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"UpgradetheThing",
            winner_score:3,
            loser_name:"Drewtwo",
            loser_score:2
        },

        
        {
            winner_name:"UpgradetheThing",
            winner_score:3,
            loser_name:"Drewtwo",
            loser_score:1
        },

        
        {
            winner_name:"UpgradetheThing",
            winner_score:3,
            loser_name:"HyperDarkAwesome",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Drewtwo",
            rival_wins: 2,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"UpgradetheThing",
                            winner_score:3,
                            loser_name:"Drewtwo",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"UpgradetheThing",
                            winner_score:3,
                            loser_name:"Drewtwo",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "HyperDarkAwesome",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"UpgradetheThing",
                            winner_score:3,
                            loser_name:"HyperDarkAwesome",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "JosesChrist",
            elo: 1421.942244686484,
            region: "UNK",
            slug: "user/d5028cd4",
            confidence: 8,
            position: 141,
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
            username: "Akihisa Sendo",
            elo: 1421.6928509172033,
            region: "NA",
            slug: "user/fc6f4a3f",
            confidence: 8,
            position: 142,
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
            username: "Ranga",
            elo: 1417.9426191834555,
            region: "OCE",
            slug: "user/9c40bb79",
            confidence: 11,
            position: 143,
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
            username: "canqkate",
            elo: 1417.867162848801,
            region: "UNK",
            slug: "user/996b0fd7",
            confidence: 2,
            position: 144,
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
            username: "crazyhead",
            elo: 1416.681948471241,
            region: "OCE",
            slug: "user/c25d4724",
            confidence: 5,
            position: 145,
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
            username: "amberrr",
            elo: 1416.1706110083792,
            region: "NA",
            slug: "user/a1a4571a",
            confidence: 5,
            position: 146,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"amberrr",
            winner_score:3,
            loser_name:"CjSphinx",
            loser_score:0
        },

        
        {
            winner_name:"amberrr",
            winner_score:3,
            loser_name:"Lucy the Lamia",
            loser_score:2
        },

        
        {
            winner_name:"amberrr",
            winner_score:3,
            loser_name:"Miss__Nightingale",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "CjSphinx",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"amberrr",
                            winner_score:3,
                            loser_name:"CjSphinx",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Lucy the Lamia",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"amberrr",
                            winner_score:3,
                            loser_name:"Lucy the Lamia",
                            loser_score:2
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
            position: 147,
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
            username: "Pssych",
            elo: 1413.2872484557354,
            region: "NA",
            slug: "user/d59b53aa",
            confidence: 9,
            position: 148,
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
            username: "Everlasting",
            elo: 1412.5679277417785,
            region: "UNK",
            slug: "user/5c469dc4",
            confidence: 5,
            position: 149,
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
            username: "EleosStar",
            elo: 1412.0859224824762,
            region: "EU",
            slug: "user/66154fbe",
            confidence: 11,
            position: 150,
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
            username: "Woe90",
            elo: 1409.4115907702299,
            region: "NA",
            slug: "user/ec318e4c",
            confidence: 16,
            position: 151,
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
            loser_name:"Zachary Lacy",
            loser_score:0
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
            username: "Nago",
            elo: 1406.3346405839775,
            region: "NA",
            slug: "user/c2f3dbb5",
            confidence: 12,
            position: 152,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Nago",
            winner_score:3,
            loser_name:"Xeagas",
            loser_score:2
        },

        
        {
            winner_name:"Nago",
            winner_score:3,
            loser_name:"Sompursone",
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
            username: "ThatScrubDavid",
            elo: 1405.2671208408153,
            region: "NA",
            slug: "user/ca4da892",
            confidence: 4,
            position: 153,
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
            username: "Sompursone",
            elo: 1403.9137418167973,
            region: "NA",
            slug: "user/6a67672a",
            confidence: 6,
            position: 154,
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
            username: "E30",
            elo: 1403.6600777508252,
            region: "NA",
            slug: "user/17970918",
            confidence: 16,
            position: 155,
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
            loser_name:"Jay314",
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
            username: "GragonMonkey",
            elo: 1403.4128484489922,
            region: "NA",
            slug: "user/7617abc0",
            confidence: 18,
            position: 156,
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
            loser_name:"Fish Liquor",
            loser_score:1
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
            username: "MMDK",
            elo: 1403.3618227462312,
            region: "ASIA",
            slug: "user/c4ffdadf",
            confidence: 2,
            position: 157,
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
            username: "Rothicus",
            elo: 1399.6537841004924,
            region: "NA",
            slug: "user/aeaa254b",
            confidence: 5,
            position: 158,
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
            username: "Mith",
            elo: 1392.665708239696,
            region: "SA",
            slug: "user/6809389f",
            confidence: 8,
            position: 159,
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
            username: "DreemWyvern",
            elo: 1392.6218079122884,
            region: "NA",
            slug: "user/3e6d4bda",
            confidence: 8,
            position: 160,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"DreemWyvern",
            winner_score:3,
            loser_name:"Xeagas",
            loser_score:2
        },

        
        {
            winner_name:"DreemWyvern",
            winner_score:3,
            loser_name:"amberrr",
            loser_score:1
        },

        
        {
            winner_name:"DreemWyvern",
            winner_score:3,
            loser_name:"Lucy the Lamia",
            loser_score:0
        },

        
        {
            winner_name:"DreemWyvern",
            winner_score:3,
            loser_name:"Scrappy Sensei",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Xeagas",
            rival_wins: 2,
            rival_losses:2,
            recent_sets: [
                
                        {
                            winner_name:"DreemWyvern",
                            winner_score:3,
                            loser_name:"Xeagas",
                            loser_score:2
                        },
                
                        
                        {
                            winner_name:"DreemWyvern",
                            winner_score:3,
                            loser_name:"Xeagas",
                            loser_score:2
                        },
                
                        
                    {
                        loser_name:"DreemWyvern",
                        loser_score:3,
                        winner_name:"Xeagas",
                        winner_score:1
                    },
            
                    
            ]
            },

            
            {
            rival_name: "amberrr",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DreemWyvern",
                            winner_score:3,
                            loser_name:"amberrr",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Scrappy Sensei",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"DreemWyvern",
                            winner_score:3,
                            loser_name:"Scrappy Sensei",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Gaudeo",
            elo: 1391.736380044834,
            region: "NA",
            slug: "user/e05d297e",
            confidence: 5,
            position: 161,
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
            username: "AAAA",
            elo: 1390.116665646947,
            region: "EU",
            slug: "user/372c4302",
            confidence: 4,
            position: 162,
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
            username: "Zturtle102",
            elo: 1388.746918559206,
            region: "NA",
            slug: "user/e0ada70c",
            confidence: 4,
            position: 163,
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
            username: "Imano Ob",
            elo: 1388.0447250488944,
            region: "SA",
            slug: "user/95d8795d",
            confidence: 7,
            position: 164,
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
            username: "NaruKami",
            elo: 1387.755305662934,
            region: "EU",
            slug: "user/a5922fe0",
            confidence: 4,
            position: 165,
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
            username: "Weeb-King",
            elo: 1386.9165504298287,
            region: "NA",
            slug: "user/b3e0db36",
            confidence: 16,
            position: 166,
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
            loser_name:"Wool",
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
            loser_name:"Speeze",
            loser_score:1
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
            username: "CrimShade",
            elo: 1386.8978844564992,
            region: "NA",
            slug: "user/762af489",
            confidence: 4,
            position: 167,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"CrimShade",
            winner_score:3,
            loser_name:"Shihouin_FGC",
            loser_score:0
        },

        
        {
            winner_name:"CrimShade",
            winner_score:3,
            loser_name:"DuckiePlz",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Shihouin_FGC",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"CrimShade",
                            winner_score:3,
                            loser_name:"Shihouin_FGC",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Goji",
            elo: 1384.6272736395304,
            region: "NA",
            slug: "user/cfe9de71",
            confidence: 16,
            position: 168,
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
            username: "Shenanigans_XX",
            elo: 1377.415371776522,
            region: "NA",
            slug: "user/967aab37",
            confidence: 5,
            position: 169,
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
            username: "Jrock",
            elo: 1377.349731150513,
            region: "NA",
            slug: "user/9f54ff46",
            confidence: 6,
            position: 170,
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
            username: "bweans",
            elo: 1374.891602451928,
            region: "NA",
            slug: "user/71dad7ab",
            confidence: 32,
            position: 171,
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
            loser_name:"hotdog8642",
            loser_score:2
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
            loser_name:"Not Shadow Joulton",
            loser_score:1
        },

        
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Lavender",
            elo: 1374.1284125840564,
            region: "UNK",
            slug: "user/96ab06a3",
            confidence: 62,
            position: 172,
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
            loser_name:"Patneko",
            loser_score:1
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
            loser_name:"BXR",
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

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Intimidaving",
            loser_score:2
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
            loser_name:"ruby_chan",
            loser_score:2
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Shermies Bravest Hamster",
            loser_score:1
        },

        
        {
            winner_name:"Lavender",
            winner_score:3,
            loser_name:"Fish Liquor",
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
            username: "Glinty",
            elo: 1372.9487652822636,
            region: "NA",
            slug: "user/73554805",
            confidence: 12,
            position: 173,
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
            username: "Kanzuki",
            elo: 1370.921999651674,
            region: "NA",
            slug: "user/7d1a7cdc",
            confidence: 2,
            position: 174,
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
            username: "Garfield",
            elo: 1369.9875052962343,
            region: "NA",
            slug: "user/837fdd82",
            confidence: 7,
            position: 175,
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
            username: "Kyle Stormdrain",
            elo: 1365.70844235855,
            region: "NA",
            slug: "user/f0b4996b",
            confidence: 3,
            position: 176,
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
            username: "wingupingu",
            elo: 1361.7295581541914,
            region: "UNK",
            slug: "user/b738dd0b",
            confidence: 5,
            position: 177,
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
            elo: 1360.1500639979276,
            region: "EU",
            slug: "user/5b5ccf78",
            confidence: 6,
            position: 178,
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
            username: "CoolmasterJG",
            elo: 1358.5697551465244,
            region: "NA",
            slug: "user/dc940523",
            confidence: 11,
            position: 179,
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
            loser_name:"Oguri Cap",
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

        
        {
            winner_name:"CoolmasterJG",
            winner_score:3,
            loser_name:"Mehkifan",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "LuckyNaegi",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"CoolmasterJG",
                        loser_score:3,
                        winner_name:"LuckyNaegi",
                        winner_score:2
                    },
            
                    
                        {
                            winner_name:"CoolmasterJG",
                            winner_score:3,
                            loser_name:"LuckyNaegi",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "Mehkifan",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"CoolmasterJG",
                            winner_score:3,
                            loser_name:"Mehkifan",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "wubbiq",
            elo: 1358.3500611818897,
            region: "NA",
            slug: "user/4aece8e1",
            confidence: 8,
            position: 180,
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
            username: "Rennikz",
            elo: 1358.348206885667,
            region: "NA",
            slug: "user/1ef47506",
            confidence: 8,
            position: 181,
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
            username: "Awookanen",
            elo: 1357.0615154469165,
            region: "NA",
            slug: "user/d03874e2",
            confidence: 6,
            position: 182,
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
            username: "Shyoshiguy",
            elo: 1356.1851992652255,
            region: "EU",
            slug: "user/53532547",
            confidence: 32,
            position: 183,
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
            username: "FX",
            elo: 1355.3722096727427,
            region: "EU",
            slug: "user/aba3853c",
            confidence: 6,
            position: 184,
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
            username: "SegGel2009",
            elo: 1354.9067171297847,
            region: "UNK",
            slug: "user/32b3d907",
            confidence: 2,
            position: 185,
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
            username: "Pillowtalk",
            elo: 1352.821387560883,
            region: "NA",
            slug: "user/db8a585a",
            confidence: 22,
            position: 186,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Pillowtalk",
            winner_score:3,
            loser_name:"Goji",
            loser_score:2
        },

        
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
            loser_name:"Shyoshiguy",
            loser_score:0
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
            loser_name:"Mcintosh2002",
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
            loser_name:"Yat0ro",
            loser_score:2
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
            username: "LilSoonerFanInMO",
            elo: 1352.692296748765,
            region: "NA",
            slug: "user/6c0bad01",
            confidence: 31,
            position: 187,
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
            loser_name:"Pillowtalk",
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
            username: "Rodo",
            elo: 1349.3022932909405,
            region: "EU",
            slug: "user/91de8b95",
            confidence: 5,
            position: 188,
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
            username: "Deux",
            elo: 1345.7050891420206,
            region: "ASIA",
            slug: "user/6c6bd3c9",
            confidence: 5,
            position: 189,
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
            position: 190,
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
            username: "LitAtNightShow",
            elo: 1343.28740725452,
            region: "NA",
            slug: "user/1240f77a",
            confidence: 10,
            position: 191,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"LitAtNightShow",
            winner_score:3,
            loser_name:"Rodimus Prime",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Rodimus Prime",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"LitAtNightShow",
                            winner_score:3,
                            loser_name:"Rodimus Prime",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"LitAtNightShow",
                            winner_score:3,
                            loser_name:"Rodimus Prime",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"LitAtNightShow",
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
            username: "Hinotoriz",
            elo: 1331.9440334414614,
            region: "ASIA",
            slug: "user/bde43c0a",
            confidence: 4,
            position: 192,
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
            username: "Shadowpelt",
            elo: 1330.0136970344051,
            region: "NA",
            slug: "user/de31c924",
            confidence: 11,
            position: 193,
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
            username: "SSBSonic",
            elo: 1328.8158965464347,
            region: "UNK",
            slug: "user/fc6763c6",
            confidence: 12,
            position: 194,
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
            loser_name:"LuckyNaegi",
            loser_score:2
        },

        
        {
            winner_name:"SSBSonic",
            winner_score:3,
            loser_name:"Pokkegirl",
            loser_score:1
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
            loser_name:"TheGrizzwald",
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
            rival_name: "Pokkegirl",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"SSBSonic",
                            winner_score:3,
                            loser_name:"Pokkegirl",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Cram",
            elo: 1324.8036827503645,
            region: "EU",
            slug: "user/984ce173",
            confidence: 9,
            position: 195,
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
            username: "beanie",
            elo: 1321.3848398549399,
            region: "OCE",
            slug: "user/9cb020c2",
            confidence: 4,
            position: 196,
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
            username: "DotFM",
            elo: 1321.2101007581584,
            region: "NA",
            slug: "user/82f8de6c",
            confidence: 2,
            position: 197,
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
            position: 198,
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
            username: "Keluna",
            elo: 1320.254035670747,
            region: "UNK",
            slug: "user/6315d9bb",
            confidence: 2,
            position: 199,
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
            username: "Donny Tsunami",
            elo: 1315.3431575929715,
            region: "NA",
            slug: "user/235aef54",
            confidence: 4,
            position: 200,
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
            username: "SkullRonin13",
            elo: 1314.9038907721688,
            region: "NA",
            slug: "user/dcfad6df",
            confidence: 4,
            position: 201,
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
            username: "hotdog8642",
            elo: 1314.3205835683468,
            region: "NA",
            slug: "user/66b96b3f",
            confidence: 16,
            position: 202,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"hotdog8642",
            winner_score:3,
            loser_name:"Weeb-King",
            loser_score:0
        },

        
        {
            winner_name:"hotdog8642",
            winner_score:3,
            loser_name:"MetalBlurS",
            loser_score:1
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
            username: "Ace Wonder",
            elo: 1313.9639525230114,
            region: "NA",
            slug: "user/05e47dd9",
            confidence: 10,
            position: 203,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Ace Wonder",
            winner_score:3,
            loser_name:"ShadowMikey",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "ShadowMikey",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Ace Wonder",
                            winner_score:3,
                            loser_name:"ShadowMikey",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Ace Wonder",
                            winner_score:3,
                            loser_name:"ShadowMikey",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Ace Wonder",
                            winner_score:3,
                            loser_name:"ShadowMikey",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Mallaclaqclaq123",
            elo: 1313.9607605991912,
            region: "NA",
            slug: "user/ee332be2",
            confidence: 8,
            position: 204,
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
            username: "Dave (UNPOSSIBLE)",
            elo: 1311.728273308937,
            region: "NA",
            slug: "user/658d1883",
            confidence: 12,
            position: 205,
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
            username: "Will Power",
            elo: 1308.235718805112,
            region: "NA",
            slug: "user/7107641c",
            confidence: 4,
            position: 206,
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
            username: "lupeslounge",
            elo: 1306.396987466347,
            region: "NA",
            slug: "user/6e793038",
            confidence: 4,
            position: 207,
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
            username: "Exil",
            elo: 1299.7324524217763,
            region: "NA",
            slug: "user/d70185c5",
            confidence: 15,
            position: 208,
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
            username: "JGotchaBEEzy",
            elo: 1299.4992380254264,
            region: "NA",
            slug: "user/f144924e",
            confidence: 7,
            position: 209,
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
            username: "MetalBlurS",
            elo: 1299.4154006772972,
            region: "NA",
            slug: "user/4ac53514",
            confidence: 18,
            position: 210,
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
            username: "Ceasar little",
            elo: 1296.351337277351,
            region: "NA",
            slug: "user/1d706489",
            confidence: 4,
            position: 211,
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
            username: "BXR",
            elo: 1296.1257407089524,
            region: "NA",
            slug: "user/5106f940",
            confidence: 91,
            position: 212,
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
            loser_name:"Mcintosh2002",
            loser_score:0
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

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"Sturmfresser",
            loser_score:2
        },

        
        {
            winner_name:"BXR",
            winner_score:3,
            loser_name:"ruby_chan",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "SpicyChedderJack",
            rival_wins: 6,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"BXR",
                            winner_score:10,
                            loser_name:"SpicyChedderJack",
                            loser_score:3
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
                            loser_score:0
                        },
                
                        
            ]
            },

            
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
            username: "sil",
            elo: 1295.7958931239273,
            region: "EU",
            slug: "user/ed4ce029",
            confidence: 5,
            position: 213,
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
            username: "ShutenDragoon",
            elo: 1290.9867514963896,
            region: "NA",
            slug: "user/27f8b03b",
            confidence: 3,
            position: 214,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"ShutenDragoon",
            winner_score:3,
            loser_name:"DuckiePlz",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "DuckiePlz",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"ShutenDragoon",
                            winner_score:3,
                            loser_name:"DuckiePlz",
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
            position: 215,
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
            username: "Darklight",
            elo: 1289.8464233158677,
            region: "NA",
            slug: "user/416f7ec8",
            confidence: 3,
            position: 216,
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
            username: "Hien",
            elo: 1287.8769338847605,
            region: "UNK",
            slug: "user/9d6befd0",
            confidence: 10,
            position: 217,
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
            username: "raiden",
            elo: 1287.7873501508982,
            region: "NA",
            slug: "user/3a67c8af",
            confidence: 4,
            position: 218,
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
            username: "Wear-Tear-Rust",
            elo: 1287.2804074089563,
            region: "NA",
            slug: "user/31112584",
            confidence: 3,
            position: 219,
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
            username: "wicca",
            elo: 1280.8013741133248,
            region: "OCE",
            slug: "user/28d1d61b",
            confidence: 4,
            position: 220,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"wicca",
            winner_score:3,
            loser_name:"iDeeKay",
            loser_score:0
        },

        
        {
            winner_name:"wicca",
            winner_score:3,
            loser_name:"TimoSCREAM!!! Chalorcane",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "iDeeKay",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"wicca",
                            winner_score:3,
                            loser_name:"iDeeKay",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "TimoSCREAM!!! Chalorcane",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"wicca",
                            winner_score:3,
                            loser_name:"TimoSCREAM!!! Chalorcane",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Moontide",
            elo: 1278.8236660783336,
            region: "UNK",
            slug: "user/22493f85",
            confidence: 8,
            position: 221,
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
            username: "Yellow_SB2",
            elo: 1271.6297519763816,
            region: "NA",
            slug: "user/2a9e97ae",
            confidence: 10,
            position: 222,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Yellow_SB2",
            winner_score:3,
            loser_name:"ShadowMikey",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "ShadowMikey",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Yellow_SB2",
                            winner_score:3,
                            loser_name:"ShadowMikey",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Yellow_SB2",
                            winner_score:3,
                            loser_name:"ShadowMikey",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"Yellow_SB2",
                            winner_score:3,
                            loser_name:"ShadowMikey",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "LuckyNaegi",
            elo: 1271.5085080018036,
            region: "NA",
            slug: "user/84d50933",
            confidence: 37,
            position: 223,
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
            loser_name:"CoolmasterJG",
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

        
        {
            winner_name:"LuckyNaegi",
            winner_score:3,
            loser_name:"Chriswill1984",
            loser_score:0
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
            username: "EX Falchion",
            elo: 1271.2804195002018,
            region: "NA",
            slug: "user/7929fcfc",
            confidence: 15,
            position: 224,
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
            loser_name:"MisfitxPanda",
            loser_score:0
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
            username: "nebbu",
            elo: 1271.2122713649458,
            region: "NA",
            slug: "user/c0741203",
            confidence: 5,
            position: 225,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"nebbu",
            winner_score:3,
            loser_name:"ShutenDragoon",
            loser_score:2
        },

        
        {
            winner_name:"nebbu",
            winner_score:3,
            loser_name:"Takahiro",
            loser_score:0
        },

        
        {
            winner_name:"nebbu",
            winner_score:3,
            loser_name:"Shihouin_FGC",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Takahiro",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"nebbu",
                            winner_score:3,
                            loser_name:"Takahiro",
                            loser_score:0
                        },
                
                        
            ]
            },

            
            {
            rival_name: "ShutenDragoon",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"nebbu",
                            winner_score:3,
                            loser_name:"ShutenDragoon",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Burn0ut",
            elo: 1268.807578459305,
            region: "NA",
            slug: "user/bdd5a33d",
            confidence: 5,
            position: 226,
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
            username: "Mcintosh2002",
            elo: 1265.653303690884,
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
            username: "BrazenWhiteRose",
            elo: 1265.6145305536638,
            region: "UNK",
            slug: "user/765c53cc",
            confidence: 19,
            position: 228,
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
            loser_name:"Shyoshiguy",
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
            username: "Doogong",
            elo: 1263.5006777788758,
            region: "EU",
            slug: "user/4e28951b",
            confidence: 4,
            position: 229,
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
            username: "Lord Hoseph Dong",
            elo: 1263.0020610540387,
            region: "NA",
            slug: "user/5bd0d420",
            confidence: 4,
            position: 230,
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
            username: "A-Rew",
            elo: 1262.5124757433143,
            region: "ASIA",
            slug: "user/9680cb1d",
            confidence: 2,
            position: 231,
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
            username: "hyperHICO",
            elo: 1259.2721599046365,
            region: "NA",
            slug: "user/7d316eac",
            confidence: 4,
            position: 232,
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
            username: "Hee-Homeboy",
            elo: 1258.5359562849783,
            region: "NA",
            slug: "user/da9a49ee",
            confidence: 6,
            position: 233,
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
            username: "Noctowlite 13",
            elo: 1255.0762126610678,
            region: "EU",
            slug: "user/a672a454",
            confidence: 4,
            position: 234,
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
            username: "I Be Smart",
            elo: 1253.593219677055,
            region: "NA",
            slug: "user/efa42be5",
            confidence: 5,
            position: 235,
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
            username: "Trickster?",
            elo: 1249.9060304025431,
            region: "NA",
            slug: "user/84628656",
            confidence: 13,
            position: 236,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Trickster?",
            winner_score:3,
            loser_name:"HCShark10",
            loser_score:2
        },

        
        {
            winner_name:"Trickster?",
            winner_score:3,
            loser_name:"Oguri Cap",
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
            username: "CjSphinx",
            elo: 1244.9476511711166,
            region: "UNK",
            slug: "user/35ac57bb",
            confidence: 5,
            position: 237,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"CjSphinx",
            winner_score:3,
            loser_name:"CocoJudgesYou",
            loser_score:1
        },

        
        {
            winner_name:"CjSphinx",
            winner_score:3,
            loser_name:"Miss__Nightingale",
            loser_score:2
        },

        
        {
            winner_name:"CjSphinx",
            winner_score:3,
            loser_name:"Scrappy Sensei",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Scrappy Sensei",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"CjSphinx",
                            winner_score:3,
                            loser_name:"Scrappy Sensei",
                            loser_score:1
                        },
                
                        
            ]
            },

            
            {
            rival_name: "CocoJudgesYou",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"CjSphinx",
                            winner_score:3,
                            loser_name:"CocoJudgesYou",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "FunkyBoy",
            elo: 1242.0938910172104,
            region: "NA",
            slug: "user/d844d130",
            confidence: 5,
            position: 238,
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
            username: "Duder963",
            elo: 1241.303494779468,
            region: "NA",
            slug: "user/9948288f",
            confidence: 4,
            position: 239,
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
            username: "Wool",
            elo: 1240.1829246086868,
            region: "NA",
            slug: "user/15219533",
            confidence: 16,
            position: 240,
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
            username: "Never Block",
            elo: 1237.6903108352087,
            region: "NA",
            slug: "user/1dc503f3",
            confidence: 6,
            position: 241,
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
            username: "Joridy",
            elo: 1237.6312368174606,
            region: "ASIA",
            slug: "user/7f625bcc",
            confidence: 2,
            position: 242,
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
            username: "Soulkitten23",
            elo: 1235.3999407697484,
            region: "NA",
            slug: "user/fc8d6bc7",
            confidence: 3,
            position: 243,
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
            username: "NepGear",
            elo: 1234.7117856964478,
            region: "NA",
            slug: "user/8ba5a69e",
            confidence: 12,
            position: 244,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"NepGear",
            winner_score:3,
            loser_name:"bweans",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "bweans",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"NepGear",
                            winner_score:3,
                            loser_name:"bweans",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"NepGear",
                            winner_score:3,
                            loser_name:"bweans",
                            loser_score:0
                        },
                
                        
                        {
                            winner_name:"NepGear",
                            winner_score:3,
                            loser_name:"bweans",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Canned",
            elo: 1232.1858185883239,
            region: "NA",
            slug: "user/bab3159b",
            confidence: 4,
            position: 245,
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
            username: "Vermillion",
            elo: 1231.800127513233,
            region: "SA",
            slug: "user/ab8df99a",
            confidence: 3,
            position: 246,
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
            username: "DisgustinglyWashedEggs",
            elo: 1231.4342774008192,
            region: "UNK",
            slug: "user/083e6044",
            confidence: 3,
            position: 247,
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
            username: "Psyco",
            elo: 1227.1065350179206,
            region: "ASIA",
            slug: "user/1df290d4",
            confidence: 2,
            position: 248,
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
            username: "Intimidaving",
            elo: 1224.0448827568725,
            region: "NA",
            slug: "user/e896ee0b",
            confidence: 72,
            position: 249,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Oolong",
            loser_score:0
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
            loser_name:"Jaey",
            loser_score:0
        },

        
        {
            winner_name:"Intimidaving",
            winner_score:3,
            loser_name:"Tokai Tatum",
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
            loser_name:"jadestar63",
            loser_score:2
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
            loser_name:"Jrock",
            loser_score:1
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
            loser_name:"Shyoshiguy",
            loser_score:2
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
            username: "Sturmfresser",
            elo: 1223.6460778744267,
            region: "UNK",
            slug: "user/1c7ede55",
            confidence: 10,
            position: 250,
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
            username: "King_Rasta",
            elo: 1222.6590366736843,
            region: "EU",
            slug: "user/d43960c0",
            confidence: 6,
            position: 251,
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
            username: "Laquai",
            elo: 1222.3345818128937,
            region: "NA",
            slug: "user/80057efe",
            confidence: 4,
            position: 252,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Laquai",
            winner_score:3,
            loser_name:"avaunt",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "avaunt",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Laquai",
                            winner_score:3,
                            loser_name:"avaunt",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Nirvana",
            elo: 1221.0434091271889,
            region: "NA",
            slug: "user/122c8f1a",
            confidence: 4,
            position: 253,
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
            username: "Moorcas",
            elo: 1220.638482097864,
            region: "NA",
            slug: "user/a5a1315a",
            confidence: 12,
            position: 254,
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
            loser_name:"LukeParry",
            loser_score:2
        },

        
        {
            winner_name:"Moorcas",
            winner_score:3,
            loser_name:"Armakilo",
            loser_score:0
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
            username: "ruby_chan",
            elo: 1219.1507860070685,
            region: "NA",
            slug: "user/55350b7a",
            confidence: 12,
            position: 255,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"ruby_chan",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
        {
            winner_name:"ruby_chan",
            winner_score:3,
            loser_name:"Yat0ro",
            loser_score:0
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
            username: "Bwead",
            elo: 1217.53264465773,
            region: "NA",
            slug: "user/184d4fa1",
            confidence: 4,
            position: 256,
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
            username: "Shermies Bravest Hamster",
            elo: 1216.8793317869747,
            region: "NA",
            slug: "user/90465418",
            confidence: 14,
            position: 257,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Shermies Bravest Hamster",
            winner_score:3,
            loser_name:"Goji",
            loser_score:1
        },

        
        {
            winner_name:"Shermies Bravest Hamster",
            winner_score:3,
            loser_name:"LilSoonerFanInMO",
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
            username: "Fish Liquor",
            elo: 1214.3919591991528,
            region: "NA",
            slug: "user/660ad9c1",
            confidence: 72,
            position: 258,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"jadestar63",
            loser_score:0
        },

        
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
            loser_name:"NepGear",
            loser_score:1
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
            loser_name:"EinAblaze",
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
            loser_name:"Jay314",
            loser_score:0
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
            loser_name:"jak_d_ripr",
            loser_score:1
        },

        
        {
            winner_name:"Fish Liquor",
            winner_score:3,
            loser_name:"Zarlet",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Zarlet",
            rival_wins: 4,
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
                            loser_score:1
                        },
                
                        
            ]
            },

            
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

            
                ]
            }
        },

    
        {
            username: "Sorana",
            elo: 1212.0889368794892,
            region: "UNK",
            slug: "user/185022ba",
            confidence: 4,
            position: 259,
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
            username: "EinAblaze",
            elo: 1212.0237248268718,
            region: "SA",
            slug: "user/6334a6bc",
            confidence: 4,
            position: 260,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"EinAblaze",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:2
        },

        
        {
            winner_name:"EinAblaze",
            winner_score:3,
            loser_name:"TvError",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Lavender",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"EinAblaze",
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
            username: "Vollrath",
            elo: 1209.7273468949716,
            region: "NA",
            slug: "user/2545f973",
            confidence: 6,
            position: 261,
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
            username: "izank11",
            elo: 1209.4571412075097,
            region: "EU",
            slug: "user/21a74f03",
            confidence: 9,
            position: 262,
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
            username: "Thejimmy246",
            elo: 1208.3968664361728,
            region: "NA",
            slug: "user/721214b2",
            confidence: 4,
            position: 263,
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
            username: "Lant",
            elo: 1207.8083465296645,
            region: "NA",
            slug: "user/d59b652b",
            confidence: 10,
            position: 264,
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
            username: "Cage4296",
            elo: 1207.7561268341542,
            region: "NA",
            slug: "user/49cbc4d8",
            confidence: 3,
            position: 265,
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
            username: "Velvet",
            elo: 1206.4316009368874,
            region: "NA",
            slug: "user/09ecd1a7",
            confidence: 8,
            position: 266,
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
            username: "Sovereign",
            elo: 1206.203939414504,
            region: "NA",
            slug: "user/bf9fe465",
            confidence: 3,
            position: 267,
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
            username: "Donpi",
            elo: 1205.222749017061,
            region: "EU",
            slug: "user/fbcc0f46",
            confidence: 7,
            position: 268,
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
            username: "Glimbo the Gnome",
            elo: 1198.503072701034,
            region: "NA",
            slug: "user/35ad67c1",
            confidence: 4,
            position: 269,
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
            username: "GideonTG",
            elo: 1196.7865083698075,
            region: "EU",
            slug: "user/687b01f8",
            confidence: 6,
            position: 270,
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
            username: "Yat0ro",
            elo: 1194.2537196780297,
            region: "ASIA",
            slug: "user/7c8a7f9a",
            confidence: 21,
            position: 271,
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
            username: "Cataclysm",
            elo: 1192.3228760378906,
            region: "NA",
            slug: "user/767d0a59",
            confidence: 4,
            position: 272,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Cataclysm",
            winner_score:3,
            loser_name:"LeDom",
            loser_score:1
        },

        
        {
            winner_name:"Cataclysm",
            winner_score:3,
            loser_name:"Armakilo",
            loser_score:0
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
            username: "JR121",
            elo: 1189.0801256767527,
            region: "NA",
            slug: "user/482bb1df",
            confidence: 6,
            position: 273,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"JR121",
            winner_score:3,
            loser_name:"Moose",
            loser_score:2
        },

        
        {
            winner_name:"JR121",
            winner_score:3,
            loser_name:"SilverTabby",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Moose",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"JR121",
                            winner_score:3,
                            loser_name:"Moose",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Verje",
            elo: 1187.5685084363897,
            region: "NA",
            slug: "user/c64d66b4",
            confidence: 3,
            position: 274,
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
            username: "antlandking",
            elo: 1187.184111618932,
            region: "EU",
            slug: "user/9efd322a",
            confidence: 3,
            position: 275,
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
            username: "winderling",
            elo: 1186.6521736519762,
            region: "UNK",
            slug: "user/96021352",
            confidence: 4,
            position: 276,
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
            username: "Iris",
            elo: 1184.4371688792814,
            region: "NA",
            slug: "user/e66fed6c",
            confidence: 6,
            position: 277,
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
            username: "Drewtwo",
            elo: 1182.8468103134985,
            region: "NA",
            slug: "user/3c1de75f",
            confidence: 3,
            position: 278,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Drewtwo",
            winner_score:3,
            loser_name:"Lil_Ernie",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Lil_Ernie",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Drewtwo",
                            winner_score:3,
                            loser_name:"Lil_Ernie",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Gman",
            elo: 1176.0135746230164,
            region: "NA",
            slug: "user/7dcfb248",
            confidence: 18,
            position: 279,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Gman",
            winner_score:3,
            loser_name:"Mcintosh2002",
            loser_score:2
        },

        
        {
            winner_name:"Gman",
            winner_score:3,
            loser_name:"BrazenWhiteRose",
            loser_score:0
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
            username: "Feliks",
            elo: 1174.6404934595041,
            region: "EU",
            slug: "user/1c3a9a90",
            confidence: 6,
            position: 280,
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
            username: "Speeze",
            elo: 1171.915495909377,
            region: "NA",
            slug: "user/e3f7ad75",
            confidence: 6,
            position: 281,
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
            username: "[ BK SAS ]",
            elo: 1171.7218377822855,
            region: "EU",
            slug: "user/5a096415",
            confidence: 3,
            position: 282,
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
            username: "FMBrosuke",
            elo: 1170.1382651541903,
            region: "NA",
            slug: "user/87ac43fb",
            confidence: 3,
            position: 283,
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
            username: "Vilkijs",
            elo: 1167.8662062563976,
            region: "EU",
            slug: "user/15a3d130",
            confidence: 4,
            position: 284,
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
            username: "Zachary Lacy",
            elo: 1166.9128191012755,
            region: "NA",
            slug: "user/757a10f1",
            confidence: 7,
            position: 285,
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
            username: "Treehell",
            elo: 1166.278814281526,
            region: "NA",
            slug: "user/51fc25d3",
            confidence: 4,
            position: 286,
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
            username: "Eccentric_Thistle",
            elo: 1165.4453222776444,
            region: "OCE",
            slug: "user/8560f933",
            confidence: 9,
            position: 287,
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
            username: "StelleIsLost",
            elo: 1163.1784845741613,
            region: "NA",
            slug: "user/01a335f2",
            confidence: 2,
            position: 288,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"StelleIsLost",
            winner_score:3,
            loser_name:"WordisBond",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "WordisBond",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"StelleIsLost",
                            winner_score:3,
                            loser_name:"WordisBond",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "SpicyChedderJack",
            elo: 1163.1502305196689,
            region: "NA",
            slug: "user/2321d491",
            confidence: 25,
            position: 289,
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
            loser_name:"Sonickick",
            loser_score:1
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
            username: "Rulership",
            elo: 1159.039962641512,
            region: "NA",
            slug: "user/3a11b14d",
            confidence: 6,
            position: 290,
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
            username: "fancyhat",
            elo: 1158.159485323407,
            region: "NA",
            slug: "user/7eb3a1cb",
            confidence: 4,
            position: 291,
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
            username: "Hokage",
            elo: 1157.9401776876796,
            region: "NA",
            slug: "user/ed8a12d0",
            confidence: 4,
            position: 292,
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
            username: "Sanaito",
            elo: 1156.1545288704078,
            region: "NA",
            slug: "user/4f12aafb",
            confidence: 4,
            position: 293,
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
            username: "Garryth",
            elo: 1155.7636619355785,
            region: "UNK",
            slug: "user/224be1e3",
            confidence: 3,
            position: 294,
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
            username: "BetaTester881",
            elo: 1153.7657699218098,
            region: "UNK",
            slug: "user/fa6091d8",
            confidence: 2,
            position: 295,
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
            username: "miofa",
            elo: 1150.7137857145453,
            region: "OCE",
            slug: "user/57a8c7e6",
            confidence: 3,
            position: 296,
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
            username: "Blaze71",
            elo: 1146.614750952766,
            region: "ASIA",
            slug: "user/8fc24423",
            confidence: 4,
            position: 297,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Blaze71",
            winner_score:3,
            loser_name:"talking_chicken",
            loser_score:1
        },

        
        {
            winner_name:"Blaze71",
            winner_score:3,
            loser_name:"ZuBooks",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "ZuBooks",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Blaze71",
                            winner_score:3,
                            loser_name:"ZuBooks",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Aether",
            elo: 1145.9429952300707,
            region: "OCE",
            slug: "user/a34e6559",
            confidence: 3,
            position: 298,
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
            username: "Lucy the Lamia",
            elo: 1143.723447810793,
            region: "NA",
            slug: "user/9b67998a",
            confidence: 11,
            position: 299,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Lucy the Lamia",
            winner_score:3,
            loser_name:"CjSphinx",
            loser_score:1
        },

        
        {
            winner_name:"Lucy the Lamia",
            winner_score:3,
            loser_name:"CocoJudgesYou",
            loser_score:0
        },

        
        {
            winner_name:"Lucy the Lamia",
            winner_score:3,
            loser_name:"serraph",
            loser_score:2
        },

        
        {
            winner_name:"Lucy the Lamia",
            winner_score:3,
            loser_name:"Tron_ultimate_XX",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "serraph",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Lucy the Lamia",
                            winner_score:3,
                            loser_name:"serraph",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "DGF",
            elo: 1143.6778220986541,
            region: "NA",
            slug: "user/567c6499",
            confidence: 13,
            position: 300,
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
            username: "Jay314",
            elo: 1140.881287020928,
            region: "NA",
            slug: "user/f9b0632f",
            confidence: 24,
            position: 301,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Jay314",
            winner_score:3,
            loser_name:"Lavender",
            loser_score:0
        },

        
        {
            winner_name:"Jay314",
            winner_score:3,
            loser_name:"Fish Liquor",
            loser_score:1
        },

        
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
            rival_name: "Fish Liquor",
            rival_wins: 1,
            rival_losses:1,
            recent_sets: [
                
                    {
                        loser_name:"Jay314",
                        loser_score:3,
                        winner_name:"Fish Liquor",
                        winner_score:0
                    },
            
                    
                        {
                            winner_name:"Jay314",
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
            username: "Monomin",
            elo: 1140.2334211955972,
            region: "ASIA",
            slug: "user/dec4d91c",
            confidence: 1,
            position: 302,
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
            position: 303,
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
            username: "Johnny Tatsumi",
            elo: 1132.4103158342584,
            region: "NA",
            slug: "user/d09de9c8",
            confidence: 4,
            position: 304,
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
            username: "STONE",
            elo: 1131.5355277523295,
            region: "UNK",
            slug: "NONE",
            confidence: 3,
            position: 305,
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
            username: "Openwolf",
            elo: 1129.6111071084756,
            region: "EU",
            slug: "user/3027c583",
            confidence: 6,
            position: 306,
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
            username: "iDeeKay",
            elo: 1123.222075541539,
            region: "OCE",
            slug: "user/5ee90cc1",
            confidence: 3,
            position: 307,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"iDeeKay",
            winner_score:3,
            loser_name:"TimoSCREAM!!! Chalorcane",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "TimoSCREAM!!! Chalorcane",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"iDeeKay",
                            winner_score:3,
                            loser_name:"TimoSCREAM!!! Chalorcane",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "seenubuck",
            elo: 1120.6625308701116,
            region: "NA",
            slug: "user/af6d22a3",
            confidence: 5,
            position: 308,
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
            username: "Nevaltion",
            elo: 1119.1158065170898,
            region: "NA",
            slug: "user/426ff9a4",
            confidence: 3,
            position: 309,
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
            username: "Mehkifan",
            elo: 1114.6785667016848,
            region: "NA",
            slug: "user/fd95e81e",
            confidence: 5,
            position: 310,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Mehkifan",
            winner_score:3,
            loser_name:"TheGrizzwald",
            loser_score:0
        },

        
        {
            winner_name:"Mehkifan",
            winner_score:3,
            loser_name:"Chriswill1984",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "TheGrizzwald",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Mehkifan",
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
            username: "Artoria Nobunaga",
            elo: 1114.2313713922372,
            region: "JPN",
            slug: "user/61b6bcce",
            confidence: 6,
            position: 311,
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
            username: "Azor DC",
            elo: 1113.563946153006,
            region: "NA",
            slug: "user/2bfab1f8",
            confidence: 4,
            position: 312,
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
            username: "tdog_93",
            elo: 1112.7484908038,
            region: "NA",
            slug: "user/9e860dfb",
            confidence: 1,
            position: 313,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Not Shadow Joulton",
            elo: 1112.6513903630519,
            region: "UNK",
            slug: "user/3280cc9d",
            confidence: 7,
            position: 314,
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
            username: "Shoji",
            elo: 1111.5933980267982,
            region: "NA",
            slug: "user/dc7ae033",
            confidence: 1,
            position: 315,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Larp",
            elo: 1106.0689576480129,
            region: "NA",
            slug: "user/b4d8578e",
            confidence: 4,
            position: 316,
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
            username: "KoreanPanda",
            elo: 1105.5157606710627,
            region: "NA",
            slug: "user/b2536a26",
            confidence: 3,
            position: 317,
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
            username: "X-Cal",
            elo: 1104.005925019308,
            region: "NA",
            slug: "user/9214d207",
            confidence: 2,
            position: 318,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Ibbit",
            elo: 1103.3280726584896,
            region: "UNK",
            slug: "user/162768aa",
            confidence: 4,
            position: 319,
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
            position: 320,
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
            username: "Red",
            elo: 1097.1040677809224,
            region: "SA",
            slug: "user/b7500998",
            confidence: 3,
            position: 321,
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
            username: "Commiku",
            elo: 1095.6312480365987,
            region: "UNK",
            slug: "user/04198acf",
            confidence: 2,
            position: 322,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "SleepyheadDX",
            elo: 1093.4988637210797,
            region: "EU",
            slug: "user/d2d60ba3",
            confidence: 3,
            position: 323,
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
            username: "R. Noble",
            elo: 1092.4327448032202,
            region: "NA",
            slug: "user/56d930bb",
            confidence: 3,
            position: 324,
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
            username: "Pastrock",
            elo: 1090.8566524340292,
            region: "SA",
            slug: "user/5c0952ca",
            confidence: 3,
            position: 325,
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
            username: "Neemo",
            elo: 1090.447847770587,
            region: "NA",
            slug: "user/aa2ad176",
            confidence: 1,
            position: 326,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Luff",
            elo: 1087.4411306232064,
            region: "NA",
            slug: "user/5e00823d",
            confidence: 2,
            position: 327,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "PhilSchwifty",
            elo: 1087.1789101279612,
            region: "NA",
            slug: "user/c1562482",
            confidence: 5,
            position: 328,
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
            username: "DanteRebellionX",
            elo: 1086.862585879113,
            region: "NA",
            slug: "user/a26b48ff",
            confidence: 12,
            position: 329,
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
            username: "Real Human",
            elo: 1083.6947146455243,
            region: "NA",
            slug: "user/d0a2e213",
            confidence: 2,
            position: 330,
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
            username: "CharizardX",
            elo: 1083.202728676542,
            region: "NA",
            slug: "user/0948b393",
            confidence: 8,
            position: 331,
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
            username: "Xeora AMV",
            elo: 1083.0779910001718,
            region: "NA",
            slug: "user/d992913a",
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
            username: "BeanutButterBud",
            elo: 1082.7775292790602,
            region: "NA",
            slug: "user/88d57280",
            confidence: 13,
            position: 333,
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
            username: "Link Pendrago",
            elo: 1078.1477258758566,
            region: "NA",
            slug: "user/90df00fa",
            confidence: 4,
            position: 334,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Pokkegirl",
            elo: 1075.8286589796617,
            region: "NA",
            slug: "user/44156114",
            confidence: 3,
            position: 335,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Pokkegirl",
            winner_score:3,
            loser_name:"Night_Hunter47",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Night_Hunter47",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Pokkegirl",
                            winner_score:3,
                            loser_name:"Night_Hunter47",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Poogen",
            elo: 1075.1470638908745,
            region: "EU",
            slug: "user/074204cf",
            confidence: 3,
            position: 336,
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
            username: "Colossus",
            elo: 1070.3845415499864,
            region: "NA",
            slug: "user/4ec8ccc0",
            confidence: 3,
            position: 337,
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
            username: "Archie",
            elo: 1056.1925951048815,
            region: "EU",
            slug: "user/14ab27a0",
            confidence: 2,
            position: 338,
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
            position: 339,
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
            username: "Sena",
            elo: 1051.4366215015966,
            region: "SA",
            slug: "user/6fb86b37",
            confidence: 3,
            position: 340,
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
            username: "JrJam",
            elo: 1051.2624061065126,
            region: "NA",
            slug: "user/21423639",
            confidence: 3,
            position: 341,
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
            username: "Crisis_Core",
            elo: 1048.566023861511,
            region: "EU",
            slug: "user/506a3c77",
            confidence: 3,
            position: 342,
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
            username: "PHI",
            elo: 1046.9995112448191,
            region: "ASIA",
            slug: "user/c126dc36",
            confidence: 1,
            position: 343,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Promilkid",
            elo: 1045.6236183508918,
            region: "ASIA",
            slug: "user/6bd99ddc",
            confidence: 3,
            position: 344,
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
            username: "Sora",
            elo: 1045.162874651583,
            region: "NA",
            slug: "user/8b5441d9",
            confidence: 12,
            position: 345,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Sora",
            winner_score:3,
            loser_name:"Patneko",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Patneko",
            rival_wins: 5,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Sora",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Sora",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:1
                        },
                
                        
                        {
                            winner_name:"Sora",
                            winner_score:3,
                            loser_name:"Patneko",
                            loser_score:1
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "CocoJudgesYou",
            elo: 1042.9124804654234,
            region: "NA",
            slug: "user/c879ce4d",
            confidence: 6,
            position: 346,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"CocoJudgesYou",
            winner_score:3,
            loser_name:"Mecha",
            loser_score:0
        },

        
        {
            winner_name:"CocoJudgesYou",
            winner_score:3,
            loser_name:"WooperTM",
            loser_score:1
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Mecha",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"CocoJudgesYou",
                            winner_score:3,
                            loser_name:"Mecha",
                            loser_score:0
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "AshuraRem",
            elo: 1042.3719114439955,
            region: "NA",
            slug: "user/deab881b",
            confidence: 3,
            position: 347,
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
            username: "GooeyLagoon",
            elo: 1037.8268764911659,
            region: "NA",
            slug: "user/30406b52",
            confidence: 2,
            position: 348,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Mmeaninglessnamee",
            elo: 1037.1953822687879,
            region: "NA",
            slug: "user/11548f19",
            confidence: 3,
            position: 349,
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
            username: "Jazzcuzzi",
            elo: 1034.0048158590978,
            region: "NA",
            slug: "user/3326c44c",
            confidence: 5,
            position: 350,
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
            username: "Setsunae",
            elo: 1032.8473082947337,
            region: "EU",
            slug: "user/75bc6a9f",
            confidence: 3,
            position: 351,
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
            username: "Vurger",
            elo: 1031.5583211263413,
            region: "NA",
            slug: "user/72d44357",
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
            username: "Gold InGarnet",
            elo: 1026.3802978612018,
            region: "NA",
            slug: "user/fd7d2aa6",
            confidence: 11,
            position: 353,
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
            username: "10PCSpicyNuggets",
            elo: 1026.3630513543085,
            region: "NA",
            slug: "user/f5b995bb",
            confidence: 3,
            position: 354,
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
            username: "Samael",
            elo: 1025.9010921674885,
            region: "NA",
            slug: "user/c1665a3e",
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
            username: "Corny",
            elo: 1023.4042291019265,
            region: "NA",
            slug: "user/634f1262",
            confidence: 3,
            position: 356,
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
            username: "SifTheAbyss",
            elo: 1022.8293596436104,
            region: "EU",
            slug: "user/698fd8d9",
            confidence: 4,
            position: 357,
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
            username: "fancytuna",
            elo: 1019.1940657928977,
            region: "NA",
            slug: "user/e6362858",
            confidence: 1,
            position: 358,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "TakeYourTime",
            elo: 1016.4142985843971,
            region: "EU",
            slug: "user/d0fb9d0d",
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
            username: "Elitebabar25",
            elo: 1015.9644218910867,
            region: "EU",
            slug: "user/866cd5d9",
            confidence: 19,
            position: 360,
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
            username: "coolcalmsam",
            elo: 1015.524206923396,
            region: "UNK",
            slug: "user/5ad1dd20",
            confidence: 5,
            position: 361,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Zagorsek",
            elo: 1015.0273986506168,
            region: "NA",
            slug: "user/bd9ed189",
            confidence: 3,
            position: 362,
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
            username: "Authentic Matcha Drink",
            elo: 1012.1500423480154,
            region: "NA",
            slug: "user/4fce4e32",
            confidence: 5,
            position: 363,
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
            username: "Yanase Koi",
            elo: 1011.0647670481907,
            region: "NA",
            slug: "user/d0181ec4",
            confidence: 25,
            position: 364,
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
            username: "Famine",
            elo: 1010.3251891172024,
            region: "NA",
            slug: "user/7b072f4f",
            confidence: 2,
            position: 365,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Eternum",
            elo: 1010.2149911795341,
            region: "NA",
            slug: "user/d52c923c",
            confidence: 8,
            position: 366,
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
            username: "MrMuerto123",
            elo: 1009.2840839175076,
            region: "NA",
            slug: "user/ec3b5f0a",
            confidence: 2,
            position: 367,
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
            position: 368,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Ruby Slinger",
            elo: 1002.8913419321627,
            region: "NA",
            slug: "user/196a9e35",
            confidence: 2,
            position: 369,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Regulus",
            elo: 1001.6079815685431,
            region: "NA",
            slug: "user/0fdc85d2",
            confidence: 3,
            position: 370,
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
            username: "Miss__Nightingale",
            elo: 1000.4714762566734,
            region: "NA",
            slug: "user/0612696e",
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
            username: "Cure Dynamic",
            elo: 999.2778813777852,
            region: "NA",
            slug: "user/c8fe8393",
            confidence: 4,
            position: 372,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Carrie",
            elo: 996.8430105024964,
            region: "NA",
            slug: "user/c2d92d7a",
            confidence: 4,
            position: 373,
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
            username: "SABER",
            elo: 991.9120661763434,
            region: "UNK",
            slug: "user/2955cbd9",
            confidence: 3,
            position: 374,
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
            username: "GamingWarthog",
            elo: 991.3063941844881,
            region: "NA",
            slug: "user/4387cc66",
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
            username: "DCGrz",
            elo: 987.7523376857989,
            region: "SA",
            slug: "user/fa3b57bc",
            confidence: 5,
            position: 376,
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
            username: "Stars",
            elo: 987.3076783290743,
            region: "NA",
            slug: "user/542c1448",
            confidence: 7,
            position: 377,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Stars",
            winner_score:3,
            loser_name:"Vaporish",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Vaporish",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Stars",
                            winner_score:3,
                            loser_name:"Vaporish",
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
            position: 378,
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
            position: 379,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "jak_d_ripr",
            elo: 978.8709804146673,
            region: "NA",
            slug: "user/0827c2d3",
            confidence: 11,
            position: 380,
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
            username: "Max",
            elo: 977.414950814551,
            region: "EU",
            slug: "user/9003a99c",
            confidence: 2,
            position: 381,
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
            position: 382,
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
            position: 383,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Hero M#",
            elo: 974.1249195540415,
            region: "NA",
            slug: "user/d405cd37",
            confidence: 4,
            position: 384,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Trillion-Crows",
            elo: 972.4297202274284,
            region: "NA",
            slug: "user/1f204c28",
            confidence: 4,
            position: 385,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "anonanon",
            elo: 971.8841782939451,
            region: "NA",
            slug: "user/b7ee11ee",
            confidence: 4,
            position: 386,
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
            username: "Endmin 67",
            elo: 971.7355815791324,
            region: "ASIA",
            slug: "user/85e9d2c6",
            confidence: 2,
            position: 387,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "FGCConex",
            elo: 970.33097849431,
            region: "NA",
            slug: "user/fbefc4eb",
            confidence: 9,
            position: 388,
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
            username: "Arcaknight7s",
            elo: 969.443885446154,
            region: "NA",
            slug: "user/616cca2c",
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
            username: "PlutOh",
            elo: 969.3340282495459,
            region: "NA",
            slug: "user/c72360b0",
            confidence: 2,
            position: 390,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "The Esquire",
            elo: 968.0183791170202,
            region: "NA",
            slug: "user/166e4773",
            confidence: 3,
            position: 391,
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
            username: "Reb!!",
            elo: 966.1113186718906,
            region: "EU",
            slug: "user/94d6acd4",
            confidence: 3,
            position: 392,
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
            username: "MisfitxPanda",
            elo: 964.1497073398222,
            region: "NA",
            slug: "user/1140519e",
            confidence: 2,
            position: 393,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Arvald",
            elo: 963.97456782042,
            region: "NA",
            slug: "user/b3740aa8",
            confidence: 13,
            position: 394,
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
            username: "Asmodean95",
            elo: 963.734663588338,
            region: "NA",
            slug: "user/bb0717a6",
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
            username: "Snackcakes",
            elo: 963.6881150270583,
            region: "NA",
            slug: "user/2a85e43f",
            confidence: 4,
            position: 396,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "GoetiaGC",
            elo: 958.2040373790157,
            region: "NA",
            slug: "user/303576d6",
            confidence: 13,
            position: 397,
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
            username: "Xiii",
            elo: 954.9535464713449,
            region: "NA",
            slug: "user/d3fb358d",
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
            username: "Ssj3enderman",
            elo: 951.7999750055259,
            region: "NA",
            slug: "user/99442bb3",
            confidence: 4,
            position: 399,
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
            username: "L1",
            elo: 951.3615854914192,
            region: "ASIA",
            slug: "user/8337f031",
            confidence: 1,
            position: 400,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Greatmario64",
            elo: 950.7863483107168,
            region: "NA",
            slug: "user/a25e81b9",
            confidence: 6,
            position: 401,
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
            username: "Dark Slayer",
            elo: 949.3109484389967,
            region: "NA",
            slug: "user/e7fe8bbc",
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
            username: "Moose",
            elo: 944.5474599456129,
            region: "NA",
            slug: "user/7c2711a3",
            confidence: 9,
            position: 403,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Moose",
            winner_score:3,
            loser_name:"Stars",
            loser_score:0
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "Stars",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Moose",
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
            username: "Scrappy Sensei",
            elo: 942.5995507777154,
            region: "NA",
            slug: "user/49dfa850",
            confidence: 12,
            position: 404,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Scrappy Sensei",
            winner_score:3,
            loser_name:"serraph",
            loser_score:0
        },

        
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
            username: "LeDom",
            elo: 940.5199011369416,
            region: "NA",
            slug: "user/b5d2a392",
            confidence: 10,
            position: 405,
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
            loser_name:"Kentoki",
            loser_score:2
        },

        
        {
            winner_name:"LeDom",
            winner_score:3,
            loser_name:"Manil",
            loser_score:1
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
            username: "Spectrum",
            elo: 939.4355338225688,
            region: "NA",
            slug: "user/3cddb197",
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
            username: "Astuarte",
            elo: 939.0248720094353,
            region: "NA",
            slug: "user/5ae7b136",
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
            username: "talking_chicken",
            elo: 937.5810694940016,
            region: "NA",
            slug: "user/769fd72b",
            confidence: 2,
            position: 408,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Wynzki",
            elo: 936.7185228254191,
            region: "NA",
            slug: "user/d9473976",
            confidence: 2,
            position: 409,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Norrin Radd",
            elo: 935.6866507631784,
            region: "EU",
            slug: "user/62b0c821",
            confidence: 3,
            position: 410,
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
            username: "Crucified_majima",
            elo: 935.1385554451631,
            region: "NA",
            slug: "user/79b58fdd",
            confidence: 3,
            position: 411,
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
            elo: 932.5554516718602,
            region: "NA",
            slug: "user/f7d2e818",
            confidence: 16,
            position: 412,
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
            username: "Chicken Fish",
            elo: 932.0244529957648,
            region: "EU",
            slug: "user/dbfd16f6",
            confidence: 31,
            position: 413,
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
            loser_name:"Elitebabar25",
            loser_score:1
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
            username: "The Doorman",
            elo: 931.2676268152771,
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
            username: "Cheerustre",
            elo: 930.7162213135437,
            region: "NA",
            slug: "user/7f275363",
            confidence: 10,
            position: 415,
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
            username: "Spyder_306",
            elo: 930.0495985702534,
            region: "NA",
            slug: "user/d308c688",
            confidence: 12,
            position: 416,
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
            username: "Night_Hunter47",
            elo: 929.5943010373628,
            region: "UNK",
            slug: "user/ce6ace6e",
            confidence: 5,
            position: 417,
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
                    
                ]
            }
        },

    
        {
            username: "Yexrobd",
            elo: 928.5894796139548,
            region: "NA",
            slug: "user/db009a46",
            confidence: 2,
            position: 418,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "NSE",
            elo: 928.4743926184085,
            region: "EU",
            slug: "user/fb26c7b1",
            confidence: 3,
            position: 419,
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
            username: "tylerGplays",
            elo: 926.8420524492109,
            region: "UNK",
            slug: "user/19b49def",
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
            username: "SilverTabby",
            elo: 926.7477659852561,
            region: "NA",
            slug: "user/8c1715f1",
            confidence: 2,
            position: 421,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Takahiro",
            elo: 924.5286612502521,
            region: "NA",
            slug: "user/1aa33ba7",
            confidence: 3,
            position: 422,
            player_info: {
                best_wins: [
                    
        {
            winner_name:"Takahiro",
            winner_score:3,
            loser_name:"ZuBooks",
            loser_score:2
        },

        
                ],
                rivals: [
                    
            {
            rival_name: "ZuBooks",
            rival_wins: 1,
            rival_losses:0,
            recent_sets: [
                
                        {
                            winner_name:"Takahiro",
                            winner_score:3,
                            loser_name:"ZuBooks",
                            loser_score:2
                        },
                
                        
            ]
            },

            
                ]
            }
        },

    
        {
            username: "Joseca500",
            elo: 924.1761180199443,
            region: "EU",
            slug: "user/ad94c00c",
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
            username: "AngryCheese",
            elo: 923.277525304598,
            region: "UNK",
            slug: "user/b8331d2d",
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
            username: "LukeParry",
            elo: 922.8158655081033,
            region: "NA",
            slug: "user/9ce70d33",
            confidence: 3,
            position: 425,
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
            username: "Haji",
            elo: 922.0447200501677,
            region: "NA",
            slug: "user/f6448670",
            confidence: 8,
            position: 426,
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
            username: "Lil_Ernie",
            elo: 921.9468213758546,
            region: "NA",
            slug: "user/ff3b91d4",
            confidence: 1,
            position: 427,
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
            position: 428,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Zamurai Cris",
            elo: 919.6795311446298,
            region: "NA",
            slug: "user/3bbfaf54",
            confidence: 4,
            position: 429,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "ZeperTheStar",
            elo: 918.7044127515899,
            region: "NA",
            slug: "user/c35d9549",
            confidence: 3,
            position: 430,
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
            username: "CrimeSlayer",
            elo: 918.13599106249,
            region: "NA",
            slug: "user/7b662247",
            confidence: 2,
            position: 431,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "luckidyne",
            elo: 917.9729744125302,
            region: "UNK",
            slug: "user/13f24174",
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
            username: "Lalo",
            elo: 916.9757918694785,
            region: "NA",
            slug: "user/3835e240",
            confidence: 11,
            position: 433,
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
            loser_name:"NsGamer",
            loser_score:0
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
            username: "Senpapi512",
            elo: 915.0358775498744,
            region: "NA",
            slug: "user/b081a8fc",
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
            username: "Inousann",
            elo: 914.5861133057822,
            region: "OCE",
            slug: "user/5dcb3ec7",
            confidence: 3,
            position: 435,
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
            username: "Sonickick",
            elo: 914.3138559367324,
            region: "NA",
            slug: "user/618804cf",
            confidence: 2,
            position: 436,
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
            position: 437,
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
            username: "NightWolf3348",
            elo: 911.3578197898096,
            region: "UNK",
            slug: "user/648eab47",
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
            username: "Troggz93",
            elo: 910.1858375871659,
            region: "NA",
            slug: "user/7b5a423d",
            confidence: 7,
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
            elo: 909.0989988743319,
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
            username: "Scuts",
            elo: 908.1167804640787,
            region: "NA",
            slug: "user/73c69d4e",
            confidence: 3,
            position: 441,
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
            username: "Fluospace",
            elo: 906.9143370870282,
            region: "EU",
            slug: "user/db40fd2a",
            confidence: 2,
            position: 442,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "avaunt",
            elo: 905.4047901235838,
            region: "NA",
            slug: "user/796a78af",
            confidence: 4,
            position: 443,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Cow",
            elo: 902.8003186505904,
            region: "NA",
            slug: "user/27945744",
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
            username: "Basil_Underscore",
            elo: 900.1733663583034,
            region: "NA",
            slug: "user/53028014",
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
            username: "kaen",
            elo: 898.3771656545053,
            region: "NA",
            slug: "user/639483ac",
            confidence: 2,
            position: 446,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Armakilo",
            elo: 896.7139262152657,
            region: "NA",
            slug: "user/9529c4c8",
            confidence: 3,
            position: 447,
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
            username: "D-Nis",
            elo: 889.5401738463113,
            region: "EU",
            slug: "user/9063df17",
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
            username: "KyonHB",
            elo: 889.4790822307976,
            region: "NA",
            slug: "user/ecdea93a",
            confidence: 6,
            position: 449,
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
            username: "GearDragon",
            elo: 888.0690719220199,
            region: "NA",
            slug: "user/91ccb79e",
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
            username: "Chidz",
            elo: 884.2377964365094,
            region: "EU",
            slug: "user/519aa3b4",
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
            username: "Dinner",
            elo: 882.2206071451172,
            region: "NA",
            slug: "user/a9c90d56",
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
            username: "ghostlymilk13",
            elo: 880.1810996162071,
            region: "NA",
            slug: "user/a2e111cc",
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
            username: "Shihouin_FGC",
            elo: 876.7564621703242,
            region: "NA",
            slug: "user/7582e6f9",
            confidence: 2,
            position: 454,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Swag and Watch",
            elo: 875.1842864485039,
            region: "NA",
            slug: "user/11736757",
            confidence: 8,
            position: 455,
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
            elo: 874.2839559724281,
            region: "NA",
            slug: "user/6f730045",
            confidence: 4,
            position: 456,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Redlykerozes",
            elo: 873.9235932737107,
            region: "NA",
            slug: "user/fe498354",
            confidence: 4,
            position: 457,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Forgoten",
            elo: 873.5388883404023,
            region: "NA",
            slug: "user/d60ab447",
            confidence: 22,
            position: 458,
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
            username: "TheGrizzwald",
            elo: 872.9693715925365,
            region: "NA",
            slug: "user/13c9c8bf",
            confidence: 15,
            position: 459,
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
            username: "XJ-9",
            elo: 872.736393045684,
            region: "NA",
            slug: "user/c5542724",
            confidence: 1,
            position: 460,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "WheresMyKeys",
            elo: 871.8394588032727,
            region: "NA",
            slug: "user/cce78c7b",
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
            username: "falling_robin",
            elo: 871.687007805879,
            region: "NA",
            slug: "user/9e4a95f3",
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
            username: "Primecore28",
            elo: 870.7414839294375,
            region: "NA",
            slug: "user/d79f1d24",
            confidence: 2,
            position: 463,
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
            position: 464,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Matau32",
            elo: 861.8742746973287,
            region: "UNK",
            slug: "user/62835d94",
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
            username: "HyperDarkAwesome",
            elo: 861.5433608260369,
            region: "NA",
            slug: "user/852f6d5d",
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
            username: "ArcEltare",
            elo: 858.475624346771,
            region: "NA",
            slug: "user/7a84ab4a",
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
            username: "Pattler",
            elo: 858.2937123887423,
            region: "NA",
            slug: "user/f79d28d7",
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
            username: "Tortree",
            elo: 858.1744405839837,
            region: "NA",
            slug: "user/91bb4fdd",
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
            username: "KazuFoxFire",
            elo: 858.1499054118315,
            region: "UNK",
            slug: "user/c211b99a",
            confidence: 4,
            position: 470,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "DuckiePlz",
            elo: 857.2015871893908,
            region: "NA",
            slug: "user/76321e51",
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
            username: "Okano35",
            elo: 854.2557113728162,
            region: "NA",
            slug: "user/c9ac63b5",
            confidence: 2,
            position: 472,
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
            position: 473,
            player_info: {
                best_wins: [
                    
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
            position: 474,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Special Schmix",
            elo: 848.5852776824,
            region: "NA",
            slug: "user/3c1c102a",
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
            username: "warxt",
            elo: 847.2263887285769,
            region: "UNK",
            slug: "user/93caff34",
            confidence: 5,
            position: 476,
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
            username: "Raranrorn",
            elo: 846.2029683725841,
            region: "ASIA",
            slug: "user/daaac772",
            confidence: 1,
            position: 477,
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
            position: 478,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Keanu",
            elo: 844.1560044194721,
            region: "OCE",
            slug: "user/dd17975a",
            confidence: 2,
            position: 479,
            player_info: {
                best_wins: [
                    
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
            position: 480,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Espada",
            elo: 841.3284141136185,
            region: "NA",
            slug: "user/92297e78",
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
            username: "Jyon",
            elo: 841.1435222303344,
            region: "EU",
            slug: "user/ec69faa3",
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
            username: "Speed Weed",
            elo: 838.9572582556365,
            region: "NA",
            slug: "user/f534db4c",
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
            username: "MKQueazy",
            elo: 834.832093488778,
            region: "NA",
            slug: "user/ed91b2fb",
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
            username: "Sand",
            elo: 823.1859856985304,
            region: "UNK",
            slug: "user/e94cec90",
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
            username: "Konk",
            elo: 821.2596847589427,
            region: "NA",
            slug: "user/63a6f7e9",
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
            username: "Fudge Harvey Oswald",
            elo: 819.5606458975669,
            region: "OCE",
            slug: "user/3689f903",
            confidence: 2,
            position: 487,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "IRONGOD",
            elo: 814.4158667615056,
            region: "NA",
            slug: "user/2afafb89",
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
            username: "Rodimus Prime",
            elo: 809.9939291363039,
            region: "NA",
            slug: "user/821eef35",
            confidence: 24,
            position: 489,
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
            username: "Weebmaru",
            elo: 809.2336278791585,
            region: "ASIA",
            slug: "user/782cc87f",
            confidence: 1,
            position: 490,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Ab",
            elo: 808.0885513605735,
            region: "EU",
            slug: "user/df0b46f3",
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
            username: "IdontKnowMyName",
            elo: 806.344500735559,
            region: "EU",
            slug: "user/58054db8",
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
            username: "TvError",
            elo: 805.7878661997738,
            region: "EU",
            slug: "user/870a084e",
            confidence: 4,
            position: 493,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Fishbones",
            elo: 805.1860345373165,
            region: "OCE",
            slug: "user/45f60344",
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
            username: "Makoche",
            elo: 798.0755745645852,
            region: "EU",
            slug: "user/036e9ab7",
            confidence: 5,
            position: 495,
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
            username: "Sweetener",
            elo: 796.6926384278671,
            region: "NA",
            slug: "user/ef4f3289",
            confidence: 2,
            position: 496,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "EnnisHam",
            elo: 796.0881016746814,
            region: "NA",
            slug: "user/6a94305f",
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
            username: "Mookeh",
            elo: 791.7525282986682,
            region: "UNK",
            slug: "user/dc4ad8b8",
            confidence: 4,
            position: 498,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Kentoki",
            elo: 788.7185247783449,
            region: "NA",
            slug: "user/1aecfdd1",
            confidence: 7,
            position: 499,
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
            username: "Vaporish",
            elo: 784.2361094840608,
            region: "NA",
            slug: "user/47f3b2e8",
            confidence: 2,
            position: 500,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Garumb",
            elo: 784.0774446507869,
            region: "NA",
            slug: "user/00d0529e",
            confidence: 10,
            position: 501,
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
            username: "Mecha",
            elo: 783.5718840811826,
            region: "NA",
            slug: "user/9a82fa41",
            confidence: 1,
            position: 502,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Renna",
            elo: 782.5630537313208,
            region: "NA",
            slug: "user/9fed2107",
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
            username: "Schwi",
            elo: 782.0631780763022,
            region: "SA",
            slug: "user/fe1959d8",
            confidence: 2,
            position: 504,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "KiaRio",
            elo: 770.6186335075354,
            region: "NA",
            slug: "user/053db759",
            confidence: 2,
            position: 505,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Cytosine",
            elo: 768.9208043646167,
            region: "NA",
            slug: "user/0a3458f5",
            confidence: 4,
            position: 506,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Pigeta",
            elo: 768.1597085094896,
            region: "SA",
            slug: "user/c4451f1b",
            confidence: 2,
            position: 507,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Juicey",
            elo: 758.8842510492351,
            region: "NA",
            slug: "user/cb473b9b",
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
            username: "Manil",
            elo: 757.4066146336868,
            region: "NA",
            slug: "user/b386a129",
            confidence: 5,
            position: 509,
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
            username: "ShadowMikey",
            elo: 752.676001045119,
            region: "NA",
            slug: "user/7bbbd06f",
            confidence: 10,
            position: 510,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "TG",
            elo: 751.20577321211,
            region: "EU",
            slug: "user/5a9c11f4",
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
            username: "WordisBond",
            elo: 748.6977042430583,
            region: "NA",
            slug: "user/f5e32230",
            confidence: 1,
            position: 512,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Durandal",
            elo: 742.547101409093,
            region: "NA",
            slug: "user/cdfdb725",
            confidence: 4,
            position: 513,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Lupin X",
            elo: 735.0531551012847,
            region: "NA",
            slug: "user/31dbf9e5",
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
            username: "YUKARIMETA",
            elo: 730.8915729131179,
            region: "NA",
            slug: "user/3a8a318e",
            confidence: 2,
            position: 515,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "mintjulep",
            elo: 727.1190642830182,
            region: "NA",
            slug: "user/4e591699",
            confidence: 6,
            position: 516,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "EMP_Obama",
            elo: 721.099228900586,
            region: "NA",
            slug: "user/c37474ec",
            confidence: 2,
            position: 517,
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
            position: 518,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "serraph",
            elo: 715.8014950043283,
            region: "NA",
            slug: "user/dd7457dc",
            confidence: 2,
            position: 519,
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
            position: 520,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Tack7800",
            elo: 708.1427178171912,
            region: "NA",
            slug: "user/f129e65c",
            confidence: 2,
            position: 521,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "TimoSCREAM!!! Chalorcane",
            elo: 707.397112118975,
            region: "OCE",
            slug: "user/1880d160",
            confidence: 2,
            position: 522,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "TRON",
            elo: 707.1873401178384,
            region: "NA",
            slug: "user/0518b11f",
            confidence: 2,
            position: 523,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Blue Thunder",
            elo: 698.3295148331932,
            region: "NA",
            slug: "user/88c8306b",
            confidence: 8,
            position: 524,
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
            position: 525,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "LILBOWT",
            elo: 690.0760298397473,
            region: "NA",
            slug: "user/041dbfc0",
            confidence: 4,
            position: 526,
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
            position: 527,
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
            position: 528,
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
            position: 529,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Twak",
            elo: 675.5411454534096,
            region: "NA",
            slug: "user/25ab2217",
            confidence: 2,
            position: 530,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Trashfox",
            elo: 673.1093153554373,
            region: "NA",
            slug: "user/c90ad254",
            confidence: 4,
            position: 531,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "DubKun",
            elo: 658.4344836527798,
            region: "NA",
            slug: "user/9b2ca0f4",
            confidence: 2,
            position: 532,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "NsGamer",
            elo: 651.7532780202886,
            region: "NA",
            slug: "user/72788091",
            confidence: 2,
            position: 533,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Barnstormer",
            elo: 644.2470461916453,
            region: "NA",
            slug: "user/85a6c011",
            confidence: 2,
            position: 534,
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
            position: 535,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Sicras",
            elo: 639.352305973519,
            region: "NA",
            slug: "user/8534adee",
            confidence: 2,
            position: 536,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "melody?",
            elo: 637.8231030488887,
            region: "NA",
            slug: "user/b4ee975c",
            confidence: 4,
            position: 537,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Foam Root",
            elo: 635.1596925311244,
            region: "NA",
            slug: "user/1c53abf2",
            confidence: 3,
            position: 538,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Pikmin",
            elo: 630.0778117227537,
            region: "NA",
            slug: "user/7a9746a9",
            confidence: 2,
            position: 539,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "ZuBooks",
            elo: 620.279308870566,
            region: "UNK",
            slug: "user/4e94d3fb",
            confidence: 2,
            position: 540,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Tron_ultimate_XX",
            elo: 615.0869206286388,
            region: "EU",
            slug: "user/f1c9d121",
            confidence: 24,
            position: 541,
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
            username: "Chriswill1984",
            elo: 612.1308163911783,
            region: "NA",
            slug: "user/33b0ac61",
            confidence: 4,
            position: 542,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Dandy Mancannon",
            elo: 609.6360357700908,
            region: "NA",
            slug: "user/baf7e431",
            confidence: 3,
            position: 543,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Pepega",
            elo: 597.3297126866418,
            region: "NA",
            slug: "user/dccc5171",
            confidence: 4,
            position: 544,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Play Melty",
            elo: 596.6322185900958,
            region: "UNK",
            slug: "user/86702c6c",
            confidence: 2,
            position: 545,
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
            position: 546,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Arkanjin",
            elo: 582.6126859538481,
            region: "NA",
            slug: "user/5368fadd",
            confidence: 4,
            position: 547,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "WooperTM",
            elo: 580.0240729479534,
            region: "NA",
            slug: "user/8eb10c4d",
            confidence: 2,
            position: 548,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Duel",
            elo: 576.2951410342182,
            region: "UNK",
            slug: "user/de8a8b12",
            confidence: 2,
            position: 549,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "icy crystals",
            elo: 507.00001875441285,
            region: "NA",
            slug: "user/83d0732c",
            confidence: 4,
            position: 550,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "LightSpeed",
            elo: 505.6948161874978,
            region: "NA",
            slug: "user/ce1048cc",
            confidence: 2,
            position: 551,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Abenson",
            elo: 469.16234139951064,
            region: "NA",
            slug: "user/f8a33f5b",
            confidence: 2,
            position: 552,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Richi the Moon",
            elo: 452.76614663668136,
            region: "NA",
            slug: "user/3927d758",
            confidence: 4,
            position: 553,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "Gree",
            elo: 447.7330234493798,
            region: "NA",
            slug: "user/f74a9f8e",
            confidence: 2,
            position: 554,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "JayNy",
            elo: 390.0761393983372,
            region: "NA",
            slug: "user/5b719931",
            confidence: 2,
            position: 555,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    
        {
            username: "AlexNomas",
            elo: 322.8140617550613,
            region: "NA",
            slug: "user/5f99ecad",
            confidence: 8,
            position: 556,
            player_info: {
                best_wins: [
                    
                ],
                rivals: [
                    
                ]
            }
        },

    

];
