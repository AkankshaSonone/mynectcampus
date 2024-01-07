import React from "react"
import Back from "../common/back/Back"
import OnlineCourses from "./OnlineCourses"
import Cards from "./Cards"
import { coursesCard, coursesCard2 } from '../../dummydata'



const CourseHome = ({ setShowPopup }) => {
  return (
    <>
      <Back title='Explore Courses' />
      <div className="container">
        <Cards course={coursesCard} setShowPopup={setShowPopup} />
      </div>
      <OnlineCourses />
      <div className="container">
        <Cards course={coursesCard2} setShowPopup={setShowPopup} />
      </div>
    </>
  )
}

export default CourseHome
