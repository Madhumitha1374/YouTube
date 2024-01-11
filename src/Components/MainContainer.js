import React from 'react'
import { ButtonsList } from './ButtonsList'
import { VideoContainer } from './VideoContainer'
import { useSelector } from 'react-redux'
import { Footer } from './Footer'

export const MainContainer = () => {
    return (
        <div className='flex flex-col grow w-[calc(100%-240px)] '>
            <ButtonsList/> 
            <VideoContainer/>
            <Footer/>
        </div>
    )
}
