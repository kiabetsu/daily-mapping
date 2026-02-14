interface INavEntry {
  label: string;
  path: string;
}

export interface INavigationStore {
  history: INavEntry[];
  currentIndex: number;

  canGoBack: () => boolean;
  canGoForward: () => boolean;

  push: (newEntry: INavEntry) => void;
  goBack: () => void;
  goForward: () => void;
}
