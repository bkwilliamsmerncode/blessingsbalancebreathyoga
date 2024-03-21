import React from 'react'
import "./About.css"
import Instructer from "../../images/Instructer.png"
import New from "../../images/newexperience.png"
import donna5 from "../../images/donna5.jpg"
import donna13 from "../../images/donna13.jpg"
import donna9 from "../../images/donna9.jpg"

import { useNavigate } from 'react-router-dom'

const AboutContent = () => {

const nav = useNavigate();

  return (
   <>
 <div class="our-instructor">
    <h1>Our instructor</h1>
    <div class="main-instructor">
        <div class="inner-instructor">
            <div class="inner-content-instructor">
                <p style={{fontSize: "xx-large"}}>Dr. Donna Jagielski</p>  <br /> <h2>Instructor</h2>
            <p>Belief that you can be a devout Christian and a devout yoga practioner. There is the underlying belief of the goodness in all of us and to honor and respect all living things. </p>
            <button onClick={() => nav("/")} className='regbtn'>Read More</button> 
            </div>
            
        </div>

        <div class="inner-instructor">
            <img src={donna5} alt="" />
            {/* <img src={Instructer} alt="" /> */}
        </div>
    </div>
</div>

<div class="our-instructor">
    <div class="main-instructor">

        <div class="inner-instructor">
            <img src={donna13} alt="" />
            {/* <img src={New} alt="" /> */}
        </div>

        <div class="inner-instructor">
            <div class="inner-content-instructor">
                <h2>New <br /> Experience</h2>
            <p>My RCYT through YogaEd has been focused on trauma-informed/sensitive practice. Additionally, my 100-hour YTT (Yahweh Teacher Training) provided me with approaching yoga practice through a Christian faith-based lens. </p>
            <button onClick={() => nav("/")} className='regbtn'>Read More</button> 
            </div>
            
        </div>
        <div class="inner-instructor">
            <div class="inner-content-instructor">
                <p style={{fontSize: "xx-large"}}>Dr. Donna Jagielski</p>  <br /> <h2>Instructor</h2>
            <p>Belief that you can be a devout Christian and a devout yoga practioner. There is the underlying belief of the goodness in all of us and to honor and respect all living things. </p>
            <button onClick={() => nav("/")} className='regbtn'>Read More</button> 
            </div>
            
        </div>

        <div class="inner-instructor">
            <img src={donna9} alt="" />
            {/* <img src={Instructer} alt="" /> */}
        </div>
    </div>
</div>
   </>
  )
}

export default AboutContent
