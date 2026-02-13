import React from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';

import { workspaceProjects } from '../../sidebar/store/data';

export const useCreateCrumbs = () => {
  const location = useLocation();
  const rout = location.pathname.split('/').filter(Boolean);
  const params = useParams();

  interface ITask {
    id: number;
    title: string;
    isActive: boolean;
  }

  interface IWorkspace {
    id: number;
    title: string;
    isActive: boolean;
    tasks: ITask[];
  }

  type taskByIdType = {
    workspace: IWorkspace;
    task: ITask;
  };

  // Словарь для быстрого поиска по id
  const workspaceById = React.useMemo(() => {
    const map: Record<number, IWorkspace> = {};
    workspaceProjects.forEach((ws) => {
      map[ws.id] = ws;
    });
    return map;
  }, []);

  const taskById = React.useMemo(() => {
    const map: Record<number, taskByIdType> = {};
    workspaceProjects.forEach((ws) => {
      ws.tasks.forEach((task) => {
        map[task.id] = { workspace: ws, task };
      });
    });
    return map;
  }, []);

  const breadcrumbs = React.useMemo(() => {
    const result = [];
    const options = ['dashboard', 'categories', 'settings'];

    const isOption = location.pathname.split('/').some((item) => options.includes(item));

    if (isOption) {
      const option = location.pathname.split('/').filter(Boolean)[0];
      result.push({
        type: 'option',
        label: option.slice(0, 1).toUpperCase() + option.slice(1),
        link: `/${option}`,
      });
    }

    const workspaceId = params.workspaceId;
    if (workspaceId !== undefined) {
      const workspace = workspaceById[Number(workspaceId)];
      if (workspace) {
        result.push({
          type: 'workspace',
          label: workspace.title,
          link: `/workspace/${workspace.id}`,
        });
      }
    }

    const taskId = params.taskId;
    if (taskId !== undefined) {
      const taskData = taskById[Number(taskId)];
      if (taskData) {
        result.push({
          type: 'task',
          label: taskData.task.title,
          link: `/workspace/${taskData.workspace.id}/task/${taskData.task.id}`,
        });
      }
    }

    console.log(result);
    return result;
  }, [params.workspaceId, params.taskId, location]);

  return { rout, Link, breadcrumbs };
};
