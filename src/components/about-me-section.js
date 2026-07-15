import React from 'react';

import * as styles from './about-me-section.module.css';
import LayoutContainer from './layout-container';

const stack = [
  'React',
  'TypeScript',
  'GraphQL',
  'Node.js',
  'React Native',
  'WebGL',
  'Python',
  'Godot',
];

const AboutMeSection = () => (
  <LayoutContainer>
    <section className={styles.aboutMeSection} id="about">
      <p className="eyebrow">About</p>
      <div className={styles.columns}>
        <div className={styles.bio}>
          <h2 className={styles.heading}>
            Self-taught, curiosity-driven, shipping since day one.
          </h2>
          <p>
            I'm a full stack engineer with deep expertise in single-page
            applications. I've refined my skills across frontend and backend,
            specializing in React, TypeScript, and GraphQL — building scalable,
            interactive web apps that range from game companions to complex
            business tools.
          </p>
          <p>
            The same instincts run through my personal work: real-time
            rendering, game AI, and interfaces that respond the moment you
            touch them. When I'm not coding, I'm exploring new frameworks and
            contributing to open source.
          </p>
        </div>
        <div className={styles.stackPanel}>
          <h3 className={styles.stackTitle}>Everyday tools</h3>
          <ul className={styles.stackList}>
            {stack.map(item => (
              <li key={item} className={styles.stackItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  </LayoutContainer>
);

export { AboutMeSection };
