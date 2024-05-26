import './FavoritesPage.css';
import CatalogSectionBox from '../CatalogSectionBox/CatalogSectionBox';
import PageHeader from '../PageHeader/PageHeader';

const FavoritesPage = ({ favorites, handleCardClick, unfavoritesClick }) => {
  return (
    <div className="favorites" aria-label='Страница "Избранное"'>
      <PageHeader header={'Избранное'} />
      <CatalogSectionBox
        list={favorites}
        handleCardClick={handleCardClick}
        unfavoritesClick={unfavoritesClick}
      />
    </div>
  );
};

export default FavoritesPage;
