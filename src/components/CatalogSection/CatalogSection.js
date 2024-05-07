import './CatalogSection.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import CardList from '../CardList/CardList';
import MoreButton from '../MoreButton/MoreButton';
import Filter from '../Filter/Filter';
import { usePagination } from '../../hooks/usePagination';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const CatalogSection = ({
  category,
  list,
  handleCardClick,
  handleCatalogSectionClick,
}) => {
  const location = useLocation();

  const [sizeFilter, setSizeFilter] = useState(list);

  const handleFilterButtonClick = (event) => {
    const filteredSizeList = list.filter(
      (item) =>
        item?.size === event.target.name ||
        'Все размеры' === event.target.name ||
        'Все' === event.target.name
    );
    setSizeFilter(filteredSizeList);
  };

  const { handleShowMoreCards, cardsToShow, count, chunkSize } =
    usePagination(sizeFilter);

  return (
    <section
      className={location.pathname === '/' ? 'section' : 'section section_dark'}
      aria-label='Раздел "Карточки"'
    >
      {location.pathname === '/' && <SectionHeader caption={category.name} />}
      {location.pathname !== '/' && (
        <Filter
          initialList={list}
          handleButtonClick={handleFilterButtonClick}
        />
      )}
      <CardList
        cardList={cardsToShow}
        url={`catalog/${category.path}`}
        handleCardClick={handleCardClick}
      />
      <div className="section__wrap-buttons">
        {sizeFilter.length > count
          ? sizeFilter.length > chunkSize && (
              <MoreButton handleShowMoreCards={handleShowMoreCards} />
            )
          : null}
        {location.pathname === '/' && (
          <Link
            to={`catalog/${category.path}`}
            className="section__link-button"
            onClick={() => {
              handleCatalogSectionClick(category);
            }}
          >
            Перейти в раздел
          </Link>
        )}
      </div>
    </section>
  );
};

export default CatalogSection;
