import { Outlet } from 'react-router-dom';

import Contents from 'components/layout/Contents';
import Footer from 'components/layout/Footer';
import NavigationBar from 'components/layout/NavigationBar';

const Template: React.FC = () => (
  <div className="wrap">
    <NavigationBar />
    <Contents>
      <Outlet />
    </Contents>
    <Footer />
  </div>
);
export default Template;
