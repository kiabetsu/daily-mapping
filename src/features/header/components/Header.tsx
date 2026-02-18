import React from 'react';

import styles from './Header.module.scss';
import { BreadcrumbBar } from './BreadcrumbBar/BreadcrumbBar';
import { NavigationButtons } from './NavigationButtons/NavigationButtons';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navArrows}>
        <NavigationButtons />
      </div>

      <BreadcrumbBar />
    </div>
  );
};
