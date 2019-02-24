import React from 'react';
import classNames from 'classnames';

import './portfolio-preview-single.css';

const PortfolioPreviewSingle = ({ className, name, description, src }) => (
  <div className={classNames('portfolio-preview-single', className)}>
    <div className="portfolio-preview-single-image-container" style={{ backgroundImage: `url(${src})` }}/>
    <div className="portfolio-preview-single-content">
      <h3 className="portfolio-preview-single-name">{name}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export { PortfolioPreviewSingle };
