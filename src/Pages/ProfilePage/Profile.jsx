import React from 'react'
import "./profile.css"
import Navbar from "../../components/navbar/Navbar"
import user from "../../assets/user.png"
import CTA from "../../components/cta/CTA"
import Footer from "../../containers/footer/Footer"
const Profile = (props) => {

  let curruser = props.userdata;
  return (
    <div><Navbar userdata={curruser} />
      <div className='container profile-main '>
        <div className='row'>
          <div className='col-2'>
            <img className='user-pic-css-profile' src={user} />
          </div>
          <div className='col-1'></div>
          <div className='col-9 profile-content-css'>
            <h1>Hey, {curruser ? curruser.name : "Anonymous"}</h1>
            <p className='profile-username-css'>crackDSA Username: <span className='username-profile-css'>{curruser ? curruser.email.substring(0, curruser.email.indexOf('@')) : "anony"}</span></p>
            {/* <p>Email: {curruser?curruser.email:"anony@an.com"}</p> */}
          </div>
        </div>
        <div className='row mt-5 mb-5'>
          <div className='col'>
            <CTA />
          </div>
        </div>

      </div>
      <Footer userdata={curruser} />
    </div>
  )
}

export default Profile