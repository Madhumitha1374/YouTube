import React from 'react'
import { SideBar } from './SideBar'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Body = () => {
    const isNightMode = useSelector(store => store.app.isNightMode)
    return (
        <div className={`flex h-[calc(100%-56px)] ${isNightMode ? 'bg-white' : 'bg-black text-white'}`}>
            <SideBar/>
            <Outlet/>
        </div>
    )
}
