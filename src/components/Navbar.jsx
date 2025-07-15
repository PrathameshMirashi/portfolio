import React, { useState } from "react";
import hamburgerMenu from "../assets/hamburgerMenu.png";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home')

  const handleToggel = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="navbar-section">
      <h1 className="nav-logo">
        <span className="logo-symbol">&lt;</span>
        <span className="logo-name">Prathamesh</span>
        <span className="logo-symbol">/</span>
        <span className="logo-symbol">&gt;</span>
      </h1>
      <div
        className={`nav-drawer ${isMenuOpen ? "menu-mobile show-menu" : "menu-mobile "} menu-desktop`}
      >
        <ul className="nav-list">
          <li className="nav-item"><a href="#hero-page" className={`nav-label ${activeSection === 'home' ? 'active' : ''}`} onClick={() => { setIsMenuOpen(false); setActiveSection('home') }}>Home</a></li>
          <li className="nav-item"><a href="#about-page" className={`nav-label ${activeSection === 'about' ? 'active' : ''}`} onClick={() => { setIsMenuOpen(false); setActiveSection('about') }}>About</a></li>
          <li className="nav-item"><a href="#project-page" className={`nav-label  ${activeSection === 'project' ? 'active' : ''}`} onClick={() => { setIsMenuOpen(false); setActiveSection('project') }}>Project</a></li>
          <li className="nav-item"><a href="#contact-page" className={`nav-label  ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => { setIsMenuOpen(false); setActiveSection('contact') }}>Contact</a></li>
        </ul>
      </div>
      <div className="hamburger-btn" onClick={handleToggel}>
        <img src={hamburgerMenu} alt="hamburgerMenu" className="hamburgerMenu-icon" />
      </div>
    </div>
  );
}

export default Navbar;
