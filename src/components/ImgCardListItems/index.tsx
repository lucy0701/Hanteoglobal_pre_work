import cx from 'classnames';

import { FLEX_BETWEEN, FLEX_COLUMN_BETWEEN, TEXT_OVERFLOW } from 'constants/classNames';
import { Data } from 'types/dataType';

import styles from './index.module.css';

interface Props {
  dataList: Data[];
}

const ImgCardListItem: React.FC<Props> = ({ dataList }) => {
  const chunkArray = (array: Data[], chunkSize: number) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const groupedData = chunkArray(dataList, 3);

  return (
    <>
      {groupedData.map((group, groupIdx) => (
        <ul key={groupIdx} className={cx(styles.imageUl, FLEX_BETWEEN)}>
          {group.map((data, idx) => (
            <li key={idx}>
              <a href={data.thumbnail} target="_blank" rel="noopener noreferrer" className={FLEX_COLUMN_BETWEEN}>
                <img className={styles.thumbnail} alt={data.name} src={data.thumbnail} />
                <p className={cx(styles.dataName, TEXT_OVERFLOW)}>{data.name}</p>
              </a>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};
export default ImgCardListItem;
