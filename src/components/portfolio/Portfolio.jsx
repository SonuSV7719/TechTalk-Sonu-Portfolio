import React from 'react'
import PRJ1 from '../../assets/project1.jpeg'
import PRJ2 from '../../assets/project3.jpeg'
import PRJ3 from '../../assets/project4.jpeg'
import PRJ4 from '../../assets/project5.jpeg'
import PRJ5 from '../../assets/project6.png'
import PRJ6 from '../../assets/project7.png'
import './portfolio.css'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Fortfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ1} alt="IMG" />
          </div>
          <h3>Wireless PC Controller</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SonuSV7719/" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://youtu.be/eQu6OiMk_uQ" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ2} alt="IMG" />
          </div>
          <h3>Chatting Web Application</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SonuSV7719/Chatting-App" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://youtu.be/ntf92tYfHHk" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ3} alt="IMG" />
          </div>
          <h3>Play Dino Game Using IR Sensor</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SonuSV7719/Control-Crome-dino-game-using-Python-arduino" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://youtu.be/FYX5SJNnJ0g" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ4} alt="IMG" />
          </div>
          <h3>Flying Drone Animation</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SonuSV7719/Flying-Drone-Using-HTML-CSS-and-JS" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://youtu.be/NEi_O9J7VMs" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ5} alt="IMG" />
          </div>
          <h3>Online Python Compiler</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SonuSV7719/Online-Python-Compiler-" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://youtu.be/6tkHUnAkybI" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PRJ6} alt="IMG" />
          </div>
          <h3>Sad Love Story Animation</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/SonuSV7719/Sad-love-story-stick-boy-and-girl-" className='btn' target='_blank' rel="noreferrer">Github</a>
            <a href="https://youtu.be/lHXDr9sF3dE" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio