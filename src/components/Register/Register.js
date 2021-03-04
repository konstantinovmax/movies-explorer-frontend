import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import projectLogo from '../../images/header-logo.svg';

function Register(props) {
    const [userData, setUserData] = React.useState({ email: '', password: '', name: '' })

    function handleChange(evt) {
        const { name, value } = evt.target;

        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        const { email, password, name } = userData;
        
        props.onRegister(email, password, name);
    }

    return (
        <div className="register">
            <div className="register__container">
                <Link to="/"><img className="register__logo" src={projectLogo} alt="Логотип сервиса Movies Explorer" /></Link>
                <form className="register__form" onSubmit={handleSubmit}>
                    <h1 className="register__title">Добро пожаловать!</h1>
                    <p className="register__input-name">Имя</p>
                    <input
                    id="input-user-name"
                    name="name"
                    type="text"
                    className="register__input"
                    placeholder="Максим"
                    minLength="2"
                    maxLength="30"
                    required
                    value={userData.name}
                    onChange={handleChange}
                    />
                    <span id="register-input-error" className="register__input-error"></span>
                    <p className="register__input-name">E-mail</p>
                    <input
                    id="input-user-email"
                    name="email"
                    type="email"
                    className="register__input"
                    placeholder="pochta@yandex.ru"
                    autoComplete="none"
                    pattern="^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$"
                    required
                    value={userData.email}
                    onChange={handleChange}
                    />
                    <span id="register-input-error" className="register__input-error"></span>
                    <p className="register__input-name">Пароль</p>
                    <input
                    id="input-user-password"
                    name="password"
                    type="password"
                    className="register__input"
                    placeholder="Минимум 8 символов"
                    autoComplete="none"
                    minLength="8"
                    maxLength="30"
                    pattern="^\S*$"
                    title="Не допускается использование пробела в пароле"
                    required
                    value={userData.password}
                    onChange={handleChange}
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
