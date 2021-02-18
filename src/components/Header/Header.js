import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import headerLogo from '../../images/header-logo.svg';

function Header() {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" src={headerLogo} alt="Логотип сервиса Movies Explorer" /></Link>
            <div className="header__movies-container">
                <Link to="/movies" className="header__movies-link">Фильмы</Link>
                <Link to="/saved-movies" className="header__movies-link">Сохранённые фильмы</Link>
            </div>
            <div className="header__auth-container">
                <Link to="#" className="header__auth-link header__auth-link_type_signup">Регистрация</Link>
                <Link to="#" className="header__auth-link header__auth-link_type_signin">Войти</Link>
            </div>
        </header>
    );
}

export default Header;
