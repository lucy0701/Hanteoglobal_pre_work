import cx from 'classnames';
import { ReactNode } from 'react';

import { FLEX_AROUND, TEXT_OVERFLOW } from 'constants/className';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

import styles from './index.module.css';

interface ListPageProps {
  title: string;
  url: string;
  chart?: boolean;
  children?: ReactNode;
}

interface ContentRankProps {
  children: ReactNode;
  index: number;
}

const ContentRank: React.FC<ContentRankProps> = ({ children, index }) => (
  <div className={cx(styles.textBox, FLEX_AROUND)}>
    <div className={styles.rankWrap}>
      <p>{index}</p>
      <span>-</span>
    </div>
    {children}
    <p className={styles.contenCount}>100</p>
  </div>
);

const ListPage: React.FC<ListPageProps> = ({ title, url, chart, children }) => {
  const { dataList, isLoading, obsTarget } = useInfiniteScroll(url);

  return (
    <div className={styles.listPageWrap}>
      <div className={styles.categoryBox}>
        <h2 className={styles.categoryName}>{title}</h2>
        {children && children}
      </div>
      <ul className={styles.contntsUl}>
        {dataList.map((data, idx) => (
          <li key={idx}>
            <img alt={data.name} src={data.thumbnail} className={styles.contentsImage} />
            {chart ? (
              <ContentRank index={idx}>
                <div className={styles.contentWrap}>
                  <p className={cx(styles.contentTitle, TEXT_OVERFLOW)}>
                    {title} {idx + 1}
                  </p>
                  <p className={styles.contents}>{data.name}</p>
                </div>
              </ContentRank>
            ) : (
              <div className={styles.contentWrap}>
                <p className={styles.contentTitle}>
                  {title} {idx + 1}
                </p>
                <p className={styles.contents}>{data.name}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      <div ref={obsTarget} style={{ height: '10px' }} />
    </div>
  );
};
export default ListPage;
