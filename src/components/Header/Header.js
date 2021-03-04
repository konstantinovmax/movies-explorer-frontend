import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Header.css';
import projectLogo from '../../images/header-logo.svg';
import Navigation from '../Navigation/Navigation';

function Header(props) {
    return (
        <Switch>
            <Route exact path="/">
                {
                    props.loggedIn
                    ?   <header className="header header_type_grid">
                            <div className="header__grid-wrap header__grid-wrap_type_start"> {/* Дополнительный контейнер нужен для корректного выравнивания элементов в хедере гридом. */}
                                <Link to="/"><img className="header__logo" src={projectLogo} alt="Логотип сервиса Movies Explorer" /></Link>
                            </div>
                            <Navigation
                            isOpen={props.isOpen}
                            onClose={props.onClose}
                            onOpenMobileMenu={props.onOpenMobileMenu}
                            />
                            <div className="header__grid-wrap header__grid-wrap_type_end"> {/* Дополнительный контейнер нужен для корректного выравнивания элементов в хедере гридом. */}
                                <Link to="/profile" className="header__auth-container header__auth-container_type_hide header__auth-container_type_profile">
                                    <p className="header__user-data">Аккаунт</p>
                                    <div className="header__auth-pic" />
                                </Link>
                            </div>
                            <button type="button" className="header__menu-burger-container" onClick={props.isOpen ? props.onClose : props.onOpenMobileMenu}>
                                    <span className={`header__menu-burger-button ${props.isOpen && 'header__menu-burger-button_type_close'}`} />
                            </button>
                        </header>
                    :   <header className="header">
                            <Link to="/"><img className="header__logo" src={projectLogo} alt="Логотип сервиса Movies Explorer" /></Link>
                            <nav className="header__auth-container">
                                <Link to="/signup" className="header__auth-link header__auth-link_type_signup">Регистрация</Link>
                                <Link to="/signin" className="header__auth-link header__auth-link_type_signin">Войти</Link>
                            </nav>
                        </header>
                }
            </Route>
            <Route path={["/movies", "/saved-movies", "/profile"]}>
                <header className="header header_type_grid">
                    <div className="header__grid-wrap header__grid-wrap_type_start"> {/* Дополнительный контейнер нужен для корректного выравнивания элементов в хедере гридом. */}
                        <Link to="/"><img className="header__logo" src={projectLogo} alt="Логотип сервиса Movies Explorer" /></Link>
                    </div>
                    <Navigation
                    isOpen={props.isOpen}
                    onClose={props.onClose}
                    onOpenMobileMenu={props.onOpenMobileMenu}
                    />
                    <div className="header__grid-wrap header__grid-wrap_type_end"> {/* Дополнительный контейнер нужен для корректного выравнивания элементов в хедере гридом. */}
                        <Link to="/profile" className="header__auth-container header__auth-container_type_hide header__auth-container_type_profile">
                            <p className="header__user-data">Аккаунт</p>
                            <div className="header__auth-pic" />
                        </Link>
                    </div>
                    <button type="button" className="header__menu-burger-container" onClick={props.isOpen ? props.onClose : props.onOpenMobileMenu}>
                            <span className={`header__menu-burger-button ${props.isOpen && 'header__menu-burger-button_type_close'}`} />
                    </button>
                </header>
            </Route>
        </Switch>
    );
}

export default Header;
