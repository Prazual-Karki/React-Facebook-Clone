import React from 'react'

import khumanC from '../ContactPhotos/khuman.jpg'
import surajC from '../ContactPhotos/bgimgsuraj.jpg'
import rupeshC from '../ContactPhotos/rupesh.jpg'
import nabinC from '../ContactPhotos/nabin.jpg'
import rcC from '../ContactPhotos/rc.jpg'
import sumanC from '../ContactPhotos/messi.jpg'
import nisheshC from '../ContactPhotos/bgimg.jpg'
import rajC from '../ContactPhotos/bgimg1.jpg'
import leoC from '../ContactPhotos/bgimg3.jpg'
import pic1 from '../ContactPhotos/cr7.jpg'
import pic2 from '../ContactPhotos/leocold.jpg'
import pic3 from '../ContactPhotos/suraj.jpg'
import pic4 from '../ContactPhotos/machha.jpg'
import pic5 from '../ContactPhotos/messileo.jpg'
import pic6 from '../ContactPhotos/trekking.jpg'
import pic7 from '../ContactPhotos/swayambhu.jpg'

import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEllipsis,
  faMagnifyingGlass,
  faVideo,
  faVideoSlash,
} from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
  return (
    <div className='contact'>
      <div className='cHead'>
        <p>Contacts</p>
        <FontAwesomeIcon className='cIcon' icon={faVideoSlash} />
        <FontAwesomeIcon className='cIcon' icon={faMagnifyingGlass} />
        <FontAwesomeIcon className='cIcon' icon={faEllipsis} />
      </div>
      <a href='#'>
        <img
          src={khumanC}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Khuman Thapa
      </a>
      <a href='#'>
        <img
          src={surajC}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Suraj Bhattarai
      </a>
      <a href='#'>
        <img
          src={rupeshC}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Rupesh Bhagoria
      </a>
      <a href='#'>
        <img
          src={nabinC}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Nabin Parajuli
      </a>
      <a href='#'>
        <img
          src={rcC}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;RC Rajace
      </a>
      <a href='#'>
        <img
          src={sumanC}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Leo Messi
      </a>
      <a href='#'>
        <img
          src={nisheshC}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Nishesh Poudel
      </a>
      <a href='#'>
        <img
          src={rajC}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Neymar Jr.
      </a>
      <a href='#'>
        <img
          src={leoC}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Suman K.C
      </a>
      <a href='#'>
        <img
          src={pic1}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;C.Ronaldo
      </a>
      <a href='#'>
        <img
          src={pic2}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Harry Kane
      </a>
      <a href='#'>
        <img
          src={pic3}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Prazual Karki
      </a>
      <a href='#'>
        <img
          src={pic4}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Luka Modric
      </a>
      <a href='#'>
        <img
          src={pic5}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Emalio martinez
      </a>
      <a href='#'>
        <img
          src={pic6}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;David Beckham
      </a>
      <a href='#'>
        <img
          src={pic7}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Mbappe
      </a>
      <a href='#'>
        <img
          src={khumanC}
          alt='profileImg'
          height='28'
          width='28'
          style={{ borderRadius: '60px' }}
        />
        &nbsp;&nbsp;Khuman Thapa
      </a>
    </div>
  )
}
