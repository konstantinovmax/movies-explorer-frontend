import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import projectLogo from '../../images/header-logo.svg';

function Register(props) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [emailDirty, setEmailDirty] = React.useState(false);
    const [passwordDirty, setPasswordDirty] = React.useState(false);
    const [nameDirty, setNameDirty] = React.useState(false);
    const [emailError, setEmailError] = React.useState('Email не может быть пустым');
    const [passwordError, setPasswordError] = React.useState('Пароль не может быть пустым');
    const [nameError, setNameError] = React.useState('Имя не может быть пустым');
    const [formValid, setFormValid] = React.useState(false);

    function blurHandler(e) {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true);
                break;

            case 'password':
                setPasswordDirty(true);
                break;
            
            case 'name':
                setNameDirty(true);
                break;

            default:
                console.log('Ошибка в blurHandler');
                break;
        }
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
        const regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e.target.value);

        if (!regExpEmail) {
            setEmailError('Некорректный email');
        } else {
            setEmailError('');
        }
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
        const regExpPassword = /^\S*$/.test(e.target.value);

        if (!regExpPassword) {
            setPasswordError('Не допускается использование пробелов при создании пароля');
        } else if (e.target.value.length < 8) {
            setPasswordError('Минимальная длина пароля 8 символов');
        } else {
            setPasswordError('');
        }
    }

    function handleNameChange(e) {
        setName(e.target.value);
        const regExpEngName = /^[?!,.\-a-zA-Z0-9\s]+$/.test(e.target.value);

        if (e.target.value.length < 2 || e.target.value.length > 30) {
            setNameError('Длина имени должна составлять от 2 до 30 символов');
        } else if (!regExpEngName) {
            setNameError('Имя должно быть указано латиницей');
        } else {
            setNameError('');
        }
    }

    function handleSubmit(e) {
        e.preventDefault();        
        props.onRegister(email, password, name);
    }

    React.useEffect(() => {
        if (emailError || passwordError || nameError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, passwordError, nameError]);

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
                    className={`register__input ${(nameDirty && nameError) ? 'register__input_type_error' : ''}`}
                    placeholder="Max"
                    autoComplete="off"
                    minLength="2"
                    maxLength="30"
                    required
                    value={name}
                    onChange={handleNameChange}
                    onBlur={blurHandler}
                    />
                    { (nameDirty && nameError) && <span id="register-input-error" className="register__input-error">{nameError}</span> }
                    <p className="register__input-name">E-mail</p>
                    <input
                    id="input-user-email"
                    name="email"
                    type="email"
                    className={`register__input ${(emailDirty && emailError) ? 'register__input_type_error' : ''}`}
                    placeholder="pochta@yandex.ru"
                    autoComplete="off"
                    pattern="^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    onBlur={blurHandler}
                    />
                    { (emailDirty && emailError) && <span id="register-input-error" className="register__input-error">{emailError}</span> }
                    <p className="register__input-name">Пароль</p>
                    <input
                    id="input-user-password"
                    name="password"
                    type="password"
                    className={`register__input ${(passwordDirty && passwordError) ? 'register__input_type_error' : ''}`}
                    placeholder="Минимум 8 символов"
                    autoComplete="off"
                    minLength="8"
                    maxLength="30"
                    required
                    value={password}
                    onChange={handlePasswordChange}
                    onBlur={blurHandler}
                    />
                    { (passwordDirty && passwordError) && <span id="register-input-error" className="register__input-error">{passwordError}</span> }
                    <button type="submit" className={`register__submit-button ${formValid ? 'register__submit-button' : 'register__submit-button_type_disabled'}`} disabled={!formValid}>Зарегистрироваться</button>
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
