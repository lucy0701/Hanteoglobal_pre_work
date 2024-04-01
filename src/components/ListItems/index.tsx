import cx from 'classnames';

import { FLEX_AROUND, FLEX_CENTER, TEXT_OVERFLOW } from 'constants/classNames';
import { Data } from 'types/dataType';

import styles from './index.module.css';

interface Props {
  dataList: Data[];
  chart?: boolean;
}

// ranking은 Icon 확인을 위한 임시값입니다!
const ListItems: React.FC<Props> = ({ dataList, chart }) => (
  <ul className={styles.contntsUl}>
    {dataList.map((data, idx) => (
      <li key={idx}>
        <a href={data.thumbnail} target="_blank" rel="noopener noreferrer" className={cx(styles.listLink, FLEX_CENTER)}>
          <img alt={data.name} src={data.thumbnail} className={styles.contentsImage} />
          {chart ? (
            <div className={cx(styles.textBox, FLEX_AROUND)}>
              <div>
                <p className={styles.rank}>{idx + 1}</p>
                {data.ranking < 800 && (
                  <img className={styles.rankIcon} alt="caret-up-solid" src="/svgs/caret-up-solid.svg"></img>
                )}
                {data.ranking >= 800 && data.ranking < 1500 && (
                  <img className={styles.rankIcon} alt="minus-solid" src="/svgs/minus-solid.svg"></img>
                )}
                {data.ranking >= 1500 && (
                  <img className={styles.rankIcon} alt="caret-down-solid" src="/svgs/caret-down-solid.svg"></img>
                )}
              </div>
              <div className={styles.contentWrap}>
                <p className={cx(styles.contentTitle, TEXT_OVERFLOW)}>
                  {data.name} {idx + 1}
                </p>
                <p className={cx(styles.contents, TEXT_OVERFLOW)}>{'Content : ' + data.thumbnail}</p>
              </div>
              <p className={styles.contenCount}>100</p>
            </div>
          ) : (
            <div className={styles.contentWrap}>
              <p className={cx(styles.contentTitle, TEXT_OVERFLOW)}>
                {data.name} {idx + 1}
              </p>
              <p className={cx(styles.contents, TEXT_OVERFLOW)}>{'Content : ' + data.thumbnail}</p>
            </div>
          )}
        </a>
      </li>
    ))}
  </ul>
);

export default ListItems;
