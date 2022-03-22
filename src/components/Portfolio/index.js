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
      name: "Weather Dashbaord",
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
      description: "PWA",
      image_desc: "Budget with five data points",
      repo_url: "https://github.com/kerbunker/budgeters-friend",
      url: "https://nameless-thicket-77989.herokuapp.com/",
    },
  ]);

  const [currentProject, setCurrentProject] = useState(projects[0]);

  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h1 className="portfolio-header">Recent Work</h1>
        {projects.map((proj, i) => (
          <div className="img-wrap">
            <img
              src={require(`../../assets/images/${i + 1}.PNG`)}
              alt={proj.image_desc}
              className="img"
              key={proj.name}
              height={300}
              width={400}
            />
            <div className="img-description">
              <div>
                <a href={proj.url} target="_blank" className="img-link">
                  {proj.name}
                </a>
                <a href={proj.repo_url} target="_blank" className="img-link">
                  <img src={gitIcon} alt="github icon" />
                </a>
              </div>
              <p>{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
