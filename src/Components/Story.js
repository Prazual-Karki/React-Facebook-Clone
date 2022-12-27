import React from 'react'
import "./Story.css"

export default function Story({image,pImage,title}) {
  return (
    <div className='story' style={{ backgroundImage: `url(${image})`  }}>
      <img src={pImage} alt="profileImg" className='profileImg'/>
      <h6>{title}</h6>
    </div>
  )
}
