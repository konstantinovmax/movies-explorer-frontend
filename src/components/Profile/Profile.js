import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__user-data-container">
                <h1 className="profile__title">Привет, Максим!</h1>
                <form className="profile__form">
                    <div className="profile__user-name-email-container profile__user-name-email-container_type_first">
                        <p className="profile__user-data">Имя</p>
                        <input type="text" className="profile__input" value="Максим" />
                    </div>
                    <div className="profile__user-name-email-container profile__user-name-email-container_type_second">
                        <p className="profile__user-data">Почта</p>
                        <input type="text" className="profile__input" value="pochta@yandex.ru" />
                    </div>
                </form>
            </div>
            <div className="profile__buttons-container">
                <button className="profile__button profile__button_type_edit">Редактировать</button>
                <button className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
            </div>
        </div>
    );
}

export default Profile;
