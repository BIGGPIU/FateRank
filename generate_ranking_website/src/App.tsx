import { useState } from 'react'
import { rating_list, type UserRatingItem } from './list'
import './App.css'

function App() {
  
    const [filtered_users,set_filtered_users] = useState<string[]>([]);
    // console.log(filtered_users);


    return (
        <div className='w-full h-full absolute bg-gray-950 p-4 overflow-scroll'>
            <a className='absolute left-0 top-0 text-white underline' href='https://biggpiu.github.io'>
                By BIGG_PIU aka Worst T.O
            </a>
            <div className='text-2xl text-white text-center mb-4'>
                FateRank v1.00
            </div>
            <textarea name="" id="" className='left-1/2 -translate-x-1/2 relative bg-white text-black w-lg h-32' placeholder='Filter by Slug (Split by Newlines)' 
            onChange={(v) => {
                

                if (v.target.value.length == 0) {
                    let x:string[] = []

                    set_filtered_users(x)
                }
                else {
                    set_filtered_users(v.target.value.split("\n"))
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
        <div className='w-3/4 h-fit bg-gray-800 left-1/2 -translate-x-1/2 relative'>
            <LeaderboardHeader></LeaderboardHeader>  
            {x}      
        </div>
    )
}

function LeaderboardHeader() {


    return (
        <div className='w-full h-fit'>
            <div className='h-fit float-left bg-gray-900 w-1/5 text-center'>Ranking</div>
            <div className='h-fit float-left bg-gray-700 pl-2 pr-2 w-1/5 text-center'>Username</div>
            <div className='h-fit float-left bg-gray-900 pl-2 pr-2 w-1/5 text-center'>ELO</div>
            <div className='h-fit float-left bg-gray-700 w-1/5 text-center'>Region</div>
            <div className='h-fit float-left bg-gray-700 pl-2 pr-2 w-1/5 text-center'>Slug</div>
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
                <div className='border-t h-fit float-left bg-gray-900 w-1/5 text-center'>{rank}</div>
                <div className='border-t h-fit float-left bg-gray-700 pl-2 pr-2 w-1/5 text-center overflow-hidden text-ellipsis truncate'>{item.username}</div>
                <div className='border-t h-fit float-left bg-gray-900 pl-2 pr-2 w-1/5 text-center'>{item.elo.toFixed(2)}</div>
                <div className='border-t h-fit float-left bg-gray-700 w-1/5 text-center'>{item.region}</div>
                <div className='border-t h-fit float-left bg-gray-700 pl-2 pr-2 w-1/5 text-center'>{item.slug}</div>
            </div>
        )
    }
    else {
        if (filter_list.includes(item.slug)) {
            return (
                <div className='w-full h-fit'>
                    <div className='border-t h-fit float-left bg-gray-900 w-1/5 text-center'>{rank}</div>
                    <div className='border-t h-fit float-left bg-gray-700 pl-2 pr-2 w-1/5 text-center overflow-hidden text-ellipsis truncate'>{item.username}</div>
                    <div className='border-t h-fit float-left bg-gray-900 pl-2 pr-2 w-1/5 text-center'>{item.elo.toFixed(2)}</div>
                    <div className='border-t h-fit float-left bg-gray-700 w-1/5 text-center'>{item.region}</div>
                    <div className='border-t h-fit float-left bg-gray-700 pl-2 pr-2 w-1/5 text-center'>{item.slug}</div>
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

export default App
