import React from 'react'

export const NoInternet = () => {
    return (
        <div className='align-middle text-center mt-[15%]'>
            <img
            className='h-40'
            alt='error'
            src='https://preview.redd.it/youtube-offline-astronaut-icon-upscaled-v0-8i3iza7hhd0b1.jpg?width=640&crop=smart&auto=webp&s=ff6acacfef223bf9d8bc2c7ff878b542fcacadca'/>
            <h1 className='text-lg font-bold'>Connect to the Internet</h1>
            <p>You're offline. Check your internet connection</p>
        </div>
    )
}
