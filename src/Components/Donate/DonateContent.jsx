import React from 'react'
import './DonateContent.css'

const DonateContent = () => {
  return (
    <div className="xlscreens">
      <div className="donatecontent">
        <h1>Donate</h1>
        <p>Thank you for considering a donation to the Black Belt Back Youth Foundation. Your donation will help us continue to provide services to the youth in the Black Belt area. We are a 501(c)(3) organization, so your donation is tax-deductible. Please click the button below to donate. Thank you for your support!</p>
        <div className="donatebutton">
          <a href="https://www.paypal.com/donate?hosted_button_id=3P5YQ5Z3ZQ8ZU" target="_blank" rel="noreferrer">
            <button>Donate</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default DonateContent
