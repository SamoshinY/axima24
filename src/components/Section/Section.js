import './Section.css';
import SectionHeader from '../SectionHeader/SectionHeader';
import CardList from '../CardList/CardList';
import Card from '../Card/Card';
import MoreButton from '..//MoreButton/MoreButton';
import { usePagination } from '../../hooks/usePagination';
import { Link } from 'react-router-dom';

const Section = ({ caption, list, section_url }) => {
  const { handleShowMoreCards, cardsToShow, count, chunkSize } =
    usePagination(list);

  const cardList = cardsToShow.map((card) => {
    return (
      <Card
        card={card}
        url={`catalog/${section_url}/${card.url}`}
        key={card.id}
      />
    );
  });

  return (
    <section className="section" aria-label='Раздел "Карточки"'>
      <SectionHeader caption={caption} />
      <CardList cardList={cardList} />
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
