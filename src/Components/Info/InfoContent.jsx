import React from "react";
import "./InfoContent.css";
// import pdf1 from "../../assets/pdf1.pdf";
// import pdf2 from "../../assets/pdf2.pdf";
// import pdf3 from "../../assets/pdf3.pdf";
// import pdf4 from "../../assets/pdf4.pdf";
import pdf5 from "../../assets/pdf5.pdf";
// import pdf6 from "../../assets/pdf6.pdf";
// import pdf7 from "../../assets/pdf7.pdf";
// import pdf8 from "../../assets/pdf8.pdf";
// import pdf9 from "../../assets/pdf9.pdf";
import pdf10 from "../../assets/pdf10.pdf";
import pdf11 from "../../assets/pdf11.pdf";
// import pdf12 from "../../assets/pdf12.pdf";
// import pdf13 from "../../assets/pdf13.pdf";
import pdf14 from "../../assets/pdf14.pdf";
// import pdf15 from "../../assets/pdf15.pdf";
import CYM1 from "../../images/CYM1.png"
import event1 from "../../images/event1.jpg"
import event2 from "../../images/event2.jpg"
import event3 from "../../images/event3.jpg"
import event4 from "../../images/event4.jpg"
import art1 from "../../images/art1.png"
import art2 from "../../images/art2.png"
import art3 from "../../images/art3.png"
import art4 from "../../images/art4.png"
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
        <div className="infoheader">
          Resources
        </div>
        <div className="maininfo" style={{flexDirection: "column"}}>
          <div className="leftinfo">
       
          </div>
          <div className="rightinfo">
            <div className="pdfcontain"><img className="eventimg" src={event1} alt="" /></div>
            <div className="pdfcontain"><img className="eventimg" src={event2} alt="" /></div>
            <div className="pdfcontain"><img className="eventimg" src={event3} alt="" /></div>
            <div className="pdfcontain"><img className="eventimg" src={event4} alt="" /></div>
          </div>
          <div className="rightinfo">
            <div className="pdfcontain"><img className="eventimg" src={event1} alt="" /></div>
            <div className="pdfcontain"><img className="eventimg" src={event2} alt="" /></div>
            <div className="pdfcontain"><img className="eventimg" src={event3} alt="" /></div>
            <div className="pdfcontain"><img className="eventimg" src={event4} alt="" /></div>
          </div>
          <div className="leftinner">
              <div>
                <h1 style={{ fontSize: "40px" }}>Past events</h1>
              </div>
              <div>
                {" "}
                <p>
                  These are some of my past events. To learn more about some of
                  my past events or if you are interested in learning more about
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
                <div className="falinks"><FaFacebook /></div>
                </a>
                <a
                href="https://www.instagram.com/blessingsbalancebreathyoga/"
                target="_blank"
              >
                <div className="falinks"><FaInstagram /></div>
                </a>
                <a
                href="https://www.linkedin.com/company/blessings-balance-and-breath-yoga"
                target="_blank"
              >
                <div className="falinks"><FaLinkedin /></div>
                </a>
               </div>
              </div>
            </div>
        </div>
        <div className="maininfo" style={{flexDirection: "column"}}>
          <div className="rightinfo">
            <div className="pdfcontain" onClick={handleClick1}><img className="eventimg" src={art1} alt="" /></div>
            <div className="pdfcontain" onClick={handleClick2}><img className="eventimg" src={art2} alt="" /></div>
            <div className="pdfcontain" onClick={handleClick3}><img className="eventimg" src={art3} alt="" /></div>
            <div className="pdfcontain" onClick={handleClick4}><img className="eventimg" src={art4} alt="" /></div>
          </div>
          <div className="rightinfo">
            <div className="pdfcontain" onClick={handleClick1}><img className="eventimg" src={art1} alt="" /></div>
            <div className="pdfcontain" onClick={handleClick2}><img className="eventimg" src={art2} alt="" /></div>
            <div className="pdfcontain" onClick={handleClick3}><img className="eventimg" src={art3} alt="" /></div>
            <div className="pdfcontain" onClick={handleClick4}><img className="eventimg" src={art4} alt="" /></div>
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
                <a
                href="https://christianyogamagazine.net/"
                target="_blank"
              >
                <img className="cym" src={CYM1} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="pdfdiv">
          <div className="pdfcontainer" onClick={handleClick1}>
            Dr Donna Jagielski 2024 Yoga Resume.docx
          </div>
          <div className="pdfcontainer" onClick={handleClick2}>
            CYM Winter 2024 8 Limbs for Children and Youth
          </div>
          <div className="pdfcontainer" onClick={handleClick3}>
            CYM Summer 2023 Journaling for Tweens and Teen Girls
          </div>
          <div className="pdfcontainer" onClick={handleClick4}>CYM Fall 2023 3 Centers Meditation</div>
          <div className="pdfcontainer" onClick={handleClick5}>
            CYM Holiday 2023 Weaving Gratitude into 8 Limbs
          </div>
          <div className="pdfcontainer" onClick={handleClick6}>
            CYM Spring 2023 Interview with the Retreat Ladies
          </div>
          <div className="pdfcontainer" onClick={handleClick7}>
            CYM late spring 2023 Popcorn article
          </div>
          <div className="pdfcontainer" onClick={handleClick8}>CYM Summer 2022 Detention article</div>
          <div className="pdfcontainer" onClick={handleClick9}>
            CYM fall 2022 A Triad of Calm article
          </div>
          <div className="pdfcontainer" onClick={handleClick10}>
            CYM Holiday 2022 Surrender to God Article
          </div>
          <div className="pdfcontainer" onClick={handleClick11}>
            CYM Winter 2022 Two articles Men on the Mat and Kids Corner
          </div>
          <div className="pdfcontainer" onClick={handleClick12}>
            CYM Spring 2022 Trauma Informed article
          </div>
          <div className="pdfcontainer" onClick={handleClick13}>
            CYM late spring 2022 Circle of Prayer article
          </div>
          <div className="pdfcontainer" onClick={handleClick14}>CYM Fall 2021 Beatitudes and Yoga</div>
          <div className="pdfcontainer" onClick={handleClick15}>
            CYM Holiday 2021 article Five Ways to Practice Gratitude
          </div>
        </div> */}
      </div>
    </>
  );
};

export default InfoContent;
