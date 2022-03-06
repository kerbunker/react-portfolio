import React from 'react';

function Nav({ selectedPage, handlePageChange }) {

  return (
    <nav>
      <ul className="nav">
        <li className="nav-item">
          <a href='#about' onClick={() => handlePageChange('About')} className={selectedPage === 'About' ? 'active' : 'disabled'}>
            About me
          </a>
        </li>
        <li className="nav-item">
          <a href='#portfolio' onClick={() => handlePageChange('Portfolio')} className={selectedPage === 'Portfolio' ? 'active' : 'disabled'}>
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a href='#contact' onClick={() => handlePageChange('Contact')} className={selectedPage === 'Contact' ? 'active' : 'disabled'}>
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href='#resume' onClick={() => handlePageChange('Resume')} className={selectedPage === 'Resume' ? 'navAtive' : 'disabled'}>
            About me
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;