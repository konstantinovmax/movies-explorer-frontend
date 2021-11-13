import styles from './Header.module.scss';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Navigation from '../Navigation/Navigation';
import projectLogo from '../../images/headerLogo.svg';

const Header = ({ isLoggedIn, isOpen, onClose, onOpenMobileMenu }) => {
  return (
    <Switch>
      <Route exact path="/">
        {isLoggedIn ? (
          <header className={classNames(styles.root, styles.grid)}>
            <div className={classNames(styles.gridWrap, styles.gridWrapStart)}>
              {' '}
              <Link to="/">
                <img
                  className={styles.logo}
                  src={projectLogo}
                  alt="Логотип сервиса Movies Explorer"
                />
              </Link>
            </div>
            <Navigation isOpen={isOpen} onClose={onClose} />
            <div className={classNames(styles.gridWrap, styles.gridWrapEnd)}>
              {' '}
              <Link
                to="/profile"
                className={classNames(
                  styles.authContainer,
                  styles.authContainerHidden,
                  styles.authContainerProfile
                )}
              >
                <p className={styles.userData}>Аккаунт</p>
                <div className={styles.userIcon} />
              </Link>
            </div>
            <button
              type="button"
              className={styles.hamburgerMenuContainer}
              onClick={isOpen ? onClose : onOpenMobileMenu}
            >
              <span
                className={classNames(
                  styles.button,
                  isOpen && styles.closeButton
                )}
              />
            </button>
          </header>
        ) : (
          <header className={styles.root}>
            <Link to="/">
              <img
                className={styles.logo}
                src={projectLogo}
                alt="Логотип сервиса Movies Explorer"
              />
            </Link>
            <nav className={styles.authContainer}>
              <Link
                to="/signup"
                className={classNames(styles.link, styles.linkSignUp)}
              >
                Регистрация
              </Link>
              <Link
                to="/signin"
                className={classNames(styles.link, styles.linkSignIn)}
              >
                Войти
              </Link>
            </nav>
          </header>
        )}
      </Route>
      <Route path={['/movies', '/saved-movies', '/profile']}>
        <header className={classNames(styles.root, styles.grid)}>
          <div className={classNames(styles.gridWrap, styles.gridWrapStart)}>
            {' '}
            <Link to="/">
              <img
                className={styles.logo}
                src={projectLogo}
                alt="Логотип сервиса Movies Explorer"
              />
            </Link>
          </div>
          <Navigation isOpen={isOpen} onClose={onClose} />
          <div className={classNames(styles.gridWrap, styles.gridWrapEnd)}>
            {' '}
            <Link
              to="/profile"
              className={classNames(
                styles.authContainer,
                styles.authContainerHidden,
                styles.authContainerProfile
              )}
            >
              <p className={styles.userData}>Аккаунт</p>
              <div className={styles.userIcon} />
            </Link>
          </div>
          <button
            type="button"
            className={styles.hamburgerMenuContainer}
            onClick={isOpen ? onClose : onOpenMobileMenu}
          >
            <span
              className={classNames(
                styles.button,
                isOpen && styles.closeButton
              )}
            />
          </button>
        </header>
      </Route>
    </Switch>
  );
};

export default Header;
