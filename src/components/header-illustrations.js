import React from 'react';
import classNames from 'classnames';

import './header-illustrations.css';
import { DesktopIllustration } from './desktop-illustration';
import { MobileIllustration } from './mobile-illustration';

const HeaderIllustrations = () => (
  <div className="page-illustration-viewport">
    <div className="page-illustration-container">
      <DesktopIllustration
        className={classNames('page-illustration', 'desktop-illustration')}
      />
      <MobileIllustration
        className={classNames('page-illustration', 'mobile-illustration')}
      />
    </div>
  </div>
);

export { HeaderIllustrations };
