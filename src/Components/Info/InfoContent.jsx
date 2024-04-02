import React from "react";
import "./InfoContent.css";

import pdf5 from "../../assets/pdf5.pdf";

import pdf10 from "../../assets/pdf10.pdf";
import pdf11 from "../../assets/pdf11.pdf";

import pdf14 from "../../assets/pdf14.pdf";

import CYM1 from "../../images/CYM1.png";
import event1 from "../../images/event1.jpg";
import event2 from "../../images/event2.jpg";
import event3 from "../../images/event3.jpg";
import event4 from "../../images/event4.jpg";
import art1 from "../../images/art1.png";
import art2 from "../../images/art2.png";
import art3 from "../../images/art3.png";
import art4 from "../../images/art4.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const InfoContent = () => {
  const handleClick1 = () => {
    window.open(pdf5);
  };
  const handleClick2 = () => {
    window.open(pdf10);
  };
  const handleClick3 = () => {
    window.open(pdf11);
  };
  const handleClick4 = () => {
    window.open(pdf14);
  };

  return (
    <>
      <div className="infomain">
        <div className="infoheader">Resources</div>
        <div className="maininfo" style={{ flexDirection: "column" }}>
          <div className="leftinfo"></div>
          <div className="rightinfo">
            <div className="pdfcontain">
              <img className="eventimg" src={event1} alt="" />
            </div>
            <div className="pdfcontain">
              <img className="eventimg" src={event2} alt="" />
            </div>
            <div className="pdfcontain">
              <img className="eventimg" src={event3} alt="" />
            </div>
            <div className="pdfcontain">
              <img className="eventimg" src={event4} alt="" />
            </div>
          </div>
          <div className="rightinfo">
            <div className="pdfcontain">
              <img className="eventimg" src={event1} alt="" />
            </div>
            <div className="pdfcontain">
              <img className="eventimg" src={event2} alt="" />
            </div>
            <div className="pdfcontain">
              <img className="eventimg" src={event3} alt="" />
            </div>
            <div className="pdfcontain">
              <img className="eventimg" src={event4} alt="" />
            </div>
          </div>
          <div className="leftinner">
            <div>
              <h1 style={{ fontSize: "40px" }}>Past events</h1>
            </div>
            <div>
              {" "}
              <p>
                These are some of my past events. To learn more about some of my
                past events or if you are interested in learning more about
                upcoming events please visit on of the links below.
              </p>{" "}
            </div>
            <div>
              {" "}
              <div className="linkdiv">
                <a
                  href="https://www.facebook.com/profile.php?id=100095239536075"
                  target="_blank"
                >
                  <div className="falinks">
                    <FaFacebook />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/blessingsbalancebreathyoga/"
                  target="_blank"
                >
                  <div className="falinks">
                    <FaInstagram />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/company/blessings-balance-and-breath-yoga"
                  target="_blank"
                >
                  <div className="falinks">
                    <FaLinkedin />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="maininfo" style={{ flexDirection: "column" }}>
          <div className="rightinfo">
            <div className="pdfcontain" onClick={handleClick1}>
              <img className="eventimg" src={art1} alt="" />
            </div>
            <div className="pdfcontain" onClick={handleClick2}>
              <img className="eventimg" src={art2} alt="" />
            </div>
            <div className="pdfcontain" onClick={handleClick3}>
              <img className="eventimg" src={art3} alt="" />
            </div>
            <div className="pdfcontain" onClick={handleClick4}>
              <img className="eventimg" src={art4} alt="" />
            </div>
          </div>
          <div className="rightinfo">
            <div className="pdfcontain" onClick={handleClick1}>
              <img className="eventimg" src={art1} alt="" />
            </div>
            <div className="pdfcontain" onClick={handleClick2}>
              <img className="eventimg" src={art2} alt="" />
            </div>
            <div className="pdfcontain" onClick={handleClick3}>
              <img className="eventimg" src={art3} alt="" />
            </div>
            <div className="pdfcontain" onClick={handleClick4}>
              <img className="eventimg" src={art4} alt="" />
            </div>
          </div>
          <div className="leftinfo">
            <div className="leftinner">
              <div>
                <h1 style={{ fontSize: "40px" }}>Articles</h1>
              </div>
              <div>
                {" "}
                <p>
                  These are some of my latest articles featured in Christian
                  Yoga Magizine. Click on the picture to read the article or if
                  you are interested in learning more about Christian Yoga
                  magazine click the link below.
                </p>{" "}
              </div>
              <div>
                {" "}
                <a href="https://christianyogamagazine.net/" target="_blank">
                  <img className="cym" src={CYM1} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoContent;
