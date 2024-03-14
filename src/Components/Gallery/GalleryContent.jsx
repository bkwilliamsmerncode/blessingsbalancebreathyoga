import React from 'react'
import "./Gallery.css"
import Gallery1 from "../../images/gallery1.jpg"
import Gallery2 from "../../images/gallery2.jpg"
import Gallery3 from "../../images/gallery3.jpg"
import Gallery4 from "../../images/gallery4.jpg"
import Gallery5 from "../../images/gallery5.jpg"
import Gallery6 from "../../images/gallery6.jpg"

const GalleryContent = () => {
  return (
    <>
    <div class="our-gallery">
    <h1>gallery</h1>
    <div class="main-gallery">
        <div class="inner-gallery">
            <img src={Gallery1} alt="" />
        </div>

        <div class="inner-gallery">
            <img src={Gallery2} alt="" />
        </div>

        <div class="inner-gallery">
            <img src={Gallery3} alt="" />
        </div>

        <div class="inner-gallery">
            <img src={Gallery4} alt="" />
        </div>

        <div class="inner-gallery">
            <img src={Gallery5} alt="" />
        </div>

        <div class="inner-gallery">
            <img src={Gallery6} alt="" />
        </div>
    </div>
</div>
    </>
  )
}

export default GalleryContent
