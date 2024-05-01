import './InfoPage.css';
import PageHeader from '../PageHeader/PageHeader';
import { useParams } from 'react-router-dom';
import { infocenter } from '../../utils/infocenter';

const InfoPage = () => {
  let { content } = useParams();
  const article = infocenter.find((f) => f.url === content);

  return (
    <>
      <PageHeader header={article.title} />
      <div className="info-page" aria-label="Контент инфоцентра">
        <div className="info-page__wrap">
          <span className="info-page__subsection">
            {(article.subsection === 'news' && 'Новости') ||
              (article.subsection === 'articles' && 'Статьи') ||
              (article.subsection === 'events' && 'Мероприятия')}
          </span>
          <span className="info-page__date">{article.date}</span>
        </div>
        <div className="info-page__image-container">
          <img
            className="info-page__image"
            src={article.img}
            alt={article.title}
          />
        </div>
        <p className="info-page__subtitle">{article.subtitle}</p>
      </div>
    </>
  );
};

export default InfoPage;
