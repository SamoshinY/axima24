import './Main.css';
import SliderMain from '../Slider/SliderMain';
import CatalogSectionBox from '../CatalogSectionBox/CatalogSectionBox';
import InfoCenter from '../InfoCenter/InfoCenter';
import PromoSection from '../PromoSection/PromoSection';

function Main({
  list,
  handleCardClick,
  handleCatalogSectionClick,
  handleInfoCardClick,
}) {
  return (
    <div className="Main">
      <SliderMain />
      <CatalogSectionBox
        list={list}
        handleCardClick={handleCardClick}
        handleCatalogSectionClick={handleCatalogSectionClick}
      />

      <PromoSection />
      <InfoCenter handleInfoCardClick={handleInfoCardClick} />
    </div>
  );
}

export default Main;
