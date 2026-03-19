import { Outlet } from 'react-router-dom';

import styles from './HomePage.module.scss';
import { Sidebar } from '../../features/Home/sidebar/components/Sidebar';
import { useSidebarLayout } from '../../hooks/sidebar/useSidebar';
import { Header } from '../../features/Home/header/components/Header';

export const HomePage = () => {
  const { sidebarWidth, startDrag } = useSidebarLayout();

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
