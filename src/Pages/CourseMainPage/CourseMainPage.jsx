import React from 'react'
import CourseDetailCards from '../../parts/coursedetailscard/CourseDetailCards'
import "./coursemainpage.css"

const CourseMainPage = () => {
    return (
        <div className='container '>
            <div className='row'>
                <CourseDetailCards/>
            </div>
        </div>
    )
}

export default CourseMainPage