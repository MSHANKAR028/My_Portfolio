import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { path } = useParams();
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Replace with your actual data fetching logic or local data import
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        const found = data.find(p => p.path === path);
        setProject(found);
      })
      .catch(err => console.error("Error fetching project details:", err));
  }, [path]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  if (!project) return <div className="loading-msg">Loading project details...</div>;

  return (
    <div className="detail-page-wrapper">
      {/* 1. BACK BUTTON: Placed outside the main container for better alignment */}
      <Link to="/projects" className="back-btn">
        ← Back to Projects
      </Link>

      {/* 2. MAIN WRAPPER: Updated class to match the de-squished CSS container */}
      <div className="detail-content">
        
        {/* HEADER SECTION */}
        <h1 className="detail-title">{project.title}</h1>
        
        {/* 3. CAROUSEL SECTION: Set to 100% width on mobile via CSS for bigger pics */}
        <div className="detail-carousel">
          <div className="detail-image-frame">
             <img 
               src={project.images[currentIndex]} 
               className="active-detail-img" 
               alt={`${project.title} screenshot ${currentIndex + 1}`} 
             />
          </div>
          
          {/* Controls placed below the image for easier mobile interaction */}
          <div className="carousel-controls">
            <button className="detail-arrow" onClick={prevImage} aria-label="Previous image">❮</button>
            <button className="detail-arrow" onClick={nextImage} aria-label="Next image">❯</button>
          </div>
        </div>

        {/* 4. SUMMARY SECTION: Now stacks underneath on mobile to prevent squishing */}
        <div className="detail-text-box" style={{ '--project-color': project.color }}>
          <h2>Summary</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}