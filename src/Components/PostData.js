import React from 'react'
import Post from './Post'
import prazualP from "../StoryPhotos/prazual.jpg"
import khumanP from "../StoryPhotos/khuman.jpg"
import surajP from "../StoryPhotos/bgimgsuraj.jpg"
import rupeshP from "../StoryPhotos/rupesh.jpg"
import rcP from "../StoryPhotos/rc.jpg"
import nabinP from "../StoryPhotos/nabin.jpg"

import cr7 from "../NewsFeedPhotos/cr7.jpg"
import leo from "../NewsFeedPhotos/leocold.jpg"
import machha from "../NewsFeedPhotos/machha.jpg"
import messiemi from "../NewsFeedPhotos/messileo.jpg"
import swayambhu from "../NewsFeedPhotos/swayambhu.jpg"
import trek from "../NewsFeedPhotos/trekking.jpg"


export default function PostData() {
  return (
    <div className='postData'>
        <Post 
            profilePic = {prazualP}
            pImage = {messiemi}
            username = "Prazual Jung Xettry"
            time = "5h."
            message = "leo messi and emilio martinez"
            likes="467"
            
        />
        <Post 
            profilePic = {khumanP}
            pImage = {leo}
            username = "Khuman Thapa"
            time = "1m."
            message = "the coldest celebration so far..."
            likes="555"
            
        />
        <Post 
            profilePic = {surajP}
            pImage = {machha}
            username = "Suraj Bhattarai"
            time = "1d."
            message = "just chilling in the mountains and feeling the vibes around machhapuchhre himal.."
            likes="248"
            
        />
        <Post 
            profilePic = {rupeshP}
            pImage = {trek}
            username = "Rupesh Bhagoria"
            time = "2d."
            message = "it's okay to be lost in nature."
            likes="123"
            
        />
        <Post 
            profilePic = {rcP}
            pImage = {cr7}
            username = "Rc Rajace"
            time = "1h."
            message = "you will always be my greatest of all times....no matter you fail or succeed. i am always with you"
            likes= "446"
            
        />
        <Post 
            profilePic = {nabinP}
            pImage = {swayambhu}
            username = "Nabin Parajuli"
            time = "3d."
            message = "it always gives me positive vibes.."
            likes="323"
            
        />
        
      
    </div>
  )
}
