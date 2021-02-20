import React from 'react';
import './Login.css';
import projectLogo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <div className="login__container">
                <img className="login__logo" src={projectLogo} alt="Логотип сервиса Movies Explorer" />
                <form className="login__form">
                    <h1 className="login__title">Рады видеть!</h1>
                    <p className="login__input-name">E-mail</p>
                    <input
                    type="email"
                    className="login__input"
                    placeholder="pochta@yandex.ru"
                    autoComplete="none"
                    pattern="^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$"
                    required
                    />
                    <span id="login-input-error" className="login__input-error"></span>
                    <p className="login__input-name">Пароль</p>
                    <input
                    type="password"
                    className="login__input"
                    placeholder="Минимум 8 символов"
                    autoComplete="none"
                    minLength="8"
                    maxLength="30"
                    pattern="^\S*$"
                    title="Не допускается использование пробела в пароле"
                    required
                    />
                    <span id="login-input-error" className="login__input-error"></span>
                    <button type="submit" className="login__submit-button">Войти</button>
                    <div className="login__question-container">
                        <p className="login__question-text">Ещё не зарегистрированы?</p>
                        <Link to="/signup" className="login__link-to-signup">Регистрация</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
