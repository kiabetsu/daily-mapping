export interface IStore {
  rout: (string | number)[];
  history: string[];
  currentHistoryId: number;

  setBreadcrumb: (breadcrumb: (string | number)[]) => void;
}
