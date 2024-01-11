// import { CommentsList } from "./CommentsList"

import { useEffect, useState } from "react"
import { CommentsList } from "./CommentsList"
import { API_KEY } from "../utils/constants"

const commentsData = [
    {
        name : "Madhu",
        comment : "Must watch",
        replies : [
            {
                name : "Madhavi",
                comment : "Must watch",
                replies : [
                    {
                        name : "Keerthi",
                        comment : "Must watch",
                        replies : [
                        ]
                    }
                ]
            },
            {
                name : "Madhu",
                comment : "Must watch",
                replies : [
                    {
                        name : "Chinni",
                        comment : "Must watch",
                        replies : [
                        ]
                    }
                ]
            }
        ]
    },
    {
        name : "Madhu",
        comment : "Must watch",
        replies : [
            {
                name : "Prathap",
                comment : "Must watch",
                replies : [
                    {
                        name : "Balu",
                        comment : "Must watch",
                        replies : [
                            {
                                name : "Madhu",
                                comment : "Must watch",
                                replies : [
                                    {
                                        name : "Chinni",
                                        comment : "Must watch",
                                        replies : [
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
        ]
    },
    {
        name : "Madhu",
        comment : "Must watch",
        replies : [
            {
                name : "Priya",
                comment : "Must watch",
                replies : [
                    {
                        name : "Hari",
                        comment : "Must watch",
                        replies : [
                        ]
                    }
                ]
            },
            {
                name : "Madhu",
                comment : "Must watch",
                replies : [
                    {
                        name : "Prathibha",
                        comment : "Must watch",
                        replies : [
                        ]
                    }
                ]
            }
        ]
    },
    {
        name : "Madhu",
        comment : "Must watch",
        replies : [
            {
                name : "Vegnu",
                comment : "Must watch",
                replies : [
                    {
                        name : "Vidya",
                        comment : "Must watch",
                        replies : [
                        ]
                    }
                ]
            },
        ]
    },
    {
        name : "Madhu",
        comment : "Must watch",
        replies : [
            {
                name : "kumari",
                comment : "Must watch",
                replies : [
                    {
                        name : "Anu",
                        comment : "Must watch",
                        replies : [
                        ]
                    }
                ]
            },
            {
                name : "Likki",
                comment : "Must watch",
                replies : [
                    {
                        name : "Bhavya",
                        comment : "Must watch",
                        replies : [
                        ]
                    }
                ]
            }
        ]
    },
    {
        name : "Madhu",
        comment : "Must watch",
        replies : [
            {
                name : "Akki",
                comment : "Must watch",
                replies : [
                    {
                        name : "Arjun",
                        comment : "Must watch",
                        replies : [
                        ]
                    }
                ]
            },
        ]
    },
]

const classNames = "h-12 overflow-hidden"


export const CommentsSection = () => {
    const [displayComments,setDisplayComments] = useState(false)

    // const getCommentsByVideo = async() =>{
    //     const data = await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=ifvnPH30okg&t=253s&key=" + API_KEY)
    //     // const data = await fetch("https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=Ugx38iOrnlKbE268ngV4AaABAg&key=" + API_KEY)
    //     const json = await data.json()
    //     console.log(json)
    // }

    // useEffect(()=>{
    //     getCommentsByVideo()
    // },[])
    return (
        <div>
            {!displayComments &&<div className="h-12 overflow-hidden">
            {commentsData.map((c) => <CommentsList  data = {c}/>)}
            </div>}
            {displayComments && <div>
            {commentsData.map((c) => <CommentsList  data = {c}/>)}
            </div>}
            {!displayComments && <p className='cursor-pointer' onClick={()=>setDisplayComments(true)}>more...</p>}
                    {displayComments && <p className='cursor-pointer' onClick={()=>setDisplayComments(false)}>less...</p>}
        </div>
    )
}
