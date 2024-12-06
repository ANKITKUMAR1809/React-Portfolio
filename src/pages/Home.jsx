import React from 'react'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Resume from '../components/Resume/Resume'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Project from '../components/Project/Project'
const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Project/>
      <Resume />
      <Contact/>
      <Footer/>
    </>
  )
}

export default Home