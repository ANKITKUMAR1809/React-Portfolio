import React, { useState } from 'react'
import './Resume.css'
const Resume = () => {
    const [resume, setResume] = useState("experience")
    return (
        <section id='resume'>
            <h1>Education & Experience</h1>

            <div className='resume-container'>
                <div className='resume-img'>
                    <img src="https://dlzibc868dsjl.cloudfront.net/resume-assets/resumePic.png" alt="" />
                    <div className="resume-type">
                        <div className="resume-type-education" onClick={() => setResume("education")}>
                            <h2>Education</h2>
                        </div>
                        <div className="resume-type-experience" onClick={() => setResume("experience")}>
                            <h2>Experiences</h2>
                        </div>
                    </div>
                </div>
                <div className='resume-content'>
                    {resume === "education" ? <div>
                        <h2 className='timeline-heading'>{resume == "education" ? "Education" : ""}</h2>
                        <div className="timeline">
                            <div className="container left">
                                <div className="content">
                                    <h2>MCA - College Of Commerce Arts & Science, Patna</h2>
                                    <p>Sept 2024 - Current</p>
                                    <p>Fulltime</p>
                                </div>
                            </div>

                            <div className="container right">
                                <div className="content">
                                    <h2>INTERMEDIATE - RLSY COLLEGE, NAWADA</h2>
                                    <p>Mar 2017 - Apr 2019</p>
                                    <p>Fulltime</p>
                                </div>
                            </div>

                            <div className="container left">
                                <div className="content">
                                    <h2>BCA, - KLS COLLEGE, NAWADA</h2>
                                    <p>Aug 2019 - Dec 2023</p>
                                    <p>Fulltime</p>
                                </div>
                            </div>
                        </div></div> : <div>
                        <h2 className='timeline-heading'>{resume == "experience" ? "Experience" : ""}</h2>
                        <div className="timeline">

                            <div className="container left">
                                <div className="content">
                                    <h2>React Dev Internship</h2>
                                    <p>Next24Tech Remote, India</p>
                                    <p>May 2024 - July 2024  Parttime</p>
                                </div>
                            </div>

                            <div className="container right">
                                <div className="content">
                                    <h2>MERN Dev Internship</h2>
                                    <p>John Raickers Hyderabad, India</p>
                                    <p>Aril-2024 - June-2024  Parttime</p>
                                </div>
                            </div>

                            <div className="container left">
                                <div className="content">
                                    <h2>Web Dev Internship</h2>
                                    <p>BoostStart Expert .co - Chattisgarh, India</p>
                                    <p>Feb 2024 - Apr 2024 Parttime</p>
                                </div>
                            </div>
                            <div className="container right">
                                <div className="content">
                                    <h2>Web Dev Internship</h2>
                                    <p>Spotmies LLP. - Hyderabad, India</p>
                                    <p>July-2021 - Aug-2021  Parttime</p>
                                </div>
                            </div>

                        </div>
                    </div>}
                </div>
            </div>

        </section>
    )
}

export default Resume