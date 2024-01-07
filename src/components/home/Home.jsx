import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import { useState } from "react"
import Testimonal from "./testimonal/Testimonal"
import Slider from "./hero/Slider"
import Popup from "../../popup/Popup"
import Cards from "../allcourses/Cards"

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
   {/* <Cards/> */}
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      <Slider />
      <AboutCard />
      <HAbout setShowPopup={setShowPopup} />
      <Testimonal />
      <Hblog />

    </>
  )
}

export default Home