import React from 'react';

import styles from './Footer.module.scss';
import { Button } from '../../../../components/Button/Button';
import { ReactComponent as SignOut } from '../../../../assets/SignOut.svg';

type FooterType = {
  miniSb: boolean;
};

export const Footer = ({ miniSb }: FooterType) => {
  return (
    <div className={styles.footer}>
      <Button variant="text" startIcon={<SignOut />} iconButton={miniSb}>
        Logout
      </Button>
    </div>
  );
};
