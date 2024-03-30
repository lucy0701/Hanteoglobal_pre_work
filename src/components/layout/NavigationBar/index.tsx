import { Link, useLocation } from 'react-router-dom';

import styles from './index.module.css';

const NavigationBar: React.FC = () => {
  const location = useLocation();
  return (
    <header className={styles.navWrap}>
      <nav>
        <ul className={styles.listWrpa}>
          <li className={location.pathname === '/' ? styles.selected : ''}>
            <Link to="/">차트</Link>
          </li>
          <li className={location.pathname === '/whook' ? styles.selected : ''}>
            <Link to="/whook">Whook</Link>
          </li>
          <li className={location.pathname === '/event' ? styles.selected : ''}>
            <Link to="/event">이벤트</Link>
          </li>
          <li className={location.pathname === '/news' ? styles.selected : ''}>
            <Link to="/news">뉴스</Link>
          </li>
          <li className={location.pathname === '/store' ? styles.selected : ''}>
            <Link to="/store">스토어</Link>
          </li>
          <li className={location.pathname === '/gratify' ? styles.selected : ''}>
            <Link to="/gratify">충전소</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
