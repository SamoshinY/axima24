import './Main.css';
import SliderMain from '../Slider/SliderMain';
import CatalogSection from '../CatalogSection/CatalogSection';
import InfoCenter from '../InfoCenter/InfoCenter';
import PromoSection from '../PromoSection/PromoSection';

function Main({
  categorys,
  collections,
  handleCardClick,
  handleCatalogSectionClick,
}) {
  const filteredList = (i) => {
    return collections.filter((collection) =>
      collection.category.some((value) => value === categorys[i].name)
    );
  };

  return (
    <div className="Main">
      <SliderMain />
      <CatalogSection
        category={categorys[0]}
        list={filteredList(0)}
        handleCardClick={handleCardClick}
        handleCatalogSectionClick={handleCatalogSectionClick}
      />
      <CatalogSection
        category={categorys[1]}
        list={filteredList(1)}
        handleCardClick={handleCardClick}
        handleCatalogSectionClick={handleCatalogSectionClick}
      />
      <CatalogSection
        category={categorys[2]}
        list={filteredList(2)}
        handleCardClick={handleCardClick}
        handleCatalogSectionClick={handleCatalogSectionClick}
      />
      <PromoSection />
      <InfoCenter />
    </div>
  );
}

export default Main;
