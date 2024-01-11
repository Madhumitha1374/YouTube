import React from 'react'
import { useDispatch } from 'react-redux'
import { changeIsMainPage } from '../redux/appSlice'

export const SearchResultCard = ({info}) => {
    const{snippet} = info
    const{channelTitle,description,title,thumbnails} = snippet
    const dispatch = useDispatch()
    dispatch(changeIsMainPage(true))
    return (
        <div className='flex my-2 lg:mx-28 mx-10 lg:flex-row flex-col'>
            <img src={thumbnails.medium.url} className='rounded-md mx-4 my-3 hidden lg:grid lg:col-span-2' alt = "card"/>
            <img src={thumbnails.medium.url} className='rounded-md my-3 w-full  lg:hidden md:hidden' alt = "card"/>
            
            <div className='lg:py-5 md:py-5 py-2 px-6 lg:px-0'>
                <h1 className='font-semibold text-lg my-1'>{title}</h1>
                <p className='font-semibold'>{channelTitle}</p>
                <p className='text-xs my-1 hidden lg:inline-block md:inline-block'>{description}</p>
            </div>
            
        </div>
    )
}
// lg:w-[320] lg:h-[180] sm:w-[90%] sm:object-cover
