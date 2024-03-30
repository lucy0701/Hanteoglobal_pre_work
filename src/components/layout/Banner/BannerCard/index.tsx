import cx from 'classnames';

import styles from './index.module.css';

interface Props {
  bannerData: { title: string; url?: string; imgUrl: string; duration: string; status: boolean };
}

const BannerCard: React.FC<Props> = ({ bannerData }) => {
  // 투표가 있을 경우 투표 페이지로 전환
  const onClick = () => alert(`투표가 완료되었습니다`);

  return (
    <div className={styles.bannerImageWrap}>
      <span
        className={cx(styles.progress, {
          [styles.onProgress]: bannerData.status,
          [styles.finished]: !bannerData.status,
        })}
      >
        {bannerData.status ? '진행 중' : '종료'}
      </span>
      <a href={bannerData.url} target="_blank" rel="noopener noreferrer">
        <img alt={bannerData.url} src={bannerData.imgUrl} className={styles.bannerImage} />
      </a>
      <div className={styles.bannerTitleWrap}>
        <div className={styles.bannerTitle}>
          <h2>{bannerData.title}</h2>
          <button
            onClick={onClick}
            className={cx({ [styles.displayNone]: !bannerData.status },styles.bannerBtn)}
            disabled={!bannerData.status}
          >
            투표하기
          </button>
        </div>
        <p className={styles.bannerDate}>{bannerData.duration}</p>
      </div>
    </div>
  );
};

export default BannerCard;
