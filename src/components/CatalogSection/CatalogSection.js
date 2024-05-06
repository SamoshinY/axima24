import './CatalogSection.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import CardList from '../CardList/CardList';
import MoreButton from '../MoreButton/MoreButton';
import { usePagination } from '../../hooks/usePagination';
import { Link, useLocation } from 'react-router-dom';

const CatalogSection = ({
  category,
  list,
  handleCardClick,
  handleCatalogSectionClick,
}) => {
  const location = useLocation();

  const { handleShowMoreCards, cardsToShow, count, chunkSize } =
    usePagination(list);

  const handleToSectionClick = () => {
    handleCatalogSectionClick(category);
  };

  return (
    <section
      className={location.pathname === '/' ? 'section' : 'section section_dark'}
      aria-label='Раздел "Карточки"'
    >
      {location.pathname === '/' && <SectionHeader caption={category.name} />}
      <CardList
        cardList={cardsToShow}
        url={`catalog/${category.path}`}
        handleCardClick={handleCardClick}
      />
      <div className="section__wrap-buttons">
        {list.length > count
          ? list.length > chunkSize && (
              <MoreButton handleShowMoreCards={handleShowMoreCards} />
            )
          : null}
        {location.pathname === '/' && (
          <Link
            to={`catalog/${category.path}`}
            className="section__link-button"
            onClick={handleToSectionClick}
          >
            Перейти в раздел
          </Link>
        )}
      </div>
    </section>
  );
};

export default CatalogSection;
