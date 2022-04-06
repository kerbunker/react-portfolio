import React, { useState } from "react";
import gitIcon from "../../assets/icons/GitHub-Mark-Light-32px.png";
//import Project from '../ProjectList';
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
  const [projects] = useState([
    {
      name: "Social Rolls",
      description: "MERN/GraphQL",
      image_desc: "Dashboard showing header and one example post",
      repo_url: "https://github.com/KrisSmith7/roll-initiative",
      url: "https://socialrolls.herokuapp.com/"
    },
    {
      name: "Game Corner",
      description: "Node/SQL",
      image_desc: "Landing page for Game Corner",
      repo_url: "https://github.com/kerbunker/game-collection",
      url: "https://afternoon-reef-79835.herokuapp.com/",
    },
    {
      name: "Hangman's Revenge",
      description: "JavaScript/API",
      image_desc: "A new game with no quesses made",
      repo_url: "https://github.com/CyanideTheJuggla/hangmans-revenge",
      url: "https://cyanidethejuggla.github.io/hangmans-revenge/",
    },
    {
      name: "Weather Dashboard",
      description: "API",
      image_desc: "The weather for 5 days in Raleigh",
      repo_url: "https://github.com/kerbunker/weather-dashboard",
      url: "https://kerbunker.github.io/weather-dashboard/",
    },
    {
      name: "Password Generator",
      description: "Javascript",
      image_desc: "Password generated with 3 of 4 options",
      repo_url: "https://github.com/kerbunker/Password-Generator",
      url: "http://kerbunker.github.io/Password-Generator/",
    },
    {
      name: "Budgeter's Friend",
      description: "PWA/MongoDB",
      image_desc: "Budget with five data points",
      repo_url: "https://github.com/kerbunker/budgeters-friend",
      url: "https://nameless-thicket-77989.herokuapp.com/",
    },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <section className="bg-purple-900/40 pb-2">
      <div >
        <h1 className="text-indigo-200/70 underline underline-offset-8 pt-2 text-center text-4xl pb-8">Recent Work</h1>
        <div className="flex justify-around flex-row flex-wrap bg-indigo-300/40 mx-12 mb-6 rounded">
        {projects.map((proj, i) => (
          <div className="img-wrap md:relative mx-4 flex flex-col md:flex-row rounded my-4 ">
            <img
              src={require(`../../assets/images/${i + 1}.PNG`)}
              alt={proj.image_desc}
              className="img shadow-md shadow-black"
              key={proj.name}
              height={300}
              width={400}
            />
            <div className="pt-2 md:pt-20 md:opacity-0 hover:opacity-80 md:bg-black w-full h-full md:absolute text-center px-6">
              <div className="flex flex-row justify-center items-center">
                <a href={proj.url} target="_blank" className="img-link text-black font-bold md:text-indigo-300 text-2xl hover:text-3xl opacity-70 hover:opacity-100 pr-2 items-center">
                  {proj.name}
                </a>
                <a href={proj.repo_url} target="_blank" className="img-link opacity-70 hover:opacity-100">
                  <img src={gitIcon} alt="github icon" className="opacity-70 hover:opacity-100"/>
                </a>
              </div>
              <p className="text-black md:text-indigo-300 text-xl">{proj.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
