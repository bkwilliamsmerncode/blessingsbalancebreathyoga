import React from "react";
import "./InfoContent.css";

import pdf1 from "../../assets/artical1.pdf";
import pdf2 from "../../assets/artical2.pdf";
import pdf3 from "../../assets/artical3.pdf";
import pdf4 from "../../assets/artical4.pdf";
import pdf5 from "../../assets/artical5.pdf";
import pdf6 from "../../assets/artical6.pdf";

import CYM1 from "../../images/CYM1.png";
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
      <div className="xlscreens">
        <div className="infomain">
          <div className="infoheader" style={{ fontWeight: "bold" }}>
            Resources
          </div>
          <div className="maininfo">
            <div className="leftinfo">
              <div className="leftinner">
                <div>
                  <h1
                    style={{
                      fontSize: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Featured Program Events
                  </h1>
                </div>
                <div>
                  <ul
                    style={{
                      fontSize: "20px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      listStyleType: "disc",
                    }}
                  >
                    <li>
                      The Yoga for Empowered Women Program serves
                      justice-impacted women and is a signature program of
                      Blessings Balance Breath Yoga.
                    </li>
                    <li>
                      Give Back Yoga Foundation, Gaiam, The Pollination Project,
                      and The Awesome Foundation/Awesome without Borders/The
                      Harnisch Foundation have provided support for the Yoga for
                      Empowered Women Program.
                    </li>
                  </ul>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <a
                      className="links"
                      href="https://www.gaiam.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.gaiam.com/
                    </a>
                    <a
                      className="links"
                      href="https://givebackyoga.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://givebackyoga.org/
                    </a>
                    <a
                      className="links"
                      href="https://thepollinationproject.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://thepollinationproject.org/
                    </a>
                    <a
                      className="links"
                      href="https://www.awesomefoundation.org/en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.awesomefoundation.org/en
                    </a>
                    <a
                      className="links"
                      href="https://www.awesomefoundation.org/en/chapters/awesomewithoutborders"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://www.awesomefoundation.org/en/chapters/awesomewithoutborders
                    </a>
                    <a
                      className="links"
                      href="https://thehf.org/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://thehf.org/
                    </a>
                  </div>
                  <ul
                    style={{
                      fontSize: "20px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      listStyleType: "disc",
                    }}
                  >
                    <li>
                      The Yoga for Empowered Women Program features
                      justice-impacted women to share their stories with
                      community supporters through mindfulness and creative
                      journaling.{" "}
                    </li>
                  </ul>
                  <p>
                    To learn more about these events and upcoming ones, please
                    visit the social media links below.{" "}
                  </p>
                </div>
                <div>
                  {" "}
                  <div className="linkdiv">
                    <a
                      href="https://www.facebook.com/profile.php?id=100095239536075"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="falinks">
                        <FaFacebook />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/blessingsbalancebreathyoga/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="falinks">
                        <FaInstagram />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/blessings-balance-and-breath-yoga"
                      target="_blank"
                      rel="noreferrer"
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
                <div className="img1"></div>
              </div>
              <div className="pdfcontain">
                <div className="img2"></div>
              </div>
              <div className="pdfcontain">
                <div className="img3"></div>
              </div>
              <div className="pdfcontain">
                <div className="img4"></div>
              </div>
            </div>
          </div>
          <div className="maininfo">
            <div className="rightinfo">
              <div className="pdfcontain">
                <div className="img5"></div>
              </div>
              <div className="pdfcontain">
                <div className="img6"></div>
              </div>
              <div className="pdfcontain">
                <div className="img7"></div>
              </div>
              <div className="pdfcontain">
                <div className="img8"></div>
              </div>
            </div>

            <div className="leftinfo">
              <div className="leftinner">
                <div>
                  <h1
                    style={{
                      fontSize: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Community and Program Events
                  </h1>
                </div>
                <div>
                  {" "}
                  <ul
                    style={{
                      fontSize: "20px",
                      marginTop: "10px",
                      marginBottom: "10px",
                      listStyleType: "disc",
                    }}
                  >
                    <li>
                      Family yoga at local libraries and community centers.
                    </li>
                    <li>
                      The Yoga for Empowered Women Program features
                      justice-impacted women to share their stories with
                      community supporters through the practice of yoga.
                    </li>
                    <li>
                      Christ-centered, faith-based yoga at local churches.
                    </li>
                  </ul>
                  <p>
                    To learn more about these events, and upcoming ones, please
                    visit the social media links below.{" "}
                  </p>
                </div>
                <div>
                  {" "}
                  <div className="linkdiv">
                    <a
                      href="https://www.facebook.com/profile.php?id=100095239536075"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="falinks">
                        <FaFacebook />
                      </div>
                    </a>
                    <a
                      href="https://www.instagram.com/blessingsbalancebreathyoga/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="falinks">
                        <FaInstagram />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/blessings-balance-and-breath-yoga"
                      target="_blank"
                      rel="noreferrer"
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
                  <h1
                    style={{
                      fontSize: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Published Articles{" "}
                  </h1>
                </div>
                <div>
                  {" "}
                  <p>
                    I am blessed to serve as a staff writer for Christian Yoga
                    Magazine. I invite you to enjoy several articles I have
                    written about Christian yoga.
                  </p>{" "}
                </div>
                <div className="CYM">
                  {" "}
                  <a
                    href="https://christianyogamagazine.net/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img className="cym" src={CYM1} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="rightinfo">
              <div className="pdfcontain" onClick={handleClick5}>
                <img className="eventimg" src={art5} alt="" />
              </div>
              <div className="pdfcontain" onClick={handleClick6}>
                <img className="eventimg" src={art6} alt="" />
              </div>
              <div className="pdfcontain" onClick={handleClick3}>
                <img className="eventimg" src={art3} alt="" />
              </div>
              <div className="pdfcontain" onClick={handleClick4}>
                <img className="eventimg" src={art4} alt="" />
              </div>
            </div>
          </div>
          <div className="maininfo">
            <div className="rightinfo">
              <div className="pdfcontain1" onClick={handleClick1}>
                <img className="eventimg" src={art1} alt="" />
              </div>
              <div className="pdfcontain2" onClick={handleClick2}>
                <img className="eventimg" src={art2} alt="" />
              </div>
            </div>

            <div className="leftinfo">
              <div className="leftinner">
                <div>
                  <h1
                    style={{
                      fontSize: "50px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Additional Articles
                  </h1>
                </div>
                <div>
                  {" "}
                  <p>
                    As a staff writer for Christian Yoga Magazine, I have had
                    the opportunity to write on various topics. I invite you to
                    enjoy several articles about my personal and professional
                    yoga journey.
                  </p>{" "}
                </div>
                <div className="CYM">
                  {" "}
                  <a href="https://christianyogamagazine.net/" target="_blank">
                    <img className="cym" src={CYM1} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="videoheader">Videos</div>
          <div className="videodiv">
            <div className="videoleft">
              <a
                href="https://youtu.be/LE5qrYvdR1g?si=afUI84WFmndj38XK"
                target="_blank"
                rel="noreferrer"
              >
                <div className="yoga1"></div>
              </a>
              <p style={{ fontSize: "15px" }}>
                Maricopa County Juvenile Probation Department
              </p>
              <p>Phoenix, Arizona</p>
              <p style={{ fontSize: "15px" }}>
                Bi-monthly yoga program serving both male and female
                justice-impacted youth.
              </p>
              <p>May 2023</p>
            </div>
            <div className="videoright">
              <a
                href="https://www.facebook.com/reel/2461781727363720?fs=e&s=TIeQ9V&mibextid=xCPwDs"
                target="_blank"
                rel="noreferrer"
              >
                <div className="yoga2"></div>
              </a>

              <p style={{ fontSize: "15px", width: "80%", marginTop: "10px" }}>
                Give Back Yoga Foundation supports the Yoga for Empowered Women
                Program, serving justice-impacted women, with a Gaiam mat
                donation.
              </p>

              <a
                href="https://givebackyoga.org/"
                rel="noreferrer"
                target="_blank"
              >
                <p className="links" style={{ fontSize: "15px" }}>
                  https://givebackyoga.org/
                </p>
              </a>
              <a href="https://www.gaiam.com/" rel="noreferrer" target="_blank">
                <p className="links" style={{ fontSize: "15px" }}>
                  https://www.gaiam.com/
                </p>
              </a>
              <p style={{ fontSize: "15px" }}>February 2023</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoContent;
