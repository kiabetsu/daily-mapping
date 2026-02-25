import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Checkbox } from '../../../../../../assets/CaretDown.svg';
import { ReactComponent as Branch1 } from '../../../../../../assets/Vector 2.svg';
import { ReactComponent as Branch2 } from '../../../../../../assets/Vector 5.svg';
import { ReactComponent as Branch3 } from '../../../../../../assets/Vector 5 (1).svg';
import { useClick } from '../../../../hooks/useSidebar';

import { Button } from '../../../../../../components/Button/Button';
import styles from './Task.module.scss';

interface ITaskSidebar {
  index: number;
  taskId: number;
  title: string;
  workspaceId: number;
}

export const Task = ({ index, taskId, title, workspaceId }: ITaskSidebar) => {
  const { handleClick, activePageId } = useClick();
  return (
    <Link to={`task/${taskId}`}>
      <div className={styles.task}>
        {index === 0 ? (
          <Branch2 className={styles.branch2} />
        ) : (
          <Branch3 className={styles.branch3} />
        )}
        <Branch1 className={styles.branch1} />

        <Button
          className={`${styles.taskButton}
              ${
                JSON.stringify(activePageId) === JSON.stringify(['task', taskId])
                  ? styles.active
                  : ''
              }`}
          variant="text"
          startIcon={<Checkbox />}
          onClick={() => handleClick(taskId, 'task')}>
          {title}
        </Button>
      </div>
    </Link>
  );
};
