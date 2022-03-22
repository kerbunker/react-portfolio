import React from 'react';
import profilePic from "../../assets/prof-pic.png";

function About() {
  return (
    <section className="about-container">
      <h1 id="about" className='about-header'>About Me</h1>
      <div className='about'>
        <img src={profilePic} className="portrait" alt="recent photo of Katelyn Bunker" />
      
        <p className='about-text'>Hi, I'm Katelyn Bunker! I am an aspiring full stack developer. I have a background in Chemistry but I am ready for a change.</p>
      </div>
    </section>
  );
}

export default About;