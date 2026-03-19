import React from 'react';

import styles from './Navigation.module.scss';
import { BreadcrumbBar } from './BreadcrumbBar/BreadcrumbBar';
import { NavigationButtons } from './NavigationButtons/NavigationButtons';

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.navArrows}>
        <NavigationButtons />
      </div>
      <BreadcrumbBar />
    </div>
  );
};
