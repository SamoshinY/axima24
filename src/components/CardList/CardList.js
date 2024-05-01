import './CardList.css';

const CardList = ({ cardList }) => {
  return (
    <div className="card-list">
      <section className="card-list__content" aria-label="Карточки">
        {cardList}
      </section>
    </div>
  );
};

export default CardList;
