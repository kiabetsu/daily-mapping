import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import styles from './BreadcrumbBar.module.scss';
import { Button } from '../../../components/Button/Button';

export const BreadcrumbBar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Button
          iconButton={true}
          startIcon={<ArrowLeft size={20} />}
          variant="text"
          className={`${styles.navArrow} `}
        />
        <Button
          iconButton={true}
          startIcon={<ArrowRight size={20} />}
          variant="text"
          className={`${styles.navArrow} `}
        />
      </div>
    </div>
  );
};
