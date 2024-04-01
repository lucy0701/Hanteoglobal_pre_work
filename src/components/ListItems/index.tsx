import cx from 'classnames';

import { FLEX_CENTER } from 'constants/classNames';
import { Data } from 'types/dataType';

import styles from './index.module.css';
import ListItem from './ListItem';
import RankListItem from './RankListItem';

interface Props {
  dataList: Data[];
  chart?: boolean;
}

const ListItems: React.FC<Props> = ({ dataList, chart }) => (
  <ul className={styles.contntsUl}>
    {dataList.map((data, idx) => (
      <li key={idx}>
        <a href={data.thumbnail} target="_blank" rel="noopener noreferrer" className={cx(styles.listLink, FLEX_CENTER)}>
          <img alt={data.name} src={data.thumbnail} className={styles.contentsImage} />
          {chart ? (
            <RankListItem idx={idx} dataName={data.name} dataContent={data.thumbnail} />
          ) : (
            <ListItem idx={idx} dataName={data.name} dataContent={data.thumbnail} />
          )}
        </a>
      </li>
    ))}
  </ul>
);

export default ListItems;
