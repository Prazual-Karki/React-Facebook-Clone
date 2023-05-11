import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faMessage,
  faShare,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

import './Post.css'

export default function Post({
  profilePic,
  pImage,
  username,
  time,
  message,
  likes,
}) {
  const [isLiked, setisLiked] = useState(false)
  return (
    <div className='post'>
      <div className='post__top'>
        <img
          src={profilePic}
          className='post__avatar'
          alt='profilePic'
          height='40'
          width='40'
        />
        <div className='post__topInfo'>
          <h6>{username}</h6>
          <p>{time}</p>
        </div>
      </div>

      <div className='post__bottom'>
        <p>{message}</p>
      </div>

      <div className='post__image'>
        <img
          src={pImage}
          alt='postimage'
          className='postImage'
          height='500'
          width='533'
        />
      </div>
      <p
        style={{
          fontWeight: '400',
          fontSize: '15px',
          color: '#65676B',
          marginLeft: '10px',
          lineHeight: '40px',
          marginBottom: '0%',
        }}
      >
        <FontAwesomeIcon
          icon={faHeart}
          style={{
            color: 'white',
            borderRadius: '60px',
            backgroundColor: '#e44444',
            padding: '0.3em 0.3em',
            marginRight: '6px',
            verticalAlign: 'middle',
            lineHeight: '40px',
          }}
        />
        {likes}
      </p>
      <hr style={{ marginBottom: '1%', marginTop: '1%' }} />

      <div className='post__options'>
        <div className='post__option' onClick={() => setisLiked(true)}>
          <FontAwesomeIcon icon={isLiked ? faHeart : faThumbsUp} />
          <p>Like</p>
        </div>
        <div className='post__option'>
          <FontAwesomeIcon icon={faMessage} />
          <p>Comment</p>
        </div>
        <div className='post__option'>
          <FontAwesomeIcon icon={faShare} />
          <p>Share</p>
        </div>
      </div>
    </div>
  )
}
