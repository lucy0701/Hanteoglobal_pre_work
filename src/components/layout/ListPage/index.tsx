import cx from 'classnames';
import { ReactNode } from 'react';

import { TEXT_OVERFLOW } from 'constants/className';
import useInfiniteScroll from 'hooks/useInfiniteScroll';

import styles from './index.module.css';

interface ListPageProps {
  title: string;
  curations?: { name: string; url: string }[];
  url: string;
  chart?: boolean;
}

interface ContentRankProps {
  children: ReactNode;
  index: number;
}

const ContentRank: React.FC<ContentRankProps> = ({ children, index }) => (
  <div className={styles.textBox}>
    <div className={styles.rankWrap}>
      <p>{index}</p>
      <span>-</span>
    </div>
    {children}
    <p className={styles.contenCount}>100</p>
  </div>
);

const ListPage: React.FC<ListPageProps> = ({ title, url, chart }) => {
  const { dataList, isLoading, obsTarget } = useInfiniteScroll(url);

  return (
    <div className={styles.listPageWrap}>
      <h2 className={styles.curations}>{title}</h2>
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
      <div ref={obsTarget} style={{ height: '10px' }}/>
    </div>
  );
};
export default ListPage;
