import React from 'react';

import styles from './SidebarNav.module.scss';
import { Button } from '../../Button/Button';

type options = {
  startIcon?: React.ReactNode;
  label: string;
  endIcon?: React.ReactNode;
};

type SidebarNavItems = { options: options[] };

export const SidebarNav = ({ options }: SidebarNavItems) => {
  return (
    <nav>
      <ul className={styles.ul}>
        {options.map((item, index) => {
          return (
            <Button
              variant="text"
              startIcon={item.startIcon}
              endIcon={item.endIcon}
              className={styles.buttonAdept}>
              {item.label}
            </Button>
          );
        })}
      </ul>
    </nav>
  );
};
