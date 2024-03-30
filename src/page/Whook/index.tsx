import { useState } from 'react';

import CategoryButton from 'components/common/CategoryButton';
import ListPage from 'components/layout/ListPage';
import { CATS_API_URL, DOGS_API_URL } from 'constants/openAPI';

const categories = [
  {
    name: 'TEST 01',
    apiUrl: CATS_API_URL,
  },
  {
    name: 'TEST 02',
    apiUrl: DOGS_API_URL,
  },
  {
    name: 'TEST 03',
    apiUrl: CATS_API_URL,
  },
];

const Whook: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  return (
    <ListPage key={selectedCategory.name} title={`Whook - ${selectedCategory.name}`} url={selectedCategory.apiUrl}>
      <CategoryButton
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </ListPage>
  );
};
export default Whook;
