import { ReactComponent as Dashboard } from '../../assets/Atom.svg';
import { ReactComponent as Categories } from '../../assets/Vector (2).svg';
import { ReactComponent as Settings } from '../../assets/GearSix.svg';
import React from 'react';
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
export const projects = [
  { startIcon: <Dashboard />, label: 'Dashboard', endIcon: endIcon, isActive: true },
  { startIcon: <Categories />, label: 'Task Categories', endIcon: endIcon, isActive: false },
  { startIcon: <Settings />, label: 'Settings', endIcon: endIcon, isActive: false },
];

export const workspaceProjects = [
  {
    id: 0,
    title: 'Client Projects',
    tasks: [
      {
        id: 0,
        title: 'Client Projects 1',
      },
      {
        id: 1,
        title: 'Client Projects 2',
      },
    ],
  },
  {
    id: 1,
    title: 'Fintask Web',
    tasks: [
      {
        id: 2,
        title: 'Landing page 1',
      },
      {
        id: 3,
        title: 'Landing page 2',
      },
    ],
  },
  {
    id: 2,
    title: 'Habit Tracker',
    tasks: [
      {
        id: 4,
        title: 'Habit Tracker 1',
      },
      {
        id: 5,
        title: 'Habit Tracker 2',
      },
    ],
  },
];

const onClickWorkspaceItem = (index: number) => {
  // const [options, setOptions] = React.useState(projects)
};
