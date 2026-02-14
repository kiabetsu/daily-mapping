import { create } from 'zustand';

import { INavigationStore } from './types';

const useNavigationStore = create<INavigationStore>((set, get) => ({
  history: [],
  currentIndex: 0,

  canGoBack: () => get().currentIndex > 0,
  canGoForward: () => get().currentIndex < get().history.length - 1,

  push: (newEntry) =>
    set((state) => {
      const truncated = state.history.slice(0, state.currentIndex + 1);
      return {
        history: [...truncated, newEntry],
        currentIndex: truncated.length,
      };
    }),
  goBack: () => {
    if (get().canGoBack()) {
      set({
        currentIndex: get().currentIndex - 1,
      });
    }
  },
  goForward: () => {
    if (get().canGoForward()) {
      set({
        currentIndex: get().currentIndex + 1,
      });
    }
  },
}));
