import './Section.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import CardList from '../CardList/CardList';
import MoreButton from '..//MoreButton/MoreButton';
import { usePagination } from '../../hooks/usePagination';
import { Link } from 'react-router-dom';

const Section = ({ caption, list, section_url, handleCardClick }) => {
  const { handleShowMoreCards, cardsToShow, count, chunkSize } =
    usePagination(list);

  console.log(list.length);

  return (
    <section className="section" aria-label='Раздел "Карточки"'>
      <SectionHeader caption={caption} />
      <CardList
        cardList={cardsToShow}
        url={`catalog/${section_url}`}
        handleCardClick={handleCardClick}
      />
      <div className="section__wrap-buttons">
        {list.length > count
          ? list.length > chunkSize && (
              <MoreButton handleShowMoreCards={handleShowMoreCards} />
            )
          : null}
        <Link to={`catalog/${section_url}`} className="section__link-button">
          Перейти в раздел
        </Link>
      </div>
    </section>
  );
};

export default Section;
