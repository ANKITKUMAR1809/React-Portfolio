import React, { useState } from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLargeLine } from '@remixicon/react'
import { NavLink,useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate=useNavigate()
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
      {/* tackle after going project then go to about it will show on project/#about */}
        <div className="siteName" onClick={()=>navigate("/")}>
            <h1>SAK</h1>
            <h1>Web Developer</h1>
        </div>
        <div className="topnav" id="myTopnav">
            <a href="#about">ABOUT</a>
            <NavLink to="/projects" >PROJECT</NavLink>
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