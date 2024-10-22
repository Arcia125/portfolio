import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { Themed, css } from 'theme-ui';

import * as styles from './homepage-preview-single.module.css';

const HomepagePreviewSingle = ({
  className,
  name,
  description,
  image,
  link,
}) => (
  <Themed.div
    className={styles.container}
    css={css({ backgroundColor: 'backgroundAccent' })}
  >
    <Link
      to={link}
      className={classNames(styles.homepagePreviewSingle, className)}
    >
      <div className={styles.homepagePreviewSingleImageContainer}>{image}</div>
      <Themed.div
        css={css({ backgroundColor: 'backgroundAccent', color: 'text' })}
        className={styles.homepagePreviewSingleContent}
      >
        <h3 className={styles.homepagePreviewSingleName}>{name}</h3>
        <p>{description}</p>
      </Themed.div>
    </Link>
  </Themed.div>
);

export { HomepagePreviewSingle };
