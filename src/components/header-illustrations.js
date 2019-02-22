import React from 'react';

import illustration from '../images/web-illustration-dark-gradient.webp';
import mobileIllustration from '../images/mobile-illustration-dark-gradient.webp';

const HeaderIllustrations = () => (
  <div className="page-illustration-container">
    <img className="page-illustration desktop-illustration" src={illustration} />
    <img className="page-illustration mobile-illustration" src={mobileIllustration} />
  </div>
);

export { HeaderIllustrations };
