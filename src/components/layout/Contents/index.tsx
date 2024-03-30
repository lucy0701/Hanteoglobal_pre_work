import { ReactNode } from 'react';
import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

// 컨텐츠 내부에서 스와이핑 할 경우 페이지 이동
const Contents: React.FC<Props> = ({ children }) => {
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
    const routes = ['/', '/whook', '/event', '/news', '/store', '/gratify'];
    const currentIndex = routes.indexOf(location.pathname);
    const nextIndex = (currentIndex + step + routes.length) % routes.length;
    navigate(routes[nextIndex]);
  };

  return (
    <main
      className="contentsWrap"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div>{children}</div>
    </main>
  );
};
export default Contents;
