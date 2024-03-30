import ListPage from 'components/layout/ListPage';
import { CATS_API_URL } from 'constants/openAPI';

import styles from './index.module.css';

const Store: React.FC = () => (
  <div>
    <div className={styles.wrap}>
      <ListPage title="Store" url={CATS_API_URL} />
    </div>
  </div>
);
export default Store;
