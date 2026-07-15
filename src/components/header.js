import React from 'react';
import { Link } from 'gatsby';

import { EmberCanvas } from './ember-canvas';
import LayoutContainer from './layout-container';
import * as styles from './header.module.css';

const Header = ({ eyebrow, headline, headlinePlay, subheading }) => (
  <section className={styles.hero}>
    <EmberCanvas className={styles.canvas} />
    <div className={styles.heroContent}>
      <LayoutContainer>
        <header role="banner">
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.headline}>
            {headline}
            <em className={styles.play}>{headlinePlay}</em>
          </h1>
          <p className={styles.subheading}>{subheading}</p>
          <div className={styles.actions}>
            <a href="#projects" className={styles.primaryAction}>
              View projects
            </a>
            <Link to="/blog" className={styles.secondaryAction}>
              Read the blog
            </Link>
          </div>
        </header>
      </LayoutContainer>
    </div>
  </section>
);

export { Header };
