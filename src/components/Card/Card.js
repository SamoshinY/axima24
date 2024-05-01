import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ card, url }) => {
  return (
    <article className="card" aria-label="Карточка">
      <Link to={url} className="card__link">
        <div className="card__labels">
          {card.label ? (
            <span className="card__label">{card.label}</span>
          ) : null}
        </div>
        <div className="card__image-container">
          <img className="card__image" src={card.top_photo} alt={card.name} />
        </div>
        <div className="card__details">
          <p className="card__heading">{card.name}</p>
          <p className="card__price">
            от {card.price} &#8381; &frasl; м
            <sup>
              <small>2</small>
            </sup>
          </p>
        </div>
      </Link>
    </article>
  );
};

export default Card;
