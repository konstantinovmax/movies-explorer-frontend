import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
    return (
        <div className={`navigation__menu-container-mobile ${props.isOpen && 'navigation__menu-container-mobile_type_is-open'}`}>
            <button type="button" className="navigation__menu-burger-container navigation__menu-burger-container_type_in-menu-mobile" onClick={props.isOpen ? props.onClose : props.onOpenMobileMenu}>
                <span className={`navigation__menu-burger-button ${props.isOpen && 'navigation__menu-burger-button_type_close'}`} />
            </button>
            <ul className="navigation__menu-mobile">
                <li><NavLink exact to="/" className="navigation__menu-mobile-link" activeClassName="navigation__menu-mobile-link_type_active" onClick={props.onClose}>Главная</NavLink></li>
                <li><NavLink to="/movies" className="navigation__menu-mobile-link" activeClassName="navigation__menu-mobile-link_type_active" onClick={props.onClose}>Фильмы</NavLink></li>
                <li><NavLink to="/saved-movies" className="navigation__menu-mobile-link" activeClassName="navigation__menu-mobile-link_type_active" onClick={props.onClose}>Сохранённые фильмы</NavLink></li>
            </ul>
            <NavLink to="/profile" className="navigation__auth-container navigation__auth-container_type_profile navigation__auth-container_type_menu-mobile" onClick={props.onClose}>
                <p className="navigation__user-data">Аккаунт</p>
                <div className="navigation__auth-pic" />
            </NavLink>
        </div>
    );
}

export default Navigation;
