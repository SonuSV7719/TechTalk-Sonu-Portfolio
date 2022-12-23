import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import {BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sonusv/" target= "_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/SonuSV7719" target= "_blank" rel="noreferrer"><IoLogoGithub/></a>
        <a href="https://www.youtube.com/@techtalksonu" target= "_blank" rel="noreferrer"><AiFillYoutube/></a>
        <a href="https://www.instagram.com/techtalk_sonu/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials