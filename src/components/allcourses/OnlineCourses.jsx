import { useState } from "react";
import "./courses.css"
import { online } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Popup from "../../popup/Popup";
import { RiSpeakFill } from "react-icons/ri";

const OnlineCourses = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = () => {
    setShowPopup(true);
  };
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Heading subtitle='COURSES' title='UP-SKILLING EDUCATION AND PROGRAMMES' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  {/* <img src={val.hoverCover} alt='' className='show' /> */}
                </div>
                <h1>{val.courseName}</h1>
                <span onClick={handleIconClick}>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
        {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />}
      </section>
    </>
  )
}

export default OnlineCourses
