import './CardList.css';
import Card from '../Card/Card';

const CardList = ({ cardList, url, handleCardClick, unfavoritesClick }) => {
  return (
    <section className="card-list" aria-label="Карточки">
      {cardList.map((card) => {
        return (
          <Card
            card={card}
            url={`/${url}/${card.url}`}
            key={card.id}
            handleCardClick={handleCardClick}
            unfavoritesClick={unfavoritesClick}
          />
        );
      })}
    </section>
  );
};

export default CardList;
