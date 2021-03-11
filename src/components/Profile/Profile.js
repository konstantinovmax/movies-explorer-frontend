import React from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [nameDirty, setNameDirty] = React.useState(false);
    const [emailDirty, setEmailDirty] = React.useState(false);
    const [nameError, setNameError] = React.useState('');
    const [emailError, setEmailError] = React.useState('');
    const [formValid, setFormValid] = React.useState(false);
    const [visibleEditProfileButton, setVisibleEditProfileButton] = React.useState(true);
    const [visibleLogoutButton, setVisibleLogoutButton] = React.useState(true);
    const [visibleSubmitButton, setVisibleSubmitButton] = React.useState(false);
    const [inputDisabled, setInputDisabled] = React.useState(true);

    function handleNameChange(e) {
        setName(e.target.value);
        setNameDirty(true);
        const regExpEngName = /^[?!,.\-a-zA-Z0-9\s]+$/.test(e.target.value);

        if (e.target.value.length < 2 || e.target.value.length > 30) {
            setNameError('Длина имени должна составлять от 2 до 30 символов');
        } else if (!regExpEngName) {
            setNameError('Имя должно быть указано латиницей');
        } else {
            setNameError('');
        }
    }
    
    function handleEmailChange(e) {
        setEmail(e.target.value);
        setEmailDirty(true);
        const regExpEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(e.target.value);

        if (!regExpEmail) {
            setEmailError('Некорректный email');
        } else {
            setEmailError('');
        }
    }

    function handleClickEditProfileButton() {
        setVisibleEditProfileButton(false);
        setVisibleLogoutButton(false);
        setVisibleSubmitButton(true);
        setInputDisabled(false);
    }

    function handleSubmit(e) {
        e.preventDefault();        
        props.onUpdateUser({
            name,
            email
        });
        setVisibleEditProfileButton(true);
        setVisibleLogoutButton(true);
        setVisibleSubmitButton(false);
        setInputDisabled(true);
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser]);

    React.useEffect(() => {
        if (nameError || emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, emailError]);

    return (
        <div className="profile">
            <div className="profile__user-data-container">
                <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
                <form id="profile-edit-form" className="profile__form" onSubmit={handleSubmit}>
                    <div className="profile__user-name-email-container profile__user-name-email-container_type_first">
                        <p className="profile__user-data">Имя</p>
                        <input
                        type="text"
                        name="name"
                        className={`profile__input ${(nameDirty && nameError) ? 'profile__input_type_error' : ''}`}
                        minLength="2"
                        maxLength="30"
                        autoComplete="off"
                        required
                        value={name}
                        onChange={handleNameChange}
                        disabled={inputDisabled}
                        />
                    </div>
                    <div className="profile__user-name-email-container profile__user-name-email-container_type_second">
                        <p className="profile__user-data">Почта</p>
                        <input
                        type="email"
                        name="email"
                        className={`profile__input ${(emailDirty && emailError) ? 'profile__input_type_error' : ''}`}
                        autoComplete="off"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        disabled={inputDisabled}
                        />
                    </div>
                </form>
            </div>
            <div className="profile__buttons-container">
                { ((nameDirty && nameError) || (emailDirty && emailError)) && <span id="profile-input-error" className="profile__input-error">{nameError || emailError}</span> }
                { visibleEditProfileButton && <button type="button" className="profile__button profile__button_type_edit" onClick={handleClickEditProfileButton}>Редактировать</button> }
                { visibleSubmitButton && <button type="submit" className={`profile__button_type_submit ${formValid ? 'profile__button_type_submit' : 'profile__button_type_submit-disabled'}`} disabled={!formValid} form="profile-edit-form">Сохранить</button> }
                { visibleLogoutButton && <button type="button" className="profile__button profile__button_type_logout" onClick={props.onLogout}>Выйти из аккаунта</button> }
            </div>
        </div>
    );
}

export default Profile;
