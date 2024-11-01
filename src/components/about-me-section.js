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
          I'm a self-taught Full Stack Engineer with deep expertise in
          single-page applications. Over the years, I've refined my skills in
          both frontend and backend development, specializing in technologies
          like React, TypeScript, and GraphQL. Driven by curiosity and a love of
          learning, I’ve built scalable, interactive web applications for
          diverse projects—from gaming companions to complex business tools.
        </p>
        <p>
          When I'm not coding, I'm exploring new frameworks, optimizing my work,
          and contributing to open-source projects.
        </p>
      </div>
    </section>
  </LayoutContainer>
);

export { AboutMeSection };
