import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import styles from './Header.module.scss';
import { Button } from '../../components/Button/Button';
import { BreadcrumbBar } from './BreadcrumbBar/BreadcrumbBar';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navArrows}>
        <Button
          iconButton={true}
          startIcon={<ArrowLeft size={20} />}
          variant="text"
          className={`${styles.navArrow}`}
        />
        <Button
          iconButton={true}
          startIcon={<ArrowRight size={20} />}
          variant="text"
          className={`${styles.navArrow}`}
        />
      </div>

      <BreadcrumbBar />
    </div>
  );
};
