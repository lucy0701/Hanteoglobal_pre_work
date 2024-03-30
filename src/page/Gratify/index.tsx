import ListPage from 'components/layout/ListPage';
import { CATS_API_URL } from 'constants/openAPI';

const Gratify: React.FC = () => <ListPage title="Gratify" url={CATS_API_URL} />;
export default Gratify;
