import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png' 
const Hero = () => {
  return (
    <div id ="home" className='hero'>
        <img src= {profile_img} alt="" />
        <h1><span>Machine learning</span> deployment</h1>
        <p>stroke prediction models</p>
        <div className="action">
            <div className="hero-connect">stroke</div>
            <div className="hero-resume">prediction</div>
        </div>
    </div>
  )
}

export default Hero