import React from "react";
import "./InfoContent.css";
import pdf1 from "../../assets/pdf1.pdf";
import pdf2 from "../../assets/pdf2.pdf";
import pdf3 from "../../assets/pdf3.pdf";
import pdf4 from "../../assets/pdf4.pdf";
import pdf5 from "../../assets/pdf5.pdf";
import pdf6 from "../../assets/pdf6.pdf";
import pdf7 from "../../assets/pdf7.pdf";
import pdf8 from "../../assets/pdf8.pdf";
import pdf9 from "../../assets/pdf9.pdf";
import pdf10 from "../../assets/pdf10.pdf";
import pdf11 from "../../assets/pdf11.pdf";
import pdf12 from "../../assets/pdf12.pdf";
import pdf13 from "../../assets/pdf13.pdf";
import pdf14 from "../../assets/pdf14.pdf";
import pdf15 from "../../assets/pdf15.pdf";

const InfoContent = () => {

  const handleClick1 = () => {
    window.open(pdf2);
  };
  const handleClick2 = () => {
    window.open(pdf3);
  };
  const handleClick3 = () => {
    window.open(pdf4);
  };
  const handleClick4 = () => {
    window.open(pdf5);
  };
  const handleClick5 = () => {
    window.open(pdf6);
  };
  const handleClick6 = () => {
    window.open(pdf7);
  };

  const handleClick7 = () => {
    window.open(pdf8);
  };

  const handleClick8 = () => {
    window.open(pdf9);
  };

  const handleClick9 = () => {
    window.open(pdf10);
  };

  const handleClick10 = () => {
    window.open(pdf11);
  };

  const handleClick11 = () => {
    window.open(pdf12);
  };

  const handleClick12 = () => {
    window.open(pdf13);
  };

  const handleClick13 = () => {
    window.open(pdf1);
  };

  const handleClick14 = () => {
    window.open(pdf14);
  };
  const handleClick15 = () => {
    window.open(pdf15);
  };

  return (
    <>
      <div className="infomain">
        <div className="infoheader" style={{fontFamily: 'Galada'}}>More Info</div>
        <div className="pdfdiv">
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
        </div>
      </div>
    </>
  );
};

export default InfoContent;
