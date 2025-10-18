import styles from './Workspace.module.scss';
import { Button } from '../../../Button/Button';
import arrow from '../../../../assets/CaretDown.svg';

interface WorkspaceItemProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

export const WorkspaceItem = ({ label, isActive = false, onClick }: WorkspaceItemProps) => {
  return (
    <Button
      className={`${styles.workspaceItem} ${isActive && styles.active}`}
      startIcon={arrow}
      onClick={onClick}>
      {label}{' '}
    </Button>
  );
};
