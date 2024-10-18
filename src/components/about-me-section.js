import React from 'react';

import * as styles from './about-me-section.module.css';
import LayoutContainer from './layout-container';

const AboutMeSection = ({ children }) => (
  <LayoutContainer>
    {children}
    <section className={styles.aboutMeSection}>
      <div>
        <h2>ABOUT ME</h2>
        <p>
          I am a self-taught full stack engineer with extensive experience in building single page applications.
        </p>
      </div>
    </section>
  </LayoutContainer>
);

export { AboutMeSection };
