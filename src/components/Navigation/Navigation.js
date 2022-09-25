import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import classNames from 'classnames';

const Navigation = ({ isOpen, onClose }) => {
  const handleClickLayoutMenuClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      <div className={styles.root}>
        <div
          className={classNames(styles.blur, isOpen && styles.blurOpened)}
          onClick={handleClickLayoutMenuClose}
        />
        <div
          className={classNames(
            styles.mobileMenuContainer,
            isOpen && styles.mobileMenuContainerOpened
          )}
        >
          <nav className={styles.mobileMenu}>
            <NavLink
              exact
              to="/"
              className={styles.mobileMenuLink}
              activeClassName={styles.mobileMenuLinkActive}
              onClick={onClose}
            >
              Главная
            </NavLink>
            <NavLink
              to="/movies"
              className={styles.mobileMenuLink}
              activeClassName={styles.mobileMenuLinkActive}
              onClick={onClose}
            >
              Фильмы
            </NavLink>
            <NavLink
              to="/saved-movies"
              className={styles.mobileMenuLink}
              activeClassName={styles.mobileMenuLinkActive}
              onClick={onClose}
            >
              Сохранённые фильмы
            </NavLink>
          </nav>
          <NavLink
            to="/profile"
            className={styles.profileContainerLink}
            onClick={onClose}
          >
            <p className={styles.userData}>Аккаунт</p>
            <div className={styles.userIcon} />
          </NavLink>
        </div>
      </div>

      <nav className={styles.moviesContainer}>
        <NavLink
          to="/movies"
          className={styles.moviesLink}
          activeClassName={styles.moviesLinkActive}
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className={styles.moviesLink}
          activeClassName={styles.moviesLinkActive}
        >
          Сохранённые фильмы
        </NavLink>
      </nav>
    </>
  );
};

export default Navigation;
