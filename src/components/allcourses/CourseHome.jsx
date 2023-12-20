import React from "react"
import Back from "../common/back/Back"
import CoursesCard from "./CoursesCard"
import OnlineCourses from "./OnlineCourses"
import CoursesCard2 from "./CourseCard2"

const CourseHome = () => {
  return (
    <>
      <Back title='Explore Courses' />
      <CoursesCard />
      <OnlineCourses />
      <CoursesCard2/>
    </>
  )
}

export default CourseHome
