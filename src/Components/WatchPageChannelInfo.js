import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addSubscriber } from '../redux/subscriberSlice'
import formatNumber from '../utils/helper'

export const WatchPageChannelInfo = ({id}) => {
    
    const isNightMode = useSelector(store => store.app.isNightMode)
    const [channelData, setChannelData] = useState([])
    const dispatch = useDispatch()
    const getChannelData = async() => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" + id +"&key=" + API_KEY)
        const json = await data.json()
        // console.log(json.items)
        setChannelData(json.items)
    }
    useEffect(()=>{
        getChannelData()
    },[])

    const onCLickSubscribe = () => {
        dispatch(addSubscriber(channelData))
    }

    return channelData.length === 0 ? null :(
        <div className='flex'>
                <img 
                className='rounded-full h-8 mr-2'
                src={channelData[0]?.snippet?.thumbnails?.medium?.url} alt="thumbnail"/>
                <div className='-mt-1'>
                    <Link to={"/channel?ch_id=" + id}><p className='font-bold text-base cursor-pointer'>{channelData[0].snippet.title}</p>
                    <p className='text-[10px] font-bold text-gray-600'>{formatNumber(channelData[0]?.statistics?.subscriberCount)} subscribers</p>
                     </Link>
                </div> 
                <button className={`mx-5 bg-black font-bold text-sm py-2 px-4 rounded-full ${isNightMode ? 'bg-black text-white' : 'bg-white text-black'}`} onClick={onCLickSubscribe}>Subscribe</button>
                            
                 </div>
    )
}
