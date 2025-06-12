import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const[isMenuopen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuopen)
  };
  return (
    <header>
      <div className='header-content'>
        <h1>MIMI</h1>
        <button className={`hamburger ${isMenuopen ? 'open' : ''}`} onClick={toggleMenu}
        aria-label={isMenuopen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuopen}>
          {
            isMenuopen ? <FaTimes className='hambuger-image.close-icon'/>
            :
            <>
              <FaBars className='hambuger-image'/>
              <span className='menu-text'></span>
            </>
          }
        </button>
        <nav className={`nav-links ${isMenuopen ? 'open' : ''}`}>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#skills" onClick={toggleMenu}>Skills</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
          <a href="#resume" onClick={toggleMenu}>Resume</a>
        </nav>
      </div>
    </header>
  )
}

export default Header