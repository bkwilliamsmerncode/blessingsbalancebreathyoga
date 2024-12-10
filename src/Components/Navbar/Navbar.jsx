import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import bbbylogo2 from "../../images/bbbylogo2.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const nav = useNavigate();
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState(false);

  const handleModal = () => {
    setModal((prev) => !prev);
  };

  const handleColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", handleColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <img src={bbbylogo2} alt="" className="logodiv" />
      </Link>

      <ul className={modal ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link to="/About">
          <div class="dropdown">
  <div class="dropbtn">About</div>
  <div class="dropdown-content">
    <a href="/About" >Founder</a>
    <a href="/About2" >Board Of Directors</a>
  </div>
</div>
          </Link>
        </li>
        <li>
          <Link to="/Gallery">
            <p>Gallery</p>
          </Link>
        </li>
        <li>
          <Link to="/Classes">
            <p>Services</p>
          </Link>
        </li>

        <li>
          <Link to="/Info">
            <p>Resources</p>
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <p>Contact</p>
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={() => handleModal()}>
        {modal ? (
          <FaTimes size={20} style={{ color: "black", fontSize: "xx-large" }} />
        ) : (
          <FaBars size={20} style={{ color: "black", fontSize: "xx-large" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
