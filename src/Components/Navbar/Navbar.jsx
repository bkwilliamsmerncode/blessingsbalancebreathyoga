import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {

const [modal, setModal] = useState(false)
const [color, setColor] = useState(false)

const handleModal = () => {
    setModal(prev => !prev)
}

const  handleColor = () => {
    if(window.scrollY >= 100) {
        setColor(true);
    } else {
      setColor(false)  
    }
};

window.addEventListener("scroll", handleColor)

  return (
    <div className={color ? "header header-bg" : "header"}>
    <Link to="/">
<h1>Portfolio</h1>
    </Link>
    <ul className={modal ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Events">Events</Link>
        </li>
        <li>
            <Link to="/Gallery">Gallery</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
        <li>
            <Link to="/Pricing">Pricing</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
    </ul>
    <div className='hamburger' onClick={() => handleModal()}>
        {modal ? (<FaTimes size={20} style={{color: "#fff"}}/>) : (<FaBars size={20} style={{color: "#fff"}}/>)}
        
        
    </div>
    </div>
  )
}

export default Navbar