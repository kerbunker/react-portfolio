import React from 'react';

function Nav({ selectedPage, handlePageChange }) {

  return (

      <ul className="bg-indigo-500/40 flex justify-around flex-col md:flex-row text-center py-4">
        
        <li className='py-2'>
          <a href='#about' onClick={() => handlePageChange('About')} className="bg-indigo-300 rounded-full px-4 my-4 hover:bg-purple-300/80 active:bg-cyan-500 text-xl font-bold hover:text-2xl text-blue-800 shadow-md shadow-black px-16 md:px-4 border-4 border-black">
            About me
          </a>
        </li>
        <li className="py-2">
          <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className="bg-indigo-300 rounded-full hover:bg-purple-300/80 px-4 active:bg-cyan-500 text-xl font-bold hover:text-2xl text-blue-800 shadow-md shadow-black px-16 md:px-4 border-4 border-black border-solid">
            Portfolio
          </a>
        </li>
        <li className="py-2">
          <a href='#contact' onClick={() => handlePageChange('Contact')} className="bg-indigo-300 rounded-full hover:bg-purple-300/80 px-4 active:bg-cyan-500 text-xl font-bold hover:text-2xl text-blue-800 shadow-md shadow-black px-16 md:px-4 border-4 border-black">
            Contact
          </a>
        </li>
        <li className="py-2">
          <a href='#resume' onClick={() => handlePageChange('Resume')} className="bg-indigo-300 rounded-full hover:bg-purple-300/80 px-4 active:bg-cyan-500 text-xl font-bold hover:text-2xl text-blue-800 shadow-md shadow-black px-16 md:px-4 border-4 border-black">
            Resume
          </a>
        </li>
        
      </ul>

  );
}

export default Nav;