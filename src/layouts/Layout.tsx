import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './Layout.module.scss';
import { Sidebar } from '../features/sidebar/components/Sidebar';
import { useLayoutEffect } from '../hooks/sidebar/useSidebar';

type layoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: layoutProps) => {
  const { sidebarWidth, startDrag } = useLayoutEffect();

  return (
    <div className={styles.layout}>
      <Sidebar width={sidebarWidth} />
      <div className={styles.separator} onMouseDown={startDrag} />
      <Outlet />
    </div>
  );
};
