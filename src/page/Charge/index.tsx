import List from 'components/List';
import { CONTENT_WRAP } from 'constants/classNames';
import { LIST } from 'constants/constants';
import { CATS_API_URL } from 'constants/openAPIs';

const Charge: React.FC = () => (
  <div className={CONTENT_WRAP}>
    <List title="Gratify" url={CATS_API_URL} listType={LIST} />
  </div>
);
export default Charge;
