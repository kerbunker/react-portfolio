import React from 'react';
import profilePic from "../../assets/prof-pic.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Katelyn Bunker</h1>
      <img src={profilePic} className="my-2" alt="image of Katelyn Bunker" />
    </section>
  );
}

export default About;