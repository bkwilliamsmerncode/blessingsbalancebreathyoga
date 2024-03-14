import React from 'react'
import "./Home.css"
import For from "../../images/forbg.png"

const HomeContent = () => {
  return (
    <>
    <div id="home" class="back">
    <div class="mian-home">
        <div class="inner-home">
            <img src={For} alt="" />
        </div>

        <div class="inner-home">
            <div class="inner-content">
                <h1>Yoga class</h1>
                <p>Temporibus et ullam impedit odit accusantium, sapiente aut, cumque nihil rerum deserunt est hic nisi voluptas consequatur accusamus quibusdam voluptates culpa quisquam.</p>
                <a href="#">Register now</a>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default HomeContent
