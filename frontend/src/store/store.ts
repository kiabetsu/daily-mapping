import { create } from 'zustand';

import { IStore } from './types';

const useMainStore = create<IStore>((set) => ({
  rout: [],
  history: [],
  currentHistoryId: 0,

  isAuth: false,

  setBreadcrumb: (breadcrumb) =>
    set(() => ({
      rout: breadcrumb,
    })),
}));

export default useMainStore;
