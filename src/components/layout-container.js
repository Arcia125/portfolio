import React from 'react';

import { layout } from '../constants/layout';
import styles from './layout-container.module.css';

const LayoutContainer = ({ children }) => {
  return (
    <div
      className={styles.layoutContainer}
      style={{
        maxWidth: layout.maxWidth,
      }}
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
