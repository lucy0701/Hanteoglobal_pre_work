import { useState } from 'react';

import Banner from 'components/common/Banner';
import CategoryButton from 'components/common/CategoryButton';
import ListPage from 'components/layout/ListPage';
import { CATS_API_URL, DOGS_API_URL } from 'constants/openAPI';

// 테스트용 임시 데이터
const bannerDatas = [
  {
    title: '오늘도 고생하셨어요',
    url: '',
    imgUrl:
      'https://images.unsplash.com/photo-1711654106922-f44ee5df26ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OXx8fGVufDB8fHx8fA%3D%3D',
    duration: '2023. 02.17 ~ 2023. 02.18',
    status: false,
  },
  {
    title: '[묘스트] MBTI TEST 즐겨 보세요!',
    url: 'https://myoast.vercel.app/',
    imgUrl: 'https://myoast.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co%2Fh8mWkV6%2Fthumbnail.png&w=640&q=75',
    duration: 'Every day',
    status: true,
  },
  {
    title: '안녕하세요! 제목을 길게 적어볼게요. TEST입니다! ',
    url: 'https://www.hanteochart.com/family/search',
    imgUrl:
      'https://images.unsplash.com/photo-1711539924834-06816347ff2a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NHx8fGVufDB8fHx8fA%3D%3D',
    duration: 'Always',
    status: true,
  },
];

const categories = [
  {
    name: 'New Events',
    apiUrl: DOGS_API_URL,
  },
  {
    name: '진행 중인 이벤트',
    apiUrl: CATS_API_URL,
  },
  {
    name: '종료 된 이벤트',
    apiUrl: CATS_API_URL,
  },
];

const Event: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <>
      <Banner bannerDatas={bannerDatas} />

      <ListPage title={`Event - ${selectedCategory.name}`} url={selectedCategory.apiUrl}>
        <CategoryButton
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </ListPage>
    </>
  );
};
export default Event;
