import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
//  import { useEffect,useState } from "react"
import Testimonal from "./testimonal/Testimonal"
import Slider from "./hero/Slider"
import Popup from "../../popup/Popup"
import CoursesCard2 from "../allcourses/CoursesCard2"
 

const Home = () => {
  // const [showPopup, setShowPopup] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowPopup(true);
  //   }, 60
  // )});
  return (
    <>
      {/* <Hero /> */}
      <Popup/>
      <Slider/>
      <AboutCard />
      <HAbout />
      <CoursesCard2/>
      <Testimonal />
      <Hblog />
      
    </>
  )
}

export default Home
