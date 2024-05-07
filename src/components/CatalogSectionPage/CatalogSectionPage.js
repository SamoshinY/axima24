import './CatalogSectionPage.css';
import PageHeader from '../PageHeader/PageHeader';
import CatalogSection from '../CatalogSection/CatalogSection';

const CatalogSectionPage = ({ category, list, handleCardClick }) => {
  return (
    <div className="catalog-section" aria-label="Раздел каталога">
      <PageHeader header={category.name} />
      <CatalogSection
        category={category}
        list={list}
        handleCardClick={handleCardClick}
      />
    </div>
  );
};

export default CatalogSectionPage;
