import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import * as styles from './homepage-preview-single.module.css';

const HomepagePreviewSingle = ({
  className,
  name,
  type,
  description,
  image,
  link,
}) => (
  <Link to={link} className={classNames(styles.card, className)}>
    <div className={styles.imageContainer}>{image}</div>
    <div className={styles.content}>
      {type && <span className={styles.typeChip}>{type}</span>}
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </Link>
);

export { HomepagePreviewSingle };
