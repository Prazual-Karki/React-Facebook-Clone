import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark,faCalendarXmark,faCircleChevronDown, faClockRotateLeft, faFlag, faPhotoVideo, faStar, faStore, faTv, faUsers, faUsersRectangle} from '@fortawesome/free-solid-svg-icons';
import "./Menu.css"

import profileImg from "../StoryPhotos/prazual.jpg"

export default function Menu() {
  return (
    <div>
    
      <div className="sidebar">
        <a href="#" style={{paddingLeft:"4%"}}><img src={profileImg} alt="profileImg" height="28" width="28" style={{borderRadius:"60px"}}/>&nbsp;&nbsp;Prazual Jung Xettry</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faUsers} />&nbsp;&nbsp;Friends</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faPhotoVideo} />&nbsp;&nbsp;Most Recent</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faUsersRectangle} />&nbsp;&nbsp;Groups</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faStore} />&nbsp;&nbsp;Marketplace</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faTv} />&nbsp;&nbsp;Watch</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faClockRotateLeft} />&nbsp;&nbsp;&nbsp;Memories</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faBookmark} />&nbsp;&nbsp;&nbsp;&nbsp;Saved</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faFlag} />&nbsp;&nbsp;&nbsp;&nbsp;Pages</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faCalendarXmark} />&nbsp;&nbsp;&nbsp;&nbsp;Events</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faStar} />&nbsp;&nbsp;&nbsp;Favourites</a>
        <a href="#"><FontAwesomeIcon className='menuIcon' icon={faCircleChevronDown}/>&nbsp;&nbsp;&nbsp;See more</a>
        <br/>
        <p>Privacy . Terms . Advertising . Ad choices</p>
        <p>Cookies . More . Meta &#169; 2022</p>
        </div>
    </div>
  )
}
