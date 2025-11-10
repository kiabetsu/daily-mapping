import React from 'react';

import styles from './Footer.module.scss';
import { Button } from '../../../../components/Button/Button';
import { ReactComponent as SignOut } from '../../../../assets/SignOut.svg';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Button variant="text" startIcon={<SignOut />}>
        Logout
      </Button>
    </div>
  );
};
