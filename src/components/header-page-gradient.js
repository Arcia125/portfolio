import React from 'react';
import classnames from 'classnames';

import './header-page-gradient.css';
import { PageGradient } from './page-gradient';

const HeaderPageGradient = ({ className, ...props }) => (
  <div className={classnames(className, 'page-gradient')}>
    <PageGradient {...props} />
  </div>
);

HeaderPageGradient.defaultProps = {
};

export { HeaderPageGradient };
