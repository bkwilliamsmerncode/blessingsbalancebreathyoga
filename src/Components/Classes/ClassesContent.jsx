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
        <h1 style={{marginTop: "40px", fontSize: ""}}>Services</h1>

        <div class="main-class">
          <div class="inner-class">
            {/* <div className="forimg">
              <div className="forimginner"></div>
            </div> */}
<img src={Class1} alt="" />
            <div class="class-content">
              <h2>newbie class</h2>
              <p>
                Lt. At, illum veniam. Earum debitis asperiores voluptatem ut
                nemo harum voluptatibus
              </p>
              <button onClick={() => nav("/Contact")} className="regbtn2">
                Register now
              </button>
            </div>
          </div>

          <div class="inner-class">
            {/* <div className="forimg3">
              <div className="forimginner3"></div>
            </div> */}
            <img src={Class2} alt="" />
            <div class="class-content">
              <h2>newbie class</h2>
              <p>
                Lt. At, illum veniam. Earum debitis asperiores voluptatem ut
                nemo harum voluptatibus
              </p>
              <button onClick={() => nav("/Contact")} className="regbtn2">
                Register now
              </button>
            </div>
          </div>

          <div class="inner-class">
            {/* <div className="forimg4">
              <div className="forimginner4"></div>
            </div> */}
            <img src={Class3} alt="" />
            <div class="class-content">
              <h2>newbie class</h2>
              <p>
                Lt. At, illum veniam. Earum debitis asperiores voluptatem ut
                nemo harum voluptatibus
              </p>
              <button onClick={() => nav("/Contact")} className="regbtn2">
                Register now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="our-prices">
    <h1>prices</h1>
    <div class="main-prices">
        <div class="inner-prices">
            <h2>Newbie classes</h2>
            <h3>prices : $00.00/</h3>
            <div class="price-icon">
                <i class="fas fa-award"></i>
            </div>
            <button onClick={() => nav("/Contact")} className='regbtn1' >Register now</button>
        </div>

        <div class="inner-prices">
            <h2>Newbie classes</h2>
            <h3>prices : $00.00/</h3>
            <div class="price-icon">
                <i class="fas fa-award"></i>
            </div>
             <button onClick={() => nav("/Contact")} className='regbtn1' >Register now</button>
        </div>

        <div class="inner-prices">
            <h2>Newbie classes</h2>
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
