import React, { useState } from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLargeLine } from '@remixicon/react'
import { Link, NavLink,useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
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
            <HashLink to="/#about">ABOUT</HashLink>
            <NavLink to="/projects">PROJECT</NavLink>
            <HashLink to="#resume">RESUME</HashLink>
            <HashLink to="#contact">CONTACT</HashLink>
            <div className="icon" onClick={myFunction}>
                {icon}
            </div>
        </div>
    </nav>
  )
}

export default Navbar