import React from 'react';

import { Input } from '../../../../components/Input/Input';

import { ReactComponent as HotKeysForSearch } from '../../../../assets/Group 7.svg';
import { ReactComponent as Lupa } from '../../../../assets/MagnifyingGlass.svg';

export const Search = () => {
  return <Input startIcon={<Lupa />} endIcon={<HotKeysForSearch />} placeholder="Quick find" />;
};
