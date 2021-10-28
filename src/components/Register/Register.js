import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import projectLogo from '../../images/headerLogo.svg';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isEmailDirty, setIsEmailDirty] = useState(false);
  const [isPasswordDirty, setIsPasswordDirty] = useState(false);
  const [isNameDirty, setIsNameDirty] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым'
  );
  const [nameError, setNameError] = useState('Имя не может быть пустым');

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setIsEmailDirty(true);
        break;

      case 'password':
        setIsPasswordDirty(true);
        break;

      case 'name':
        setIsNameDirty(true);
        break;

      default:
        console.log('Ошибка в blurHandler');
        break;
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const regExpEmail =
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        e.target.value
      );

    if (!regExpEmail) {
      setEmailError('Некорректный email');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    const regExpPassword = /^\S*$/.test(e.target.value);

    if (!regExpPassword) {
      setPasswordError(
        'Не допускается использование пробелов при создании пароля'
      );
    } else if (e.target.value.length < 8) {
      setPasswordError('Минимальная длина пароля 8 символов');
    } else {
      setPasswordError('');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    const regExpEngName = /^[?!,.\-a-zA-Z0-9\s]+$/.test(e.target.value);

    if (e.target.value.length < 2 || e.target.value.length > 30) {
      setNameError('Длина имени должна составлять от 2 до 30 символов');
    } else if (!regExpEngName) {
      setNameError('Имя должно быть указано латиницей');
    } else {
      setNameError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password, name);
  };

  useEffect(() => {
    if (emailError || passwordError || nameError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [emailError, passwordError, nameError]);

  return (
    <div className="register">
      <div className="register__container">
        <Link to="/">
          <img
            className="register__logo"
            src={projectLogo}
            alt="Логотип сервиса Movies Explorer"
          />
        </Link>
        <form className="register__form" onSubmit={handleSubmit}>
          <h1 className="register__title">Добро пожаловать!</h1>
          <p className="register__input-name">Имя</p>
          <input
            id="input-user-name"
            name="name"
            type="text"
            className={`register__input ${
              isNameDirty && nameError ? 'register__input_type_error' : ''
            }`}
            placeholder="Max"
            autoComplete="off"
            minLength={2}
            maxLength={30}
            required
            value={name}
            onChange={handleNameChange}
            onBlur={blurHandler}
          />
          {isNameDirty && nameError && (
            <span id="register-input-error" className="register__input-error">
              {nameError}
            </span>
          )}
          <p className="register__input-name">E-mail</p>
          <input
            id="input-user-email"
            name="email"
            type="email"
            className={`register__input ${
              isEmailDirty && emailError ? 'register__input_type_error' : ''
            }`}
            placeholder="pochta@yandex.ru"
            autoComplete="off"
            pattern="^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$"
            required
            value={email}
            onChange={handleEmailChange}
            onBlur={blurHandler}
          />
          {isEmailDirty && emailError && (
            <span id="register-input-error" className="register__input-error">
              {emailError}
            </span>
          )}
          <p className="register__input-name">Пароль</p>
          <input
            id="input-user-password"
            name="password"
            type="password"
            className={`register__input ${
              isPasswordDirty && passwordError
                ? 'register__input_type_error'
                : ''
            }`}
            placeholder="Минимум 8 символов"
            autoComplete="off"
            minLength={8}
            maxLength={30}
            required
            value={password}
            onChange={handlePasswordChange}
            onBlur={blurHandler}
          />
          {isPasswordDirty && passwordError && (
            <span id="register-input-error" className="register__input-error">
              {passwordError}
            </span>
          )}
          <button
            type="submit"
            className={`register__submit-button ${
              isFormValid
                ? 'register__submit-button'
                : 'register__submit-button_type_disabled'
            }`}
            disabled={!isFormValid}
          >
            Зарегистрироваться
          </button>
          <div className="register__question-container">
            <p className="register__question-text">Уже зарегистрированы?</p>
            <Link to="/signin" className="register__link-to-signin">
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
