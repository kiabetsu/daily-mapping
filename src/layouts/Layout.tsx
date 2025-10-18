import React, { ReactNode } from 'react';

import styles from './Layout.module.scss';
import { Sidebar } from '../components/sidebar/Sidebar';

type layoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: layoutProps) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
