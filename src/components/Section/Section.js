import './Section.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import CardList from '../CardList/CardList';
import MoreButton from '..//MoreButton/MoreButton';
import { usePagination } from '../../hooks/usePagination';
import { Link } from 'react-router-dom';

const Section = ({
  category,
  list,
  handleCardClick,
  handleCatalogSectionClick,
}) => {
  const { handleShowMoreCards, cardsToShow, count, chunkSize } =
    usePagination(list);

  const handleToSectionClick = () => {
    handleCatalogSectionClick(category);
  };

  return (
    <section className="section" aria-label='Раздел "Карточки"'>
      <SectionHeader caption={category.name} />
      <CardList
        cardList={cardsToShow}
        url={`catalog/${category.path}`}
        handleCardClick={handleCardClick}
      />
      <div className="section__wrap-buttons">
        {list.length > count
          ? list.length > chunkSize && (
              <MoreButton handleShowMoreCards={handleShowMoreCards} />
            )
          : null}
        <Link
          to={`catalog/${category.path}`}
          className="section__link-button"
          onClick={handleToSectionClick}
        >
          Перейти в раздел
        </Link>
      </div>
    </section>
  );
};

export default Section;
