import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SidebarNav.module.scss';
import { SidebarNavItem } from './SidebarNavItem/SidebarNavItem';

type options = {
  startIcon?: React.ReactNode;
  label: string;
  endIcon?: React.ReactNode;
  id: string;
};

type SidebarNavItems = { options: options[] };

export const SidebarNav = ({ options }: SidebarNavItems) => {
  return (
    <nav>
      <ul className={styles.ul}>
        {options.map((item) => {
          return (
            // <Link to={item.id} key={item.id}>
            <SidebarNavItem
              key={item.id}
              label={item.label}
              id={item.id}
              startIcon={item.startIcon}
              endIcon={item.endIcon}
            />
            // </Link>
          );
        })}
      </ul>
    </nav>
  );
};
