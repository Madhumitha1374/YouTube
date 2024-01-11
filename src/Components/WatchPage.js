import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeIsMainPage, removeSidebar } from '../redux/appSlice'
import { Link, useSearchParams } from 'react-router-dom'
import { API_KEY } from '../utils/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faEllipsis, faShare, faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { CommentsSection } from './CommentsSection'
import { RelatedVideos } from './RelatedVideos'
import { WatchPageChannelInfo } from './WatchPageChannelInfo'
import { LiveChat } from './LiveChat'
import { Footer } from './Footer'
import formatNumber from '../utils/helper'
// import { CommentsList } from './CommentsList'


export const WatchPage = () => {
    
    const isNightMode = useSelector(store => store.app.isNightMode)
    const [video, setVideo] = useState([])
    const [displayAbout,setDisplayAbout] = useState(false)
    const [queryParams] = useSearchParams()
    const dispatch = useDispatch()
    dispatch(changeIsMainPage(false))

    const getVideoById = async() => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=" +queryParams.get("v") + "&key=" + API_KEY)
        const json = await data.json()
        // console.log(json)
        setVideo(json.items)
    }


    useEffect(()=>{
        dispatch(removeSidebar())
        getVideoById()
    },[])


    return video.length === 0 ? null : (
        <div>
        <div className='lg:m-5 m-2 flex flex-col lg:flex-row lg:flex-grow'>
            {/* <div className='lg:w-[950px] w-[100%]'> */}
            <div className='lg:w-[950px] w-[350px]'>
            <iframe 
                // width="950" 
                // height="550" 
                
                className=' rounded-xl pb-3 lg:w-[950px] lg:h-[550px] w-full h-[300px]'
                src={"https://www.youtube.com/embed/" + queryParams.get("v") + "?autoplay=1"}
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            
            <div className='flex flex-col ml-3 mb-5'>
                <h1 className='font-semibold text-xl mb-4'>{video[0].snippet.title}</h1>
                <div className='flex lg:flex-row lg:justify-between flex-col '>
                    
                    <div className='flex mb-4 lg:mb-0'>
                            <WatchPageChannelInfo id = {video[0].snippet.channelId} key = {video[0].snippet.channelId}/>
                            </div>
                        <div className='flex'>
                        <div className={`flex bg-slate-100 px-4 py-2 rounded-l-full ${isNightMode ? 'bg-gray-200' : 'bg-gray-100 bg-opacity-10 text-white'}`}>
                            <FontAwesomeIcon icon={faThumbsUp} color='grey' className='h-5'/>
                            <p className='mx-2 text-sm font-semibold'>{formatNumber(video[0].statistics.likeCount)}</p>
                        </div>
                        <div  className={` bg-slate-100 px-4 py-2 rounded-r-full ${isNightMode ? 'bg-gray-200' : 'bg-gray-100 bg-opacity-10 text-white'}`}>
                            <FontAwesomeIcon icon={faThumbsDown} color='grey' flip='horizontal' className='h-5'/>
                        </div>
                        <div className={`bg-slate-100 px-4 flex py-2 rounded-full mx-3 ${isNightMode ? 'bg-gray-200' : 'bg-gray-100 bg-opacity-10 text-white'}`}>
                            <FontAwesomeIcon icon={faShare} color='grey' className='h-5 ' />
                            <p className='mx-2 text-sm font-semibold'>Share</p>
                        </div>
                        <div className={`hidden  md:flex bg-slate-100 px-4 lg:flex py-2 rounded-full ${isNightMode ? 'bg-gray-200' : 'bg-gray-100 bg-opacity-10 text-white'}`}>
                            <FontAwesomeIcon icon={faDownload} color='grey' className='h-5 ' />
                            <p className='mx-2 text-sm font-semibold'>Download</p>
                        </div>
                        <div className={`hidden  md:flex bg-slate-100 px-4 lg:flex py-2 rounded-full ml-3 ${isNightMode ? 'bg-gray-200' : 'bg-gray-100 bg-opacity-10 text-white'}`}>
                            <FontAwesomeIcon icon={faEllipsis} color='grey' className='h-5 mt-1' />
                        </div>
                        </div>
                    </div>
                </div>
                
            
            
            <div className={`flex flex-col bg-slate-200 p-3 rounded-md ${isNightMode ? 'bg-gray-200' : 'bg-gray-100 bg-opacity-10 text-white'}`}>
                    <p className='text-base font-bold'>{formatNumber(video[0].statistics.viewCount)} views</p>
                    <p>{video[0].snippet.localized.publishedAt}</p>
                    {!displayAbout && <div className='h-16 overflow-hidden mt-4 text-sm'>
                          <p>{video[0].snippet.description}</p>
                    </div>}
                    {displayAbout && <div className='mt-4 text-sm'>
                          <p>{video[0].snippet.description}</p>
                    </div>}
                    {!displayAbout && <p className='cursor-pointer' onClick={()=>setDisplayAbout(true)}>more...</p>}
                    {displayAbout && <p className='cursor-pointer' onClick={()=>setDisplayAbout(false)}>less...</p>}
            </div>
                <div className={`mt-6 w-full border border-black bg-slate-200 rounded-md p-2 ${isNightMode ? 'bg-gray-200' : 'bg-gray-100 bg-opacity-10 text-white'}`}>
                <h1 className='font-bold text-lg mb-4'>{formatNumber(video[0].statistics.commentCount)} Comments</h1>
                    <CommentsSection/>
                </div>
                </div>
                <div className='ml-7'>
                    <div className='hidden lg:block md:block'>
                        <LiveChat/>
                    </div>
                    <div className=''>
                        <RelatedVideos id = {video[0].snippet.channelId} key = {video[0].snippet.channelId}/>
                    </div>
                
                </div>
                </div>
        <Footer/>
        </div>
    )
}
