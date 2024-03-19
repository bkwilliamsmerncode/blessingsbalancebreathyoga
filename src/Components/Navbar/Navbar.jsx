import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import {FaBars, FaTimes} from "react-icons/fa";
import Logo from "../../images/Logo.png"



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
<img src={Logo} alt="logo" className='logodiv'/>
    </Link>
    {/* <div style={{display: "flex", alignItems: "center"}}><p style={{fontSize: "80px"}}>B</p>
    <div style={{display: "flex",   flexDirection: "column"}}>
    <div>lessings</div>
    <div>alance</div> 
   <div>reath</div> 
    </div>
    </div> */}
    <ul className={modal ? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/"><p>Home</p></Link>
        </li>
        <li>
            <Link to="/About"><p>About</p></Link>
        </li>
        <li>
            <Link to="/Events"><p>Events</p></Link>
        </li>
        <li>
            <Link to="/Gallery"><p>Gallery</p></Link>
        </li>
        <li>
            <Link to="/Contact"><p>Contact</p></Link>
        </li>
        <li>
            <Link to="/Classes"><p>Services</p></Link>
        </li>
      
    </ul>
    <div className='hamburger' onClick={() => handleModal()}>
        {modal ? (<FaTimes size={20} style={{color: "black", fontSize: "xx-large"}}/>) : (<FaBars size={20} style={{color: "black", fontSize: "xx-large"}}/>)}
        
        
    </div>
    </div>
    //     <header class="header">
    //     <a href="#" id="logo">Your logo</a>

    //     <nav class="navbar">
    //         <a href="#">home</a>
    //         <a href="#">class</a>
    //         <a href="#">about</a>
    //         <a href="#">gallery</a>
    //         <a href="#">contact</a>
    //     </nav>

    //     <div class="icon">
    //         <div id="menubar" class="fas fa-bars"></div>
    //         <div id="user" class="fas fa-user"></div>
    //         <div id="search" class="fas fa-search"></div>

    //     </div>

    //     <div class="search-form">
    //         <div class="inner-form">
    //             <input type="email" name="" id="" placeholder="your email">
    //             <input type="password" name="" id="" placeholder="your password">
    //         </div>
    //     </div>

    //     <div class="searchbar">
    //         <div class="inner-searchbar">
    //             <input type="search" placeholder="search......">
    //         </div>
    //     </div>

    // </header>
  )
}

export default Navbar