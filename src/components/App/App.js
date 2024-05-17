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
import CollectionPage from '../CollectionPage/CollectionPage';
import ScrollToTop from '../../hooks/scrollToTop';
import InfoCenter from '../InfoCenter/InfoCenter';
import InfoSubsection from '../InfoSubsection/InfoSubsection';
import InfoPage from '../InfoPage/InfoPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage';
import CatalogSectionBox from '../CatalogSectionBox/CatalogSectionBox';

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

  const unfavoritesClick = (card) => {
    const savedCard = favorites.length
      ? favorites?.find(({ name }) => name === card.name)
      : null;

    setFavorites([...favorites.filter((c) => c.name !== savedCard.name)]);
  };

  const handleLikeClick = (card, isLiked) => {
    if (!isLiked) {
      setFavorites([...favorites, card]);
    } else {
      unfavoritesClick(card);
    }
  };

  // Строка url, которая передается при клике на карточку со страницы "Избранное" (пока так)
  const fromFavoritesUrl = selectedCardUrl
    .split('/')
    .filter((x) => x)
    .slice(0, -1)
    .join('/');

  const modifiedList = initialCollections.reduce((acc, value) => {
    const keys = value.categorys;
    keys.map((key) => {
      const newValue = { ...value };
      newValue.section = key;
      delete newValue.categorys;
      // delete newValue.id;
      return acc.push(newValue);
    });

    return acc;
  }, []);

  return (
    <div className="App">
      <Header favorites={favorites} />
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route
            index
            element={
              <Main
                list={modifiedList}
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
            <CatalogSectionBox
              selectedCatalogSection={selectedCatalogSection}
              list={modifiedList}
              handleCardClick={handleCardClick}
              handleCatalogSectionClick={handleCatalogSectionClick}
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
              unfavoritesClick={unfavoritesClick}
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
