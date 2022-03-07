import React from 'react';
import gitIcon from '../../assets/icons/GitHub-Mark-32px.png';
import linkedIcon from '../../assets/icons/LI-In-Bug.png';

function Footer() {
  return (
    <footer>
      <div className='footer-icon'>
        <a href="http://github.com/kerbunker">
          <img
            src={gitIcon}
            alt="github icon"
            className="icon"
          />
        </a>
      </div>
      <div className='footer-icon'>
        <a href="https://www.linkedin.com/in/katelyn-bunker-3bb51599/">
        <img
            src={linkedIcon}
            alt="Linkedin icon"
            className="icon"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;