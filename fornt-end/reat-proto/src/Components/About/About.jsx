import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'
const About = () => {
  return (
    <div id ="about" className='about'>  
        <div className="about-title">
            <h1>About </h1>
            <img src= {theme_pattern} alt="" />
        </div>
        
        <div className="about-section">
        <div className="about-left">
        <img src= {profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
            <p>Enter your data </p>
            <p> catch the prediction</p>
            </div>
            <div className="about-skills">
            <div className="about-skill"><p>logistic reg</p><hr style ={{width:"50%"}}/></div>
            <div className="about-skill"><p>naive bayes</p><hr style ={{width:"70%"}}/></div>
            <div className="about-skill"><p>nueral network</p><hr style ={{width:"60%"}}/></div>
            <div className="about-skill"><p>any else</p><hr style ={{width:"50%"}}/></div>
            </div>
            </div>
            </div>  
            <div className="about-achivements">
                <div className="about-achivenemnt">
                    <h1>10+</h1>
                    <p>Yabc</p>
                </div>
                <hr />
                <div className="about-achivenemnt">
                    <h1>90+</h1>
                    <p>abc</p>
                </div>
                <hr />
                <div className="about-achivenemnt">
                    <h1>15+</h1>
                    <p>abc</p>
                </div>
            </div>

        
            </div>

   
  )
}

export default About