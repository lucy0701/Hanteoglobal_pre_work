import ListPage from 'components/layout/ListPage';
import { CATS_API_URL } from 'constants/openAPI';

const News: React.FC = () => <ListPage title="News" url={CATS_API_URL} />;
export default News;
