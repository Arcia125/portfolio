import React from 'react';
import classnames from 'classnames';

import './page-gradient.css';

const PageGradient = ({ className, color1, color1Stop, color2, color2Stop, color3, color3Stop }) => (
  <div className={classnames(className, 'page-gradient')}><div style={{
    background: `linear-gradient(${color1} ${color1Stop}, ${color2} ${color2Stop}, ${color3} ${color3Stop})`,
    height: '150%',
    transform: 'skewY(15deg)'
  }}/></div>
);

PageGradient.defaultProps = {
  color1: 'rgb(23, 8, 53)',
  color1Stop: '15%',
  color2: 'rgb(99, 45, 208)',
  color2Stop: '62%',
  color3: 'rgb(69, 182, 235)',
  color3Stop: '100%'
};

export { PageGradient };
