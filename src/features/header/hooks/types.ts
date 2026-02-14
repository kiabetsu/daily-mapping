export interface ITask {
  id: number;
  title: string;
  isActive: boolean;
}

export interface IWorkspace {
  id: number;
  title: string;
  isActive: boolean;
  tasks: ITask[];
}

export type taskByIdType = {
  workspace: IWorkspace;
  task: ITask;
};
