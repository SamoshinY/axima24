import './CatalogSectionPage.css';
import { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import Filter from '../Filter/Filter';
import CatalogSection from '../CatalogSection/CatalogSection';

const CatalogSectionPage = ({
  collections,
  category,
  handleCardClick,
  handleCatalogSectionClick,
}) => {
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
      <CatalogSection
        category={category}
        list={sizeFilter}
        handleCardClick={handleCardClick}
        handleCatalogSectionClick={handleCatalogSectionClick}
      />
    </div>
  );
};

export default CatalogSectionPage;
