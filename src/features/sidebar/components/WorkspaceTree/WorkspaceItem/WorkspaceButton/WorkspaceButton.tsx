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
  onClick: (e: React.MouseEvent) => void;
}

export const WorkspaceButton = ({ id, label, isExpanded, onClick }: IWorkspaceButton) => {
  const { handleClick, activePageId } = useClick();

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
          !isExpanded && onClick(e);
        }}
        onClickStartIcon={(e) => onClick(e)}>
        {label}
      </Button>
    </Link>
  );
};
