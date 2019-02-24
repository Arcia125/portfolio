import React from 'react';

import './portfolio-preview.css';
import { PortfolioPreviewSingle } from './portfolio-preview-single';

const PortfolioPreview = ({ projects }) => (
  <section className="portfolio-preview">
    <h2 className="portfolio-preview-header">PORTFOLIO</h2>
    <div className="portfolio-preview-projects">{projects && projects.map(project => {
      return (
        <PortfolioPreviewSingle name={project.name} description={project.description} src={project.src} />
      );
    })}</div>
  </section>
);

export { PortfolioPreview };
