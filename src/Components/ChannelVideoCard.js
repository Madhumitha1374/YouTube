import React from 'react'
import { ChannelBasicInfo } from './ChannelBasicInfo'

export const ChannelVideoCard = ({video}) => {
    // console.log(video)
    const{channelId, title, thumbnails} = video?.snippet
    return (
        <div className='m-3 cursor-pointer rounded-md hover:scale-105 transition duration-500'>
            <img 
                className='rounded-md pb-1'
                src={thumbnails.medium.url} alt="thumbnail"/>
                <div className='px-3 py-1'>
                <p className='font-bold text-sm  md:text-clip truncate lg:max-h-10 lg:whitespace-break-spaces'>{title}</p>
                <ChannelBasicInfo id={channelId} key={channelId}/>
                {/* <p className='text-sm text-gray-500'>{channelTitle}</p> */}
                </div>
        </div>
    )
}

//w-72