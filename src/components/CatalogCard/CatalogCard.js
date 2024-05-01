import './CatalogCard.css';
import { Link } from 'react-router-dom';

const CatalogCard = ({ name, link, category }) => {
  return (
    <article className="catalog-card" aria-label="Карточка">
      <Link to={category} className="catalog-card__link">
        <div className="catalog-card__image-container">
          <img className="catalog-card__image" src={link} alt={name} />
        </div>
        <div className="card__details">
          <p className="catalog-card__heading">{name}</p>
        </div>
      </Link>
    </article>
  );
};

export default CatalogCard;
