import React from "react";
import "./Classes.css";
import Class1 from "../../images/class1.png";
import Class2 from "../../images/class2.png";
import Class3 from "../../images/class3.png";
import { useNavigate } from "react-router-dom";

const ClassesContent = () => {
  const nav = useNavigate();

  return (
    <>
      <div class="our-classes">
        <h1 style={{marginTop: "40px", color: "black", fontSize: "60px"}}>Services</h1>

        <div class="main-class">
          <div class="inner-class">
            <div className="forimg">
              <div className="forimginner"></div>
            </div>
{/* <img src={Class1} alt="" /> */}
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
            {/* <img src={Class2} alt="" /> */}
            <div class="class-content">
              <h2>Social Services & Faith-Based Organizations</h2>
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
            {/* <img src={Class3} alt="" /> */}
            <div class="class-content">
              <h2>Specialized & Customized Programs</h2>
              <p>Yoga for Empowered Women (a signature program of Blessings Balance Breath Yoga)</p>
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
    <h1 style={{ fontSize: "50px"}}>Prices</h1>
    <div style={{width: "100%", justifyContent: "center", alignItems: "center", display: "flex", }}>
    <p style={{color: "white", marginBottom: "20px", textAlign: "center"}}>Available to travel state-wide 
Limited online workshops are available
Payment accepted: Venmo, Zelle, and business/school/organizational checks
</p>
</div>
    <div class="main-prices">
        <div class="inner-prices">
            <h2>Education & Youth Organization Programs</h2>
            <h3>prices : $00.00/</h3>
            <div class="price-icon">
                <i class="fas fa-award"></i>
            </div>
            <button onClick={() => nav("/Contact")} className='regbtn1' >Register now</button>
        </div>

        <div class="inner-prices">
            <h2>Social Services & Faith-Based Organizations</h2>
            <h3>prices : $00.00/</h3>
            <div class="price-icon">
                <i class="fas fa-award"></i>
            </div>
             <button onClick={() => nav("/Contact")} className='regbtn1' >Register now</button>
        </div>

        <div class="inner-prices">
            <h2>Specialized & Customized Programs</h2>
            <h3>prices : $00.00/</h3>
            <div class="price-icon">
                <i class="fas fa-award"></i>
            </div>
            <button onClick={() => nav("/Contact")} className='regbtn1' >Register now</button>
        </div>
    </div>
</div>
    </>
  );
};

export default ClassesContent;
