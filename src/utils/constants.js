 export const API_KEY = "AIzaSyAnyjk7-0NSNtO-62JKZtFNY1ItOXFbv4Y"
//  export const API_KEY = import API_KEY

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" + API_KEY

export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="



{/* <div className='flex flex-col col-span-10'>
            <div className='flex mx-4  pl-[18%] -mt-[1px] h-10'>
                <input className={`border-gray-300 border   rounded-l-full px-4 py-1 w-8/12 ${isNightMode ? 'bg-white' : 'bg-black text-white'}`}
               type = "text"
               placeholder='Search'
               value={searchValue}
               onFocus={() => setShowSearchResults(true)}
               // onBlur={() => setShowSearchResults(false)}
               onChange={(e)=> changeOnSearchValue(e)}
               onKeyDown={(e) => {
                   if(e.key === "Enter"){
                       window.location = "/results?search_query=" + searchValue
                       setSearchValue("")
                   }
               }}/>
               <FontAwesomeIcon icon={faMagnifyingGlass} onClick={() => window.location.href = "/results?search_query=" + {searchValue}} className={`border-x-gray-50  border rounded-r-full  px-4 py-3 bg-gray-200 cursor-pointer ${isNightMode ? 'bg-gray-200' : 'bg-opacity-0 text-white'}`} />
           </div>
          
           {showSearchResults && <div onBlur={() => setShowSearchResults(false)} className={`fixed mx-[14%] lg:w-[480px] md:w-[480px] w-full  pl-4 pr-36 mt-10 rounded-2xl shadow ${isNightMode ? 'bg-white text-black' : 'bg-black text-white'}`}>
               {searchResults.map((s)=><p className='py-2 cursor-pointer'
                onFocus={() => setShowSearchResults(true)}
                onClick={() => window.location.assign("/results?search_query=" + s)}><FontAwesomeIcon icon={faMagnifyingGlass} className='pr-4'/>{s}</p>)}
           </div>}
            <SearchResults/>
           
           </div> */}