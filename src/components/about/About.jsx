import React from 'react'
import './about.css'
import ME from '../../assets/me-2.jpg'
import { FaAward } from 'react-icons/fa'
import { RiUser3Line } from 'react-icons/ri'
import { TiFolder } from "react-icons/ti"

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Education</h5>
                <small>Dr. D. Y. Patil Institute of Technology, Pimpri</small>
                <small>B.E. Artificial Intelligence & Data Science</small>
              </article>

              <article className='about__card'>
                <RiUser3Line className='about__icon'/>
                <h5>Passionate Youtuber</h5>
                <small>I like to create Coding related content on my YouTube Channel</small>
              </article>

              <article className='about__card'>
                <TiFolder className='about__icon'/>
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>

            <p>I am Sonu Shriram Vishwakarma currently pursuing my B.E. in Artificial Intelligence And Data Science degree at Dr. D. Y. Patil Institute of Technology, Pimpri. I have a YouTube channel where I upload videos on coding, projects, motivational video, and fun videos. I am always dedicated to my work and try to complete my work in a given time. In my spare time, I do coding, reading, drawing , and playing with electronic gadgets. I am
passionate about my work and always try to learn new things to improve myself day by day.</p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About