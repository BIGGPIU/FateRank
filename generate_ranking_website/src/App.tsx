import { useState } from 'react'
import { DATE_CREATED, rating_list, type TournamentSet, type UserRatingItem } from './list'
import './App.css'

function App() {
  
    const [filtered_users,set_filtered_users] = useState<string[]>([]);
    let params = new URLSearchParams(document.location.search);
    let username = params.get("username");

    if (params.size != 0 && username)  {
        return (
            <PlayerStatsWindow username={username} />
        )
    }

    // console.log(filtered_users);


    return (
        <div className='w-full h-full absolute bg-gray-950 lg:p-4 overflow-scroll'>
            <a className='absolute left-0 top-0 text-white underline hidden lg:block' href='https://biggpiu.github.io'>
                By BIGG_PIU aka Worst T.O
            </a>
            <a className='absolute right-0 top-0 text-white underline hidden lg:block' href='https://biggpiu.github.io/FateRankChangelog'>
                Changelog
            </a>
            <div className='text-2xl text-white text-center mb-4'>
                FateRank v2.1.0
            </div>
            <div className='text-md text-white text-center '>
                THIS TOOL IS A WORK AND PROGRESS AND NOT 100% ACCURATE. PLEASE VERIFY RESULTS
            </div>
            <div className='text-sm text-white text-center mb-4'>
                Updated {DATE_CREATED}.
            </div>
            <textarea name="" id="" className='left-1/2 -translate-x-1/2 relative bg-white text-black lg:w-lg w-full h-32' placeholder='Filter by Slug (Split by Newlines)' 
            onChange={(v) => {
                

                if (v.target.value.length == 0) {
                    let x:string[] = []

                    set_filtered_users(x)
                }
                else {
                    let x = v.target.value.split("\n");

                    for (let index = 0; index < x.length; index++) {
                        x[index] = x[index].replace("https://www.start.gg/","");
                        console.log(x[index]);
                    }

                    set_filtered_users(x)
                }


            }} />
            
            <div className='w-full h-fit text-white mt-10'>
                <Leaderboard filtered_users={filtered_users}></Leaderboard>
            </div>

        </div>
    )
}


function Leaderboard(
    {
        filtered_users
    }
    :
    {
        filtered_users:string[]
    }
) {
    
    let x:any[] = [];

    for (let index = 0; index < rating_list.length; index++) {
        const element = rating_list[index];
        
        x.push(
            <LeaderboardItem
            item={element}
            filter_list={filtered_users}
            rank={index + 1}
            ></LeaderboardItem>
        )
    }

    return (
        <div className='lg:w-3/4 w-full h-fit bg-gray-800 left-1/2 -translate-x-1/2 relative'>
            <LeaderboardHeader></LeaderboardHeader>  
            {x}      
        </div>
    )
}

function LeaderboardHeader() {


    return (
        <div className='w-full h-fit'>
            <div className='h-fit float-left bg-gray-900 w-1/5 text-center'><div className='inline-block'>Ranking</div> <div className='text-xs lg:inline-block hidden'>Confidence</div></div>
            <div className='h-fit float-left bg-gray-700 pl-2 pr-2 w-1/5 text-center'>Username</div>
            <div className='h-fit float-left bg-gray-900 pl-2 pr-2 w-1/5 text-center'>ELO</div>
            <div className='h-fit float-left bg-gray-700 w-1/5 hidden lg:block text-center'>Region</div>
            <div className='h-fit float-left bg-gray-700 lg:bg-gray-900 pl-2 pr-2 lg:w-1/5 w-2/5 text-center'>Slug</div>
        </div>
    )
}


function LeaderboardItem(
    {
        item,
        filter_list,
        rank
    }
    :
    {
        item:UserRatingItem,
        filter_list:string[],
        rank:number,
    }
) {
    if (filter_list.length == 0) {
        return (
            <div className='w-full h-fit'>
                <div className='border-t h-fit float-left bg-gray-900 w-1/5 text-center'>
                    <div className='inline-block'>{rank}</div>
                    <ConfidenceText conf={item.confidence}></ConfidenceText>
                </div>
                <div className='border-t h-fit float-left bg-gray-700 pl-2 pr-2 w-1/5 text-center overflow-hidden text-ellipsis truncate'>{item.username}</div>
                <div className='border-t h-fit float-left bg-gray-900 pl-2 pr-2 w-1/5 text-center'>{item.elo.toFixed(2)}</div>
                <div className='border-t h-fit float-left bg-gray-700 w-1/5 hidden lg:block text-center'>{item.region}</div>
                <div className='border-t h-fit float-left bg-gray-700 lg:bg-gray-900 pl-2 pr-2 lg:w-1/5 w-2/5 text-center'>{item.slug}</div>
            </div>
        )
    }
    else {
        if (filter_list.includes(item.slug)) {
            return (
                <div className='w-full h-fit'>
                    <div className='border-t h-fit float-left bg-gray-900 w-1/5 text-center'>
                        <div className='inline-block'>{rank}</div>
                        <ConfidenceText conf={item.confidence}></ConfidenceText>
                    </div>
                    <div className='border-t h-fit float-left bg-gray-700 pl-2 pr-2 w-1/5 text-center overflow-hidden text-ellipsis truncate'>{item.username}</div>
                    <div className='border-t h-fit float-left bg-gray-900 pl-2 pr-2 w-1/5 text-center'>{item.elo.toFixed(2)}</div>
                    <div className='border-t h-fit float-left bg-gray-700 w-1/5 hidden lg:block text-center'>{item.region}</div>
                    <div className='border-t h-fit float-left bg-gray-700 lg:bg-gray-900 pl-2 pr-2 lg:w-1/5 w-2/5 text-center'>{item.slug}</div>
                </div>
            )
        }
        else {
            return (
                <>

                </>
            )
        }
    }

}

function ConfidenceText({conf}:{conf:number}) {
    if (conf >= 50) {
        return <div className='text-xs inline-block text-white ml-1 w-6'>{conf}%</div>
    }
    else if (conf >= 25) {
        return <div className='text-xs inline-block text-yellow-300 ml-1 w-6'>{conf}%</div>
    }
    else {
        return <div className='text-xs inline-block text-red-500 ml-1 w-6'>{conf}%</div>
    }
}


function PlayerStatsWindow(
    {
        username,
    }
    :
    {
        username:string,
    }
) {
    let rating_list_item = rating_list.find((x) => {return x.username == username})

    let rivals_html:any[] = [];

    rating_list_item?.player_info.rivals.forEach(element => {
        rivals_html.push(
            <div>
                <h2 className='relative text-5xl font-bold text-center'>{element.rival_name}</h2>
                <h3 className='relative text-2xl font-bold text-center mt-2'>Wins {element.rival_wins} Losses {element.rival_losses}</h3>
                <div className='w-7/8 relative left-1/2 -translate-x-1/2' >
                    <PlayerSetContainer sets={element.recent_sets}/>
                </div>
            </div>
        )
    });


    if (rating_list_item) {
        return (
            <div className='absolute w-[1920px] h-270 bg-black text-white overflow-x-hidden overflow-y-hidden' id='background'>
                {/* Sponsored eckes dee */}
                <div className='absolute w-full h-fit text-xl text-nowrap marquee -translate-x-1/1 z-10' id='advertisement'>
                    THIS TOURNAMENT WAS BROUGHT TO YOU WITH SUPPORT FROM FATERANK. USE FATERANK TODAY AT biggpiu.github.io/FateRank
                </div>
                {/* User name */}
                <div className='bg-black z-20'>
                    <h1 className='relative text-7xl font-black text-center  mt-5'>{username}</h1>
                    <h2 className='relative text-3xl text-center font-bold mt-2'>FateRank Position: {rating_list_item.position}</h2>
                    <h2 className='relative text-3xl text-center font-bold mt-2'>ELO: {rating_list_item.elo.toFixed(3)}</h2>
                    <h2 className='relative text-3xl text-center font-bold mt-2'>Region: {rating_list_item.region}</h2>
                </div>
                {/* Left Block (rivalaries) */}
                <div className='p-4 w-1/2 h-4/5 float-left'>
                    <div className='w-full h-full border rounded-md'>
                        <h1 className='relative text-7xl font-bold text-center'>Rivals</h1>
                        {rivals_html}
                    </div>
                </div>
                {/* Right block (Best wins) */}
                <div className='p-4 w-1/2 h-4/5 float-left'>
                    <div className=' w-full h-full border rounded-md'>
                        <h1 className='relative text-7xl font-bold text-center'>Best Wins</h1>
                        <div className='w-9/10 relative left-1/2 -translate-x-1/2'>
                            <PlayerSetContainer sets={rating_list_item.player_info.best_wins}></PlayerSetContainer>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='absolute w-[1920px] h-270 bg-black text-white'>
                <h1 className='absolute top-1/2 -translate-1/2 left-1/2 text-9xl text-center'>USER NOT FOUND</h1>
            </div>
        )
    }
}

function PlayerSetContainer(
    {
        sets
    }
    :
    {
        sets:TournamentSet[]
    }
) {
    let list:any[] = [];

    sets.forEach(element => {
        if (element.winner_score > element.loser_score) {
            list.push(
                <div className='w-full h-10 relative text-xl bg-gray-900 rounded-md mb-2 mt-2'>
                    {/* Score Left */}
                    <div className='float-left w-1/10 h-full bg-green-600 rounded-l-md border-r-2'>
                        <div className='relative text-center top-1/2 -translate-y-1/2'>
                            {element.winner_score}
                        </div>
                    </div>
                    {/* Username left*/}
                    <div className='float-left w-4/10 h-full border-r'>
                        <div className='relative text-center top-1/2 -translate-y-1/2'>
                            {element.winner_name}
                        </div>
                    </div>
                    {/* Username right */}
                    <div className='float-left w-4/10 h-full border-l'>
                        <div className='relative text-center top-1/2 -translate-y-1/2'>
                            {element.loser_name}
                        </div>
                    </div>
                    {/* Score Right */}
                    <div className='float-left w-1/10 h-full bg-red-600 rounded-r-md border-l-2'>
                        <div className='relative text-center top-1/2 -translate-y-1/2'>
                            {element.loser_score}
                        </div>
                    </div>
                </div>
            )
        }
        else {
            list.push(
                <div className='w-full h-10 relative text-xl bg-gray-900 rounded-md mb-2 mt-2'>
                    {/* Score Left */}
                    <div className='float-left w-1/10 h-full bg-red-600 rounded-l-md border-r-2'>
                        <div className='relative text-center top-1/2 -translate-y-1/2'>
                            {element.winner_score}
                        </div>
                    </div>
                    {/* Username left*/}
                    <div className='float-left w-4/10 h-full border-r'>
                        <div className='relative text-center top-1/2 -translate-y-1/2'>
                            {element.winner_name}
                        </div>
                    </div>
                    {/* Username right */}
                    <div className='float-left w-4/10 h-full border-l'>
                        <div className='relative text-center top-1/2 -translate-y-1/2'>
                            {element.loser_name}
                        </div>
                    </div>
                    {/* Score Right */}
                    <div className='float-left w-1/10 h-full bg-green-600 rounded-r-md border-l-2'>
                        <div className='relative text-center top-1/2 -translate-y-1/2'>
                            {element.loser_score}
                        </div>
                    </div>
                </div>
            )
        }

    });

    return (
        <div>
            {list}
        </div>
    )
}


export default App