import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Testimonal from "./testimonal/Testimonal"
import Slider from "./hero/Slider"
import Popup from "../../popup/Popup"

const Home = ({ showPopup, setShowPopup }) => {
   

  const handleIconClick = () => {
    setShowPopup(true);
  };

  return (
    <>
     <div style={{ position: "fixed", top: 400, right: 0, padding: "10px" }}>
        <button style={{ border: "none", backgroundColor:"#E57373" }} onClick={handleIconClick}>Register Now</button>
      </div>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
      <Slider />
      <AboutCard />
      <HAbout setShowPopup={setShowPopup} />
      <Testimonal />
      <Hblog />
      {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />}
    </>
  )
}

export default Home