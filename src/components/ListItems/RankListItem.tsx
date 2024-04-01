import cx from 'classnames';

import { FLEX_AROUND } from 'constants/classNames';

import styles from './index.module.css';
import ListItem from './ListItem';

interface Props {
  idx: number;
  dataName: string;
  dataContent: string;
}

const RankListItem: React.FC<Props> = ({ idx, dataName, dataContent }) => (
  <div className={cx(styles.textBox, FLEX_AROUND)}>
    <div>
      <p className={styles.rank}>{idx + 1}</p>
      <span>-</span>
    </div>
    <ListItem idx={idx} dataName={dataName} dataContent={dataContent} />
    <p className={styles.contenCount}>100</p>
  </div>
);

export default RankListItem;
