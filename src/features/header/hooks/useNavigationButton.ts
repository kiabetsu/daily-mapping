import { useNavigate } from 'react-router-dom';

export const useNavigationButton = () => {
  const navigate = useNavigate();
  console.log(navigate);
  console.log(window.history);
  console.log(window.history.length - 1);
  console.log(window.history.state.idx);
};
