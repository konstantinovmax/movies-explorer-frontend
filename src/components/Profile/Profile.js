import React from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <div className="profile">
            <div className="profile__user-data-container">
                <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
                <form className="profile__form">
                    <div className="profile__user-name-email-container profile__user-name-email-container_type_first">
                        <p className="profile__user-data">{currentUser.name}</p>
                        <input
                        type="text"
                        className="profile__input"
                        defaultValue={currentUser.name}
                        />
                    </div>
                    <div className="profile__user-name-email-container profile__user-name-email-container_type_second">
                        <p className="profile__user-data">{currentUser.email}</p>
                        <input
                        type="text"
                        className="profile__input"
                        defaultValue={currentUser.email}
                        />
                    </div>
                </form>
            </div>
            <div className="profile__buttons-container">
                <button type="button" className="profile__button profile__button_type_edit">Редактировать</button>
                <button type="button" className="profile__button profile__button_type_logout" onClick={props.onLogout}>Выйти из аккаунта</button>
            </div>
        </div>
    );
}

export default Profile;
