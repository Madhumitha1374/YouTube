import React, { useEffect, useState } from 'react'
import { LiveChatData } from './LiveChatData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/chatSlice'
import { Namesgenerater, makeMessage } from '../utils/helper'



export const LiveChat = () => {
    
    const isNightMode = useSelector(store => store.app.isNightMode)
    const [msg,setMsg] = useState("")
    const dispatch = useDispatch()
    const chatMessages = useSelector(store => store.chat.message)

    useEffect(()=>{
        const timer = setInterval(()=>{
            dispatch(addMessage({
                name : Namesgenerater(),
                message : makeMessage(10)
            }))
        },1000)

        return () => {
            clearInterval(timer)
        }
    },[])

    return (
        <div>
            <div className=' border border-gray-500 rounded w-full pt-3'>
            <h1 className='border-b border-gray-500 font-bold px-3 pb-2 '>Live chat</h1>
            <div className='flex flex-col-reverse h-[480px] overflow-y-scroll no-scrollbar'>
                {chatMessages.map((m) => <LiveChatData name ={m.name}  message = {m.message}/>)}
                
            </div>
        </div>
        <form className='border w-full rounded-md border-gray-500 items-end' onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessage({name : "Madhu",message : msg}))
            setMsg("")}}>
                <input placeholder='Chat....' type='text' value={msg} className={`border-b border-gray-200 w-11/12 h-10 ${isNightMode ? 'bg-white' : 'bg-black text-white'}`}
                onChange={(e)=> setMsg(e.target.value)}/>
                <FontAwesomeIcon icon={faPaperPlane}   className='pl-1 pt-2 cursor-pointer' onClick={()=>{
                     dispatch(addMessage({name : "Madhu",message : msg}))
                     setMsg("")
                }}/>
            </form>
        </div>
    )
}
