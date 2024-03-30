import ListPage from 'components/layout/ListPage';
import { DOGS_API_URL } from 'constants/openAPI';

const Whook: React.FC = () => (
    <ListPage title="Whook" url={DOGS_API_URL} />
);
export default Whook;
