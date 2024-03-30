import { Link } from 'react-router-dom';

import styles from './index.module.css';

const NavigationBar: React.FC = () => (
  <header className={styles.navWrap}>
    <nav>
      <ul className={styles.listWrpa}>
        <li>
          <Link to="/">차트</Link>
        </li>
        <li>
          <Link to="/whook">Whook</Link>
        </li>
        <li>
          <Link to="/event">이벤트</Link>
        </li>
        <li>
          <Link to="/news">뉴스</Link>
        </li>
        <li>
          <Link to="/store">스토어</Link>
        </li>
        <li>
          <Link to="/gratify">충전소</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavigationBar;
