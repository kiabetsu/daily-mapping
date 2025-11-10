import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from '../../../../../../assets/CaretDown (1).svg';

import { Button } from '../../../../../../components/Button/Button';
import styles from './WorkspaceButton.module.scss';
import { useClick } from '../../../../hooks/useSidebar';

interface IWorkspaceButton {
  id: number;
  label: string;
  isActive?: boolean;
  isActiveTaskId?: string;
  isExpanded?: boolean;
}

export const WorkspaceButton = ({ id, label, isExpanded }: IWorkspaceButton) => {
  const { handleClick, activePageId, handleExpand, workspaceIsExpand } = useClick();

  return (
    <Link to={`workspace/${id}`}>
      <Button
        className={`${styles.workspaceItem} ${isExpanded ? styles.expanded : ''} ${
          JSON.stringify(activePageId) === JSON.stringify(['workspace', id]) ? styles.active : ''
        }`}
        variant="text"
        startIcon={<Arrow className={styles.startIcon} />}
        onClick={(e) => {
          handleClick(id, 'workspace');
          // !isExpanded && handleExpand(id, e);
        }}
        onClickStartIcon={(e) => handleExpand(id, e)}>
        {label}
      </Button>
    </Link>
  );
};
