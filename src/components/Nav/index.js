import React from 'react';

function Nav({ selectedPage, handlePageChange }) {

  return (

      <ul className="nav">
        <li>
          <a href='#about' onClick={() => handlePageChange('About')} className={selectedPage === 'About' ? 'nav-item-active' : 'nav-item'}>
            About me
          </a>
        </li>
        <li className="nav-item">
          <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={selectedPage === 'Portfolio' ? 'nav-item-active' : 'nav-item'}>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href='#contact' onClick={() => handlePageChange('Contact')} className={selectedPage === 'Contact' ? 'nav-item-active' : 'nav-item'}>
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href='#resume' onClick={() => handlePageChange('Resume')} className={selectedPage === 'Resume' ? 'nav-item-active' : 'nav-item'}>
            Resume
          </a>
        </li>
      </ul>

  );
}

export default Nav;