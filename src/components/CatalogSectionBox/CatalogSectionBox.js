import './CatalogSectionBox.css';
import CatalogSection from '../CatalogSection/CatalogSection';

const CatalogSectionBox = ({
  handleCardClick,
  handleCatalogSectionClick,
  list,
}) => {
  return (
    <section className="section" aria-label="Категории">
      {list.map((sectionData) => {
        const category = sectionData.find((i) => i.section).section;
        // console.log(category.id);

        return (
          <>
            <CatalogSection
              key={category.id}
              list={sectionData}
              category={category}
              handleCardClick={handleCardClick}
              handleCatalogSectionClick={handleCatalogSectionClick}
            />
          </>
        );
      })}
    </section>
  );
};

export default CatalogSectionBox;
