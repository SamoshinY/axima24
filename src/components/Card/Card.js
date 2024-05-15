import './Card.css';
import { Link, useLocation } from 'react-router-dom';

const Card = ({ card, url, handleCardClick, unfavoritesClick }) => {
  const location = useLocation();
  const onFavoritesPage = location.pathname === '/favorites';
  // убрать константы в отдельный файл, чтобы не дублировать код

  const handleClick = () => {
    handleCardClick(card, url);
  };

  const handleUnfavoriteClick = () => {
    unfavoritesClick(card);
  };

  return (
    <article className="card" aria-label="Карточка">
      <Link to={url} className="card__link" onClick={handleClick}>
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
      {onFavoritesPage && (
        <div className="card__details-like-wrap">
          <button
            type="button"
            className="card__details-unfavorites"
            onClick={handleUnfavoriteClick}
          ></button>
        </div>
      )}
    </article>
  );
};

export default Card;
