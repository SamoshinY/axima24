import './CatalogSection.css';
import PageHeader from '../PageHeader/PageHeader';
import { useParams } from 'react-router-dom';
import { categorys } from '../../utils/categorys';
import { collections } from '../../utils/collections';
import CardList from '../CardList/CardList';
import Card from '../Card/Card';

const CatalogSection = () => {
  let { category } = useParams();
  const section = categorys.find((f) => f.path === category);

  const filteredList = collections.filter((collection) =>
    collection.category.some((value) => value === section.name)
  );

  const cardList = filteredList.map((card) => {
    return <Card card={card} url={card.url} key={card.id} />;
  });

  return (
    <div className="catalog-section" aria-label="Раздел каталога">
      <PageHeader header={section.name} />
      <CardList cardList={cardList} />
    </div>
  );
};

export default CatalogSection;
