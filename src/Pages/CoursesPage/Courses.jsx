import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footer from "../../containers/footer/Footer"
import './courses.css'
import CoursesHeader from './CoursesHeader';
const Courses = (props) => {
  let curruser = props.userdata;
  return (
    <div>
      <Navbar userdata={curruser} />
      <div className='courses-main'>
        <div>
          <CoursesHeader userdata={curruser}/>
        </div>
      </div>
      <Footer userdata={curruser}/>
    </div>
  )
}

export default Courses;