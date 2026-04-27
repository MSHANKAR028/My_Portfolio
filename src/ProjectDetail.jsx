// src/ProjectDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from './projectData'; 
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { path } = useParams();
  const project = projectData.find(p => p.path === path);

  if (!project) return <div className="error-msg">Project not found!</div>;

  return (
    <div className="detail-page-wrapper">
      <Link to="/projects" className="back-btn">← Back to Projects</Link>

      <div className="detail-container">
        <h1 className="detail-title">{project.title}</h1>
        
        <div className="detail-content">
          <div className="detail-image-gallery">
             {project.images.map((img, idx) => (
               <img key={idx} src={img} className="gallery-img" alt="Project view" />
             ))}
          </div>

          <div className="detail-text-box" style={{ borderLeft: `15px solid ${project.color}` }}>
            <h2>Summary</h2>
            <p>{project.description}</p>
            <div className="floating-blob" style={{ background: project.color }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}