import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import './Popup.css';

const  Popup = (props) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 60
    );
      
    emailjs.init('2-xhiVdYL21VXBFUJ');
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Form submitted!');

    const templateParams = {
      name: e.target.name.value,
      state: e.target.state.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      courses: e.target.courses.value,
      inquiry: e.target.inquiry.value,
    };

    try {
      const response = await emailjs.send(
        'service_whk8nhe',  
        'template_origu49',  
        templateParams,
          
      );

      console.log('Email sent!', response);

      alert('Email sent successfully!');
      e.target.reset();
    } catch (error) {
      console.error('Failed to send email!', error);
      alert('Failed to send email! Please try again.');
    }
  };

  return (
    <div className={`popup ${ (showPopup) ? 'show' : ''}`}>
      <div className="popup-content">
        <span className="close" onClick={() => setShowPopup(false)}>
          &times;
        </span>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" required />

          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="courses">Courses Interested for:</label>
          <select id="courses" name="courses">
            <option value="course1">In Campus Courses</option>
            <option value="course2">Certification Courses</option>
            <option value="course3">Up skilling courses</option>
          </select>

          <label htmlFor="inquiry">Inquiry for:</label>
          <select id="inquiry" name="inquiry">
            <option value="self">For Self</option>
            <option value="children">Children</option>
            <option value="others">Others</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
