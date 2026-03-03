import React from 'react';

import styles from './SidebarNav.module.scss';
import { SidebarNavItem } from './SidebarNavItem/SidebarNavItem';

type options = {
  startIcon?: React.ReactNode;
  label: string;
  endIcon?: React.ReactNode;
  id: string;
};

type SidebarNavItems = { options: options[]; miniSb?: boolean };

export const SidebarNav = ({ options, miniSb }: SidebarNavItems) => {
  return (
    <nav>
      <ul className={styles.ul}>
        {options.map((item) => {
          return (
            <SidebarNavItem
              key={item.id}
              label={item.label}
              id={item.id}
              startIcon={item.startIcon}
              endIcon={item.endIcon}
              miniSb={miniSb}
            />
          );
        })}
      </ul>
    </nav>
  );
};
