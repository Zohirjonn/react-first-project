import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div className="about">
      <Fade left>
        <h1>About</h1>
      </Fade>
      <Fade right>
        <p>This is about pages. Hello my friend</p>
      </Fade>
    </div>
  );
};

export default About;
