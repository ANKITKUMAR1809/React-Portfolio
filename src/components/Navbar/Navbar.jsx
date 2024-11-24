import React, { useState } from 'react'
import './Navbar.css'
import { RiMenu3Line, RiCloseLargeLine, RiMoonFill, RiSunFill } from '@remixicon/react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {
  const navigate = useNavigate()
  const [icon, setIcon] = useState(<RiMenu3Line />)
  const [light, setDark] = useState("light")
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      setIcon(<RiCloseLargeLine />)
    } else {
      x.className = "topnav";
      setIcon(<RiMenu3Line />)
    }
  }
  const themeChange=()=>{
    if(light==="light")
      darkMode();
    else
      lightMode();
  }
  const lightMode=()=>{
    document.documentElement.style.setProperty("--body-color", "rgb(249 249 255)");
    document.documentElement.style.setProperty("--link-color", "#8490ff");
    document.documentElement.style.setProperty("--bg-color1", "azure");
    document.documentElement.style.setProperty("--bg-color2", "white");
    document.documentElement.style.setProperty("--secondary-text", "rgb(117, 118, 118)");
    document.documentElement.style.setProperty("--primary-text", "#ffffff");
    document.documentElement.style.setProperty("--text-color", "rgb(0 10 45)");
    setDark("light")
  }
  const darkMode=()=>{
    // --link-color: #8490ff;
    // --bg-color1: azure;
    // --bg-color2:white;
    // --secondary-text:rgb(117, 118, 118);
    // --primary-text:#ffffff;
    // --btn-color:white;
    // --text-color:rgb(0 10 45);

    // document.documentElement.style.setProperty("--btn-color", "black");
    document.documentElement.style.setProperty("--body-color", "black");
    document.documentElement.style.setProperty("--link-color", "white");
    document.documentElement.style.setProperty("--bg-color1", "black");
    document.documentElement.style.setProperty("--bg-color2", "#060608");
    document.documentElement.style.setProperty("--secondary-text", "white");
    document.documentElement.style.setProperty("--primary-text", "white");
    document.documentElement.style.setProperty("--text-color", "white");
    // document.documentElement.style.setProperty("--btn-color", "black");
    


    setDark("dark")
  }
  return (
    <nav id="toppos">
      {/* tackle after going project then go to about it will show on project/#about */}
      <div className="siteName" onClick={() => navigate("/")}>
        <h1>SAK</h1>
        <h1>Web Developer</h1>
      </div>
      <div className="topnav" id="myTopnav">
        <span className='theme-dark' onClick={themeChange}>
          {light==="light"?<RiSunFill/>:<RiMoonFill/>}
        </span>
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