import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard, coursesCard2 } from "../../dummydata";
import Cards from "../allcourses/Cards";

const HAbout = ({ setShowPopup }) => {
  return (
    <section className="homeAbout">
      <div className="container">
        <Heading subtitle="Our Education Programmes" title="In Campus Programmes" />
        <Cards course={coursesCard} setShowPopup={setShowPopup} />
      </div>

      <OnlineCourses />

      <div className="container">
        <Heading subtitle="our courses" title="Online Programmes" />
        <Cards course={coursesCard2} setShowPopup={setShowPopup} />
      </div>
    </section>
  );
};

export default HAbout;
