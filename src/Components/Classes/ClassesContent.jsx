import React from 'react'
import "./Classes.css"
import Class1 from "../../images/class1.png"
import Class2 from "../../images/class2.png"
import Class3 from "../../images/class3.png"

const ClassesContent = () => {
  return (
<>
<div class="our-classes">

<h1>our classes</h1>

<div class="main-class">
    <div class="inner-class">
        <img src={Class1} alt="" />
        <div class="class-content">
            <h2>newbie class</h2>
            <p>Lt. At, illum veniam. Earum debitis asperiores voluptatem ut nemo harum voluptatibus</p>
            <a href="#">register now</a>
        </div>
    </div>

    <div class="inner-class">
        <img src={Class2} alt="" />
        <div class="class-content">
            <h2>newbie class</h2>
            <p>Lt. At, illum veniam. Earum debitis asperiores voluptatem ut nemo harum voluptatibus</p>
            <a href="#">register now</a>
        </div>
    </div>

    <div class="inner-class">
            <img src={Class3} alt="" />
            <div class="class-content">
                <h2>newbie class</h2>
                <p>Lt. At, illum veniam. Earum debitis asperiores voluptatem ut nemo harum voluptatibus</p>
                <a href="#">register now</a>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default ClassesContent
