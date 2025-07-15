import react from "../assets/react.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import html from "../assets/html5.png";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import vscode from "../assets/vscode.png";

function AboutSection() {
  return (
    <div className="about-section section-box" id="about-page">
      <h1 className="section-heading">About Me</h1>

      <ul className="about-list">
        <li className="about-item">
          Web Developer with 1.5+ years of experience in building
          responsive and high-performance web applications.
        </li>
        <li className="about-item">
          Skilled in HTML, SCSS, JavaScript, React.js, Node.js, and Salesforce
          Commerce Cloud (SFCC).
        </li>
        <li className="about-item">
          Available for immediate joining and committed to contributing to
          modern, scalable projects.
        </li>
      </ul>

      <h2 className="section-subheading">Skills</h2>
      <div className="skills-wrapper icon-grid">
        <img src={react} alt="react" className="tech-icon" />
        <img src={css} alt="css" className="tech-icon" />
        <img src={bootstrap} alt="bootstrap" className="tech-icon" />
        <img src={html} alt="html" className="tech-icon" />
        <img src={javascript} alt="javascript" className="tech-icon" />
        <img src={nodejs} alt="nodejs" className="tech-icon" />
        <img src={mongodb} alt="mongodb" className="tech-icon" />
      </div>

      <h2 className="section-subheading">Tools</h2>
      <div className="tools-wrapper icon-grid">
        <img src={vscode} alt="vscode" className="tech-icon" />
      </div>
    </div>
  );
}

export default AboutSection;
