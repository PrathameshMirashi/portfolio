import { useState } from "react";
import { projectsData } from "../data/projectsData";

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="project-section section-box" id="project-page">
      <h1 className="section-heading">My Latest Work</h1>

      <div className="project-gallery">
        {projectsData.map((data, i) => (
          <div
            className="project-card"
            key={i}
            onClick={() => setSelectedProject(data)}
          >
            <img
              src={data.thumbnail}
              alt={data.title}
              className="project-thumbnail"
            />
            <h3 className="project-title">{data.title}</h3>
            <p className="project-description">{data.description}</p>
            <button className="more-button">For More </button>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="modal-overlay" onClick={()=>setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-close-btn" aria-label="Close" onClick={() => setSelectedProject(null)}>
              &times;
            </div>
            <h1 className="modal-title">{selectedProject.title}</h1>
            <p className="modal-details">{selectedProject.details}</p>
            <ul className="modal-tech-stack">
              {selectedProject.techStack.map((tech, i) => (
                <li key={i} className="modal-tech-item">
                  {tech}
                </li>
              ))}
            </ul>
            <div className="modal-links">
              <a
                className="modal-link modal-source-code"
                href={selectedProject.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </a>
              <a
                className="modal-link modal-live-site"
                href={selectedProject.liveSite}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectsSection;
