import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import styles from './portfolio-preview-single.module.css';

const PortfolioPreviewSingle = ({ className, name, description, image, link }) => (
  <Link to={link} className={classNames(styles.portfolioPreviewSingle, className)}>
    <div className={styles.portfolioPreviewSingleImageContainer}>
      {image}
    </div>
    <div className={styles.portfolioPreviewSingleContent}>
      <h3 className={styles.portfolioPreviewSingleName}>{name}</h3>
      <p>{description}</p>
    </div>
  </Link>
);

export { PortfolioPreviewSingle };
