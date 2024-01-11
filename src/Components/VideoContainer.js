import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { VideoCard } from './VideoCard'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import Shimmer from './Shimmer'
import Loader from './Loader'
import { useDispatch } from 'react-redux'
import { changeIsMainPage } from '../redux/appSlice'
import useOnlineStatus from '../Hooks/useOnlineStatus'
import { NoInternet } from './NoInternet'

export const VideoContainer = () => {
    const [videos, setVideos] = useState([])
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()

    dispatch(changeIsMainPage(true))
    const onlineStatus = useOnlineStatus()

    const getYouTubeVideos = async() => {
        try{
        const data = await fetch(YOUTUBE_VIDEO_API)
        const json = await data.json()
        // console.log(json)
        setVideos(json.items)
        }catch(e){
            console.log("error" + e)
           setIsError(true)
        }
    }
    
    const fetchData = () => {
        const getYouTubeVideos = async() => {
                const data = await fetch(YOUTUBE_VIDEO_API)
                const json = await data.json()
                setVideos(videos.concat(json.items))
        }
        getYouTubeVideos()
    }

    useEffect(()=>{
        getYouTubeVideos()
    },[])

    // console.log(videos[0])
    return (onlineStatus ? (videos.length === 0 ?  <Shimmer/> : (
        // <div className='flex flex-grow flex-wrap '>
        // isError ? <NoInternet/> : 
        <div className='grid md:grid-cols-2 w-[100%] lg:grid-cols-4 grow grid-cols-1 h-screen overflow-y-scroll no-scrollbar'>
            {videos.map((video)=>
            <Link to={"/watch?v=" + video.id  + "&search_query=" + video.snippet.channelId} key = {video.id}><VideoCard  video = {video}/></Link>)}
            <InfiniteScroll className='lg:ml-[500px] p-5'
                    dataLength={videos.length} //This is important field to render the next data
                    next={fetchData}
                    hasMore={true}
                    loader={<Loader color={"gray"}/>}
                    // loader = {<Shimmer/>}
                    >
                </InfiniteScroll>
        </div>)) : <div className='flex justify-center align-middle text-center'><NoInternet/></div>
    )
}
