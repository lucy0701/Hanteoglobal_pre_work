import cx from 'classnames';
import { ReactNode } from 'react';

import ImgCardListItem from 'components/ImgCardListItems';
import ListItems from 'components/ListItems';
import { FLEX_BETWEEN, FLEX_COLUMN_BETWEEN } from 'constants/classNames';
import { IMAGE_CARD, LIST } from 'constants/constants';
import { PATHS } from 'constants/paths';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import useSwipeNavigation from 'hooks/useSwipeNavigation';

import styles from './index.module.css';

interface ListPageProps {
  title?: string;
  url: string;
  subtitles?: string[];
  chart?: boolean;
  children?: ReactNode;
  listType: 'imageCard' | 'list';
}

const List: React.FC<ListPageProps> = ({ title, url, subtitles, chart, children, listType }) => {
  const { dataList, obsTarget } = useInfiniteScroll(url);
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipeNavigation([
    PATHS.chart,
    PATHS.whook,
    PATHS.event,
    PATHS.news,
    PATHS.store,
    PATHS.charge,
  ]);

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={styles.listPageWrap}
    >
      <div className={cx(styles.categoryBox, FLEX_COLUMN_BETWEEN)}>
        {title && <h2 className={styles.categoryName}>{title}</h2>}
        {children && children}
      </div>
      <div>
        {subtitles && (
          <div className={cx(styles.subtitleWrap, FLEX_BETWEEN)}>
            {subtitles.map((subtitle) => (
              <p key={subtitle}> {subtitle}</p>
            ))}
          </div>
        )}
      </div>
      {LIST === listType && <ListItems dataList={dataList} chart={chart} />}
      {IMAGE_CARD === listType && <ImgCardListItem dataList={dataList} />}
      <div ref={obsTarget} style={{ height: '10px' }} />
    </div>
  );
};
export default List;
