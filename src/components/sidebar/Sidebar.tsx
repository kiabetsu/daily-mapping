import React from 'react';

import styles from './Sidebar.module.scss';
import avatar from '../../assets/Frame 5.png';
import { ReactComponent as SomeIcon } from '../../assets/Vector (1).svg';
import { UserProfile } from './UserProfile/UserProfile';
import { SidebarNav } from './SidebarNav/SidebarNav';

type SidebarType = {
  user: {
    id: number;
    name: string;
    avatar: string;
  };
  projects: string[];
  selectedProject: number;
  menuItems: string[];
};

const endIcon = (
  <div
    style={{
      backgroundColor: '#975BEC24',
      color: '#975BEC',
      borderRadius: '50%',
      height: '26px',
      width: '26px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    2
  </div>
);

const projects = [
  { startIcon: <SomeIcon />, label: 'Dashboard', endIcon: endIcon },
  { startIcon: <SomeIcon />, label: 'Task Categories', endIcon: endIcon },
  { startIcon: <SomeIcon />, label: 'Settings', endIcon: endIcon },
];

export const Sidebar = () =>
  // { user, projects, selectedProject, menuItems }: SidebarType
  {
    return (
      <div className={styles.sidebar}>
        <UserProfile avatar={avatar} name="Sudek Hosen" subInfo="Team Plan" />
        {/*TODO: make quick search*/}
        {/* <div className={styles.quickFind}>
          <input type="text" />
        </div> */}
        {/* <div className={styles.options}>
          <button>Dashboard</button>
          <button>Task Categories</button>
          <button>Settings</button>
        </div> */}
        <SidebarNav options={projects} />
        <div className={styles.workspace}></div>
        <div className={styles.footer}>
          <button>Help</button>
          <button>Logout</button>
        </div>
      </div>
    );
  };
