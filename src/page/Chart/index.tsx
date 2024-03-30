import { useState } from 'react';

import Banner from 'components/common/Banner';
import CategoryButton from 'components/common/CategoryButton';
import ListPage from 'components/layout/ListPage';
import { CATS_API_URL, DOGS_API_URL } from 'constants/openAPI';

// 테스트용 임시 데이터
const bannerDatas = [
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
  {
    title: '[프론트 엔드] 박수정 이력서',
    url: 'https://bramble-meadow-bd7.notion.site/FrontEnd-294f181cc0024ea28a3c12a5daf75e44',
    imgUrl:
      'https://bramble-meadow-bd7.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F0b869640-a202-4fe1-8b8d-4bb0415606f6%2Fc9409534-663d-4039-a6ce-cb9b0173a6b4%2FScreenshot_2024-02-02_17.08.53_uDXQi2.png?table=block&id=294f181c-c002-4ea2-8a3c-12a5daf75e44&spaceId=0b869640-a202-4fe1-8b8d-4bb0415606f6&width=2000&userId=&cache=v2',
    duration: 'Always',
    status: true,
  },
];

const categories = [
  {
    name: 'Global',
    apiUrl: CATS_API_URL,
  },
  {
    name: 'United States',
    apiUrl: DOGS_API_URL,
  },
  {
    name: 'Japan',
    apiUrl: CATS_API_URL,
  },
  {
    name: 'China',
    apiUrl: DOGS_API_URL,
  },
];

const Chart: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div>
      <Banner bannerDatas={bannerDatas} />
      <ListPage
        key={selectedCategory.name}
        title={`Chart - ${selectedCategory.name}`}
        url={selectedCategory.apiUrl}
        chart={true}
      >
        <CategoryButton
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </ListPage>
    </div>
  );
};
export default Chart;
