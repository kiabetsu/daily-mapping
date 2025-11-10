import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import { Sidebar } from '../features/sidebar/components/Sidebar';

type layoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: layoutProps) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      {/* <div className={styles.content}>{children}</div> */}
      <Outlet />
    </div>
  );
};
