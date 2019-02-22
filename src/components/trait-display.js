import React from 'react';
import classNames from 'classnames';

import './trait-display.css';

const TraitDisplay = ({ title, subtext, image, children }) => (
  <div className="trait-display">
    <div className="trait-display-title-container">
      <div className="trait-display-image">
        {children}
      </div>
      <div>
        <h2>{title}</h2>
        {subtext && (<p>{subtext}</p>)}
      </div>
    </div>
  </div>
);

export { TraitDisplay };
