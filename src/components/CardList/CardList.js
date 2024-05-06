import './CardList.css';
import Card from '../Card/Card';

const CardList = ({ cardList, url, handleCardClick }) => {
  return (
    <div className="card-list">
      <section className="card-list__content" aria-label="Карточки">
        {cardList.map((card) => {
          return (
            <Card
              card={card}
              url={`/${url}/${card.url}`}
              key={card.id}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </section>
    </div>
  );
};

export default CardList;
