import React from 'react'
import CTA from './CTA'
import ME from "../../assets/me1.png"
import HeaderSocials from './HeaderSocials'
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sonu Vishwakarma</h1>
        <h5 className='text-light'>Engineering Student</h5>
        <CTA/>

        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header