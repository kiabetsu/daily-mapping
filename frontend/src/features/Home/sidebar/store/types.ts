interface IUser {
  avatar: string;
  username: string;
  substring: string;
}

interface IMenuItem {
  id: string;
  label: string;
  isActive: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

interface ITasks {
  id: number;
  title: string;
  isActive: boolean;
}

interface IWorkspaceItem {
  id: number;
  title: string;
  tasks: ITasks[];
  isActive: boolean;
}

interface ISidebarList {
  user: IUser;
  menu: IMenuItem[];
  workspace: IWorkspaceItem[];
}

interface ISidebarStore {
  sidebarList: ISidebarList;
  activePageId: (string | number)[];
  workspaceIsExpand: object;

  setActivePageId: (id: (string | number)[]) => void;
  setState: (newData: ISidebarList) => void;
  setWorkspaceExpanded: (id: number) => void;
}

export type { IUser, IMenuItem, ITasks, IWorkspaceItem, ISidebarStore };
