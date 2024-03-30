import ListPage from 'components/layout/ListPage';
import { CATS_API_URL } from 'constants/openAPI';

const Chart: React.FC = () => <ListPage title="Chart" url={CATS_API_URL} chart={true} />;
export default Chart;
