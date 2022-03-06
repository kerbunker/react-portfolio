import React from 'react';
import profilePic from "../../assets/prof-pic.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={profilePic} className="my-2" alt="image of Katelyn Bunker" />
      <div>
        <p>Hi, I'm Katelyn Bunker! I am an inspiring full stack developer. I have a background in Chemistry but I am ready for a change.</p>
      </div>
    </section>
  );
}

export default About;