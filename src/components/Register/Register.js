import { useState, useEffect } from 'react';
import styles from './Register.module.scss';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
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
    <div className={styles.root}>
      <div className={styles.container}>
        <Link to="/">
          <img
            className={styles.logo}
            src={projectLogo}
            alt="Логотип сервиса Movies Explorer"
          />
        </Link>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h1 className={styles.title}>Добро пожаловать!</h1>
          <p className={styles.inputName}>Имя</p>
          <input
            id="input-user-name"
            name="name"
            type="text"
            className={classNames(
              styles.input,
              isNameDirty && nameError ? styles.errorColor : ''
            )}
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
            <span id="register-input-error" className={styles.inputError}>
              {nameError}
            </span>
          )}
          <p className={styles.inputName}>E-mail</p>
          <input
            id="input-user-email"
            name="email"
            type="email"
            className={classNames(
              styles.input,
              isEmailDirty && emailError ? styles.errorColor : ''
            )}
            placeholder="pochta@yandex.ru"
            autoComplete="off"
            pattern="^([\w.*-]+@([\w-]+\.)+[\w-]{2,4})?$"
            required
            value={email}
            onChange={handleEmailChange}
            onBlur={blurHandler}
          />
          {isEmailDirty && emailError && (
            <span id="register-input-error" className={styles.inputError}>
              {emailError}
            </span>
          )}
          <p className={styles.inputName}>Пароль</p>
          <input
            id="input-user-password"
            name="password"
            type="password"
            className={classNames(
              styles.input,
              isPasswordDirty && passwordError ? styles.errorColor : ''
            )}
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
            <span id="register-input-error" className={styles.inputError}>
              {passwordError}
            </span>
          )}
          <button
            type="submit"
            className={classNames(
              styles.submitButton,
              isFormValid ? styles.submitButton : styles.submitButtonDisabled
            )}
            disabled={!isFormValid}
          >
            Зарегистрироваться
          </button>
          <div className={styles.questionContainer}>
            <p className={styles.questionText}>Уже зарегистрированы?</p>
            <Link to="/signin" className={styles.link}>
              Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
