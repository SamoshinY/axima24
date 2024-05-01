import './PromoSection.css';
import promo_pict from '../../images/section-content/promo-sectoon-pict.jpg';
import { Link } from 'react-router-dom';

const PromoSection = () => {
  return (
    <section className="promo" aria-label="Страницв товара">
      <div className="promo__unit promo__unit_red">
        <div className="promo__wrap">
          <h3 className="promo__heading">
            Качество, не требующее доказательств
          </h3>
          <img src={promo_pict} alt="Фото AXIMA" className="promo__image"></img>
        </div>
      </div>
      <div className="promo__unit">
        <div className="promo__wrap promo__wrap_right">
          <span className="promo__axima">
            Под брендом AXIMA производится глазурованная керамическая плитка для
            внутренней облицовки стен и пола, декоративные элементы и
            керамогранит.
          </span>
          <p className="promo__text">
            На производстве постоянно осуществляется модернизация оборудования,
            внедряются инновации, разрабатываются новые виды продукции,
            расширяется их ассортимент и качество, а технологии разрабатываются
            совместно с европейскими специалистами. Непрерывное
            совершенствование производственных процессов направленно на
            повышение удовлетворенности потребителей.
          </p>
          <p className="promo__text">
            Коллекции керамической плитки и керамогранита объединяют современные
            технологии, первоклассные материалы и восхитительные дизайны,
            учитывающие последние модные тенденции, с безупречным качеством
            готовой продукции.
          </p>
          <Link to={'/about'} className="promo__link">
            Подробнее
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
