import React, { useState } from 'react';
//import Project from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
  const [projects] = useState([
    {
      name: "Game Collection",
      description: "Node/SQL",
      image_desc: "",
      repo_url: "https://github.com/kerbunker/game-collection",
      url: "https://afternoon-reef-79835.herokuapp.com/"
    },
    {
      name: "Hangman's Revenge",
      desctiption: "JavaScript/API",
      image_desc: "",
      repo_url: "https://github.com/CyanideTheJuggla/hangmans-revenge",
      url: "https://cyanidethejuggla.github.io/hangmans-revenge/"
    },
    {
      name: "Weather Dashbaord",
      description: "API",
      image_desc: "",
      repo_url: "https://github.com/kerbunker/weather-dashboard",
      url: "https://kerbunker.github.io/weather-dashboard/"
    },
    {
      name: "Password Generator",
      description: "Javascript",
      image_desc: "",
      repo_url: "https://github.com/kerbunker/Password-Generator",
      url: "http://kerbunker.github.io/Password-Generator/"
    },
    {
      name: "Budgeter's Friend",
      description: "PWA",
      image_desc: "",
      repo_url: "https://github.com/kerbunker/budgeters-friend",
      url: "https://nameless-thicket-77989.herokuapp.com/"
    }
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <div className="flex-row">
      {projects.map((proj, i) => (
        <div>
        <img
          src=""
          alt={proj.image_desc}
          className="mx-1"
          key={proj.name}
        />
        <div>
          <p>{proj.name}</p>
          <p>{proj.description}</p>
        </div>
        </div>
      ))}

    </div>
  );
};

export default Portfolio;