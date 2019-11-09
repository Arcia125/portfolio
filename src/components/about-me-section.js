import React from 'react';

import styles from './about-me-section.module.css';
import LayoutContainer from './layout-container';

const AboutMeSection = ({ children }) => (
  <LayoutContainer>
    {children}
    <section className={styles.aboutMeSection}>
      <div>
        <h2>ABOUT ME</h2>
        <p>
          I am a self-taught developer with over 2 years of experience bringing
          projects to life. I leverage the latest tools and frameworks to
          deliver intuitive experiences. I am currently working as a freelance
          developer.
        </p>
      </div>
    </section>
  </LayoutContainer>
);

export { AboutMeSection };
