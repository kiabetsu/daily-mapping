import React from 'react';

import styles from './Sidebar.module.scss';
import avatar from '../../../assets/Frame 5.png';
import { UserProfile } from './UserProfile/UserProfile';
import { SidebarNav } from './SidebarNav/SidebarNav';
import { WorkspaceTree } from './WorkspaceTree/WorkspaceTree';
import { Footer } from './Footer/Footer';
import useSidebarStore from '../store/sidebar';
import { projects, workspaceProjects } from '../../../hooks/sidebar/useSidebar';

export const Sidebar = () =>
  // { user, projects, selectedProject, menuItems }: SidebarType
  {
    const { sidebarList } = useSidebarStore();

    return (
      <div className={styles.sidebar}>
        <UserProfile
          avatar={avatar}
          name={sidebarList.user.username}
          subInfo={sidebarList.user.substring}
        />
        {/*TODO: make quick search*/}
        <SidebarNav options={sidebarList.menu} />
        <WorkspaceTree workspaces={sidebarList.workspace} />
        <Footer />
      </div>
    );
  };
