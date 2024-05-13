import './Main.css';
import SliderMain from '../Slider/SliderMain';
import CatalogSectionBox from '../CatalogSectionBox/CatalogSectionBox';
import InfoCenter from '../InfoCenter/InfoCenter';
import PromoSection from '../PromoSection/PromoSection';

function Main({ categorizedList, handleCardClick, handleCatalogSectionClick }) {
  const selectedCategorysList = categorizedList.filter((item) =>
    item.some(
      (element) =>
        element.section.name === 'Керамическая плитка AXIMA' ||
        element.section.name === 'Керамогранит AXIMA' ||
        element.section.name === 'Напольная плитка AXIMA'
    )
  );

  return (
    <div className="Main">
      <SliderMain />
      <CatalogSectionBox
        list={selectedCategorysList}
        handleCardClick={handleCardClick}
        handleCatalogSectionClick={handleCatalogSectionClick}
      />

      <PromoSection />
      <InfoCenter />
    </div>
  );
}

export default Main;
