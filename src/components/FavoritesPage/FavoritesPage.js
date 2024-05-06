import './FavoritesPage.css';
import PageHeader from '../PageHeader/PageHeader';
import CardList from '../CardList/CardList';

const FavoritesPage = ({ cardList, url, handleCardClick }) => {
  return (
    <div className="favorites" aria-label='Страница "Избранное"'>
      <PageHeader header={'Избранное'} />
      <section className="favorites__content" aria-label="Карточки">
        <CardList
          cardList={cardList}
          url={url}
          handleCardClick={handleCardClick}
        />
      </section>
    </div>
  );
};

export default FavoritesPage;
