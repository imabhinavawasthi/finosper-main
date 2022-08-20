import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './contact.css'
import ContactUsCard from "../../components/contactuscard/ContactUsCard"
const Contact = (props) => {
  let curruser = props.userdata;
  return (
    <div>
      <Navbar userdata={curruser} />
      <div className='container contact-main'>
        <h1>Contact Page</h1>
        <div>
          <ContactUsCard/>
        </div>
      </div>
    </div>
  )
}

export default Contact
