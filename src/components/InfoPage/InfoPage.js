import './InfoPage.css';
import PageHeader from '../PageHeader/PageHeader';

const InfoPage = ({ infoCard }) => {
  return (
    <>
      <PageHeader header={infoCard.title} />
      <div className="info-page" aria-label="Контент инфоцентра">
        <div className="info-page__wrap">
          <span className="info-page__subsection">
            {(infoCard.subsection === 'news' && 'Новости') ||
              (infoCard.subsection === 'articles' && 'Статьи') ||
              (infoCard.subsection === 'events' && 'Мероприятия')}
          </span>
          <span className="info-page__date">{infoCard.date}</span>
        </div>
        <div className="info-page__image-container">
          <img
            className="info-page__image"
            src={infoCard.img}
            alt={infoCard.title}
          />
        </div>
        <p className="info-page__subtitle">{infoCard.subtitle}</p>
      </div>
    </>
  );
};

export default InfoPage;
