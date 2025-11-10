import React, { MouseEvent } from 'react';

import useSidebarStore from '../store/sidebar';

export const useClick = () => {
  const {
    setActivePageId,
    activePageId,
    sidebarList,
    setState,
    setWorkspaceExpanded,
    workspaceIsExpand,
  } = useSidebarStore();

  type handleClickType = 'menu' | 'workspace' | 'task';

  const handleClick = (id: string | number, type: handleClickType = 'menu') => {
    switch (type) {
      case 'menu':
        setActivePageId([id]);
        break;
      case 'workspace':
        setActivePageId(['workspace', id]);
        break;
      case 'task':
        setActivePageId(['task', id]);
        break;
      default:
        break;
    }
  };

  const handleExpand = (workspaceId: number, e: MouseEvent) => {
    setWorkspaceExpanded(workspaceId);
    // const newWorkspace = sidebarList.workspace.map((ws) => {
    //   return ws.id === workspaceId ? { ...ws, isExpanded: !ws.isExpanded } : ws;
    // });
    // const newData = { ...sidebarList, workspace: newWorkspace };
    // setState(newData);
    e.stopPropagation();
  };

  return { activePageId, handleClick, handleExpand, workspaceIsExpand };
};

export const useArrowClick = (isActive: boolean) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const expand = (e: MouseEvent) => {
    setIsExpanded(!isExpanded);
    e.stopPropagation();
  };

  return { isExpanded, setIsExpanded, expand };
};

export {};
