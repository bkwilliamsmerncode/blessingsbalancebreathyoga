import React from "react";
import "./DonateContent.css";
import pdf16pic from "../../assets/pdf16pic.png";
import pdf16 from "../../assets/pdf16.pdf";

const DonateContent = () => {

  const handleClick1 = () => {
    window.open(pdf16);
  };

  return (
    <div className="xlscreens">
      <section className="donatecontent">
        <div className="donateConatiner">
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

          <div className="pdfcontainer1" onClick={handleClick1}>
                <img className="eventimg" src={pdf16pic} alt="" />
              </div>

        </div>
      </section>
    </div>
  );
};

export default DonateContent;
