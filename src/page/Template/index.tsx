import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import TopButton from 'components/TopButton';
import Footer from 'layout/Footer';
import HeaderNavBar from 'layout/HeaderNavBar';

const Template: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || document.documentElement.scrollTop;
      const isVisible = currentScrollPos < 200 || currentScrollPos < prevScrollPos;
      setIsVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="wrap">
      <HeaderNavBar isVisible={isVisible} />
      <Outlet />
      <Footer />
      {isVisible && <TopButton />}
    </div>
  );
};
export default Template;
