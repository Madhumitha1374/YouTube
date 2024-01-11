import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const LiveChatData = ({name, message}) => {
    return (
        <div className='flex py-3 shadow-md'>
            <FontAwesomeIcon icon={faCircleUser} className='h-5 px-2 pt-1'/>
            <h1 className='font-bold pr-3'>{name} </h1>
            <p>{message} 🚀</p>
        </div>
    )
}
