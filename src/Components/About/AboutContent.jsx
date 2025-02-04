import React from "react";
import "./About.css";
import donna5 from "../../images/donna5.jpg";
import donna13 from "../../images/donna13.jpg";
import donna9 from "../../images/donna9.jpg";

import { useNavigate } from "react-router-dom";

const AboutContent = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="xlscreens">
        <div className="founder-main">
          <div className="founder-title">Founder & CEO</div>
          <div className="founder-full">
            <div className="founder-left">
              <div className="founder-left-inner">
                <p style={{ fontSize: "xx-large" }}>Dr. Donna Jagielski</p>
                <br /> <h2>Yoga Training & Education </h2>
                <p style={{ textAlign: "center", fontSize: "20px" }}>
                  "Lokah Samastah Sukhino Bhavantu"
                </p>
                <p style={{ textAlign: "center", fontSize: "20px" }}>
                  "May all beings everywhere be happy and free. And may the
                  thoughts, words, and actions of my own life contribute in some
                  way to that happiness and to that freedom for all."
                </p>
                <ul
                  style={{
                    fontSize: "20px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Training through Yoga Farm Ithaca, YogaEd, and Yahweh Yoga
                  </li>
                  <li>Emphasis on Vinyasa and Hatha </li>
                  <li>Facilitator for Prison Yoga Project</li>
                  <li>
                    Additional training: Trauma Informed/Sensitive Practices,
                    Accessible Yoga, Chair, Yin, and Restorative
                  </li>
                </ul>
                <button onClick={() => nav("/Info")} className="regbtn">
                  Read More
                </button>
              </div>
            </div>
            <div className="founder-right">
              <img src={donna5} alt="" loading="lazy"/>
            </div>
          </div>
          <div className="founder-full">
            <div className="founder-right">
              <img src={donna13} alt="" loading="lazy"/>
            </div>
            <div className="founder-left">
              <div className="founder-left-inner">
                <h2>
                  Education & <br /> Professional Background
                </h2>
                <p style={{ textAlign: "center", fontSize: "20px" }}>
                  {" "}
                  "To the world, you might be just one person, but to one person
                  you might be the world." Unknown.
                </p>
                <ul
                  style={{
                    fontSize: "20px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Doctorate in Education M.A. in Education/Teaching & an M.A.
                    in Educational Leadership
                  </li>
                  <li>
                    {" "}
                    20 years in education serving underrepresented underserved
                    marginalized youth and adult learners{" "}
                  </li>
                </ul>
                <button onClick={() => nav("/Info")} className="regbtn">
                  Read More
                </button>
              </div>
            </div>
          </div>

          <div className="founder-full">
            <div className="founder-left">
              <div className="founder-left-inner">
                <p style={{ fontSize: "xx-large" }}></p> <br />
                <h2>Yoga Philosophy</h2>
                <p style={{ textAlign: "center", fontSize: "20px" }}>
                  "Be kind, for everyone you meet is fighting a battle you know
                  nothing about." Unknown.
                </p>
                <ul
                  style={{
                    fontSize: "20px",
                    marginTop: "10px",
                    marginBottom: "10px",
                    listStyleType: "disc",
                  }}
                >
                  <li>
                    Align the breath, body, and mind along with words, actions,
                    and intentions.
                  </li>
                  <li>
                    {" "}
                    Our lives are filled with peaks and valleys. Forgive, learn,
                    and refrain from judgment.
                  </li>
                  <li> Dismiss preconceived notions.</li>
                  <li> Let go of ego - be humble</li>
                  <li>Put others' needs before yourself.</li>
                  <li>
                    {" "}
                    Live in a childlike spirit -hug stuffed animals - stare up
                    at the moon and stars - catch snowflakes on your tongue -
                    stop and smell the flowers - believe in fairytales - dance
                    in the enchanted forest
                  </li>
                </ul>
                <button onClick={() => nav("/Info")} className="regbtn">
                  Read More
                </button>
              </div>
            </div>

            <div className="founder-right">
              <img src={donna9} alt="" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
