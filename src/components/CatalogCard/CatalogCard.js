import './CatalogCard.css';
import { Link } from 'react-router-dom';

const CatalogCard = ({ card, handleCatalogSectionClick }) => {
  const handleClick = () => {
    handleCatalogSectionClick(card);
  };
  return (
    <article className="catalog-card" aria-label="Карточка">
      <Link to={card.path} className="catalog-card__link" onClick={handleClick}>
        <div className="catalog-card__image-container">
          <img
            className="catalog-card__image"
            src={card.link}
            alt={card.name}
          />
        </div>
        <div className="card__details">
          <p className="catalog-card__heading">{card.name}</p>
        </div>
      </Link>
    </article>
  );
};

export default CatalogCard;
