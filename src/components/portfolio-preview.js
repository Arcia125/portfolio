import React from 'react';
import Img from 'gatsby-image';

import styles from  './portfolio-preview.module.css';
import { PortfolioPreviewSingle } from './portfolio-preview-single';

const PortfolioPreview = ({ data }) => (
  <section className={styles.portfolioPreview}>
    <h2 className={styles.portfolioPreviewHeader}>PORTFOLIO</h2>
    <div className={styles.portfolioPreviewProjects}>
    {data && data.projects.edges.map(edge => {
      const project = edge.node.childProjectsJson;
      const imageName = project.imageName;
      return (
        <PortfolioPreviewSingle name={project.name} description={project.description} image={<Img fluid={data[imageName].childImageSharp.fluid} />} link={project.pagePath} />
      );
    })}</div>
  </section>
);

export { PortfolioPreview };
