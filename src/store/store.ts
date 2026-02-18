import { create } from 'zustand';

import { IStore } from './types';

const useMainStore = create<IStore>((set) => ({
  rout: [],
  history: [],
  currentHistoryId: 0,

  setBreadcrumb: (breadcrumb) =>
    set(() => ({
      rout: breadcrumb,
    })),
}));
