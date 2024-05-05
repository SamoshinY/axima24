import './App.css';
import { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { categorys } from '../../utils/categorys';
import { collections } from '../../utils/collections';
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

  const [selectedCard, setSelectedCard] = useState({});
  const [selectedCatalogCard, setSelectedCatalogCard] = useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCatalogCardClick = (card) => {
    setSelectedCatalogCard(card);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={
              <Main
                categorys={categorys}
                collections={collections}
                handleCardClick={handleCardClick}
              />
            }
          />
        </Route>
        <Route
          path="/catalog"
          element={
            <Catalog
              categorys={categorys}
              handleCatalogCardClick={handleCatalogCardClick}
            />
          }
        />
        <Route
          path="/catalog/:category"
          element={
            <CatalogSection
              category={selectedCatalogCard}
              collections={collections}
              handleCardClick={handleCardClick}
            />
          }
        />
        <Route
          path="/catalog/:category/:collection"
          element={<CollectionPage collection={selectedCard} />}
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
