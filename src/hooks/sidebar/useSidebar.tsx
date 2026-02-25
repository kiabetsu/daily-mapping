import React, { useCallback } from 'react';

export const useLayoutEffect = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState(320);
  const [isDrag, setIsDrag] = React.useState(false);
  const [dragStartWidth, setDragStartWidth] = React.useState(320);
  const [startX, setStartX] = React.useState(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      console.log('mouse move');
      console.log(sidebarWidth, e.pageX, dragStartWidth);

      const minWidth = 110;
      const maxWidth = 400;

      const deltaX = e.pageX - startX;
      const newWidth = dragStartWidth + deltaX;

      const culcWidth = newWidth < 200 ? 110 : Math.max(minWidth, Math.min(newWidth, maxWidth));
      setSidebarWidth(culcWidth);
    },
    [startX, dragStartWidth],
  );

  const startDrag = React.useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDrag(true);
      setStartX(e.pageX);
      setDragStartWidth(sidebarWidth);
    },
    [sidebarWidth],
  );

  const stopDrag = React.useCallback((e: MouseEvent) => {
    setIsDrag(false);
  }, []);

  React.useEffect(() => {
    if (isDrag) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', stopDrag);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDrag);
    };
  }, [isDrag, handleMouseMove, stopDrag]);

  return { sidebarWidth, startDrag, stopDrag };
};
