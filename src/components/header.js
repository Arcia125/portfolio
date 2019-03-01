import React from 'react';

import { HeaderPageGradient } from './header-page-gradient';

const Header = ({ emphasizedIntroText, introText, subheading }) => (
  <>
    <HeaderPageGradient />
    <header role="banner" style={{
      marginBottom: '30rem'
    }}>
      <h2 style={{ color: '#fff', marginTop: '5rem', fontWeight: 400 }}>
        <span style={{ color: 'gold', fontWeight: 500 }}>{emphasizedIntroText}</span>
        {introText}
      </h2>
      <h3 style={{
        color: '#fff',
        fontWeight: 100,
        lineHeight: '2.2rem',
        maxWidth: '28rem',
        marginBottom: 0,
        fontFamily: "'Lato', sans-serif"
      }}>
        {subheading}
      </h3>
    </header>
  </>
);

export { Header };
