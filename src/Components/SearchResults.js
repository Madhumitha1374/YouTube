import React, { useEffect, useState } from 'react'
import { API_KEY } from '../utils/constants'
import { SearchResultCard } from './SearchResultCard'
import { Link, useSearchParams } from 'react-router-dom'
import { Footer } from './Footer'

export const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([])
    // const {search} = useSelector(store => store.search)
    // console.log(search.searchValue)
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("search_query"))
    const getSearchResults = async() => {
        const data = await fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=" +searchParams.get("search_query") + "&key=" + API_KEY)
        const json = await data.json()
        setSearchResults(json.items)
    }
    useEffect(()=>{
        getSearchResults()
    },[searchParams.get("search_query")])
    return (
        <div>
        <div className='overflow-y-scroll no-scrollbar'>
             {searchResults.map((r) => <Link to={"/watch?v=" + r.id.videoId} key = {r.id.videoId}><SearchResultCard info={r} /></Link>)
            }
            
        </div>
        <Footer/>
        </div>
    )
}
