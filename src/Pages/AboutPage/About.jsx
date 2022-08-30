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
      <p>
        
        CA. Shrish Tiwari
        <p>
          This is Finosper Wealth management.
        </p>
      </p>
      <p>
        Kush Lalwani
        <p>
          </p>This is Fino mutual Fund
      </p>
      </div>
    </div>
  )
}

export default About;