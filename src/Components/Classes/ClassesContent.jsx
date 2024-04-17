import React from "react";
import "./Classes.css";
import { useNavigate } from "react-router-dom";

const ClassesContent = () => {
  const nav = useNavigate();

  return (
    <>
      <div class="our-classes">
        <h1 style={{ marginTop: "40px", color: "black", fontSize: "60px" }}>
          Services
        </h1>

        <div class="main-class">
          <div class="inner-class">
            <div className="forimg">
              <div className="forimginner"></div>
            </div>
            <div class="class-content">
              <h2>Education & Youth Organization Programs</h2>
              <p>Introduction to Yoga </p>
              <p>Family Yoga</p>
              <p>Yoga & Creative Journaling</p>

              <button onClick={() => nav("/Contact")} className="regbtn2">
                Register now
              </button>
            </div>
          </div>

          <div class="inner-class">
            <div className="forimg3">
              <div className="forimginner3"></div>
            </div>
            <div class="class-content">
              <h2>Community Service & Faith Based Organization Programs</h2>
              <p>Faith-based classes and workshops</p>
              <p>Yoga for Healing </p>
              <p>Womens groups</p>
              <button onClick={() => nav("/Contact")} className="regbtn2">
                Register now
              </button>
            </div>
          </div>

          <div class="inner-class">
            <div className="forimg4">
              <div className="forimginner4"></div>
            </div>
            <div class="class-content">
              <h2>Specialized & Customized Programs</h2>
              <p>
                Yoga for Empowered Women (a signature program of Blessings
                Balance Breath Yoga)
              </p>
              <p>Professional Development & Staff Training </p>
              <p>Custom designed for organization</p>
              <button onClick={() => nav("/Contact")} className="regbtn2">
                Register now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="our-prices">
        <h1 style={{ fontSize: "50px" }}>Prices</h1>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <p
            style={{
              color: "white",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Available to travel state-wide. Limited online workshops are
            available. Payment accepted: Venmo, Zelle, and
            business/school/organizational checks.
            <br />
            Fees are based on a sliding scale to accommodate organizational
            needs
          </p>
        </div>
        <div class="main-prices">
          <div class="inner-prices">
            <h2>Education & Youth Organization Programs</h2>
            <h3>prices : $90.00/hr</h3>
            <div class="price-icon">
              <i class="fas fa-award"></i>
            </div>
            <button onClick={() => nav("/Contact")} className="regbtn1">
              Register now
            </button>
          </div>

          <div class="inner-prices">
            <h2>Community Service & Faith Based Organization Programs</h2>
            <h3>prices : $100.00/hr</h3>
            <div class="price-icon">
              <i class="fas fa-award"></i>
            </div>
            <button onClick={() => nav("/Contact")} className="regbtn1">
              Register now
            </button>
          </div>

          <div class="inner-prices">
            <h2>Specialized & Customized Programs</h2>
            <h3>prices : $150.00/hr</h3>
            <div class="price-icon">
              <i class="fas fa-award"></i>
            </div>
            <button onClick={() => nav("/Contact")} className="regbtn1">
              Register now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClassesContent;
