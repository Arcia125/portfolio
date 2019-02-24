import React from 'react';
import classNames from 'classnames';

import './page-gradient.css';

const PageGradient = ({ style, color1, color1Stop, color2, color2Stop, color3, color3Stop }) => (
  <div className={classNames('page-gradient-background', )} style={{
    background: `linear-gradient(${color1} ${color1Stop}, ${color2} ${color2Stop}, ${color3} ${color3Stop})`,
    ...style
  }}/>
);

PageGradient.defaultProps = {
  style: {},
  color1: 'rgb(23, 8, 53)',
  color1Stop: '15%',
  color2: 'rgb(99, 45, 208)',
  color2Stop: '62%',
  color3: 'rgb(69, 182, 235)',
  color3Stop: '100%'
};

export { PageGradient };
