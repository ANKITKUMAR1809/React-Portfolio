import React from 'react'
import HeaderImg from '../../assets/avatar1.png'
import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiMailFill } from '@remixicon/react'
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="header" id="header">
                <div className="info ">
                    <h3>THIS IS ME</h3>
                    <h1>ANKIT KUMAR</h1>
                    <h2>I'm Front-end Developer. Currently, I am starving for Opportunity. Becoming MERN stack developer,
                        Youtuber and Waiting for Job Opportunity or Internship.</h2>
                    <a href="#contact" id="hirebtn">HIRE ME</a>
                </div>
                <div className="img">
                    <img src={HeaderImg} alt="" />
                </div>
            </div>
            <a href="#header" id="top">Top</a>

            <div className="mylink">
                <div className="height"></div>

                <a href="https://www.linkedin.com/in/sak1809" target="_blank">
                    <RiLinkedinFill style={{ "fontSize": "24px" }} />
                </a>

                <a href="https://github.com/ANKITKUMAR1809" target="_blank">
                    <RiGithubFill style={{ "fontSize": "24px" }} />
                </a>

                <a href="mailto:ankitkumar1878@gmail.com" target="_blank">
                    <RiMailFill style={{ "fontSize": "24px" }} />
                </a>

                <a href="https://www.youtube.com/@seshukiduniya" target="_blank">
                    <RiYoutubeFill style={{ "fontSize": "24px" }} />
                </a>
            </div>
        </>
    )
}

export default Header