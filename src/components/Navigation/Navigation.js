import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {
    return (
        <>
            <div className={`navigation ${props.isOpen && 'navigation_type_is-open'}`}>
                <div className={`navigation__menu-container-mobile ${props.isOpen && 'navigation__menu-container-mobile_type_is-open'}`}>
                    <ul className="navigation__menu-mobile">
                        <li><NavLink exact to="/" className="navigation__menu-mobile-link" activeClassName="navigation__menu-mobile-link_type_active" onClick={props.onClose}>Главная</NavLink></li>
                        <li><NavLink to="/movies" className="navigation__menu-mobile-link" activeClassName="navigation__menu-mobile-link_type_active" onClick={props.onClose}>Фильмы</NavLink></li>
                        <li><NavLink to="/saved-movies" className="navigation__menu-mobile-link" activeClassName="navigation__menu-mobile-link_type_active" onClick={props.onClose}>Сохранённые фильмы</NavLink></li>
                    </ul>
                    <NavLink to="/profile" className="navigation__profile-container-link" onClick={props.onClose}>
                        <p className="navigation__user-data">Аккаунт</p>
                        <div className="navigation__auth-pic" />
                    </NavLink>
                </div>
            </div>
            <Switch>
                <Route path={["/movies", "/saved-movies", "/profile"]}>
                    <div className="navigation__movies-container">
                        <NavLink to="/movies" className="navigation__movies-link" activeClassName="navigation__movies-link_type_active">Фильмы</NavLink>
                        <NavLink to="/saved-movies" className="navigation__movies-link" activeClassName="navigation__movies-link_type_active">Сохранённые фильмы</NavLink>
                    </div>
                </Route>
            </Switch>
        </>
    );
}

export default Navigation;
