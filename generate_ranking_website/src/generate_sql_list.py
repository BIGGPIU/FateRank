import sqlite3
import os
from datetime import datetime
from collections import Counter


db = sqlite3.connect("../../database/db.sqlite")
cursor = db.cursor()
now = datetime.today().strftime('%Y-%m-%d')

print(f"{now}")

tsx = f"""
export const DATE_CREATED = "{now.replace("-","/")}"

export interface UserRatingItem {{
    username:string,
    elo:number,
    region:string,
    slug:string,
    position:number
    confidence:number
    player_info:ExpandedUserStats
}}

export interface ExpandedUserStats {{
    best_wins:TournamentSet[],
    rivals:RivalInformation[]
}}

export interface TournamentSet {{
    winner_name:string,
    winner_score:number,
    loser_name:string,
    loser_score:number,
}}

export interface RivalInformation {{
    rival_name:string,
    rival_wins:number,
    rival_losses:number,
    // MAX 3 
    recent_sets:TournamentSet[]
}}

export const rating_list:Array<UserRatingItem> = [

"""

cursor.execute("SELECT * FROM User ORDER BY true_elo DESC")
hold = cursor.fetchall()
pos = 0
for i in hold:
    user_id = i[0]

    # best wins
    cursor.execute(f"SELECT DISTINCT loser_id,StartggSets.tournament_name,winner_score,loser_score,username,true_elo FROM StartggSets INNER JOIN User ON User.startgg_uid = loser_id WHERE winner_id = {user_id} ORDER BY true_elo DESC LIMIT 15")

    game_info = cursor.fetchall()
    game_info_str = ""

    for game in game_info:
        game_info_str += f"""
        {{
            winner_name:"{i[5]}",
            winner_score:{game[2]},
            loser_name:"{game[4]}",
            loser_score:{game[3]}
        }},

        """

    cursor.execute(f"SELECT winner_id,loser_id FROM StartggSets WHERE winner_id = {user_id} OR loser_id = {user_id}")
    games = cursor.fetchall()
    counter = Counter()

    for set in games:
        if set[0] != user_id:
            counter.update({set[0]:1})
            pass
        else:
            counter.update({set[1]:1})
            pass

    # print(counter)
    # print(f"id: {user_id}")

    rivals = ""

    for index in range(min(3,len(counter.keys()))):
        item = counter.most_common(3)[index][0]
        
        # rival name
        # rival wins
        cursor.execute(f"SELECT winner_id,loser_id,username FROM StartggSets INNER JOIN User ON User.startgg_uid = loser_id WHERE loser_id = {item} AND winner_id = {user_id}")
        x = cursor.fetchall()
        wins = len(x)

        if wins == 0:
            continue
        
        name = x[0][2]

        # rival losses
        cursor.execute(f"SELECT winner_id,loser_id,username FROM StartggSets INNER JOIN User ON User.startgg_uid = loser_id WHERE loser_id = {user_id} AND winner_id = {item}")
        x = cursor.fetchall()
        losses = len(x)

        # 3 sets
        rival_sets_str = ""
        cursor.execute(f"SELECT * FROM StartggSets WHERE (loser_id = {item} AND winner_id = {user_id}) OR (winner_id = {item} AND loser_id = {user_id}) LIMIT 3")

        for n in cursor.fetchall():
            if n[3] == user_id:
                rival_sets_str += f"""
                        {{
                            winner_name:"{i[5]}",
                            winner_score:{n[4]},
                            loser_name:"{name}",
                            loser_score:{n[6]}
                        }},
                
                        """
            else:
                rival_sets_str += f"""
                    {{
                        loser_name:"{i[5]}",
                        loser_score:{n[4]},
                        winner_name:"{name}",
                        winner_score:{n[6]}
                    }},
            
                    """


        rivals += f"""
            {{
            rival_name: "{name}",
            rival_wins: {wins},
            rival_losses:{losses},
            recent_sets: [
                {rival_sets_str}
            ]
            }},

            """


    
    pos += 1
    tsx += f"""
        {{
            username: "{i[5]}",
            elo: {i[2]},
            region: "{i[6]}",
            slug: "{i[7]}",
            confidence: {(i[8])},
            position: {pos},
            player_info: {{
                best_wins: [
                    {game_info_str}
                ],
                rivals: [
                    {rivals}
                ]
            }}
        }},

    """

tsx += """

];
"""



if not os.path.exists(f"./old_ratings/{now}"):
    os.makedirs(f"./old_ratings/{now}")

with open(f"./old_ratings/{now}/list.tsx","w") as f:
    f.write(tsx)

with open("./list.tsx","w") as f:
    f.write(tsx)