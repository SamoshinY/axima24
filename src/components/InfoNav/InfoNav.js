import './InfoNav.css';
import { Link } from 'react-router-dom';

const InfoNav = () => {
  return (
    <section className="info-nav" aria-label="Блок навигации по странице">
      <nav className="info-nav__container">
        <div className="info-nav__wrap">
          <Link to="/info/news" className="info-nav__link">
            Новости
          </Link>
          <Link to="/info/articles" className="info-nav__link">
            Статьи
          </Link>
          <Link to="/info/events" className="info-nav__link">
            Мероприятия
          </Link>
        </div>
      </nav>
    </section>
  );
};

export default InfoNav;
