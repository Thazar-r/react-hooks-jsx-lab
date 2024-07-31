import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
<h2>About Me</h2>
      <p>
        I am passionate about web development and enjoy creating interactive and dynamic user experiences. I am always eager to learn new technologies and improve my skills.
      </p>
      <img src={image} alt="I made this" />
  </div>;
}

export default About;
