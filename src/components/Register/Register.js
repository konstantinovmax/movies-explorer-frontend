import React from 'react';
import './Register.css';
import projectLogo from '../../images/header-logo.svg';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div className="register">
            <div className="register__container">
                <img className="register__logo" src={projectLogo} alt="Логотип сервиса Movies Explorer" />
                <form className="register__form">
                    <h1 className="register__title">Добро пожаловать!</h1>
                    <p className="register__input-name">Имя</p>
                    <input
                    type="text"
                    className="register__input"
                    placeholder="Максим"
                    minLength="2"
                    maxLength="30"
                    required
                    />
                    <span id="register-input-error" className="register__input-error"></span>
                    <p className="register__input-name">E-mail</p>
                    <input
                    type="email"
                    className="register__input"
                    placeholder="pochta@yandex.ru"
                    autoComplete="none"
                    pattern="^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$"
                    required
                    />
                    <span id="register-input-error" className="register__input-error"></span>
                    <p className="register__input-name">Пароль</p>
                    <input
                    type="password"
                    className="register__input"
                    placeholder="Минимум 8 символов"
                    autoComplete="none"
                    minLength="8"
                    maxLength="30"
                    pattern="^\S*$"
                    title="Не допускается использование пробела в пароле"
                    required
                    />
                    <span id="register-input-error" className="register__input-error"></span>
                    <button type="submit" className="register__submit-button">Зарегистрироваться</button>
                    <div className="register__question-container">
                        <p className="register__question-text">Уже зарегистрированы?</p>
                        <Link to="/signin" className="register__link-to-signin">Войти</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
