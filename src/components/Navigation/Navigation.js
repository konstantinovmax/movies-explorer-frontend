import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation(props) {

    function handleClickLayoutMenuClose(e) {
        if (e.target === e.currentTarget) {
            props.onClose();
        }
    };

    return (
        <>
            <div className="navigation">
                <div className={`navigation__blur ${props.isOpen && 'navigation__blur_type_is-open'}`} onClick={handleClickLayoutMenuClose}/>
                <div className={`navigation__menu-container-mobile ${props.isOpen && 'navigation__menu-container-mobile_type_is-open'}`}>
                    <nav className="navigation__menu-mobile">
                        <NavLink exact to="/" className="navigation__menu-mobile-link" activeClassName="navigation__menu-mobile-link_type_active" onClick={props.onClose}>Главная</NavLink>
                        <NavLink to="/movies" className="navigation__menu-mobile-link" activeClassName="navigation__menu-mobile-link_type_active" onClick={props.onClose}>Фильмы</NavLink>
                        <NavLink to="/saved-movies" className="navigation__menu-mobile-link" activeClassName="navigation__menu-mobile-link_type_active" onClick={props.onClose}>Сохранённые фильмы</NavLink>
                    </nav>
                    <NavLink to="/profile" className="navigation__profile-container-link" onClick={props.onClose}>
                        <p className="navigation__user-data">Аккаунт</p>
                        <div className="navigation__auth-pic" />
                    </NavLink>
                </div>
            </div>
                
            <Switch>
                <Route path={["/movies", "/saved-movies", "/profile"]}>
                    <nav className="navigation__movies-container">
                        <NavLink to="/movies" className="navigation__movies-link" activeClassName="navigation__movies-link_type_active">Фильмы</NavLink>
                        <NavLink to="/saved-movies" className="navigation__movies-link" activeClassName="navigation__movies-link_type_active">Сохранённые фильмы</NavLink>
                    </nav>
                </Route>
            </Switch>
        </>
    );
}

export default Navigation;
