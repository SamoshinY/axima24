import './Catalog.css';
import PageHeader from '../PageHeader/PageHeader';
import CatalogCard from '../CatalogCard/CatalogCard';

const Catalog = ({ categorys, handleCatalogCardClick }) => {
  return (
    <div className="catalog" aria-label='Раздел "Каталог"'>
      <PageHeader header={'Каталог'} />
      <section className="catalog__content" aria-label="Карточки">
        {categorys.map((card) => {
          return (
            <article className="catalog__section" key={card.id}>
              <CatalogCard
                card={card}
                handleCatalogCardClick={handleCatalogCardClick}
              />
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Catalog;
