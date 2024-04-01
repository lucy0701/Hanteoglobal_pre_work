import List from 'components/List';
import { CONTENT_WRAP } from 'constants/classNames';
import { IMAGE_CARD } from 'constants/constants';
import { CATS_API_URL } from 'constants/openAPIs';

const Store: React.FC = () => (
  <div className={CONTENT_WRAP}>
    <List title="Store" subtitles={['귀여운 고양이 가득']} url={CATS_API_URL} listType={IMAGE_CARD} />
  </div>
);
export default Store;
