import React from 'react'
import { RiYoutubeFill, RiLinkedinFill, RiGithubFill, RiMailFill } from '@remixicon/react'
import './Header.css'
const Header = () => {
    return (
        <>
            <div className="header" id="header">
                <div className="info ">
                    <h3>THIS IS ME</h3>
                    <h1>ANKIT KUMAR</h1>
                    <h2>
                        <p>
                            MERN Stack Developer | Frontend Specialist | Aspiring Django Developer
                        </p>
                        <p>
                            🎓 MCA Student | 🚀 Open to Exciting Job Opportunities
                        </p>
                        With a strong foundation in frontend development and expertise in the MERN stack, I craft seamless, user-friendly web applications. Currently, I'm expanding my skill set by diving into Python and the Django framework. I’m passionate about building impactful digital experiences and eager to contribute my skills to innovative projects.</h2>
                    <a href="#contact" id="hirebtn">HIRE ME</a>
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