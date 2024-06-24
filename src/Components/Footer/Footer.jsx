import React from "react";
import {
  FaInstagram,
  FaHome,
  FaLinkedin,
  FaFacebook,
  FaMailBulk,
  FaPhone,
  FaCopyright,
} from "react-icons/fa";
import "./Footer.css";
import Logos from "../../images/logos.png";
import { FaRegCopyright } from "react-icons/fa6";
import logo2 from "../../images/logo2.png"
import logo3 from "../../images/logo3.png"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="location">
              <FaHome
                size={20}
                style={{ color: "black", marginRight: "2rem" }}
              />
              <div>
                <p>Phoenix, Arizona</p>
              </div>
            </div>

            <div className="email">
              <p>
                {" "}
                <FaMailBulk
                  size={20}
                  style={{ color: "black", marginRight: "2rem" }}
                />
                blessingsbalancebreathyoga@gmail.com
              </p>
            </div>
          </div>
          <div className="right">
            <p>Site by Brian K. Williams Full-Stack Web Developer</p>
            <p>
              <FaRegCopyright /> Blessings Balance Breath Yoga 2024
            </p>
            <div className="social">
              <a href=" https://www.yogaalliance.org/ " target="_blank">
                <img src={Logos} alt="logos" className="logosimg" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100095239536075"
                target="_blank"
              >
                <FaFacebook
                  size={30}
                  style={{ color: "black", marginRight: "2rem" }}
                />
              </a>
              <a
                href="https://www.instagram.com/blessingsbalancebreathyoga/"
                target="_blank"
              >
                <FaInstagram
                  size={30}
                  style={{ color: "black", marginRight: "2rem" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/blessings-balance-and-breath-yoga"
                target="_blank"
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
      </div>
    </>
  );
};

export default Footer;
