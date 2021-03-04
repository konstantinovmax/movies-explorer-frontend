import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import projectLogo from '../../images/header-logo.svg';

function Login(props) {
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
        
        props.onLogin(email, password, name);
    }

    return (
        <div className="login">
            <div className="login__container">
                <Link to="/"><img className="login__logo" src={projectLogo} alt="Логотип сервиса Movies Explorer" /></Link>
                <form className="login__form" onSubmit={handleSubmit}>
                    <h1 className="login__title">Рады видеть!</h1>
                    <p className="login__input-name">E-mail</p>
                    <input
                    id="input-user-email"
                    name="email"
                    type="email"
                    className="login__input"
                    placeholder="pochta@yandex.ru"
                    autoComplete="none"
                    pattern="^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$"
                    required
                    value={userData.email}
                    onChange={handleChange}
                    />
                    <span id="login-input-error" className="login__input-error"></span>
                    <p className="login__input-name">Пароль</p>
                    <input
                    id="input-user-password"
                    name="password"
                    type="password"
                    className="login__input"
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
