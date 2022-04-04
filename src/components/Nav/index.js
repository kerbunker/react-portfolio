import React from 'react';

function Nav({ selectedPage, handlePageChange }) {

  return (

      <ul className="bg-indigo-500/40 flex justify-around flex-col md:flex-row text-center py-4">
        
        <li>
          <a href='#about' onClick={() => handlePageChange('About')} className="bg-indigo-300 rounded-full hover:bg-purple-500/80 px-4 my-4 active:bg-cyan-500 text-xl hover:text-2xl text-blue-800 shadow-md shadow-black px-16 md:px-4 border-2 border-indigo-700">
            About me
          </a>
        </li>
        <li className="nav-item">
          <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className="bg-indigo-300 rounded-full hover:bg-purple-500/80 px-4 active:bg-cyan-500 text-xl hover:text-2xl text-blue-800 shadow-md shadow-black px-16 md:px-4 border-2 border-indigo-700">
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href='#contact' onClick={() => handlePageChange('Contact')} className="bg-indigo-300 rounded-full hover:bg-purple-500/80 px-4 active:bg-cyan-500 text-xl hover:text-2xl text-blue-800 shadow-md shadow-black px-16 md:px-4 border-2 border-indigo-700">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href='#resume' onClick={() => handlePageChange('Resume')} className="bg-indigo-300 rounded-full hover:bg-purple-500/80 px-4 active:bg-cyan-500 text-xl hover:text-2xl text-blue-800 shadow-md shadow-black px-16 md:px-4 border-2 border-indigo-700">
            Resume
          </a>
        </li>
        
      </ul>

  );
}

export default Nav;