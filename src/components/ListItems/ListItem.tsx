import cx from 'classnames';

import { TEXT_OVERFLOW } from 'constants/classNames';

import styles from './index.module.css';

interface Props {
  idx: number;
  dataName: string;
  dataContent: string;
}

const ListItem: React.FC<Props> = ({ idx, dataName, dataContent }) => (
  <div className={styles.contentWrap}>
    <p className={cx(styles.contentTitle, TEXT_OVERFLOW)}>
      {dataName} {idx + 1}
    </p>
    <p className={cx(styles.contents, TEXT_OVERFLOW)}>{'Content : ' + dataContent}</p>
  </div>
);

export default ListItem;
