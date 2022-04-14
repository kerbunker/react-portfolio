function Resume() {
  return (
      <div className="resume-container bg-purple-900/40 flex flex-col items-center">
          <h2 className="text-indigo-200/70 underline underline-offset-8 pb-12 pt-2 text-center text-4xl">
                 Resume
          </h2>
          
          <div className="bg-indigo-300/40 pb-6 rounded w-1/2 mb-8">
              <div className="text-center">
                  <h3 className="text-indigo-200/70 underline py-4 text-2xl">
                      Front-End Proficiencies 
                  </h3>
                  <ul className="proficiencies-list">
                      <li className="text-indigo-200/70 text-xl">HTML</li>
                      <li className="text-indigo-200/70 text-xl">CSS</li>
                      <li className="text-indigo-200/70 text-xl">JavaScript</li>
                      <li className="text-indigo-200/70 text-xl">React</li>
                      <li className="text-indigo-200/70 text-xl">JQuery</li>
                      <li className="text-indigo-200/70 text-xl">Bootstrap</li>
                      <li className="text-indigo-200/70 text-xl">Tailwind</li>
                  </ul>
              </div>
              <div className="text-center">
                  <h3 className="text-indigo-200/70 underline py-4 text-2xl">
                      Back-End Proficiencies 
                  </h3>
                  <ul className="proficiencies-list">
                      <li className="text-indigo-200/70 text-xl">Node.js</li>
                      <li className="text-indigo-200/70 text-xl">Express</li>
                      <li className="text-indigo-200/70 text-xl">SQL</li>
                      <li className="text-indigo-200/70 text-xl">GraphQL</li>
                      <li className="text-indigo-200/70 text-xl">MongoDB</li>
                  </ul>
              </div>
          </div>
          <div className="h-32">
              <div className="flex justify-center pb-4" >
                  <a href="Resume.pdf" download="Katelyn Bunker Resume" className="bg-indigo-300 hover:bg-purple-300/80 shadow-md shadow-black rounded-full p-4 border-4 border-black border-solid text-xl hover:text-2xl">Click to download my resume!</a>
              </div>
          </div>
      </div>
  )
}

export default Resume; 