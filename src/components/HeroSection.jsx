import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";

function HeroSection() {
  return (
    <div className="hero-section section-box" id="hero-page">
      <h1 className="hero-title">
        <span className="hero-highlight">I'm Prathamesh Mirashi</span>, Web
        developer
      </h1>
      <p className="section-description">
        Web developer with 1.5+ years of hands-on experience in building and optimizing e-commerce websites using HTML, SCSS, JavaScript, Bootstrap, Node.js, and React.js. Proficient in Salesforce Commerce Cloud (SFCC) development, enabling the creation of scalable and high-performance e-commerce solutions. Skilled in crafting clean, responsive UIs and ensuring seamless user experiences. In addition to professional experience, have also built several personal projects using React to further strengthen frontend capabilities and stay aligned with modern web development trends. Actively seeking a challenging role to apply this expertise and contribute to impactful digital solutions.
      </p>
      <div className="action-btn">
        <a
          href="/prathamesh-mirashi.pdf"
          target="_blank"
          className="hero-cv-btn"
        >
          Download CV
        </a>
      </div>

      <div className="hero-socials">
        <a
          href="https://github.com/PrathameshMirashi"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-link"
        >
          <img src={github} alt="github" className="social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/prathamesh-mirashi-240275268"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-social-link"
        >
          <img src={linkedin} alt="linkedin" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
