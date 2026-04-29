import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Project.css';

function ProjectCard({ project }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = (e) => {
    e.preventDefault(); // Keeps the click on the arrow from opening the project page
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="project-card">
      {/* The watercolor splash uses the color defined in your Supabase table */}
      <div className="project-splatter" style={{ backgroundColor: project.color }}></div>
      
      <div className="carousel-container">
        <button className="arrow left" onClick={prevImage}>❮</button>
        <div className="image-frame">
          {/* Images now come from your Supabase Storage URLs */}
          <img src={project.images[currentIndex]} alt={project.title} />
        </div>
        <button className="arrow right" onClick={nextImage}>❯</button>
      </div>

      <Link 
        to={`/projects/${project.path}`} 
        className="project-title-link" 
        style={{ position: 'relative', zIndex: 20 }}
      >
        <p className="project-caption">{project.title}</p>
      </Link>
    </div>
  );
}

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // This is the "Magic Hook" that talks to your backend
  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching from backend:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="projects-page-wrapper">
        <div className="projects-header">
          <div className="projects-title-box">
            <h1>Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page-wrapper">
      <div className="projects-header">
        <div className="projects-title-box">
          <h1>My Projects</h1>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}