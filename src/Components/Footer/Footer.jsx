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
            {/* <div className="phone">
              <p>
                <FaPhone
                  size={20}
                  style={{ color: "black", marginRight: "2rem" }}
                />
                847-204-8079
              </p>
            </div> */}
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
              {/* <FaCopyright         size={30}
                  style={{ color: "black", marginRight: "2rem" }}/>
                  Blessings, Balance, Breath, Yoga 2024 */}
              <FaRegCopyright /> Blessings, Balance, Breath, Yoga 2024
            </p>
            <div className="social">
              {/* <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            /> */}
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
              <a href=" https://www.yogaalliance.org/ " target="_blank">
                <img src={Logos} alt="logos" className="logosimg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
