import React from 'react'
import "./Contact.css"
import Instructer from "../../images/Instructer.png"

const ContactContent = () => {
  return (
  <>
  <div class="contact-us">
    <div class="main-contact">
        <div class="inner-contact">
            <h1>Contact us</h1>
            <div class="inner-form-contact">
                <input type="text" placeholder="your name" />
                <input type="email" placeholder="your email" />
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
        </div>

        <div class="inner-contact">
            <img src={Instructer} alt="" />
        </div>
    </div>
</div>
  </>
  )
}

export default ContactContent
