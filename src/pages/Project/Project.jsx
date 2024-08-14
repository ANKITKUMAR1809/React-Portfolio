import React, { useState } from 'react'
import './Project.css'
import Plink from './ProjectLink';
const Project = () => {
  const [active , setActive]=useState()
  const [link, setLink] = useState({
    name: Plink[2].name,
    description: Plink[2].description,
    url: Plink[2].url
  })
  return (
    <>
      <section>
        <div className="project-heading">
          <h1>MY PROJECTS</h1>
        </div>
        <div className='project'>

          <div className="project-img-slider">

            <div className="project-img"
              onClick={() => setLink({
                name: Plink[2].name,
                description: Plink[2].description,
                url: Plink[2].url
              })}
            >
              <img src="https://dlzibc868dsjl.cloudfront.net/projectImage/mytodo.png" alt="" />
            </div>

            <div className="project-img"
              onClick={() => setLink({
                name: Plink[0].name,
                description: Plink[0].description,
                url: Plink[0].url
              })}
            >
              <img src="https://dlzibc868dsjl.cloudfront.net/projectImage/asmall.png" alt="" />
            </div>
            <div className="project-img"
              onClick={() => setLink({
                name: Plink[3].name,
                description: Plink[3].description,
                url: Plink[3].url
              })}
            >
              <img src="https://dlzibc868dsjl.cloudfront.net/projectImage/myntra.png" alt="" />
            </div>

            <div className="project-img"
              onClick={() => setLink({
                name: Plink[5].name,
                description: Plink[5].description,
                url: Plink[5].url
              })}
            >
              <img src="https://dlzibc868dsjl.cloudfront.net/projectImage/ansoTrust.png" alt="" />
            </div>

            <div className="project-img"
              onClick={() => setLink({
                name: Plink[1].name,
                description: Plink[1].description,
                url: Plink[1].url
              })}
            >
              <img src="https://dlzibc868dsjl.cloudfront.net/projectImage/tictactoe.png" alt="" />
            </div>
            <div className="project-img"
              onClick={() => setLink({
                name: Plink[4].name,
                description: Plink[4].description,
                url: Plink[4].url
              })}
            >
              <img src="https://dlzibc868dsjl.cloudfront.net/projectImage/portfolio.png" alt="" />
            </div>
          </div>
          <div className="project-img-viewer">
            <iframe src={link.url} frameBorder="0" width="100%" height="59%"></iframe>
            <div>
              <div className="project-name">
                <h1>{link.name}</h1>
              </div>
              <div className="project-description">
                <h2>About Project</h2>
                <h3>{link.description}</h3>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Project