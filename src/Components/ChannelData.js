import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import { useSearchParams } from 'react-router-dom'
import { ChannelVideos } from './ChannelVideos'
import { useSelector } from 'react-redux'
import { Footer } from './Footer'
import formatNumber from '../utils/helper'

export const ChannelData = () => {
    
    const isNightMode = useSelector(store => store.app.isNightMode)
    const [queryParams] = useSearchParams()
    const [channelData, setChannelData] = useState([])

    const getChannelData = async() => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" + queryParams.get("ch_id") +"&key=" + API_KEY)
        const json = await data.json()
        // console.log(json.items)
        setChannelData(json.items)
    }
    useEffect(()=>{
        getChannelData()
    },[])
    return channelData.length === 0 ? null : (
        <div  className='flex flex-col grow w-[calc(100%-240px)] '>
        <div className='flex md:flex-row lg:flex-row flex-col mx-auto mt-6 mb-10'>
            <img className='rounded-full lg:h-56 md:h-56 h-20 hidden lg:inline-block md:inline-block' src={channelData[0]?.snippet?.thumbnails?.medium?.url} alt='channelImage' />
            <img className='rounded-full lg:hidden md:hidden w-[50%] ml-[21%]' src={channelData[0]?.snippet?.thumbnails?.high?.url} alt='channelImage' />
            
            <div className='w-[90%] lg:text-left md:text-left text-center md:mx-5 lg:mx-5 md:px-3 lg:pr-14 lg:px-3'>
                <h1 className='font-bold lg:text-4xl md:lg:text-4xl text-2xl'>{channelData[0].snippet.title}</h1>
                <div className='flex flex-col lg:flex-row md:flex-row text-gray-500 pt-3 pb-3'>
                    <p className='pr-3'>{channelData[0]?.snippet?.customUrl}</p>
                    <p className='pr-3'>{formatNumber(channelData[0]?.statistics?.subscriberCount)} subscribers</p>
                    <p>{formatNumber(channelData[0]?.statistics?.videoCount)} videos</p>
                </div>
                <div className=' hidden  lg:flex md:flex '>
                    <p className='text-[13px] text-gray-500 mb-5 h-6 w-96 overflow-hidden'>{channelData[0]?.snippet?.description}</p>
                    <p className='-mt-1'>...</p>
                </div>
                
                <button className={` font-bold text-base py-3 px-5 rounded-full ${isNightMode ? 'bg-black text-white' : 'bg-white text-black'}`}>Subscribe</button>
            </div>
        </div>
        <div className='m-3'>
        <hr/>
        <ChannelVideos id = {channelData[0]?.id} key = {channelData[0]?.id}/>
        </div>
        <Footer/>
        </div>
    )
}
