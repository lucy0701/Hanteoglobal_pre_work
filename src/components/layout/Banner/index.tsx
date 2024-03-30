import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BannerCard from 'components/layout/Banner/BannerCard';

import styles from './index.module.css';

const bannerImages = [
  {
    title: 'HANTEO MUSIC AWARDS',
    url: 'https://awards.hanteo.com/?m=false&l=en',
    imgUrl: 'https://resource.hanteochart.io/asset/chart/mainbanner/main_banner_chart_3.png',
    duration: '2023. 02.17 ~ 2023. 02.18',
    status: false,
  },
  {
    title: '[한터글로벌] 프론트엔드 개발자 신입 코딩테스트',
    url: 'https://www.hanteochart.com/',
    imgUrl: 'https://resource.hanteochart.io/asset/chart/mainbanner/main_banner_seventeen.png',
    duration: '2024. 03.27 19:00 ~ 2024. 04.02 00:00',
    status: true,
  },
  {
    title: 'Premium Family',
    url: 'https://www.hanteochart.com/family/search',
    imgUrl: 'https://resource.hanteochart.io/asset/chart/mainbanner/main_banner_1_en.webp',
    duration: 'Always',
    status: true,
  },
];

const Banner: React.FC = () => (
  <div className="bannerWrap">
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
      {bannerImages.map((bannerImage, i) => (
        <SwiperSlide key={i}>
          <div>
            <BannerCard bannerData={bannerImage} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
export default Banner;
