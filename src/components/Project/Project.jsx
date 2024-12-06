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
                        <RiEyeLine className='icon'/>
                        <RiGithubFill className='icon'/>
                    </div>
                </div>
                <div className="box">
                    <img src={mall} alt="" />
                    <div className="hover">
                        <RiEyeLine className='icon'/>
                        <RiGithubFill className='icon'/>
                    </div>
                </div>
                <div className="box">
                    <img src={todo} alt="" />
                    <div className="hover">
                        <RiEyeLine className='icon'/>
                        <RiGithubFill className='icon'/>
                    </div>
                </div>
                <div className="box">
                    <img src={landing} alt="" />
                    <div className="hover">
                        <RiEyeLine className='icon'/>
                        <RiGithubFill className='icon'/>
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