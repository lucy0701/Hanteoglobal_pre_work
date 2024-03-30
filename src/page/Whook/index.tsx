import ListPage from 'components/layout/ListPage';
import { DOGS_API_URL } from 'constants/openAPI';

import styles from './index.module.css';

const Whook: React.FC = () => (
  <div>
    <div className={styles.wrap}>
      <ListPage title="Whook" url={DOGS_API_URL} />
    </div>
  </div>
);
export default Whook;
