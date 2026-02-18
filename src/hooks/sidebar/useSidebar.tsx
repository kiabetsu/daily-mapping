import React, { useCallback } from 'react';

export const useLayoutEffect = () => {
  const [sidebarWidth, setSidebarWidth] = React.useState(320);
  const [isDrag, setIsDrag] = React.useState(false);
  const [startWidth, setStartWidth] = React.useState(325);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    console.log('mouse move');
    setStartWidth(e.pageX);
    console.log(sidebarWidth, e.pageX, startWidth);

    const minWidth = 110;
    const maxWidth = 400;

    let newWidth = sidebarWidth + e.pageX - startWidth;
    newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
    newWidth = newWidth < 200 ? 110 : newWidth;

    setSidebarWidth(newWidth);
  }, []);

  const startDrag = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  }, []);

  const stopDrag = React.useCallback((e: MouseEvent) => {
    setIsDrag(false);
  }, []);

  React.useEffect(() => {
    if (isDrag) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', stopDrag);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDrag);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopDrag);
    };
  }, [isDrag, handleMouseMove, stopDrag]);

  return { sidebarWidth, startDrag, stopDrag };
};
