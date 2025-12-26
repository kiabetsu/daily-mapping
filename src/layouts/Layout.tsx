import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import { Sidebar } from '../features/sidebar/components/Sidebar';
import { useLayoutEffect } from '../hooks/sidebar/useSidebar';
import { Header } from '../features/header/Header';

type layoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: layoutProps) => {
  const { sidebarWidth, startDrag } = useLayoutEffect();

  return (
    <div className={styles.layout}>
      <Sidebar width={sidebarWidth} />
      <div className={styles.separator} onMouseDown={startDrag} />
      <div className={styles.content}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
