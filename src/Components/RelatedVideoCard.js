import React from 'react'
// import { ChannelBasicInfo } from './ChannelBasicInfo'

export const RelatedVideoCard = ({info}) => {
    const{snippet} = info
    console.log(snippet)
    const{channelTitle,title,thumbnails} = snippet
    return (
        <div className='flex lg:ml-5 md:ml-5 ml-1 flex-col lg:flex-row'>
            <img src={thumbnails.medium.url} className='rounded-md my-3 h-28 hidden lg:inline-block' alt = "card"/>
            <img src={thumbnails.medium.url} className='rounded-md mt-4 w-full  lg:hidden md:hidden' alt = "card"/>
            
            <div className='py-3 ml-2'>
                <h1 className='font-semibold text-xs my-1 overflow-hidden text-ellipsis'>{title}</h1>
                <p className='font-semibold text-[10px]'>{channelTitle}</p>
            </div>
            
        </div>
    )
}
// )sm:w-[70%] lg:w-[320] lg:h-[180]
