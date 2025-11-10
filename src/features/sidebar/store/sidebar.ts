import { create } from 'zustand';

import type { ISidebarStore } from './types';
import { user, options, workspaceProjects } from './data';

const changeExpanded = (id: number) => {
  let newData = workspaceProjects;
  newData[id].isActive = !newData[id].isActive;
};

const useSidebarStore = create<ISidebarStore>((set) => ({
  sidebarList: { user: user, menu: options, workspace: workspaceProjects },
  activePageId: ['dashboard'],
  workspaceIsExpand: workspaceProjects.reduce<Record<number, boolean>>((acc, project) => {
    acc[project.id] = project.isActive;
    return acc;
  }, {}),

  setActivePageId: (id) => set(() => ({ activePageId: id })),
  setState: (newData) => set(() => ({ sidebarList: newData })),
  setWorkspaceExpanded: (id: number) =>
    set((state) => ({
      workspaceIsExpand: {
        ...(state.workspaceIsExpand as Record<number, boolean>),
        [id]: !(state.workspaceIsExpand as Record<number, boolean>)[id],
      },
    })),
}));

export default useSidebarStore;
