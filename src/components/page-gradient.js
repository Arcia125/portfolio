import React from 'react';

const containerStyles = {
  top: '-30vh',
  left: 0,
  height: '75vh',
  width: '100%',
  position: 'absolute',
  transform: 'skewY(-15deg)',
  overflow: 'hidden',
  zIndex: '-1'
};

const PageGradient = ({ color1, color1Stop, color2, color2Stop, color3, color3Stop }) => (
  <div style={containerStyles}><div style={{
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
