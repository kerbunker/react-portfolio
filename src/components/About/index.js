import React from 'react';
import profilePic from "../../assets/prof-pic.png";

function About() {
  return (
    <section className="bg-purple-900/40 pb-2">
      <h1 id="about" className='text-indigo-200/70 underline underline-offset-8 pb-12 pt-2 text-center text-4xl'>About Me</h1>
      <div className='about flex flex-col md:flex-row justify-around bg-purple-300/40 mx-12 rounded mb-6'>
        <div className='flex justify-center py-6 mx-6 basis-1/3 shrink-0'>
          <img src={profilePic} className="" alt="recent photo of Katelyn Bunker" />
        </div>
        <div className='px-6 py-12 flex items-center'>
           <p className='text-indigo-300 align-left text-lg lg:text-2xl md:border-b-4 md:border-indigo-300/80 pt-4  md:border-t-4 pb-4'>Hi, I'm Katelyn Bunker! I recently graduated from UNC Chapel Hill Full Stack Development boot camp. I have a backgraound in chemmistry but I am ready for a change. Before the boot camp, I previously took online classes from NC State in Java and C programming. I am passionate about learning and practice my skills for all aspects of full stack development.</p>
        </div>
       
      </div>
    </section>
  );
}

export default About;