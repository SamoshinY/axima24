import './Main.css';
import SliderMain from '../Slider/SliderMain';
import CatalogSection from '../CatalogSection/CatalogSection';
import InfoCenter from '../InfoCenter/InfoCenter';
import PromoSection from '../PromoSection/PromoSection';

function Main({
  category,
  catalogSectionList,
  handleCardClick,
  handleCatalogSectionClick,
}) {
  return (
    <div className="Main">
      <SliderMain />
      <CatalogSection
        category={category(0)}
        list={catalogSectionList(category(0))}
        handleCardClick={handleCardClick}
        handleCatalogSectionClick={handleCatalogSectionClick}
      />
      <CatalogSection
        category={category(1)}
        list={catalogSectionList(category(1))}
        handleCardClick={handleCardClick}
        handleCatalogSectionClick={handleCatalogSectionClick}
      />
      <CatalogSection
        category={category(2)}
        list={catalogSectionList(category(2))}
        handleCardClick={handleCardClick}
        handleCatalogSectionClick={handleCatalogSectionClick}
      />
      <PromoSection />
      <InfoCenter />
    </div>
  );
}

export default Main;
