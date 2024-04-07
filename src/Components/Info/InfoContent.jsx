import React from "react";
import "./InfoContent.css";

import pdf1 from "../../assets/artical1.pdf";
import pdf2 from "../../assets/artical1.pdf";
import pdf3 from "../../assets/artical1.pdf";
import pdf4 from "../../assets/artical1.pdf";
import pdf5 from "../../assets/artical1.pdf";
import pdf6 from "../../assets/artical1.pdf";


import CYM1 from "../../images/CYM1.png";
import event1 from "../../images/event1.jpg";
import event2 from "../../images/event2.jpg";
import event3 from "../../images/event3.JPG";
import event4 from "../../images/event4.jpg";
import event5 from "../../images/event5.JPG";
import event6 from "../../images/event6.jpg";
import event7 from "../../images/event7.jpg";
import event8 from "../../images/event8.jpg";
import art1 from "../../images/articalcover1.png";
import art2 from "../../images/articalcover2.png";
import art3 from "../../images/articalcover3.png";
import art4 from "../../images/articalcover4.png";
import art5 from "../../images/articalcover5.png";
import art6 from "../../images/articalcover6.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const InfoContent = () => {
  const handleClick1 = () => {
    window.open(pdf1);
  };
  const handleClick2 = () => {
    window.open(pdf2);
  };
  const handleClick3 = () => {
    window.open(pdf3);
  };
  const handleClick4 = () => {
    window.open(pdf4);
  };
  const handleClick5 = () => {
    window.open(pdf5);
  };
  const handleClick6 = () => {
    window.open(pdf6);
  };

  return (
    <>
      <div className="infomain">
        <div className="infoheader">Resources</div>
        <div className="maininfo">
          <div className="leftinfo">
      
   
          <div className="leftinner">
            <div>
              <h1 style={{ fontSize: "50px" }}>Past events</h1>
            </div>
            <div>
              {" "}
              <p>
                These are some of my past events. To learn more about some of my
                past events or if you are interested in learning more about
                upcoming events please visit the links below.
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
        </div>
        <div className="maininfo" >
        <div className="rightinfo">
            <div className="pdfcontain">
              <img className="eventimg" src={event5} alt="" />
            </div>
            <div className="pdfcontain">
              <img className="eventimg" src={event6} alt="" />
            </div>
            <div className="pdfcontain">
              <img className="eventimg" src={event7} alt="" />
            </div>
            <div className="pdfcontain">
              <img className="eventimg" src={event8} alt="" />
            </div>
          </div>
      
          <div className="leftinfo">
          <div className="leftinner">
            <div>
              <h1 style={{ fontSize: "50px" }}>More events</h1>
            </div>
            <div>
              {" "}
              <p>
                These are some more of my past events. To learn more about some of my
                past events or if you are interested in learning more about
                upcoming events please visit the links below.
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
        </div>
        <div className="maininfo">
          <div className="leftinfo">
      
   
          <div className="leftinner">
              <div>
                <h1 style={{ fontSize: "50px" }}>Articles</h1>
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
        </div>
        <div className="maininfo" >
          <div className="rightinfo">
            <div className="pdfcontain" onClick={handleClick5}>
              <img className="eventimg" src={art5} alt="" />
            </div>
            <div className="pdfcontain" onClick={handleClick6}>
              <img className="eventimg" src={art6} alt="" />
            </div>
          </div>
      
          <div className="leftinfo">
            <div className="leftinner">
              <div>
                <h1 style={{ fontSize: "50px" }}> More Articles</h1>
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
