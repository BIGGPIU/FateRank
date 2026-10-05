LoadEverything()

Start = async (event) => {
    let player_number = document.getElementsByClassName("player-num")[0].innerHTML;
    

    if (player_number == 1) {
        let player_name = data["score"]["1"].team["1"]["player"]["1"].name;
        document.getElementsByClassName("link")[0].innerHTML = "https://biggpiu.github.io/FateRank?username=" + player_name
        document.querySelector(".faterank-iframe").src = "https://biggpiu.github.io/FateRank?username=" + player_name
    }
    else {
        let player_name = data["score"]["1"].team["2"]["player"]["1"].name;
        document.getElementsByClassName("link")[0].innerHTML = "https://biggpiu.github.io/FateRank?username=" + player_name;
        document.querySelector(".faterank-iframe").src = "https://biggpiu.github.io/FateRank?username=" + player_name
    }
};


Update = async (event) => {
    // player 1 and the like
    let data = event.data;
    let player_number = document.getElementsByClassName("player-num")[0].innerHTML;
    
    if (player_number == 1) {
        let player_name = data["score"]["1"].team["1"]["player"]["1"].name;
        document.getElementsByClassName("link")[0].innerHTML = "https://biggpiu.github.io/FateRank?username=" + player_name
        document.querySelector(".faterank-iframe").src = "https://biggpiu.github.io/FateRank?username=" + player_name
    }
    else {
        let player_name = data["score"]["1"].team["2"]["player"]["1"].name;
        document.getElementsByClassName("link")[0].innerHTML = "https://biggpiu.github.io/FateRank?username=" + player_name
        document.querySelector(".faterank-iframe").src = "https://biggpiu.github.io/FateRank?username=" + player_name
    }

    
};


// [
//   {
//     "color": "#fe3636",
//     "teamName": "",
//     "losers": true,
//     "player": {
//       "1": {
//         "seed": 5,
//         "birthday": false,
//         "romanized_data": {
//           "name": "KingofNinjas789",
//           "team": ""
//         },
//         "country": {
//           "asset": "/assets/country_flag/us.png",
//           "code": "US",
//           "display_name": "United States",
//           "emoji": "🇺🇸",
//           "en_name": "United States",
//           "latitude": "38.00000000",
//           "longitude": "-97.00000000",
//           "name": "United States",
//           "state": {
//             "asset": "/assets/state_flag/US/CA.png",
//             "code": "CA",
//             "latitude": "36.70146310",
//             "longitude": "-118.75599700",
//             "name": "California",
//             "original_code": "CA"
//           },
//           "controller": null,
//           "character": {},
//           "skin": {},
//           "avatar": null
//         },
//         "twitter": "",
//         "real_name": "",
//         "pronoun": "",
//         "custom_textbox": "",
//         "city": "Northridge",
//         "online_avatar": null,
//         "id": 1366545857290,
//         "wins": 6,
//         "losses": 2,
//         "winPercentage": "75%",
//         "score": 0,
//         "logo": null
//       }
//     },
//     "mergedData": "KingofNinjas789 [L]",
//     "mergedOnlyName": "KingofNinjas789"
//   },
//   {
//     "color": "#2c89ff",
//     "teamName": "",
//     "losers": false,
//     "player": {
//       "1": {
//         "seed": 2,
//         "birthday": false,
//         "romanized_data": {
//           "name": "Sonikun",
//           "team": "PCF"
//         },
//         "country": {
//           "asset": "/assets/country_flag/us.png",
//           "code": "US",
//           "display_name": "United States",
//           "emoji": "🇺🇸",
//           "en_name": "United States",
//           "latitude": "38.00000000",
//           "longitude": "-97.00000000",
//           "name": "United States",
//           "state": {
//             "asset": "/assets/state_flag/US/WI.png",
//             "code": "WI",
//             "latitude": "44.43089750",
//             "longitude": "-89.68846370",
//             "name": "Wisconsin",
//             "original_code": "WI"
//           },
//           "controller": null,
//           "character": {},
//           "skin": {},
//           "avatar": null
//         },
//         "twitter": "",
//         "real_name": "",
//         "pronoun": "",
//         "custom_textbox": "",
//         "city": "Madison",
//         "online_avatar": "https://images.start.gg/images/user/2146186/image-8e33b8d3fb52f0c94cba761cee5edb93-optimized.jpg?ehk=evhl4zRAkiEx90StyooBaBN58i2lOArxA6bJUrvu3dA%3D&ehkOptimized=dQjk%2FbfJxOktve3dGrI%2B0jmoISZTqgPxNltFOPA0HY%3D",
//         "id": 33466482146186,
//         "wins": 5,
//         "losses": 1,
//         "winPercentage": "83.33%",
//         "score": 0,
//         "logo": null
//       }
//     },
//     "mergedData": "PCF | Sonikun",
//     "mergedOnlyName": "Sonikun"
//   }
// ]