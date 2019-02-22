import React from 'react';
import classNames from 'classnames';

import './trait-display.css';

const TraitDisplay = ({ title, subtext, image }) => (
  <div className="trait-display">
    <div className="trait-display-title-container">
      <img className="trait-display-image" src={image} />
      <div>
        <h2>{title}</h2>
        {subtext && (<p>{subtext}</p>)}
      </div>
    </div>
  </div>
);

export { TraitDisplay };
