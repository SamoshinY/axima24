import './CatalogSection.css';
import { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import { useParams } from 'react-router-dom';
import { categorys } from '../../utils/categorys';
import { collections } from '../../utils/collections';
import CardList from '../CardList/CardList';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';

const CatalogSection = () => {
  let { category } = useParams();
  const section = categorys.find((c) => c.path === category);

  const sectionList = collections.filter((collection) =>
    collection.category.some((value) => value === section.name)
  );

  const [sizeFilter, setSizeFilter] = useState(sectionList);

  const handleFilterButtonClick = (event) => {
    const filteredSizeList = sectionList.filter(
      (item) =>
        item?.size === event.target.name ||
        'Все размеры' === event.target.name ||
        'Все' === event.target.name
    );
    setSizeFilter(filteredSizeList);
    console.log(event.target.name);
  };

  const cardList = sizeFilter.map((card) => {
    return <Card card={card} url={card.url} key={card.id} />;
  });

  return (
    <div className="catalog-section" aria-label="Раздел каталога">
      <PageHeader header={section.name} />
      <Filter
        initialList={sectionList}
        handleButtonClick={handleFilterButtonClick}
      />
      <CardList cardList={cardList} />
    </div>
  );
};

export default CatalogSection;
