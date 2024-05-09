import './Navigation.css';
import favoritesIcon from '../../images/favorite_icon.svg';
import { NavLink } from 'react-router-dom';

const Navigation = ({ isOpen, handleClick, favorites }) => {
  return (
    <section
      className={isOpen ? 'navigation navigation_active' : 'navigation'}
      aria-label="Блок навигации по странице"
    >
      <nav
        className={`navigation__container ${
          isOpen && 'navigation__container_active'
        }`}
      >
        <div className="navigation__wrap">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `navigation__main-link ${
                isActive ? 'navigation__main-link_active' : ''
              }`
            }
            onClick={handleClick}
          >
            Главная
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `navigation__link ${isActive ? 'navigation__link_active' : ''}`
            }
            onClick={handleClick}
          >
            О нас
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `navigation__link ${isActive ? 'navigation__link_active' : ''}`
            }
            onClick={handleClick}
          >
            Каталог
          </NavLink>
          <NavLink
            to="/contacts"
            className={({ isActive }) =>
              `navigation__link ${isActive ? 'navigation__link_active' : ''}`
            }
            onClick={handleClick}
          >
            Контакты
          </NavLink>
        </div>
        <div className="navigation__wrap">
          <div className="navigation__contact">
            <p className="navigation__contact-text">Отдел продаж</p>
            <p className="navigation__contact-tel">
              +7&nbsp;391&nbsp;23-23-816
            </p>
          </div>
          <NavLink
            to="/favorites"
            className="navigation__favorites-link"
            onClick={handleClick}
          >
            <div className="navigation__favorites-icon-wrap">
              {Boolean(favorites.length) && (
                <div className="navigation__favorites-counter">
                  {favorites.length}
                </div>
              )}
              <img
                src={favoritesIcon}
                className="navigation__favorites-icon"
                alt="Войти в профиль"
              ></img>
              <span className="navigation__favorites-label">Избранное</span>
            </div>
          </NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Navigation;
