import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { Styled, css } from 'theme-ui';

import * as styles from './homepage-preview-single.module.css';

const HomepagePreviewSingle = ({
  className,
  name,
  description,
  image,
  link,
}) => (
  <Styled.div
    className={styles.container}
    css={css({ backgroundColor: 'backgroundAccent' })}
  >
    <Link
      to={link}
      className={classNames(styles.homepagePreviewSingle, className)}
    >
      <div className={styles.homepagePreviewSingleImageContainer}>{image}</div>
      <Styled.div
        css={css({ backgroundColor: 'backgroundAccent', color: 'text' })}
        className={styles.homepagePreviewSingleContent}
      >
        <h3 className={styles.homepagePreviewSingleName}>{name}</h3>
        <p>{description}</p>
      </Styled.div>
    </Link>
  </Styled.div>
);

export { HomepagePreviewSingle };
