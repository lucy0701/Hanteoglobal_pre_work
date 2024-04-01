import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useSwipeNavigation = (routes: string[]) => {
  const navigate = useNavigate();
  const location = useLocation();
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    const deltaY = Math.abs(deltaX);

    const swipeThreshold = window.innerWidth / 4;

    if (deltaY < swipeThreshold) {
      return;
    }
    if (deltaX > 0) {
      navigateBackward();
    } else {
      navigateForward();
    }
  };

  const navigateForward = () => {
    navigateForwardOrBackward(1);
  };

  const navigateBackward = () => {
    navigateForwardOrBackward(-1);
  };

  const navigateForwardOrBackward = (step: number) => {
    const currentIndex = routes.indexOf(location.pathname);
    const nextIndex = (currentIndex + step + routes.length) % routes.length;
    navigate(routes[nextIndex]);
  };

  return { handleTouchStart, handleTouchMove, handleTouchEnd };
};

export default useSwipeNavigation;
