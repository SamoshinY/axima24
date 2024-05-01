import './Contacts.css';
import PageHeader from '../PageHeader/PageHeader';
import ShowOnMapButton from '../ShowOnMapButton/ShowOnMapButton';
import { useState } from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

function Contacts() {
  const [showOnMap, setShowOnMap] = useState(false);
  const handleShowOnMap = () => {
    setShowOnMap(!showOnMap);
  };

  return (
    <div className="contacts">
      <PageHeader header={'Контакты'} />
      <section className="contacts__box" aria-label='Раздел "Контакты"'>
        <article className="contacts__place">
          <h2 className="contacts__place-title">Офис</h2>
          <a href="tel:+74991706510" className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__tel-icon"></span>&nbsp; +7 391
              23-23-816
            </div>
          </a>
          <a href="mailto:axima24@mail.ru" className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__mail-icon"></span>
              &nbsp;axima24@mail.ru
            </div>
          </a>
          <div className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__geo-icon"></span>
              &nbsp;Красноярск, ул. Семафорная&nbsp;439&nbsp;стр.20/2
            </div>
          </div>
          <div className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__clocks-icon"></span>
              &nbsp;Пн&nbsp;&mdash;Пт 9:00&mdash;17:00<br></br> Сб&nbsp;&mdash;
              Вс &mdash;выходной
            </div>
          </div>
          <ShowOnMapButton
            handleShowOnMap={handleShowOnMap}
            showOnMap={showOnMap}
          />
        </article>
        <article className="contacts__place">
          <h2 className="contacts__place-title">Магазин</h2>
          <a href="tel:+74991706510" className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__tel-icon"></span>&nbsp;+7 391 23-23-816
            </div>
          </a>
          <a href="mailto:axima24@mail.ru" className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__mail-icon"></span>
              &nbsp;axima24@mail.ru
            </div>
          </a>
          <div className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__geo-icon"></span>
              &nbsp;Красноярск, ул.&nbsp;Калинина 73Г
            </div>
          </div>
          <div className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__clocks-icon"></span>
              &nbsp;Пн&nbsp;&mdash;Пт 9:00&mdash;17:00<br></br> Сб&nbsp;&mdash;
              Вс &mdash;выходной
            </div>
          </div>
        </article>
        <article className="contacts__place">
          <h2 className="contacts__place-title">Склад</h2>
          <a href="tel:+74991706510" className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__tel-icon"></span>&nbsp;+7 499 170-65-10
            </div>
          </a>
          <a href="mailto:axima24@mail.ru" className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__mail-icon"></span>
              &nbsp;axima24@mail.ru
            </div>
          </a>
          <div className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__geo-icon"></span>
              &nbsp;Москва, Рязанский пр-т, д.&nbsp;61
            </div>
          </div>
          <div className="contacts__item">
            <div className="contacts__item-wrap">
              <span className="contacts__clocks-icon"></span>
              &nbsp;Пн&nbsp;&mdash;Пт 8:00&mdash;17:00<br></br> Сб&nbsp;&mdash;
              Вс &mdash;выходной
            </div>
          </div>
        </article>
      </section>
      <div>
        {showOnMap && (
          <YMaps>
            <Map
              defaultState={{
                center: [56.001546220214564, 92.95483926531962],
                zoom: 15,
              }}
              className="contacts__map"
            >
              <Placemark geometry={[56.001546220214564, 92.95483926531962]} />
            </Map>
          </YMaps>
        )}
      </div>
    </div>
  );
}

export default Contacts;
