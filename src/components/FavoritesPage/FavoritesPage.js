import './FavoritesPage.css';
import CatalogSectionBox from '../CatalogSectionBox/CatalogSectionBox';

const FavoritesPage = ({
  favorites,
  url,
  handleCardClick,
  handleCatalogSectionClick,
}) => {
  const categorizedList = Object.values(
    favorites.reduce((acc, value) => {
      const key = value.section.name;
      if (!acc[key]) acc[key] = [value];
      else acc[key].push(value);
      return acc;
    }, {})
  );

  return (
    <div className="favorites" aria-label='Страница "Избранное"'>
      <CatalogSectionBox
        list={categorizedList}
        handleCardClick={handleCardClick}
        handleCatalogSectionClick={handleCatalogSectionClick}
      />
    </div>
  );
};

export default FavoritesPage;
