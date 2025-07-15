import React from 'react'

function FooterSection() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <h2 className="footer-brand">Prathamesh</h2>
        <ul className="footer-nav">
          <li><a href="#about" className="footer-link">About</a></li>
          <li><a href="#skills" className="footer-link">Skills</a></li>
          <li><a href="#projects" className="footer-link">Projects</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default FooterSection