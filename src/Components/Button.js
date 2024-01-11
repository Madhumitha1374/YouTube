import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const Button = ({name}) => {
    
    const isNightMode = useSelector(store => store.app.isNightMode)
    // const {name} = props
    return (
        <div>
           <Link to={"/results?search_query=" + name}> <p className={`p-2  rounded-md m-2 text-sm font-semibold ${isNightMode ? 'bg-gray-200' : 'bg-gray-100 bg-opacity-10 text-white'}`}>{name}</p> </Link>           
        </div>
    )
}
