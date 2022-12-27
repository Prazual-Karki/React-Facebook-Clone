import React from 'react'
import CreatePost from './CreatePost'
import PostData from './PostData'
import StoryData from './StoryData'
import "./Home.css"
export default function Home() {
  return (
    <div className='home' >
      
      <StoryData/>
      <CreatePost/>
      <PostData />
    </div>
  )
}
