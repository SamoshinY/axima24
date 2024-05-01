import './InfoCenter.css';
import PageHeader from '../PageHeader/PageHeader';
import SectionHeader from '../SectionHeader/SectionHeader';
import InfoCard from '../InfoCard/InfoCard';
import MoreButton from '..//MoreButton/MoreButton';
import { infocenter } from '../../utils/infocenter';
import { useLocation } from 'react-router-dom';
import { usePagination } from '../../hooks/usePagination';

const InfoCenter = () => {
  const location = useLocation();
  const { handleShowMoreCards, cardsToShow, count, chunkSize } =
    usePagination(infocenter);

  return (
    <div className="info" aria-label='Раздел "Инфоцентр"'>
      {location.pathname === '/' ? (
        <SectionHeader caption="Инфоцентр" />
      ) : (
        <PageHeader header={'Инфоцентр'} />
      )}
      <section
        className="info__content"
        aria-label="Карточки раздела инфоцентр"
      >
        {cardsToShow.map((card) => {
          return (
            <article className="info__section" key={card.id}>
              <InfoCard
                card={card}
                url={`info/${card.subsection}/${card.url}`}
              />
            </article>
          );
        })}
        {infocenter.length > count
          ? infocenter.length > chunkSize && (
              <MoreButton handleShowMoreCards={handleShowMoreCards} />
            )
          : null}
      </section>
    </div>
  );
};

export default InfoCenter;
