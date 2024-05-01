import './Catalog.css';
import PageHeader from '../PageHeader/PageHeader';
import CatalogCard from '../CatalogCard/CatalogCard';
import { categorys } from '../../utils/categorys';

const Catalog = () => {
  return (
    <div className="catalog" aria-label='Раздел "Каталог"'>
      <PageHeader header={'Каталог'} />
      <section className="catalog__content" aria-label="Карточки">
        {categorys.map((card) => {
          return (
            <article className="catalog__section" key={card.id}>
              <CatalogCard
                name={card.name}
                link={card.link}
                category={card.path}
              />
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Catalog;
