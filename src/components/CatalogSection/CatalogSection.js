import './CatalogSection.css';
import { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import CardList from '../CardList/CardList';
import Filter from '../Filter/Filter';

const CatalogSection = ({ collections, category, handleCardClick }) => {
  const sectionList = collections.filter((collection) =>
    collection.category.some((value) => value === category.name)
  );

  const [sizeFilter, setSizeFilter] = useState(sectionList);

  const handleFilterButtonClick = (event) => {
    const filteredSizeList = sectionList.filter(
      (item) =>
        item?.size === event.target.name ||
        'Все размеры' === event.target.name ||
        'Все' === event.target.name
    );
    setSizeFilter(filteredSizeList);
  };

  return (
    <div className="catalog-section" aria-label="Раздел каталога">
      <PageHeader header={category.name} />
      <Filter
        initialList={sectionList}
        handleButtonClick={handleFilterButtonClick}
      />
      <CardList
        cardList={sizeFilter}
        url={`catalog/${category.path}`}
        handleCardClick={handleCardClick}
      />
    </div>
  );
};

export default CatalogSection;
