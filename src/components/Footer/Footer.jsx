import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './Footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    return (
        <section>
            <footer>
                <div className="footer">
                    <div className="fabout">
                        <h3>About</h3>
                        <p>
                            I hope you like my portfolio,
                            & if you have any query then feel
                            free to ask with me or contact me.
                            And follow me on everywhere, specially
                            in your heart. Thanks Have a Great Day!
                        </p>
                    </div>
                    <div className="flinks">
                        <h3>Links</h3>
                        <ul>
                            <HashLink to="#header">
                                <li><i className="fa fa-arrow-right"></i>HOME</li>
                            </HashLink>
                            <HashLink to="#about">
                                <li><i className="fa fa-arrow-right"></i>ABOUT</li>
                            </HashLink>
                            <NavLink to="/project">
                                <li><i className="fa fa-arrow-right"></i>PROJECT</li>
                            </NavLink>
                            <HashLink to="#resume">
                                <li><i className="fa fa-arrow-right"></i>RESUME</li>
                            </HashLink>
                        </ul>
                    </div>
                    <div className="faddress">
                        <h3>Have a Question?</h3>
                        <ul>
                            <li><i className="fa fa-location-arrow"></i>Nawada,Bihar,IND</li>
                            <li><i className="fa fa-phone"></i>+91 &nbsp; 8102761121</li>
                            <li>ankitkumar1878@gmail.com</li>
                        </ul>
                    </div>
                    <div className="container">
                        <div className="f-social-icons">
                            <a href="https://www.instagram.com/nainaeshubarnwal/" target="_blank">
                                <i className="fa fa-instagram"></i>
                            </a>

                            <a href="https://www.linkedin.com/in/sak1809" target="_blank">
                                <i className="fa fa-linkedin-square"></i>
                            </a>

                            <a href="https://www.youtube.com/@seshukiduniya" target="_blank">
                                <i className="fa fa-youtube-play"></i>
                            </a>
                        </div>

                        <div className="f-credits">
                            <p>Copyright ©2022 All rights reserved | SAK</p>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer