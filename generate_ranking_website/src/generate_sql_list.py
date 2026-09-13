import sqlite3
import os
from datetime import datetime


db = sqlite3.connect("../../database/db.sqlite")
cursor = db.cursor()
now = datetime.today().strftime('%Y-%m-%d')

print(f"{now}")

tsx = """
interface UserRatingItem {
    username:string,
    elo:number,
    region:string,
    slug:string,
}

export const rating_list:Array<UserRatingItem> = [

"""

cursor.execute("SELECT * FROM User ORDER BY true_elo DESC")
hold = cursor.fetchall()

for i in hold:
    tsx += f"""
        {{
            username: "{i[5]}",
            elo: {i[2]},
            region: "{i[6]}",
            slug: "{i[7]}"
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