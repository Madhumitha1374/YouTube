import React from 'react'

export const NoInternet = () => {
    return (
        <div className='align-middle text-center mt-[15%]'>
            <img
            className='h-40'
            alt='error'
            src='https://static.vecteezy.com/system/resources/previews/002/737/785/non_2x/no-internet-connection-illustration-concept-free-vector.jpg'/>
            <h1 className='text-lg font-bold'>Connect to the Internet</h1>
            <p>You're offline. Check your internet connection</p>
        </div>
    )
}
