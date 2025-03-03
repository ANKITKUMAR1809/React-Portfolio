import React, { useState } from 'react'
import cssSvg from './about-assets/css.svg'
import htmlSvg from './about-assets/html.svg'
import javascriptSvg from './about-assets/javascript.svg'
import reactSvg from './about-assets/react.svg'
import tailwindSvg from './about-assets/tailwing.svg'
import resumeJpg from './about-assets/resumepic.jpg'
import Resume from './about-assets/ak.pdf'
import Nodejs from './about-assets/nodejs.svg'
import Mongo from './about-assets/mongodb.svg'
import Express from './about-assets/express.svg'
import './About.css'
const About = () => {
    const [skill, setSkill] = useState("frontend")

    return (
        <div className="about" id="about">
            <div className="aboutImg">
                <img src={resumeJpg} alt="" />
            </div>
            <div className="aboutInfo">
                <h1>ABOUT ME</h1>
                <p>
                    As a skilled frontend developer, I excel in crafting captivating user interfaces with proficiency in
                    HTML, CSS, and JavaScript. My expertise extends to leveraging advanced frameworks like React.js to
                    build dynamic and responsive web applications. Additionally, My adeptness in implementing Tailwind CSS
                    further enhances my ability to create modern and visually appealing designs.
                </p>
                <div className="about-skill-type">
                    <div className="skill-type-frontend" onClick={() => setSkill("frontend")}>
                        <h2>Frontend Skills</h2>
                    </div>
                    <div className="skill-type-backend" onClick={() => setSkill("backend")}>
                        <h2>Backend Skills</h2>
                    </div>
                </div>
                {
                    skill == "frontend" ?
                        <div className="skill">
                            <div className="s1">
                                <div>
                                    <img src={htmlSvg} alt="" />
                                    <h3>HTML</h3>
                                </div>
                                <div className="progress">
                                    <div className="bar"></div>
                                </div>
                            </div>
                            <div className="s2">
                                <div>
                                    <img src={cssSvg} alt="" />
                                    <h3>CSS</h3>
                                </div>
                                <div className="progress">
                                    <div className="bar"></div>
                                </div>
                            </div>
                            <div className="s3">
                                <div>
                                    <img src={javascriptSvg} alt="" />
                                    <h3>Javascript</h3>
                                </div>
                                <div className="progress">
                                    <div className="bar"></div>
                                </div>
                            </div>
                            <div className="s4">
                                <div>
                                    <img src={reactSvg} alt="" />
                                    <h3>React Js</h3>
                                </div>
                                <div className="progress">
                                    <div className="bar"></div>
                                </div>
                            </div>
                            <div className="s5">
                                <div>
                                    <img src={tailwindSvg} alt="" />
                                    <h3>Tailwind Css</h3>
                                </div>
                                <div className="progress">
                                    <div className="bar"></div>
                                </div>
                            </div>
                        </div>
                        : <div className="backendSkill">
                            <div className="backend-skill-img">
                                <img src={Nodejs} alt="" />
                            </div>
                            <div className="backend-skill-img">
                                <img src={Mongo} alt="" />
                            </div>
                            <div className="backend-skill-img">
                                <img src={Express} alt="" />
                            </div>
                        </div>
                }

                <a href={Resume} id="download" download="ANKIT KUMAR">DOWNLOAD CV</a>
            </div>
        </div>

    )
}

export default About;