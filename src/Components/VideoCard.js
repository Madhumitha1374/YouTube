import React from 'react'
import { ChannelBasicInfo } from './ChannelBasicInfo'
import formatNumber from '../utils/helper'

export const VideoCard = ({video}) => {
    // console.log(video)
    const{channelId, title, thumbnails} = video?.snippet
    const {viewCount} = video?.statistics
    // console.log(viewCount)
    // const len = viewCount.length
    // let viewResult
    // switch (len) {
    //     case 4:
    //         viewResult =String( parseFloat((parseInt(viewCount)/1000)).toFixed(1)) + "K"
    //         break;
    //     case 5:
    //         viewResult =  String( parseFloat((parseInt(viewCount)/1000)).toFixed(1)) + "K"
    //         break;
    //     case 6:
    //         viewResult =  String( parseFloat((parseInt(viewCount)/100000)).toFixed(1)) + "K"
    //         break;
    //     case 7:
    //         viewResult =  String( parseFloat((parseInt(viewCount)/1000000)).toFixed(1)) + "M"
    //         break;
    //     case 8:
    //         viewResult =  String( parseFloat((parseInt(viewCount)/1000000)).toFixed(1)) + "M"
    //         break;
    //     default:
    //         break;
    // }
    return (
        <div className='m-3 cursor-pointer rounded-md hover:scale-105 transition duration-500 '>
            <img 
                className='rounded-md pb-1 w-full object-cover'
                src={thumbnails.medium.url} alt="thumbnail"/>
                <div className='px-3 flex flex-col'>
                    <ChannelBasicInfo id={channelId} views = {formatNumber(viewCount)} title = {title}/>
                </div>
        </div>
    )
}

//w-72