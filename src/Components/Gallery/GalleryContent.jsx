import React from 'react'
import "./Gallery.css"
import Gallery1 from "../../images/gallery1.jpg"
import Gallery2 from "../../images/gallery2.jpg"
import Gallery3 from "../../images/gallery3.jpg"
import Gallery4 from "../../images/gallery4.jpg"
import Gallery5 from "../../images/gallery5.jpg"
import Gallery6 from "../../images/gallery6.jpg"
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"
import img4 from "../../images/img4.jpg"
import img5 from "../../images/img5.jpg"
import img6 from "../../images/img6.jpg"

const GalleryContent = () => {
  return (
    <>
    <div class="our-gallery">
    <h1>gallery</h1>
    <div class="main-gallery">
        {/* <div class="inner-gallery">
            <img src={img1} alt="" />
        </div>

        <div class="inner-gallery">
            <img src={img2} alt="" />
        </div>

        <div class="inner-gallery">
            <img src={img3} alt="" />
        </div>

        <div class="inner-gallery">
            <img src={img4} alt="" />
        </div>

        <div class="inner-gallery">
            <img src={img5} alt="" />
        </div>

        <div class="inner-gallery">
            <img src={img6} alt="" />
        </div> */}
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
