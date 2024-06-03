// import { Link } from 'react-router-dom';
import './AboutUs.css';
import PageHeader from '../PageHeader/PageHeader';
// import BreadcrumbsNew from '../BreadcrumbsNew/BreadcrumbsNew';
import aximaBrand from '../../images/section-content/f361578da1f3f29257c4090d7a7e82d6_708x432x0.jpg';
import modernization from '../../images/section-content/modernization1jpg.jpg';
import assortment from '../../images/section-content/assortment.jpg';

function AboutUs() {
  return (
    <div className="about">
      <PageHeader header={'О нас'} />

      {/* <div className="breadcrumbs">
        <Link to="/">Главная</Link>
        <span> &rsaquo; О нас</span>
      </div> */}
      {/* <BreadcrumbsNew /> */}

      <section className="about__brand" aria-label="brand">
        <div className="about__brand-wrap">
          <h2 className="about__brand-title">Бренд AXIMA</h2>
          <p className="about__brand-text">
            <span className="about__brand-text about__brand-text_span">
              Новая торговая марка&nbsp;<br></br>
            </span>
            под которой выпускается керамическая плитка и керамогранит ОАО
            «Волгоградский Керамический Завод»
          </p>
          <p className="about__brand-text">
            <span className="about__brand-text about__brand-text_span">
              Гарантия качества&nbsp;<br></br>
            </span>
            и ответственность перед потребителем
          </p>
          <p className="about__brand-text">
            <span className="about__brand-text about__brand-text_span">
              Передовые технологии&nbsp;<br></br>
            </span>
            и самые актуальные дизайны
          </p>
        </div>
        <img
          src={aximaBrand}
          alt="Фото AXIMA"
          className="about__brand-image"
        ></img>
      </section>
      <section className="about__factory" aria-label="factory">
        <h2 className="about__factory-title">
          ОАО &laquo;Волгоградский Керамический Завод&raquo;
        </h2>
        <p className="about__factory-text">
          современное, успешное предприятие, один из&nbsp;крупнейших российских
          производителей глазурованной керамической плитки для внутренней
          облицовки стен и&nbsp;пола, декоративных элементов, керамического
          гранита и&nbsp;санитарной керамики.
        </p>
        <h3 className="about__factory-subtitle">История завода</h3>
        <p className="about__factory-text">
          История завода насчитывает более шести десятков лет&nbsp;&mdash;
          в&nbsp;1953-м году началось строительство керамического комбината
          на&nbsp;юге Волгограда, на&nbsp;тот момент Сталинграда. Первая партия
          керамической плитки была выпущена в&nbsp;декабре 1959-го года.
        </p>
      </section>
      <section className="about__modernization" aria-label="modernization">
        <img
          src={modernization}
          alt="Фото Модернизация"
          className="about__modernization-image"
        ></img>
        <div className="about__modernization-wrap">
          <h2 className="about__modernization-title">Модернизация</h2>
          <p className="about__modernization-text">
            Недавно предприятие осуществило глобальную реконструкцию
            с&nbsp;полной заменой оборудования и&nbsp;внедрением инновационных
            технологий производства керамической плитки, керамогранита
            и&nbsp;изделий из&nbsp;санфаянса.
          </p>
          <p className="about__modernization-text">
            В&nbsp;настоящее время завод оснащён итальянскими линиями
            &laquo;SACMI&raquo; и&nbsp;&laquo;KEMAC&raquo;.
          </p>
          <p className="about__modernization-text">
            В&nbsp;производстве используется сырье из&nbsp;Италии
            и&nbsp;Испании. Техническое обслуживание и&nbsp;контроль работы
            оборудования осуществляется непосредственно европейскими
            специалистами.
          </p>
        </div>
      </section>
      <section className="about__production" aria-label="factory">
        <h3 className="about__production-title">Объем производства</h3>
        <p className="about__production-text">
          Предприятие добилось высоких показателей по&nbsp;качеству продукции,
          значительно увеличились производственные мощности&nbsp;&mdash; сегодня
          производительность предприятия составляет:
        </p>
        <ul className="about__production-digits">
          <li className="about__production-column">
            <h3 className="about__production-digit">
              12 млн м
              <sup>
                <small>2</small>
              </sup>
            </h3>
            <p className="about__production-text about__production-text_in-cell">
              в&nbsp;год керамической плитки
            </p>
          </li>
          <li className="about__production-column">
            <h3 className="about__production-digit">
              5 млн м
              <sup>
                <small>2</small>
              </sup>
            </h3>
            <p className="about__production-text about__production-text_in-cell">
              керамического гранита
            </p>
          </li>
          <li className="about__production-column">
            <h3 className="about__production-digit">450 000</h3>
            <p className="about__production-text about__production-text_in-cell">
              штук сантехнических изделий
            </p>
          </li>
        </ul>
      </section>
      <section className="about__quality" aria-label="quality">
        <h3 className="about__quality-title">Качество</h3>
        <ul className="about__quality-columns">
          <li className="about__quality-column">
            <p className="about__quality-text">
              Завод является неоднократным победителем в&nbsp;программе
              &laquo;Сто лучших товаров россии&raquo;.
            </p>
          </li>
          <li className="about__quality-column">
            <p className="about__quality-text">
              Вся продукция ОАО &laquo;ВКЗ&raquo; отвечает высоким мировым
              и&nbsp;отечественным стандартам, ГОСТам.
            </p>
          </li>
          <li className="about__quality-column">
            <p className="about__quality-text">
              Подтверждено паспортами и&nbsp;сертификатами качества, множеством
              дипломов и&nbsp;наград в&nbsp;области строительства
              и&nbsp;промышленности.
            </p>
          </li>
        </ul>
      </section>
      <section className="about__assortment" aria-label="assortment">
        <div className="about__assortment-wrap">
          <h2 className="about__assortment-title">
            Учитывая интересы и&nbsp;пожелания потребителей, ОАО
            &laquo;ВКЗ&raquo; постоянно совершенствует и&nbsp;расширяет свой
            ассортимент.
          </h2>
          <p className="about__assortment-text">
            <span className="about__assortment-text about__assortment-text_span">
              Дизайн&nbsp;
            </span>
            коллекций облицовочной и&nbsp;напольной плитки разрабатывается
            специализированными европейскими студиями.
          </p>
          <p className="about__assortment-text">
            <span className="about__assortment-text about__assortment-text_span">
              Эстетика,&nbsp;
            </span>
            экологичность и&nbsp;техническое совершенство керамических покрытий
            волгоградского завода позволяют использовать их&nbsp;в&nbsp;проектах
            самого высокого уровня.
          </p>
          <p className="about__assortment-text">
            <span className="about__assortment-text about__assortment-text_span">
              Новинки,&nbsp;
            </span>
            отвечающие последним трендам керамической моды, ежегодно выводятся
            предприятием на&nbsp;рынок.
          </p>
        </div>
        <img
          src={assortment}
          alt="Фото AXIMA"
          className="about__assortment-image"
        ></img>
      </section>
      <section className="about__video">
        <div className="about__video-container">
          <iframe
            className="about__video-iframe"
            src="https://www.youtube.com/embed/-66h_wxSWls?si=dsZkJxrTI7IN0iVD"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
