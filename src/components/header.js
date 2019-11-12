import React from 'react';

import { HeaderPageGradient } from './header-page-gradient';
import LayoutContainer from './layout-container';
import styles from './header.module.css';

const Header = ({ emphasizedIntroText, introText, subheading }) => (
  <>
    <HeaderPageGradient />
    <LayoutContainer>
      <header className={styles.header} role="banner">
        <h2 className={styles.mainText}>
          <span>{emphasizedIntroText}</span>
          {introText}
        </h2>
        <h3 className={styles.secondaryText}>{subheading}</h3>
      </header>
    </LayoutContainer>
  </>
);

export { Header };
