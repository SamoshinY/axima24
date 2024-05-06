import './App.css';
import { useState } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { categorys } from '../../utils/categorys';
import { initialCollections } from '../../utils/collections';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import Contacts from '../Contacts/Contacts';
import CatalogPage from '../CatalogPage/CatalogPage';
import NotFound from '../NotFound/NotFound';
import CatalogSection from '../CatalogSection/CatalogSection';
import CollectionPage from '../CollectionPage/CollectionPage';
import ScrollToTop from '../../hooks/scrollToTop';
import InfoCenter from '../InfoCenter/InfoCenter';
import InfoSubsection from '../InfoSubsection/InfoSubsection';
import InfoPage from '../InfoPage/InfoPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';

function App() {
  ScrollToTop();

  // const [collections, setCollections] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedCatalogSection, setSelectedCatalogSection] = useState([]);
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCatalogSectionClick = (section) => {
    setSelectedCatalogSection(section);
  };

  const addToFavorites = (collection) => {
    setFavorites([...favorites, collection]);
  };

  // const addToFavorites = (collection, isLiked) => {
  //   if (!isLiked) {
  //     setFavorites([...favorites, collection]);
  //   } else {
  //     const savedCard = favorites.length
  //       ? favorites?.find(({ cardId }) => cardId === collection.name)
  //       : null;
  //     setFavorites((state) => state.filter((c) => c.name !== savedCard.name));
  //     localStorage.setItem('favorites', JSON.stringify(favorites));
  //   }
  // };

  // console.log(collections);

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
                collections={initialCollections}
                handleCardClick={handleCardClick}
                handleCatalogSectionClick={handleCatalogSectionClick}
              />
            }
          />
        </Route>
        <Route
          path="/catalog"
          element={
            <CatalogPage
              categorys={categorys}
              handleCatalogSectionClick={handleCatalogSectionClick}
            />
          }
        />
        <Route
          path="/catalog/:category"
          element={
            <CatalogSection
              category={selectedCatalogSection}
              collections={initialCollections}
              handleCardClick={handleCardClick}
            />
          }
        />
        <Route
          path="/catalog/:category/:collection"
          element={
            <CollectionPage
              collection={selectedCard}
              addToFavorites={addToFavorites}
            />
          }
        />
        <Route path="/info" element={<InfoCenter />} />
        <Route path="/info/:subsection" element={<InfoSubsection />} />
        <Route path="/info/:subsection/:content" element={<InfoPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              cardList={favorites}
              // url={`catalog/${section_url}`}
              handleCardClick={handleCardClick}
            />
          }
        />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
