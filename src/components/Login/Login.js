import { useState, useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import projectLogo from '../../images/headerLogo.svg';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailDirty, setIsEmailDirty] = useState(false);
  const [isPasswordDirty, setIsPasswordDirty] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState(
    'Пароль не может быть пустым'
  );

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setIsEmailDirty(true);
        break;

      case 'password':
        setIsPasswordDirty(true);
        break;

      default:
        console.log('Ошибка в blurHandler');
        break;
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    const regExpEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  useEffect(() => {
    if (emailError || passwordError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [emailError, passwordError]);

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img
            className="login__logo"
            src={projectLogo}
            alt="Логотип сервиса Movies Explorer"
          />
        </Link>
        <form className="login__form" onSubmit={handleSubmit}>
          <h1 className="login__title">Рады видеть!</h1>
          <p className="login__input-name">E-mail</p>
          <input
            id="input-user-email"
            name="email"
            type="email"
            className={`login__input ${
              isEmailDirty && emailError ? 'login__input_type_error' : ''
            }`}
            placeholder="pochta@yandex.ru"
            autoComplete="off"
            required
            value={email}
            onChange={handleEmailChange}
            onBlur={blurHandler}
          />
          {isEmailDirty && emailError && (
            <span id="login-input-error" className="login__input-error">
              {emailError}
            </span>
          )}
          <p className="login__input-name">Пароль</p>
          <input
            id="input-user-password"
            name="password"
            type="password"
            className={`login__input ${
              isPasswordDirty && passwordError ? 'login__input_type_error' : ''
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
            <span id="login-input-error" className="login__input-error">
              {passwordError}
            </span>
          )}
          <button
            type="submit"
            className={`login__submit-button ${
              isFormValid
                ? 'login__submit-button'
                : 'login__submit-button_type_disabled'
            }`}
            disabled={!isFormValid}
          >
            Войти
          </button>
          <div className="login__question-container">
            <p className="login__question-text">Ещё не зарегистрированы?</p>
            <Link to="/signup" className="login__link-to-signup">
              Регистрация
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
