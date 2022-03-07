import React, { useState } from 'react';
//import Project from '../ProjectList';
//import { capitalizeFirstLetter } from '../../utils/helpers';

function Portfolio() {
  const [projects] = useState([
    {
      name: "Game Corner",
      description: "Node/SQL",
      image_desc: "Landing page for Game Corner",
      repo_url: "https://github.com/kerbunker/game-collection",
      url: "https://afternoon-reef-79835.herokuapp.com/"
    },
    {
      name: "Hangman's Revenge",
      desctiption: "JavaScript/API",
      image_desc: "A new game with no quesses made",
      repo_url: "https://github.com/CyanideTheJuggla/hangmans-revenge",
      url: "https://cyanidethejuggla.github.io/hangmans-revenge/"
    },
    {
      name: "Weather Dashbaord",
      description: "API",
      image_desc: "The weather for 5 days in Raleigh",
      repo_url: "https://github.com/kerbunker/weather-dashboard",
      url: "https://kerbunker.github.io/weather-dashboard/"
    },
    {
      name: "Password Generator",
      description: "Javascript",
      image_desc: "Password generated with 3 of 4 options",
      repo_url: "https://github.com/kerbunker/Password-Generator",
      url: "http://kerbunker.github.io/Password-Generator/"
    },
    {
      name: "Budgeter's Friend",
      description: "PWA",
      image_desc: "Budget with five data points",
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
          src={require(`../../assets/images/${i+1}.PNG`)}
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
      <p>Portfolio page</p>

    </div>
  );
};

export default Portfolio;