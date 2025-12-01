import React from 'react';

import styles from './Sidebar.module.scss';
import avatar from '../../../assets/Frame 5.png';
import { UserProfile } from './UserProfile/UserProfile';
import { SidebarNav } from './SidebarNav/SidebarNav';
import { WorkspaceTree } from './WorkspaceTree/WorkspaceTree';
import { Footer } from './Footer/Footer';
import { Search } from './Search/Search';
import useSidebarStore from '../store/sidebar';

interface ISidebar {
  width: number;
}

export const Sidebar = ({ width }: ISidebar) =>
  // { user, projects, selectedProject, menuItems }: SidebarType
  {
    const { sidebarList } = useSidebarStore();

    return (
      <div
        className={`${styles.sidebar} ${width < 200 && styles.miniSidebar}`}
        style={{ width: `${width}px` }}>
        <div className={styles.upperSide}>
          <UserProfile
            avatar={avatar}
            name={sidebarList.user.username}
            subInfo={sidebarList.user.substring}
            miniSb={width < 200}
          />
          {/*TODO: make quick search*/}
          <Search />

          <SidebarNav options={sidebarList.menu} miniSb={width < 200} />
          <WorkspaceTree workspaces={sidebarList.workspace} miniSb={width < 200} />
        </div>
        <Footer miniSb={width < 200} />
      </div>
    );
  };
