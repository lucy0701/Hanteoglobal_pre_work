import cx from 'classnames';
import { Link } from 'react-router-dom';

import { FLEX_BETWEEN, FLEX_CENTER, TEXT_OVERFLOW } from 'constants/classNames';
import { BannerData } from 'types/dataType';

import styles from './index.module.css';

interface Props {
  bannerData: BannerData;
}

const EventBannerCard: React.FC<Props> = ({
  bannerData: { statusText, status, url, imgUrl, title, buttonText, duration, onClick },
}) => {
  const isExternal = /^(https?:\/\/)/.test(url || '');

  return (
    <div className={styles.bannerImageWrap}>
      {statusText && (
        <span
          className={cx(styles.progress, FLEX_CENTER, {
            [styles.onProgress]: status,
            [styles.finished]: !status,
          })}
        >
          {statusText}
        </span>
      )}

      {url &&
        (isExternal ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img alt={url} src={imgUrl} className={styles.bannerImage} />
          </a>
        ) : (
          <Link to={url}>
            <img alt={url} src={imgUrl} className={styles.bannerImage} />
          </Link>
        ))}
      {!url && <img alt={url} src={imgUrl} className={styles.bannerImage} />}

      {(title || buttonText || duration) && (
        <div className={styles.bannerTitleWrap}>
          <div className={cx(styles.bannerTitle, FLEX_BETWEEN)}>
            <h2 className={TEXT_OVERFLOW}>{title}</h2>
            {buttonText && (
              <button
                onClick={onClick}
                className={cx(styles.bannerBtn, {
                  [styles.btn_on]: status,
                  [styles.btn_off]: !status,
                })}
                disabled={!status}
              >
                {buttonText}
              </button>
            )}
          </div>
          <p className={styles.bannerDate}>{duration}</p>
        </div>
      )}
    </div>
  );
};

export default EventBannerCard;
