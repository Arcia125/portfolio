import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';
import { Styled, css } from "theme-ui";

import styles from './portfolio-preview-single.module.css';

const PortfolioPreviewSingle = ({
  className,
  name,
  description,
  image,
  link,
}) => (
    <div className={styles.container}>
    <div className={styles.hotspot}></div>
    <Styled.a
      as={Link}
      to={link}
      css={css({ bg: 'raised' })}
      className={classNames(styles.portfolioPreviewSingle, className)}
    >
        <div className={styles.portfolioPreviewSingleImageContainer}>{image}</div>
        <Styled.div css={css({ bg: 'raised' })} className={styles.portfolioPreviewSingleContent}>
          <Styled.h3 css={css({ color: 'text' })} className={styles.portfolioPreviewSingleName}>{name}</Styled.h3>
          <Styled.p css={css({ color: 'text' })}>{description}</Styled.p>
        </Styled.div>
    </Styled.a>
    {/* <Link
      to={link}
      
    >
      <div className={styles.portfolioPreviewSingleImageContainer}>{image}</div>
      <Styled.div css={css({ bg: 'raised' })} className={styles.portfolioPreviewSingleContent}>
        <h3 className={styles.portfolioPreviewSingleName}>{name}</h3>
        <p>{description}</p>
      </Styled.div>
    </Link> */}
  </div>
);

export { PortfolioPreviewSingle };
