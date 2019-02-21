import React from 'react';

import './about-me-section.css';

const AboutMeSection = () => (
  <div className="about-me-section">
    <h2 style={{ marginBottom: '3rem' }}>ABOUT ME</h2>
    <p style={{
      lineHeight: '2.2rem',
      fontFamily: "'Lato', sans-serif"
    }}>I am a self-taught developer with over 2 years of experience bringing projects to life.
      I leverage the latest tools and frameworks to deliver intuitive experiences. I am currently working as a freelance developer.
    </p>
  </div>
);

export { AboutMeSection };
