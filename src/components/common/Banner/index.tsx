import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BannerCard from './BannerCard';
import styles from './index.module.css';

interface Props {
  bannerDatas: { title: string; url: string; imgUrl: string; duration: string; status: boolean }[];
}

const Banner: React.FC<Props> = ({ bannerDatas }) => (
  <div className={styles.bannerWrap}>
    <Swiper
      className={styles.slideWrap}
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      slidesPerGroup={1}
      speed={2000}
      centeredSlides={true}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
    >
      {bannerDatas.map((bannerData, i) => (
        <SwiperSlide key={i}>
          <div>
            <BannerCard bannerData={bannerData} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
export default Banner;
