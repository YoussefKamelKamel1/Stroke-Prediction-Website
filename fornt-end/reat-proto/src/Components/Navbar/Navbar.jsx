import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import underline from '../../assets/nav_underline.svg'

import  { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
const [menu ,setMenu] = useState("home");



  return (
    <div className='navbar'>
        <img src= {logo} alt="" />
         <ul className="nav-menu">
        <li><AnchorLink  className='anchor-link'  href='#home'        ><p onClick={()=>{setMenu("home")}}>hero</p></AnchorLink>{menu==="home"?<img src = {underline} alt='' /> :<></> }</li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#about'       ><p onClick={()=>{setMenu("about")}}>about</p></AnchorLink>{menu==="about"?<img src = {underline} alt='' /> :<></>}</li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#form'     ><p onClick={()=>{setMenu("forms")}}>forms</p></AnchorLink>{menu==="forms"?<img src = {underline} alt='' /> :<></>}</li>
        <li><AnchorLink  className='anchor-link' offset={50} href='#'    ><p onClick={()=>{setMenu("feedback")}}>feedback</p></AnchorLink>{menu==="feedback"?<img src = {underline} alt='' /> :<></>}</li>
         </ul>
         <div className="nav-connect">
         <AnchorLink  className='anchor-link' offset={50} href='#contact'>  Feedback</AnchorLink>
    
         </div>
    </div>
  )
}

export default Navbar