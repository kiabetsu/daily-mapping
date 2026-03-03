export interface IStore {
  rout: (string | number)[];
  history: string[];
  currentHistoryId: number;

  setBreadcrumb: (breadcrumb: (string | number)[]) => void;
}

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
