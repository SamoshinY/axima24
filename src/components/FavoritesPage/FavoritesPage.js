import './FavoritesPage.css';
import CatalogSectionBox from '../CatalogSectionBox/CatalogSectionBox';

const FavoritesPage = ({ favorites, handleCardClick, unfavoritesClick }) => {
  return (
    <div className="favorites" aria-label='Страница "Избранное"'>
      <CatalogSectionBox
        list={favorites}
        handleCardClick={handleCardClick}
        unfavoritesClick={unfavoritesClick}
      />
    </div>
  );
};

export default FavoritesPage;
