import React from 'react';

import styles from './Header.module.scss';
import { Navigation } from './Navigation/Navigation';
import { MainHeader } from './MainHeader/MainHeader';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Navigation />
      <MainHeader />
    </div>
  );
};
