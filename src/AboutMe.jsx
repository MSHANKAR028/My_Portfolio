import React from 'react';
import './AboutMe.css';
// Updated to reference your new PNG file
import profilePic from './assets/Pictures for Portfolio/Midwest_Health/Profile.PNG';

function AboutMe() {
  return (
    <div className="about-page-wrapper">
      {/* Background droplets scattered across the page */}
      <div className="bg-splatter s1"></div>
      <div className="bg-splatter s2"></div>
      <div className="bg-splatter s3"></div>
      <div className="bg-splatter s4"></div>
      <div className="bg-splatter s5"></div>
      <div className="bg-splatter s6"></div>
      <div className="bg-splatter s7"></div>
      <div className="bg-splatter s8"></div>
      <div className="bg-splatter s9"></div>
      <div className="bg-splatter s10"></div>

      <div className="about-content-container">
        
        {/* Left Side: Photo and Links */}
        <div className="about-left-section">
          <div className="profile-frame">
            <img src={profilePic} alt="Mahima Shankar" className="profile-img" />
          </div>
          <div className="contact-links-area">
            <p>📞 925-260-9218</p>
            <p>🔗 <a href="https://www.linkedin.com/in/mahima-shankar-2012a1263/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            <p>💻 <a href="https://github.com/MSHANKAR028" target="_blank" rel="noreferrer">GitHub</a></p>
        </div>
        </div>

        {/* Right Side: The Main Bio Splash */}
        <div className="about-right-section">
          <div className="text-splash-box">
            <div className="main-blue-splash">
              <p className="bio-paragraph">
                Highly motivated Computer Science graduate (B.S. '25) based in Tracy, CA, with a versatile background spanning UI/UX design and full-stack software development. 
              </p>
              <p className="bio-paragraph">
                Throughout various internships at Altheros Capital and MI Secure, I have demonstrated a strong ability to build responsive, reusable UI components with React, TypeScript, and Bootstrap, as well as robust backend microservices with Spring Boot and Node.js.
              </p>
              <p className="bio-paragraph">
                My unique skill set allows me to bridge the gap between design and engineering, utilizing Figma for wireframing and prototyping before bringing those visions to life through REST API integration and Agile collaboration.
              </p>
            </div>
            
            {/* Small accent droplets attached to the main splash */}
            <div className="paint-drop drop-1"></div>
            <div className="paint-drop drop-2"></div>
            <div className="paint-drop drop-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;