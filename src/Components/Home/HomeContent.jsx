import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const HomeContent = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="xlscreens">
        <div class="mian-home">
          <div class="inner-home">
            <div className="forimg1">
              <div className="forimginner1"></div>
            </div>
          </div>

          <div class="inner-home">
            <div class="inner-content" style={{ marginTop: "50px" }}>
              <h1 style={{ color: "black" }}>Blessings Balance Breath Yoga</h1>

              <p style={{ fontSize: "20px" }}>
                Dedicated to bringing yoga to underserved, underrepresented,
                marginalized, and system/justice-impacted populations. Providing
                the healing practice of yoga to reclaim empowerment and harmony.
                Restoring self-esteem, self-efficacy, and individualism
              </p>

              <button onClick={() => nav("/Contact")} className="regbtn">
                Register now
              </button>

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
