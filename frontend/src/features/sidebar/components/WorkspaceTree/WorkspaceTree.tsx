import React from 'react';

import styles from './WorkspaceTree.module.scss';
import { WorkspaceItem } from './WorkspaceItem/WorkspaceItem';

interface Task {
  id: number;
  title: string;
}

interface Workspace {
  id: number;
  title: string;
  tasks: Task[];
  isExpanded?: boolean;
}

interface WorkspaceTreeProps {
  workspaces: Workspace[];
  miniSb: boolean;
}

export const WorkspaceTree = ({ workspaces, miniSb }: WorkspaceTreeProps) => {
  return (
    <>
      {!miniSb && (
        <div className={styles.workspaceTree}>
          <div className={styles.title}>Workspace</div>
          {workspaces.map((workspace, index) => (
            <WorkspaceItem
              key={index}
              id={workspace.id}
              label={workspace.title}
              // isExpanded={workspace.isExpanded}
              tasks={workspace.tasks}
            />
          ))}
        </div>
      )}
    </>
  );
};
