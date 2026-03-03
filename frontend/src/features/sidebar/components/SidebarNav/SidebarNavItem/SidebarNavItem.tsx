import { Link } from 'react-router-dom';

import { Button } from '../../../../../components/Button/Button';
import styles from './SidebarNavItem.module.scss';
import { useClick } from '../../../hooks/useSidebar';

type options = {
  startIcon?: React.ReactNode;
  label: string;
  endIcon?: React.ReactNode;
  id: string;
  miniSb?: boolean;
};

export const SidebarNavItem = ({ startIcon, label, endIcon, id, miniSb }: options) => {
  const { handleClick, activePageId } = useClick();
  return (
    <Link to={id}>
      <Button
        variant="text"
        startIcon={startIcon}
        endIcon={endIcon}
        className={`${styles.buttonAdept} ${activePageId[0] === id ? styles.active : ''}`}
        iconButton={miniSb}
        onClick={() => handleClick(id, 'menu')}>
        {label}
      </Button>
    </Link>
  );
};
