import cx from 'classnames';

import { FLEX_AROUND } from 'constants/className';
import { Category } from 'types/category';

import styles from './index.module.css';

interface Props {
  categories: Category[];
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
}

const CategoryButton: React.FC<Props> = ({ categories, selectedCategory, setSelectedCategory }) => (
  <div className={cx(FLEX_AROUND, styles.wrap)}>
    {categories.map((category) => (
      <div key={category.name} className={cx({ [styles.selected]: category === selectedCategory })}>
        <button onClick={() => setSelectedCategory(category)} className={styles.setBtn}>
          {category.name}
        </button>
      </div>
    ))}
  </div>
);

export default CategoryButton;
