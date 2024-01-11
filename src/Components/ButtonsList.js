import React from 'react'
import { Button } from './Button'
const buttons = ["All","Music","Watched","Sports","Game","Recently Uploaded", "Music","Movies","Live","News","Fashion","Podcast","Trending"]
export const ButtonsList = () => {
    return (
        <div className='flex  w-full overflow-x-scroll no-scrollbar'>
            {buttons.map((btn) => 
            <Button name = {btn}/>)}
        </div>
    )
}
