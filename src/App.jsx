import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import profilePic from './assets/Pictures for Portfolio/Midwest_Health/Profile.PNG';

import AboutMe from './AboutMe'; 
import Projects from './Project'; // FIXED: Matching your filename 'Project.jsx'
import ProjectDetail from './ProjectDetail';

function App() {
  return (
    <Router>
      <div className="portfolio-container">
        <nav className="navbar">
          <Link to="/">
            <img src={profilePic} className="profile-logo-img" alt="Profile" />
          </Link>
          
          <div className="nav-links">
            <Link to="/about" className="nav-btn">About Me</Link>
            <Link to="/projects" className="nav-btn">My Projects</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="home-hero">
              <h1 className="hero-title">Hello Welcome!</h1>
            </div>
          } />
          
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:path" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;