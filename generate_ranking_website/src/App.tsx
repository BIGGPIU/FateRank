import { useState } from 'react'
import { rating_list, type UserRatingItem } from './list'
import './App.css'

function App() {
  
    const [filtered_users,set_filtered_users] = useState<string[]>([]);
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
                FateRank v1.1.0
            </div>
            <div className='text-md text-white text-center mb-4'>
                THIS TOOL IS A WORK AND PROGRESS AND NOT 100% ACCURATE. PLEASE VERIFY RESULTS
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

export default App
