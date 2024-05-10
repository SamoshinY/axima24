import './App.css';
import { useState, useEffect } from 'react';
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

  const initialSelectedCard =
    JSON.parse(localStorage.getItem('selectedCard')) || {};
  const initialSelectedCardUrl =
    JSON.parse(localStorage.getItem('selectedCardUrl')) || '';

  const initialSelectedCatalogSection =
    JSON.parse(localStorage.getItem('selectedCatalogSection')) || [];

  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const [selectedCard, setSelectedCard] = useState(initialSelectedCard);

  const [selectedCardUrl, setSelectedCardUrl] = useState(
    initialSelectedCardUrl
  );
  const [selectedCatalogSection, setSelectedCatalogSection] = useState(
    initialSelectedCatalogSection
  );

  const [favorites, setFavorites] = useState(initialFavorites);

  const category = (i) => categorys[i];

  const catalogSectionList = (category) => {
    return initialCollections.filter((collection) =>
      collection.category.some((value) => value === category.name)
    );
  };
  const handleCardClick = (card, url) => {
    setSelectedCard(card);
    setSelectedCardUrl(url);
  };

  useEffect(() => {
    localStorage.setItem('selectedCard', JSON.stringify(selectedCard));
  }, [selectedCard]);

  useEffect(() => {
    localStorage.setItem('selectedCardUrl', JSON.stringify(selectedCardUrl));
  }, [selectedCardUrl]);

  const handleCatalogSectionClick = (section) => {
    setSelectedCatalogSection(section);
  };

  useEffect(() => {
    localStorage.setItem(
      'selectedCatalogSection',
      JSON.stringify(selectedCatalogSection)
    );
  }, [selectedCatalogSection]);

  // Избранное

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const isLiked = favorites.length
    ? Boolean(
        favorites?.find(({ name }) => {
          return name === selectedCard.name;
        })
      )
    : false;

  const handleLikeClick = (collection, isLiked) => {
    if (!isLiked) {
      setFavorites([...favorites, collection]);
    } else {
      const savedCard = favorites.length
        ? favorites?.find(({ name }) => name === collection.name)
        : null;
      setFavorites((state) => state.filter((c) => c.name !== savedCard.name));
    }
    // localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  // Строка url, которая передается при клике на карточку со страницы "Избранное" (пока так)
  const fromFavoritesUrl = selectedCardUrl
    .split('/')
    .filter((x) => x)
    .slice(0, -1)
    .join('/');

  return (
    <div className="App">
      <Header favorites={favorites} />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={
              <Main
                category={category}
                catalogSectionList={catalogSectionList}
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
              list={catalogSectionList(selectedCatalogSection)}
              handleCardClick={handleCardClick}
              url={selectedCardUrl}
            />
          }
        />
        <Route
          path="/catalog/:category/:collection"
          element={
            <CollectionPage
              collection={selectedCard}
              handleLikeClick={handleLikeClick}
              isLiked={isLiked}
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
              favorites={favorites}
              url={`${fromFavoritesUrl}`}
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
