import React, { useRef, useState } from 'react'
import "./Contact.css"
import emailjs from '@emailjs/browser';
import Instructer from "../../images/Instructer.png"
import donna5 from "../../images/donna5.jpg"



const ContactContent = () => {

  const emailRegex = /^\S+@\S+\.\S+$/;
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [input, setInput] = useState({})

  const handleInput = (e) => {
    setInput(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
}



const handleChange = (e) => {
  setEmail(e.target.value);
  setIsValid(validateEmail(e.target.value));
};

const validateEmail = (email) => {
  // Regular expression for basic email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

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
            <h1 style={{fontFamily: 'Galada'}}>Contact us</h1>
            <form class="inner-form-contact" ref={form} onSubmit={sendEmail}>
              <label htmlFor="name" className='labels'>Your Name <p className='special'>*</p></label>
                <input type="text"  name='name' onChange={(e) => handleInput(e)} />
                <label htmlFor="email" className='labels'>Your Email <p className='special'>*</p></label>
              
                <input type="email"  name='email' value={email}
        onChange={(e) => handleChange(e)}
        className={isValid ? 'validInput' : 'invalidInput'} /> 
    
                
                <label htmlFor="subject" className='labels'>Subject <p className='special'>*</p></label>
                <input type="text"  name='subject' onChange={(e) => handleInput(e)} />
                <label htmlFor="message" className='labels'>Message <p className='special'>*</p></label>
                <textarea name="message" id="" cols="30" rows="10" onChange={(e) => handleInput(e)} ></textarea>
                <button type='submit' className='subbtn' disabled={!input.name || !input.email || !input.subject || !input.message} ><p>Submit</p></button>
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
