import React from 'react'
import "./StoryData.css"
import Story from './Story'
import profile1 from "../StoryPhotos/prazual.jpg"
import profile2 from "../StoryPhotos/khuman.jpg"
import profile3 from "../StoryPhotos/nabin.jpg"
import profile4 from "../StoryPhotos/rc.jpg"
import profile5 from "../StoryPhotos/rupesh.jpg"

import bgprofile1 from "../StoryPhotos/suraj.jpg"
import bgprofile2 from "../StoryPhotos/bgimgsuraj.jpg"
import bgprofile3 from "../StoryPhotos/bgimg1.jpg"
import bgprofile4 from "../StoryPhotos/bgimg2.jpg"
import bgprofile5 from "../StoryPhotos/bgimg3.jpg"

export default function storyData() {
  return (
    <div className='storyData'>
        {/* Story */}
        <Story  image={bgprofile1}
                pImage={profile1}
                title="Prazual jung xettry"

        />
        <Story  image={bgprofile2}
                pImage={profile2}
                title="khuman Thapa"

        />
        <Story  image={bgprofile3}
                pImage={profile3}
                title="Nabin parajuli"

        />
        <Story  image={bgprofile4}
                pImage={profile4}
                title="Rc rajace"

        />
        <Story  image={bgprofile5}
                pImage={profile5}
                title="Rupesh Bhagoria"

        />
        

    </div>
  )
}
