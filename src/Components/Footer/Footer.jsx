import React from "react";
import {
  FaInstagram,
  FaHome,
  FaLinkedin,
  FaFacebook,
  FaMailBulk,
} from "react-icons/fa";
import "./Footer.css";
import Logos from "../../images/logos.png";
import { FaRegCopyright } from "react-icons/fa6";


const Footer = () => {



  return (
    <>
      <div className="footer">
        <div className="footerContainer">
          <div className="footerLeft">
            <div className="location" style={{marginLeft: "10px"}}>
              <FaHome
                size={20}
                style={{ color: "black", marginRight: "2rem" }}
              />
              <div >
                <p>Phoenix, Arizona</p>
              </div>
            </div>
            <div className="email">
              <p style={{marginLeft: "10px"}}>
                <FaMailBulk
                  size={20}
                  style={{ color: "black", marginRight: "2rem" }}
                />
                blessingsbalancebreathyoga@gmail.com
              </p>
            </div>
            <div className="right">
            <p>Site by Brian K. Williams Full-Stack Web Developer</p>
            <p style={{display: "flex", alignItems: "center"}}>
              <FaRegCopyright /> A 501(c)(3) Organization. EIN: 33-1997810 Blessings Balance Breath Yoga 2024
            </p>
            <br />
            <br />
            <br />
            <br />
            <div className="social">
              <a href=" https://www.yogaalliance.org/ " target="_blank">
                <img src={Logos} alt="logos" className="logosimg" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100095239536075"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook
                  size={30}
                  style={{ color: "black", marginRight: "2rem" }}
                />
              </a>
              <a
                href="https://www.instagram.com/blessingsbalancebreathyoga/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram
                  size={30}
                  style={{ color: "black", marginRight: "2rem" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/blessings-balance-and-breath-yoga"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin
                  size={30}
                  style={{ color: "black", marginRight: "2rem" }}
                />
              </a>
            </div>
            <div style={{display: "flex"}}>
              <a href="https://www.christianyogaassociation.org" rel="noreferrer" target="_blank"><div className="logo3"></div></a>
              <a href="https://www.christianyogaassociation.org" rel="noreferrer" target="_blank"><div className="logo2"></div></a>
            </div>
          </div>
          </div>
          <div className="footerRight">
          
       
          <div className="donateButtonContainer">
            <button className="donateButton">Donate Now!</button>
          </div>
          <div className="textContainer">
            <p className="textTitle">
              Ways to give to Blessings Balance Breath Yoga
            </p>
            <p className="textParagraph">
              Zelle: blessingsbalancebreathyoga@gmail.com
            </p>
            <p>Checks mailed to:</p>
            <p className="textParagraph">Blessings Balance Breath Yoga</p>
            <p className="textParagraph">3961 East Chandler Blvd Suite 111</p>
            <p className="textParagraph">PMB #183</p>
            <p className="textParagraph">Phoenix, AZ 85048</p>
          </div>

         

       
     
        </div>
      </div>
    </div>
    </>
  );
};

export default Footer;
