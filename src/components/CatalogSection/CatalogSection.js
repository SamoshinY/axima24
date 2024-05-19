import { Link, useLocation } from 'react-router-dom';
import { usePagination } from '../../hooks/usePagination';
import { useFilter } from '../../hooks/useFilter';
import './CatalogSection.css';
import PageHeader from '../PageHeader/PageHeader';
import SectionHeader from '../SectionHeader/SectionHeader';
import CardList from '../CardList/CardList';
import MoreButton from '../MoreButton/MoreButton';
import FilterButtonGroup from '../FilterButtonGroup/FilterButtonGroup';

const CatalogSection = ({
  category,
  list,
  handleCardClick,
  handleCatalogSectionClick,
  unfavoritesClick,
}) => {
  const location = useLocation();
  const onMainPage = location.pathname === '/';
  const onFavoritesPage = location.pathname === '/favorites';

  const { filteredList, buttons, handleFilterButtonClick } = useFilter(
    list,
    'size'
  );

  const { handleShowMoreCards, cardsToShow, count, chunkSize } =
    usePagination(filteredList);

  return (
    <>
      {!(onMainPage || onFavoritesPage) && (
        <PageHeader header={category.name} />
      )}
      <section
        className={
          onMainPage || onFavoritesPage ? 'section' : 'section section_dark'
        }
        aria-label='Раздел "Карточки"'
      >
        {(onMainPage || onFavoritesPage) && (
          <SectionHeader caption={category.name} />
        )}
        {!(onMainPage || onFavoritesPage) && (
          <FilterButtonGroup
            buttons={buttons}
            handleFilterButtonClick={handleFilterButtonClick}
          />
        )}
        <CardList
          cardList={cardsToShow}
          url={`catalog/${category.path}`}
          handleCardClick={handleCardClick}
          unfavoritesClick={unfavoritesClick}
        />
        <div className="section__wrap-buttons">
          {filteredList.length > count
            ? filteredList.length > chunkSize && (
                <MoreButton handleShowMoreCards={handleShowMoreCards} />
              )
            : null}
          {onMainPage && (
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
    </>
  );
};

export default CatalogSection;
