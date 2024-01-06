import React from "react";
import "./aboutp.css";
import Study from "./study-abroad.jpg";
const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="text-section">
        <h1>Welcome To MyNext Campus</h1>
         
        <p>
          My next campus is a one-stop-solution making course and college
          selection easy for students looking to pursue undergraduate (UG) and
          postgraduate (PG) courses in India. It is also accessible to users on
          the move through the website’s mobile site. We also facilitate a
          single registration window for even multiple options for the courses
          and Institutions as well. This means saving lots of money, time, and
          efforts of the students and their guardians. Additionally, as a step
          towards female education, we provide special consideration to the
          female students in the registration.
          </p>
          
          <p>
          Our website is a repository of
          reliable and authentic information of courses and institution not only
          from like of Indian Institute of Technology (IITs), Regional
          Engineering Colleges (REC), Indian Institute of Management Studies
          (IIMs), NMMIMS, etc. but many other institutions or colleges who also
          impart quality education and career options post-course completion for
          students. We offer specific information for students interested in
          UG/PG courses in India in the most popular educational streams –
          Management, Science & Engineering, Information Technology, etc. 
          </p>
           
          <p> 
          Our active ask and answer community called my next campus have experts
          answering career and college-related queries. Students can ask
          questions, participate in discussions and stay updated with the latest
          news related to their educational interests. My next campus is India’s
          smartest college gateway that blends higher education-related domain
          knowledge, with technology, credibility to give students personalized
          insights to make informed career, course, and college decisions.
        </p>
      </div>
      <div className="image-section">
        <img src={Study} alt="About Us Image" className="about-image" />
      </div>
    </div>
  );
};

export default AboutUs;
