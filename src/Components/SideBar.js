import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faThumbsUp, faClockRotateLeft, faClock, faSquarePlus, faPlay, faMoon, faSun, faBell} from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { explore } from '../utils/sidebarConstants'
import { toggleMode } from '../redux/appSlice'


export const SideBar = () => {
    const dispatch = useDispatch()
    const isNightMode = useSelector(store => store.app.isNightMode)
    const isMenuOpen = useSelector(store => store.app.isMenuOpen)
    const subscribe = useSelector(store => store.subscribe)
    const subscriberList = subscribe.subscribersList
    const isMainPage = useSelector(store => store.app.isMainPage)
    // console.log("***", subscriberList[0])
    if (!isMenuOpen) return null;
    return (
        <div className={`hidden md:inline-block lg:inline-block ml-3 px-1  overflow-y-scroll no-scrollbar h-screen transition-all ${isMainPage ? 'translate-x-[-240] w-[200px]' :  'translate-x-[-240] w-[200px] absolute'} ${isNightMode ? 'bg-white' :'bg-black'} `}>
            <ul className='py-1'>
                <Link to={"/"}><li className={`pb-3 text-sm hover:bg-gray-300 rounded-md p-2 cursor-pointer ${isNightMode ? 'hover :bg-gray-300' : 'hover:bg-gray-600 bg-opacity-0 text-white'}`}><FontAwesomeIcon icon={faHouse} className='h-4 mr-5'/>Home</li></Link>
                <li className={`pb-3 text-sm hover:bg-gray-300 rounded-md p-2 cursor-pointer ${isNightMode ? 'hover :bg-gray-300' : 'hover:bg-gray-600 bg-opacity-0 text-white'}`}><FontAwesomeIcon icon={faPlay} className='h-4 mr-5'/>Shorts</li>
                <li className={`pb-3 text-sm hover:bg-gray-300 rounded-md p-2 cursor-pointer ${isNightMode ? 'hover :bg-gray-300' : 'hover:bg-gray-600 bg-opacity-0 text-white'}`}><FontAwesomeIcon icon={faSquarePlus} className='h-4 mr-5'/>Subsription</li>
            </ul>
            <hr/>
            <ul className='pb-3 pt-5'>
                <li className={`pb-3 text-sm hover:bg-gray-300 rounded-md p-2 cursor-pointer ${isNightMode ? 'hover :bg-gray-300' : 'hover:bg-gray-600 bg-opacity-0 text-white'}`}><FontAwesomeIcon icon={faClockRotateLeft} className='h-4 mr-5'/>History</li>
                <li className={`pb-3 text-sm hover:bg-gray-300 rounded-md p-2 cursor-pointer ${isNightMode ? 'hover :bg-gray-300' : 'hover:bg-gray-600 bg-opacity-0 text-white'}`}><FontAwesomeIcon icon={faClock} className='h-4 mr-5'/>Watch Later</li>
                <li className={`pb-3 text-sm hover:bg-gray-300 rounded-md p-2 cursor-pointer ${isNightMode ? 'hover :bg-gray-300' : 'hover:bg-gray-600 bg-opacity-0 text-white'}`}><FontAwesomeIcon icon={faThumbsUp} className='h-4 mr-5'/>Liked Videos</li>
                {!isNightMode ?<li onClick={()=> dispatch(toggleMode())} className={`pb-3 text-sm hover:bg-gray-300 rounded-md p-2 cursor-pointer lg:hidden ${isNightMode ? 'hover :bg-gray-300' : 'hover:bg-gray-600 bg-opacity-0 text-white'}`}><FontAwesomeIcon icon={faSun} className='h-4 mr-5' />Change Mode</li>
                : <li onClick={()=> dispatch(toggleMode())} className={`pb-3 text-sm hover:bg-gray-300 rounded-md p-2 cursor-pointer lg:hidden ${isNightMode ? 'hover :bg-gray-300' : 'hover:bg-gray-600 bg-opacity-0 text-white'}`}><FontAwesomeIcon icon={faMoon} className='h-4 mr-5'/>Change Mode</li>}
            
            </ul>
            <hr/>  
            <ul className='py-3'>
                <li className='font-bold py-5'>Subscriptions</li>
                {subscriberList.map((subscriber) =>  <div className={` flex pb-3 rounded-md p-2 cursor-pointer ${isNightMode ? 'hover :bg-gray-300' : 'hover:bg-gray-600 bg-opacity-0 text-white'}`}>
                     <img className='rounded-full h-5 mr-2' src={subscriber[0]?.snippet?.thumbnails?.medium?.url} alt='channelImage' />
                     <p className='text-[12px]'>{subscriber[0]?.snippet?.title}</p>
                </div>
            )}
            </ul>
            <hr/>
            <ul className='py-3'>
                <li className='font-bold py-5 '>Explore</li>
                {explore.map((e) => 
                    <Link to={"/results?search_query=" + e.value}>
                    <li className={`pb-3 text-sm hover:bg-gray-300 rounded-md p-2 cursor-pointer ${isNightMode ? 'hover :bg-gray-300' : 'hover:bg-gray-600 bg-opacity-0 text-white'}`} 
                    // onClick={() => window.location.href = "/results?search_query=" + e.value}
                    >
                         <FontAwesomeIcon icon= {e.icon}  className='h-4 mr-5'/>
                         {e.name}
                         </li>
                         </Link>
                         )}
            </ul>
        </div>
    )
}
