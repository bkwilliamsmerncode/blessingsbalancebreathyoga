import React from "react";
import "./About2.css";
import Alicia from "../../assets/Alicia.jpg";
import Lucia from "../../assets/Lucia.jpg"
import Tony from "../../assets/Tony.jpg"
import Zoraida from "../../assets/Zoraida.jpg"

import { useNavigate } from "react-router-dom";

const AboutContent = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="xlscreens">
        <div class="our-instructor">
          <h1 style={{ marginTop: "60px", fontSize: "50px" }}>
            Founder & Instructor
          </h1>
          <div class="main-instructor">
            <div class="inner-instructor">
              <div class="inner-content-instructor">
                <p style={{ fontSize: "xx-large" }}>Dr. Donna Jagielski</p>{" "}
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

            <div class="inner-instructor">
              <img src={Alicia} alt="" />
            </div>
          </div>
        </div>

        <div class="our-instructor">
          <div class="main-instructor">
            <div class="inner-instructor">
              <img src={Lucia} alt="" />
            </div>

            <div class="inner-instructor">
              <div class="inner-content-instructor">
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
            <div class="inner-instructor">
              <div class="inner-content-instructor">
                <p style={{ fontSize: "xx-large" }}></p> <br />{" "}
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

            <div class="inner-instructor">
              <img src={Tony} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutContent;
