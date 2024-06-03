import { useState, useEffect } from 'react';
import { initialCollections } from '../utils/collections';

export const useGetCards = () => {
  const initialSelectedCard =
    JSON.parse(localStorage.getItem('selectedCard')) || {};
  const initialSelectedCardUrl =
    JSON.parse(localStorage.getItem('selectedCardUrl')) || '';
  const initialSelectedCatalogSection =
    JSON.parse(localStorage.getItem('selectedCatalogSection')) || [];
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const initialSelectedInfoCard =
    JSON.parse(localStorage.getItem('selectedInfoCard')) || [];

  const [selectedCard, setSelectedCard] = useState(initialSelectedCard);
  const [selectedInfoCard, setSelectedInfoCard] = useState(
    initialSelectedInfoCard
  );
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

  const handleInfoCardClick = (card) => {
    setSelectedInfoCard(card);
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
    localStorage.setItem('selectedInfoCard', JSON.stringify(selectedInfoCard));
  }, [selectedInfoCard]);

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

  return {
    selectedInfoCard,
    handleCardClick,
    handleInfoCardClick,
    handleCatalogSectionClick,
    isLiked,
    handleLikeClick,
    fromFavoritesUrl,
    modifiedList,
    favorites,
    selectedCatalogSection,
    selectedCard,
    unfavoritesClick,
  };
};
