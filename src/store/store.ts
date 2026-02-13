import { create } from 'zustand';

import { IStore } from './type';

const useMainStore = create<IStore>((set) => ({
  rout: [],
  history: [],
  currentHistoryId: 0,

  setBreadcrumb: (breadcrumb) =>
    set(() => ({
      rout: breadcrumb,
    })),
}));
