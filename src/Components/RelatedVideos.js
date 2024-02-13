import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import { Link } from 'react-router-dom'
import { RelatedVideoCard } from './RelatedVideoCard'
import useOnlineStatus from '../Hooks/useOnlineStatus'
import { NoInternet } from './NoInternet'

export const RelatedVideos = ({id}) => {
    const [relatedVideos, setRelatedVideos] = useState([])
    const onlineStatus = useOnlineStatus()

    const getSuggestionVideos = async() => {
        // const data = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +queryParams.get("search_query") + "&key=" + API_KEY)
        const data = await fetch("https://www.googleapis.com/youtube/v3/search?key=" + API_KEY + "&channelId=" +id +"&part=snippet,id&order=date&maxResults=50")
        const json = await data.json()
        // console.log(json.items)
        setRelatedVideos(json.items)
    }

    useEffect(()=>{
        getSuggestionVideos()
    },[])

    return  (onlineStatus ? (relatedVideos.length === 0 ? null : (
        <div>
            {relatedVideos.map((v) => 
                 <Link to={"/watch?v=" + v.id.videoId +"&search_query=" + v.snippet.channelId} key = {v.id.videoId}>
                 <RelatedVideoCard info = {v}/></Link>
            )}
        </div>
    )): <div className='flex justify-center align-middle text-center'><NoInternet/></div>)
}
//</div><Link to={"/watch?v=" + v.id.videoId +   + "&search_query=" + v.snippet.videoId} key = {v.id.videoId}>
               
                 //</Link>