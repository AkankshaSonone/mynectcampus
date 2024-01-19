import React from 'react'
import './button.css'
import Popup from '../../../popup/Popup';
import { useState } from 'react';
const Register= () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleIconClick = () => {
        setShowPopup(true);
      };
  return (
      <div className="sticky-button-container">
      <button className="sticky-button" onClick={handleIconClick}>Register Now</button>
      {showPopup && <Popup showPopup={showPopup} setShowPopup={setShowPopup} />}
    </div>
      
  )
}

export default Register
