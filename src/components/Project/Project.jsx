import React from 'react'
import { RiGithubFill, RiEyeLine } from '@remixicon/react'
import ims from '../../assets/project-images/Ims.png'
import mall from '../../assets/project-images/sak-mall.png'
import todo from '../../assets/project-images/todo-app.png'
import landing from '../../assets/project-images/landing-page.png'

import './Project.css'
const Project = () => {
    return (
        <section className='project' id='projects'>
            <h1>My Projects</h1>
            <div className="project-view">
                <div className="box">
                    <img src={ims} alt="" />
                    <div className="hover">
                        <a href="https://ims-sak.vercel.app/" target="blank">
                            <RiEyeLine className='icon' />
                        </a>
                        <a href="https://github.com/ANKITKUMAR1809/IMS" target="blank">
                            <RiGithubFill className='icon' />
                        </a>
                    </div>
                </div>
                <div className="box">
                    <img src={mall} alt="" />
                    <div className="hover">
                        <a href="https://as-mall.vercel.app/" target="blank">
                            <RiEyeLine className='icon' />
                        </a>
                        <a href="https://github.com/ANKITKUMAR1809/AS-MALL" target="blank">
                            <RiGithubFill className='icon' />
                        </a>
                    </div>
                </div>
                <div className="box">
                    <img src={todo} alt="" />
                    <div className="hover">
                        <a href="https://mytodo-bice-eight.vercel.app/" target="blank">
                            <RiEyeLine className='icon' />
                        </a>
                        <a href="https://github.com/ANKITKUMAR1809/Todo-App" target="blank">
                            <RiGithubFill className='icon' />
                        </a>
                    </div>
                </div>
                <div className="box">
                    <img src={landing} alt="" />
                    <div className="hover">
                        <a href="https://ankitkumar1809.github.io/ANSO-TRUST/" target="blank"><RiEyeLine className='icon' /></a>
                        <a href="https://github.com/ANKITKUMAR1809/ANSO-TRUST" target="blank"><RiGithubFill className='icon' /></a>
                    </div>
                </div>
                {/* <div className="box">
                    <img src="" alt="" />
                    <div className="hover">
                        <RiEyeLine/>
                        <RiGithubFill/>
                    </div>
                </div>
                <div className="box">
                    <img src="" alt="" />
                    <div className="hover">
                        <RiEyeLine/>
                        <RiGithubFill/>
                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default Project