import React from 'react'
import Navbar from "../../components/navbar/Navbar"
import './About.css'
const About = (props) => {
  let curruser = props.userdata;

  return (
    <div>
      <Navbar userdata={curruser} />
      {/* <Faq/> */}
      <div className='container about-main'>
      <h1>About Page</h1>
      </div>
    </div>
  )
}

export default About;