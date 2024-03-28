import { Link, Outlet } from 'react-router-dom';

import Banner from 'components/layout/Banner';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

import styles from './index.css';

const Template: React.FC = () => (
  <div>
    <Header />
    <Banner />
    <Outlet />
    <Footer />
  </div>
);
export default Template;
