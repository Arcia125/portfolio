import React from 'react';
import Img from 'gatsby-image';

import styles from './portfolio-preview.module.css';
import { HomepagePreviewSingle } from './homepage-preview-single';

const PortfolioPreview = ({ data, title }) => (
  <section className={styles.portfolioPreview}>
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
  </section>
);

PortfolioPreview.defaultProps = {
  title: 'PORTFOLIO',
};

export { PortfolioPreview };
