import React, { useState } from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLargeLine } from '@remixicon/react'
const Navbar = () => {
  const [icon , setIcon]= useState(<RiMenu3Line/>)
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
        setIcon(<RiCloseLargeLine/>)
    } else {
        x.className = "topnav";
       setIcon(<RiMenu3Line/>)
    }
}
  return (
    <nav id="toppos">
        <div className="siteName">
            <h1>SAK</h1>
            <h1>Web Developer</h1>
        </div>
        <div className="topnav" id="myTopnav">
            <a href="#about">ABOUT</a>
            <a href="#project">PROJECT</a>
            <a href="#resume">RESUME</a>
            <a href="#contact">CONTACT</a>
            <div className="icon" onClick={myFunction}>
                {icon}
            </div>
        </div>
    </nav>
  )
}

export default Navbar