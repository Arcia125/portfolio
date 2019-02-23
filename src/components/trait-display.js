import React from 'react';

import './trait-display.css';

const TraitDisplay = ({ title, subtext, children }) => (
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
