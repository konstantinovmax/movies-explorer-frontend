import { useContext, useState, useEffect } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const Profile = ({ onUpdateUser, onLogout }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isNameDirty, setIsNameDirty] = useState(false);
  const [isEmailDirty, setIsEmailDirty] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [isVisibleEditProfileButton, setIsVisibleEditProfileButton] =
    useState(true);
  const [isVisibleLogoutButton, setIsVisibleLogoutButton] = useState(true);
  const [isVisibleSubmitButton, setIsVisibleSubmitButton] = useState(false);
  const [isInputDisabled, setIsInputDisabled] = useState(true);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setIsNameDirty(true);
    const regExpEngName = /^[?!,.\-a-zA-Z0-9\s]+$/.test(e.target.value);

    if (e.target.value.length < 2 || e.target.value.length > 30) {
      setNameError('Длина имени должна составлять от 2 до 30 символов');
    } else if (!regExpEngName) {
      setNameError('Имя должно быть указано латиницей');
    } else if (e.target.value === currentUser.name) {
      setNameError('Заданное имя совпадает с текущим именем');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailDirty(true);
    const regExpEmail =
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
        e.target.value
      );

    if (!regExpEmail) {
      setEmailError('Некорректный email');
    } else if (e.target.value === currentUser.email) {
      setEmailError('Заданный email совпадает с текущим email');
    } else {
      setEmailError('');
    }
  };

  const handleClickEditProfileButton = () => {
    setIsVisibleEditProfileButton(false);
    setIsVisibleLogoutButton(false);
    setIsVisibleSubmitButton(true);
    setIsInputDisabled(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      email,
    });
    setIsVisibleEditProfileButton(true);
    setIsVisibleLogoutButton(true);
    setIsVisibleSubmitButton(false);
    setIsInputDisabled(true);
  };

  useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  useEffect(() => {
    if (
      nameError ||
      emailError ||
      name === currentUser.name ||
      email === currentUser.email
    ) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [nameError, emailError, name, email, currentUser]);

  return (
    <div className="profile">
      <div className="profile__user-data-container">
        <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
        <form
          id="profile-edit-form"
          className="profile__form"
          onSubmit={handleSubmit}
        >
          <div className="profile__user-name-email-container profile__user-name-email-container_type_first">
            <p className="profile__user-data">Имя</p>
            <input
              type="text"
              name="name"
              className={`profile__input ${
                isNameDirty && nameError ? 'profile__input_type_error' : ''
              }`}
              minLength={2}
              maxLength={30}
              autoComplete="off"
              required
              value={name || ''}
              onChange={handleNameChange}
              disabled={isInputDisabled}
            />
          </div>
          <div className="profile__user-name-email-container profile__user-name-email-container_type_second">
            <p className="profile__user-data">Почта</p>
            <input
              type="email"
              name="email"
              className={`profile__input ${
                isEmailDirty && emailError ? 'profile__input_type_error' : ''
              }`}
              autoComplete="off"
              required
              value={email || ''}
              onChange={handleEmailChange}
              disabled={isInputDisabled}
            />
          </div>
        </form>
      </div>
      <div className="profile__buttons-container">
        {((isNameDirty && nameError) || (isEmailDirty && emailError)) && (
          <span id="profile-input-error" className="profile__input-error">
            {nameError || emailError}
          </span>
        )}
        {isVisibleEditProfileButton && (
          <button
            type="button"
            className="profile__button profile__button_type_edit"
            onClick={handleClickEditProfileButton}
          >
            Редактировать
          </button>
        )}
        {isVisibleSubmitButton && (
          <button
            type="submit"
            className={`profile__button_type_submit ${
              isFormValid
                ? 'profile__button_type_submit'
                : 'profile__button_type_submit-disabled'
            }`}
            disabled={!isFormValid}
            form="profile-edit-form"
          >
            Сохранить
          </button>
        )}
        {isVisibleLogoutButton && (
          <button
            type="button"
            className="profile__button profile__button_type_logout"
            onClick={onLogout}
          >
            Выйти из аккаунта
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
