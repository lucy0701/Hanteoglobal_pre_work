import { Link, useLocation } from 'react-router-dom';

import { PATHS } from 'constants/paths';

import styles from './index.module.css';

const navItems = [
  { path: PATHS.chart, text: '차트' },
  { path: PATHS.whook, text: 'Whook' },
  { path: PATHS.event, text: '이벤트' },
  { path: PATHS.news, text: '뉴스' },
  { path: PATHS.store, text: '스토어' },
  { path: PATHS.charge, text: '충전소' },
];
const HeaderNavBar: React.FC = () => {
  const location = useLocation();

  return (
    <header className={styles.navWrap}>
      <nav>
        <ul className={styles.listWrap}>
          {navItems.map((item) => (
            <li key={item.path} className={location.pathname === item.path ? styles.selected : ''}>
              <Link to={item.path}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNavBar;
