import ListPage from 'components/layout/ListPage';
import { CATS_API_URL } from 'constants/openAPI';

const Store: React.FC = () => <ListPage title="Store" url={CATS_API_URL} />;
export default Store;
