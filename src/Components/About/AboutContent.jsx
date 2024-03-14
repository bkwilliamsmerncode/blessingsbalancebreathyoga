import React from 'react'
import "./About.css"
import Instructer from "../../images/Instructer.png"
import New from "../../images/newexperience.png"

const AboutContent = () => {
  return (
   <>
 <div class="our-instructor">
    <h1>Our instructor</h1>
    <div class="main-instructor">
        <div class="inner-instructor">
            <div class="inner-content-instructor">
                <h2>best <br /> Instructor</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cum non! Eveniet qui doloribus rem ipsa, veritatis culpa </p>
            <a href="#">Read more</a>
            </div>
            
        </div>

        <div class="inner-instructor">
            <img src={Instructer} alt="" />
        </div>
    </div>
</div>

<div class="our-instructor">
    <div class="main-instructor">

        <div class="inner-instructor">
            <img src={New} alt="" />
        </div>

        <div class="inner-instructor">
            <div class="inner-content-instructor">
                <h2>New <br /> Experience</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cum non! Eveniet qui doloribus rem ipsa, veritatis culpa </p>
            <a href="#">Read more</a>
            </div>
            
        </div>
    </div>
</div>
   </>
  )
}

export default AboutContent
