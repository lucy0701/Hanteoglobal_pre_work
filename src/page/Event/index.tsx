import ListPage from 'components/layout/ListPage';
import { CATS_API_URL } from 'constants/openAPI';

const Event: React.FC = () => <ListPage title="Event" url={CATS_API_URL} />;
export default Event;
