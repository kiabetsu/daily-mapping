import React from 'react';

import { Input } from '../../../../components/Input/Input';
import { Button } from '../../../../components/Button/Button';
import styles from './Search.module.scss';

import { ReactComponent as HotKeysForSearch } from '../../../../assets/Group 7.svg';
import { ReactComponent as Lupa } from '../../../../assets/MagnifyingGlass.svg';

type SearchType = { miniSb?: boolean };

export const Search = ({ miniSb }: SearchType) => {
  return (
    <div className={styles.searchBlock}>
      {miniSb ? (
        <Button startIcon={<Lupa />} iconButton={true} variant="text" className={styles.miniIcon} />
      ) : (
        <Input startIcon={<Lupa />} endIcon={<HotKeysForSearch />} placeholder="Quick find" />
      )}
    </div>
  );
};
