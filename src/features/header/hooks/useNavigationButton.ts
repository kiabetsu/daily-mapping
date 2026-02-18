import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const useNavigationButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const historyLength = window.history.length;
  const index = window.history.state?.idx;
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);

  useEffect(() => {
    setCanGoBack(index > 0);
    setCanGoForward(index < historyLength - 1);
  }, [location.pathname]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoForward = () => {
    navigate(1);
  };

  return { handleGoBack, handleGoForward, canGoBack, canGoForward };
};
