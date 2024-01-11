import React from 'react'
import { Comment } from './Comment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'


export const CommentsList = ({data}) => {
    const {name, comment, replies} = data
    
    const isNightMode = useSelector(store => store.app.isNightMode)
    // console.log(data)
    return (
        <div className='p-3'>
            <Comment name = {name} comment = {comment}/>
            <div className={`ml-5 border-l border-black ${!isNightMode ? 'border-l border-gray-300' : 'border-l border-black'}`}>
                {replies.map((m) =><CommentsList data = {m}/> )}
                
            </div>
        </div>
    )
}
