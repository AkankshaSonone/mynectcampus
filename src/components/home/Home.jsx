import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
//  import { useEffect,useState } from "react"
import Testimonal from "./testimonal/Testimonal"
import Slider from "./hero/Slider"
import Popup from "../../popup/Popup"

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
      <Testimonal />
      <Hblog />
      
    </>
  )
}

export default Home
