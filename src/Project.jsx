// src/Project.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectData } from './projectData'; // Import from the new file
import './Project.css';

function ProjectCard({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e.preventDefault(); // Prevents clicking the title link when hitting arrows
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="project-card">
      <div className="project-splatter" style={{ backgroundColor: project.color }}></div>
      <div className="carousel-container">
        <button className="arrow left" onClick={prevImage}>❮</button>
        <div className="image-frame">
          <img src={project.images[currentIndex]} alt={project.title} />
        </div>
        <button className="arrow right" onClick={nextImage}>❯</button>
      </div>
     <Link 
    to={`/projects/${project.path}`} 
    className="project-title-link" 
    style={{ position: 'relative', zIndex: 20 }} // Force it to the front!
>
  <p className="project-caption">{project.title}</p>
</Link>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="projects-page-wrapper">
      <div className="projects-header">
        <h2 className="projects-title-box">My Projects</h2>
      </div>
      <div className="projects-grid">
        {projectData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}