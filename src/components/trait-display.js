import React from 'react';
import classNames from 'classnames';

import './trait-display.css';

const TraitDisplay = ({ title, subtext, image }) => (
  <div className="trait-display">
    <div className="trait-display-title-container">
      <img className="trait-display-image" src={image} />
      <h2>{title}</h2>
    </div>
    {subtext && (<p>{subtext}</p>)}
  </div>
);

export { TraitDisplay };
