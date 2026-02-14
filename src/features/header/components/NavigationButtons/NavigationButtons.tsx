import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import styles from './NavigationButtons.module.scss';
import { Button } from '../../../../components/Button/Button';
import { useNavigationButton } from '../../hooks/useNavigationButton';

export const NavigationButtons = () => {
  const navnav = useNavigationButton();

  return (
    <div className={styles.navArrows}>
      <Button
        iconButton={true}
        startIcon={<ArrowLeft size={20} />}
        variant="text"
        className={`${styles.navArrow}`}
      />
      <Button
        iconButton={true}
        startIcon={<ArrowRight size={20} />}
        variant="text"
        className={`${styles.navArrow}`}
      />
    </div>
  );
};
