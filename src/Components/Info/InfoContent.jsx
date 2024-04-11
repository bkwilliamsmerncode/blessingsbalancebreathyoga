import React from "react";
import "./InfoContent.css";

import pdf1 from "../../assets/artical1.pdf";
import pdf2 from "../../assets/artical2.pdf";
import pdf3 from "../../assets/artical3.pdf";
import pdf4 from "../../assets/artical4.pdf";
import pdf5 from "../../assets/artical5.pdf";
import pdf6 from "../../assets/artical6.pdf";

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
                  These are some of my past events. To learn more about some of
                  my past events or if you are interested in learning more about
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
                <h1 style={{ fontSize: "50px" }}>More events</h1>
              </div>
              <div>
                {" "}
                <p>
                  These are some more of my past events. To learn more about
                  some of my past events or if you are interested in learning
                  more about upcoming events please visit the links below.
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
                <h1 style={{ fontSize: "50px" }}>Published Articles </h1>
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
                <a href="https://christianyogamagazine.net/" target="_blank">
                  <img className="cym" src={CYM1} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="rightinfo">
            <div className="pdfcontain" onClick={handleClick5}>
              <img className="eventimg" src={art5} alt="" />
              <div className="articaltext">
              {/* <p>Summer 2023 issue</p> */}
                <p style={{fontSize: "11px"}}>Christ-centered Yoga Journaling for Tweens and Teen Girls</p>
                </div>
            </div>
            <div className="pdfcontain" onClick={handleClick6}>
              <img className="eventimg" src={art6} alt="" />
              <div className="articaltext">
              {/* <p>Summer 2023 issue</p> */}
                <p style={{fontSize: "11px"}}>Yoga for All: My Journey Teaching Yoga in the Juvenile Detention System</p>
                </div>
            </div>
            <div className="pdfcontain" onClick={handleClick3}>
              <img className="eventimg" src={art3} alt="" />
              <div className="articaltext">
              {/* <p>Summer 2023 issue</p> */}
                <p style={{fontSize: "11px"}}>An Interview with the Retreat Ladies</p>
                </div>
            </div>
            <div className="pdfcontain" onClick={handleClick4}>
              <img className="eventimg" src={art4} alt="" />
              <div className="articaltext">
              {/* <p>Summer 2023 issue</p> */}
                <p style={{fontSize: "11px"}}>Reconnecting with Christ through Yoga and the Five Vital Organs</p>
                </div>
            </div>
          </div>
        </div>
        <div className="maininfo">
          <div className="rightinfo">
            <div className="pdfcontain1" onClick={handleClick1}>
              <img className="eventimg" src={art1} alt="" />
              <div className="articaltext">
              {/* <p>Summer 2023 issue</p> */}
                <p style={{fontSize: "11px"}}>Christ-centered Trauma-Informed Practices on the Mat</p>
                </div>
            </div>
            <div className="pdfcontain2" onClick={handleClick2}>
              <img className="eventimg" src={art2} alt="" />
              <div className="articaltext">
              {/* <p>Summer 2023 issue</p> */}
                <p style={{fontSize: "11px"}}>Surrender to God: Ten Yoga Props Used in Restorative and Yin Yoga Practices</p>
                </div>
            </div>
          </div>

          <div className="leftinfo">
            <div className="leftinner">
              <div>
                <h1 style={{ fontSize: "50px" }}>Additional Articles</h1>
              </div>
              <div>
                {" "}
                <p>
                  As a staff writer for Christian Yoga Magazine, I have had the
                  opportunity to write on various topics. I invite you to enjoy
                  several articles about my personal and professional yoga
                  journey.
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
            >
              <div className="yoga1"></div>
            </a>
            <p>Maricopa County Juvenile Probation Department</p>
            <p>Phoenix, Arizona</p>
            <p>
              Bi-monthly yoga program serving both male and female
              justice-impacted youth.
            </p>
            <p>May 2023</p>
          </div>
          <div className="videoright">
            <a
              href="https://www.facebook.com/reel/2461781727363720?fs=e&s=TIeQ9V&mibextid=xCPwDs"
              target="_blank"
            >
              <div className="yoga2"></div>
            </a>
            <p>
              Give Back Yoga Foundation supports the Yoga for Empowered Women
              program with a mat donation from Gaiam.
            </p>
            <p>
              Yoga for Empowered Women serves justice-impacted women in Arizona.{" "}
            </p>
            <p>https://givebackyoga.org/</p>
            <p>https://www.gaiam.com/</p>
            <p>February 2023</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoContent;
