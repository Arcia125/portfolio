import React from 'react';
import Img from 'gatsby-image';

import { Styled, css } from 'theme-ui';
import styles from './portfolio-preview.module.css';
import { HomepagePreviewSingle } from './homepage-preview-single';
import LayoutContainer from './layout-container';

const PortfolioPreview = ({ data, title }) => (
  <Styled.div
    css={css({
      '::before': {
        backgroundColor: 'backgroundAccent',
      },
    })}
    className={styles.portfolioPreview}
  >
    <LayoutContainer>
      {title && <h2 className={styles.portfolioPreviewHeader}>{title}</h2>}
      <div className={styles.portfolioPreviewProjects}>
        {data &&
          data.projects.edges
            .filter(edge => edge.node.childProjectsJson.homePage)
            .map(edge => {
              const project = edge.node.childProjectsJson;
              const imageName = project.imageName;
              return (
                <HomepagePreviewSingle
                  name={project.name}
                  description={project.description}
                  image={<Img fluid={data[imageName].childImageSharp.fluid} />}
                  link={project.pagePath}
                />
              );
            })}
      </div>
    </LayoutContainer>
  </Styled.div>
);

PortfolioPreview.defaultProps = {
  title: 'PORTFOLIO',
};

export { PortfolioPreview };
