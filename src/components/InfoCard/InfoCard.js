import './InfoCard.css';
import { Link } from 'react-router-dom';

const InfoCard = ({ card, url, handleInfoCardClick }) => {
  const handleClick = () => {
    handleInfoCardClick(card);
  };
  return (
    <article className="info-card" aria-label="Карточка инфоцентра">
      <Link to={url} className="info-card__link" onClick={handleClick}>
        <div className="info-card__image-container">
          <img className="info-card__image" src={card.img} alt={card.title} />
        </div>
        <div className="info-card__details">
          <div className="info-card__wrap">
            <span className="info-card__subsection">
              {(card.subsection === 'news' && 'Новости') ||
                (card.subsection === 'articles' && 'Статьи') ||
                (card.subsection === 'events' && 'Мероприятия')}
            </span>
            <span className="info-card__date">{card.date}</span>
          </div>
          <h3 className="info-card__title">{card.title}</h3>
          <p className="info-card__subtitle">{card.subtitle}</p>
        </div>
      </Link>
    </article>
  );
};

export default InfoCard;
