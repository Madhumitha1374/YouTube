import { faCircleUser, faHouse, faMoon, faPlay, faSquarePlus, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleMode } from '../redux/appSlice'

export const Footer = () => {
    
    const dispatch = useDispatch()
    const isNightMode = useSelector(store => store.app.isNightMode)
    return (
        <div className={`w-[100%] bottom-0 left-0  lg:hidden md:hidden fixed ${isNightMode ? 'bg-white' : 'bg-black'}`}>
            <ul className='py-1 flex justify-between'>
                <Link to={"/"}><li className='pb-3 text-sm  rounded-md p-2 cursor-pointer '><FontAwesomeIcon icon={faHouse} className='h-[22px] mr-5'/></li></Link>
                {!isNightMode ?<li onClick={()=> dispatch(toggleMode())} className='pb-3 text-sm  rounded-md p-2 cursor-pointer lg:hidden '><FontAwesomeIcon icon={faSun} className='h-[22px] mr-5'/></li>
                : <li onClick={()=> dispatch(toggleMode())} className='pb-3 text-sm  rounded-md p-2 cursor-pointer lg:hidden'><FontAwesomeIcon icon={faMoon} className='h-[22px] mr-5'/></li>}
            
                <li className='pb-3 text-sm  rounded-md p-2 cursor-pointer'><FontAwesomeIcon icon={faSquarePlus} className='h-[22px] mr-5'/></li>
                
                <li className='pb-3 text-sm  rounded-md p-2 cursor-pointer'><FontAwesomeIcon icon={faPlay} className='h-[22px] mr-5'/></li>
                <li className='pb-3 text-sm rounded-md p-2 cursor-pointer '><FontAwesomeIcon icon={faCircleUser} className='cursor-pointer h-[22px]'/></li>
                
            </ul>
        </div>
    )
}
