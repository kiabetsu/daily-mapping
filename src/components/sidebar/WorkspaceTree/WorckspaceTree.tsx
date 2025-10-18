import React from 'react';

import styles from './WorkspaceTree.module.scss';

const projects = [
  {
    title: 'Client Projects',
    tasks: [
      {
        title: 'Client Projects 1',
      },
      {
        title: 'Client Projects 2',
      },
    ],
  },
  {
    title: 'Fintask Web',
    tasks: [
      {
        title: 'Landing page 1',
      },
      {
        title: 'Landing page 2',
      },
    ],
  },
  {
    title: 'Habit Tracker',
    tasks: [
      {
        title: 'Habit Tracker 1',
      },
      {
        title: 'Habit Tracker 2',
      },
    ],
  },
];

export const WorkspaceTree = () => {
  return (
    <div className={styles.workspaceTree}>
      <div className={styles.title}>Workspace</div>
    </div>
  );
};
