import React from "react";
import "./Home.css";
import For from "../../images/forbg.png";
import { useNavigate } from "react-router-dom";
import Donna1 from "../../images/donna1.jpg";
import Logos from "../../images/logos.png";

const HomeContent = () => {
  const nav = useNavigate();

  return (
    <>
      <div id="home" class="back">
        <div class="mian-home">
          <div class="inner-home">
            <div className="forimg1">
              <div className="forimginner1"></div>
            </div>
            {/* <img src={For} alt="pic" /> */}
          </div>

          <div class="inner-home">
            <div class="inner-content">
              <h1 style={{ color: "black" }}>Blessings Balance Breath Yoga</h1>
              {/* <div className='logosdiv'><img src={Logos} alt="logos"  className="logosimg1"/></div> */}

              <p style={{ fontSize: "20px"}}>
                Dedicated to bringing yoga to underserved, underrepresented,
                marginalized, and system/justice-impacted populations Providing
                the healing practice of yoga to reclaim empowerment and harmony
                Restoring self-esteem, self-efficacy, and individualism
              </p>

              <button onClick={() => nav("/Contact")} className="regbtn">
                Register now
              </button>
              {/* <div className='logosdiv'><img src={Logos} alt="logos"  className="logosimg1"/></div> */}
              <div className="yogaall">
                <a href="https://www.yogaalliance.org/" target="_blank">
                  <div className="yogaallinner"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
