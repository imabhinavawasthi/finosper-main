import React from 'react'
import './E404.css'
import Navbar from "../navbar/Navbar"
import { NavLink } from "react-router-dom";
import { Footer } from '../../containers';

const E404 = (props) => {
  const curruser=props.userdata;
  return (
    
    <div>
    <Navbar userdata={curruser}/>
      <div id="message" className=' mt-5'>
      <h2>404</h2>
      <h1>Page Not Found</h1>
      <p>The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
      <p> <NavLink to="/">Return Back to Home</NavLink></p>
    </div>
    <Footer/>
    </div>
  )
}

export default E404
