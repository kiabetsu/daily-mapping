import { Link } from 'react-router-dom';

import styles from './WorkspaceItem.module.scss';

import { WorkspaceButton } from './WorkspaceButton/WorkspaceButton';
import { Task } from './Task/Task';
import { useClick } from '../../../hooks/useSidebar';

interface WorkspaceItemProps {
  id: number;
  label: string;
  isActive?: boolean;
  isActiveTaskId?: string;
  tasks: { id: number; title: string }[];
}

export const WorkspaceItem = ({ id, label, tasks }: WorkspaceItemProps) => {
  const { handleExpand, isExpanded } = useClick();

  return (
    <div className={styles.workspaceElement}>
      <WorkspaceButton id={id} isExpanded={isExpanded} label={label} onClick={handleExpand} />
      <ul className={`${styles.taskList} ${isExpanded ? styles.expandedTaskList : ''}`}>
        {tasks.map((task, index) => (
          <li className={styles.task} key={task.id}>
            <Task taskId={task.id} index={index} title={task.title} />
          </li>
        ))}
      </ul>
    </div>
  );
};
