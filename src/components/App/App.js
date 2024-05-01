import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import Contacts from '../Contacts/Contacts';
import Catalog from '../Catalog/Сatalog';
import NotFound from '../NotFound/NotFound';
import CatalogSection from '../CatalogSection/CatalogSection';
import CollectionPage from '../CollectionPage/CollectionPage';
import ScrollToTop from '../../hooks/scrollToTop';
import InfoCenter from '../InfoCenter/InfoCenter';
import InfoSubsection from '../InfoSubsection/InfoSubsection';
import InfoPage from '../InfoPage/InfoPage';

function App() {
  ScrollToTop();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Main />} />
        </Route>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<CatalogSection />} />
        <Route
          path="/catalog/:category/:collection"
          element={<CollectionPage />}
        />
        <Route path="/info" element={<InfoCenter />} />
        <Route path="/info/:subsection" element={<InfoSubsection />} />
        <Route path="/info/:subsection/:content" element={<InfoPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
