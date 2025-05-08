import React from 'react';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built to showcase my projects and skills. Features smooth animations and a modern UI design.",
      image: "/images/Project1.jpg",
      techStack: ["React", "SCSS", "Vite"],
      demoLink: "https://portfolio-demo.com",
      codeLink: "https://github.com/vishal-1372"
    },
    {
      id: 2,
      title: "Food seling website",
      description: "An admin dashboard for e-commerce platforms with real-time analytics, inventory management, and user management capabilities.",
      image: "/images/Project2.png",
      techStack: ["React", "Java-script", "css"],
      demoLink: "https://react-1-xvf4.vercel.app/",
      codeLink: "https://github.com/vishal-1372/REACT_1"
    },
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <h1>My Projects</h1>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span className="tech" key={index}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="project-link demo" target="_blank" rel="noopener noreferrer">Live Demo</a>
                  <a href={project.codeLink} className="project-link code" target="_blank" rel="noopener noreferrer">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
