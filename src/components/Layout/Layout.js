import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ScrollToTop from '../../hooks/scrollToTop';

const Layout = ({ favorites }) => {
  ScrollToTop();

  return (
    <>
      <Header favorites={favorites} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
