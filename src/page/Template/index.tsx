import cx from 'classnames';
import { Outlet } from 'react-router-dom';

import Banner from 'components/layout/Banner';
import Contents from 'components/layout/Contents';
import Footer from 'components/layout/Footer';
import NavigationBar from 'components/layout/NavigationBar';

const Template: React.FC = () => (
  <div className={cx('wrap')}>
    <NavigationBar />
    <Banner />
    <Contents>
      <Outlet />
      <Footer />
    </Contents>
  </div>
);
export default Template;
