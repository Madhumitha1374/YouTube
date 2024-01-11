import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


export const Comment = ({name, comment}) => {
    return (
        
            <div className='m-2'>
                <div className='flex'>
                <FontAwesomeIcon icon={faCircleUser} className='h-5 px-5 mt-1'/>
                <h1 className='font-bold text-xl'>{name}</h1>
                </div>
                <p className='pl-16'>{comment} xdcftvgbhjnkmsdhfsuigfbvydfuahdj</p>
            </div>

            
       
    )
}
