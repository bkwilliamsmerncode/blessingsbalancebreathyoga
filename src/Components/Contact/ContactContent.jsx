import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import Instructer from "../../images/Instructer.png"
import donna5 from "../../images/donna5.jpg"



const ContactContent = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_9gk0on8', 'template_gx3imsd', form.current, {
          publicKey: 'P2CVCJ58_ylJEjeFM',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            form.current.reset()
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

  return (
  <>
  <div class="contact-us">
    <div class="main-contact">
        <div class="inner-contact">
            <h1>Contact us</h1>
            <form class="inner-form-contact" ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder="your name" name='name'/>
                <input type="email" placeholder="your email" name='email'/>
                <input type="text" placeholder="Subject" name='subject' />
                <textarea name="message" id="" cols="30" rows="10" placeholder='Message' ></textarea>
                <button type='submit' className='subbtn'><p>Submit</p></button>
            </form>
        </div>

        <div class="inner-contact">
            <img src={donna5} alt="" />
            {/* <img src={Instructer} alt="" /> */}
        </div>
    </div>
</div>
  </>
  )
}

export default ContactContent
