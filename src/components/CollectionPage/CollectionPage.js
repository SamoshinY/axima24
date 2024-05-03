import './CollectionPage.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { collections } from '../../utils/collections';
import BreadcrumbsMe from '../BreadcrumbsMe/BreadcrumbsMe';

const CollectionPage = () => {
  let { collection } = useParams();
  const product = collections.find((f) => f.url === collection);

  const [isLiked, setisLiked] = useState(false);

  const handleCardLike = () => {
    setisLiked(!isLiked);
  };

  const cardLikeButtonClassName = `collection-page__info-like ${
    isLiked && 'collection-page__info-like_active'
  }`;

  return (
    <div className="collection-page" aria-label="Страницв товара">
      <BreadcrumbsMe />
      <section className="collection-page__info">
        <div className="collection-page__info-like-wrap">
          <button
            type="button"
            className={cardLikeButtonClassName}
            onClick={handleCardLike}
          ></button>
          <span className="collection-page__info-like-text">В избранное</span>
        </div>
        {product.label ? (
          <span className="collection-page__label">{product.label}</span>
        ) : null}
        <img
          src={product.top_photo}
          alt="Фото AXIMA"
          className="collection-page__image"
        ></img>
        <div className="collection-page__wrap">
          <span className="collection-page__axima">Axima</span>
          <h2 className="collection-page__title">{product.name}</h2>
          <p className="collection-page__text">
            {product.surface_type
              ? `Тип поверхности: ${product.surface_type}`
              : null}
          </p>
        </div>
      </section>
      <section className="collection-page__details"></section>
    </div>
  );
};

export default CollectionPage;
