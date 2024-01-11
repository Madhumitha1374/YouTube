import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import { Link } from 'react-router-dom'
import { ChannelVideoCard } from './ChannelVideoCard'

export const ChannelVideos = ({id}) => {
    const [videos, setVideos] = useState([])

    const getYouTubeVideos = async() => {
        const data = await fetch("https://www.googleapis.com/youtube/v3/search?key=" + API_KEY + "&channelId=" +id +"&part=snippet,id&order=date&maxResults=50")
        const json = await data.json()
        console.log(json)
        setVideos(json.items)
    }

    useEffect(()=>{
        getYouTubeVideos()
    },[])

    // console.log(videos[0])
    return videos.length === 0 ?  null : (
        <div className='flex flex-grow flex-wrap mt-5'>
        <div className='grid md:grid-cols-4 sm:grid-cols-4 grow grid-cols-1 h-screen overflow-y-scroll no-scrollbar'>
            {videos.map((video)=>
            <Link to={"/watch?v=" + video.id.videoId  + "&search_query=" + video.snippet.channelId}><ChannelVideoCard  video = {video}/></Link>)}
        </div>
        </div>
    )
}

