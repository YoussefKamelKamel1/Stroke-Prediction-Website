import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const Contact = () => {
  return (
    <div id='contact' className="contact">
        <div className="contact-title">
        <h1>Send your feedback</h1>
        <img src= {theme_pattern} alt="" />
        </div>
        <div className="contact-section">
        <div className="left-section">
        <h1>help us</h1>
        <p>improve the model</p>
        <div className="contact-details">
            <div className="contact-detail">
            <img src= {mail_icon} alt="" /><p>NULL</p>
            </div>
            <div className="contact-detail">
            <img src= {call_icon} alt="" /><p>NULL</p>
            </div>
            <div className="contact-detail">
            <img src= {location_icon} alt="" /><p>NULL</p>
             </div>
        </div>
        </div>
        <form  className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your Name' name='name'/>
        <label htmlFor="">Enter Your Email</label>
        <input type="text" placeholder='Enter your Email' name='email'/>
        <label htmlFor="">Enter your message</label>
        <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
        <button type='submit' className="contact-submit">Submit now</button>
        </form>
        </div>

    </div>
  )
}

export default Contact