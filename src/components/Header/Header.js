import './Header.css';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import projectLogo from '../../images/headerLogo.svg';

const Header = ({ isLoggedIn, isOpen, onClose, onOpenMobileMenu }) => {
  return (
    <Switch>
      <Route exact path="/">
        {isLoggedIn ? (
          <header className="header header_type_grid">
            <div className="header__grid-wrap header__grid-wrap_type_start">
              {' '}
              <Link to="/">
                <img
                  className="header__logo"
                  src={projectLogo}
                  alt="Логотип сервиса Movies Explorer"
                />
              </Link>
            </div>
            <Navigation isOpen={isOpen} onClose={onClose} />
            <div className="header__grid-wrap header__grid-wrap_type_end">
              {' '}
              <Link
                to="/profile"
                className="header__auth-container header__auth-container_type_hide header__auth-container_type_profile"
              >
                <p className="header__user-data">Аккаунт</p>
                <div className="header__auth-pic" />
              </Link>
            </div>
            <button
              type="button"
              className="header__menu-burger-container"
              onClick={isOpen ? onClose : onOpenMobileMenu}
            >
              <span
                className={`header__menu-burger-button ${
                  isOpen && 'header__menu-burger-button_type_close'
                }`}
              />
            </button>
          </header>
        ) : (
          <header className="header">
            <Link to="/">
              <img
                className="header__logo"
                src={projectLogo}
                alt="Логотип сервиса Movies Explorer"
              />
            </Link>
            <nav className="header__auth-container">
              <Link
                to="/signup"
                className="header__auth-link header__auth-link_type_signup"
              >
                Регистрация
              </Link>
              <Link
                to="/signin"
                className="header__auth-link header__auth-link_type_signin"
              >
                Войти
              </Link>
            </nav>
          </header>
        )}
      </Route>
      <Route path={['/movies', '/saved-movies', '/profile']}>
        <header className="header header_type_grid">
          <div className="header__grid-wrap header__grid-wrap_type_start">
            {' '}
            <Link to="/">
              <img
                className="header__logo"
                src={projectLogo}
                alt="Логотип сервиса Movies Explorer"
              />
            </Link>
          </div>
          <Navigation isOpen={isOpen} onClose={onClose} />
          <div className="header__grid-wrap header__grid-wrap_type_end">
            {' '}
            <Link
              to="/profile"
              className="header__auth-container header__auth-container_type_hide header__auth-container_type_profile"
            >
              <p className="header__user-data">Аккаунт</p>
              <div className="header__auth-pic" />
            </Link>
          </div>
          <button
            type="button"
            className="header__menu-burger-container"
            onClick={isOpen ? onClose : onOpenMobileMenu}
          >
            <span
              className={`header__menu-burger-button ${
                isOpen && 'header__menu-burger-button_type_close'
              }`}
            />
          </button>
        </header>
      </Route>
    </Switch>
  );
};

export default Header;
