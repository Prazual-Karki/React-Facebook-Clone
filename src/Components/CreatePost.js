import React from 'react'
import "./CreatePost.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faPhotoFilm, faVideoCamera } from '@fortawesome/free-solid-svg-icons';
import profileImg from "../StoryPhotos/prazual.jpg"

export default function CreatePost() {
  return (
    <div className='createPost'>
      <img src={profileImg} alt="profileImage" height="40" width="40" style={{borderRadius:"20px"}}/>&nbsp;&nbsp;
      <input placeholder="What's on your mind, Prazual?"
        style={{height:"40px",width:"350px",
                borderRadius:"20px",backgroundColor:"#f3f6f4",borderWidth:"0px",
                paddingLeft:"3%",fontSize:"18px"}}/>
      <hr size="1" />
      <div>
      <a href='#'>
        <FontAwesomeIcon className='createIcon' icon={faVideoCamera} style={{color:"#f00c0c",paddingLeft:"3%"}} />&nbsp;&nbsp;Live video
      </a>
      <a href='#'>
        <FontAwesomeIcon className='createIcon' icon={faPhotoFilm} style={{color:"#44c244"}}/>&nbsp;&nbsp;Photo/video
      </a>
      <a href='#'>
        <FontAwesomeIcon className='createIcon' icon={faFaceSmile}style={{color:"#b0b069"}} />&nbsp;&nbsp;Feeling/activity
      </a>
      </div>
    </div>
  )
}