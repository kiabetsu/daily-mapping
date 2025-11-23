import React, { MouseEvent } from 'react';

import useSidebarStore from '../store/sidebar';

export const useClick = () => {
  const { setActivePageId, activePageId } = useSidebarStore();

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

  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleExpand = (e: MouseEvent) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
    e.stopPropagation();
  };

  return { activePageId, handleClick, handleExpand, isExpanded };
};

export const useArrowClick = (isActive: boolean = false) => {
  const [isExpanded, setIsExpanded] = React.useState(isActive);

  const expand = (e: MouseEvent) => {
    setIsExpanded(!isExpanded);
    e.stopPropagation();
  };

  return { isExpanded, setIsExpanded, expand };
};

export {};
