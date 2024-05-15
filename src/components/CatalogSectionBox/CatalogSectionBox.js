import { useLocation } from 'react-router-dom';
import './CatalogSectionBox.css';
import CatalogSection from '../CatalogSection/CatalogSection';

const CatalogSectionBox = ({
  handleCardClick,
  handleCatalogSectionClick,
  list,
  unfavoritesClick,
  selectedCatalogSection,
}) => {
  const location = useLocation();
  const onMainPage = location.pathname === '/';
  const onFavoritesPage = location.pathname === '/favorites';

  const getCategorizedList = (initialList) =>
    Object.values(
      initialList.reduce((acc, value) => {
        const key = value.section.name;
        if (!acc[key]) acc[key] = [value];
        else acc[key].push(value);
        return acc;
      }, {})
    );

  const categorizedСollections = getCategorizedList(list);

  const getCatalogSectionList = (category) => {
    return categorizedСollections.filter((list) => {
      return list.find((i) => i.section).section.name === category.name;
    });
  };

  const selectedCategorysList = categorizedСollections.filter((item) =>
    item.some(
      (element) =>
        element.section.name === 'Керамическая плитка AXIMA' ||
        element.section.name === 'Керамогранит AXIMA' ||
        element.section.name === 'Напольная плитка AXIMA'
    )
  );

  let resultList;
  switch (true) {
    case onMainPage:
      resultList = selectedCategorysList;
      break;
    case onFavoritesPage:
      resultList = categorizedСollections;
      break;
    default:
      resultList = getCatalogSectionList(selectedCatalogSection);
  }

  return (
    <section className="section" aria-label="Категории">
      {resultList.map((sectionData) => {
        const category = sectionData.find((i) => i.section).section;

        return (
          <>
            <CatalogSection
              key={category.id}
              list={sectionData}
              category={category}
              handleCardClick={handleCardClick}
              handleCatalogSectionClick={handleCatalogSectionClick}
              unfavoritesClick={unfavoritesClick}
            />
          </>
        );
      })}
    </section>
  );
};

export default CatalogSectionBox;
