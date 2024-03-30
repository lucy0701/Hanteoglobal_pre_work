import ListPage from 'components/layout/ListPage';
import { CATS_API_URL } from 'constants/openAPI';

import styles from './index.module.css';

const Chart: React.FC = () => (
  <div>
    <div className={styles.wrap}>
      <ListPage title="Chart" url={CATS_API_URL} chart={true} />
    </div>
  </div>
);
export default Chart;
