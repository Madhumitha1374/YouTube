import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import { Link } from 'react-router-dom'

export const ChannelBasicInfo = ({id,views,title}) => {
    const [channelData, setChannelData] = useState([])
    const getChannelData = async() => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" + id +"&key=" + API_KEY)
        const json = await data.json()
        // console.log(json.items, "********")
        setChannelData(json.items)
    }
    useEffect(()=>{
        getChannelData()
    },[])
    return channelData.length === 0 ? null :(
             <div className='flex mt-3'>
                <img 
                className='rounded-full h-7 mr-2'
                src={channelData[0]?.snippet?.thumbnails?.medium?.url} alt="thumbnail"/>
                <div className='-mt-1 flex flex-col'>
                {/* <p className='font-bold text-sm  md:text-clip truncate lg:truncate  lg:whitespace-break-spaces'>{title}</p> */}
                
                <p className='font-bold text-sm  md:text-clip truncate lg:max-h-10 lg:whitespace-break-spaces'>{title}</p>
                    <Link to={"/channel?ch_id=" + id}><p className='text-sm text-gray-400 cursor-pointer'>{channelData[0].snippet.title}</p>
                     </Link>
                     {views!==null ? <Link to={"/channel?ch_id=" + id}><p className='text-xs text-gray-400'>{views} views</p></Link> : <p></p>}
                </div> 

            </div>
       
    )
}
