import './InfoSubsection.css';
import PageHeader from '../PageHeader/PageHeader';
import { useParams } from 'react-router-dom';
import { infocenter } from '../../utils/infocenter';
import InfoCard from '../InfoCard/InfoCard';

const InfoSubsection = () => {
  let { subsection } = useParams();
  const filteredList = infocenter.filter((f) => f.subsection === subsection);

  return (
    <div className="info-subsection" aria-label="Раздел каталога">
      <PageHeader
        header={
          (subsection === 'news' && 'Новости') ||
          (subsection === 'articles' && 'Статьи') ||
          (subsection === 'events' && 'Мероприятия')
        }
      />
      <section
        className="info-subsection__content"
        aria-label="Подраздел инфоцентра"
      >
        {filteredList.map((card) => {
          return (
            <article key={card.id}>
              <InfoCard card={card} url={card.url} />
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default InfoSubsection;
