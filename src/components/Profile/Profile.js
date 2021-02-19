import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <div className="profile__all-user-data-container">
                <h1 className="profile__title">Привет, Максим!</h1>
                <div className="profile__user-data-container">
                    <div className="profile__user-name-email-container profile__user-name-email-container_type_first">
                        <p className="profile__user-data">Имя</p>
                        <p className="profile__user-data">Максим</p>
                    </div>
                    <div className="profile__user-name-email-container profile__user-name-email-container_type_second">
                        <p className="profile__user-data">Почта</p>
                        <p className="profile__user-data">pochta@yandex.ru</p>
                    </div>
                </div>
            </div>
            <div className="profile__buttons-container">
                <button className="profile__button profile__button_type_edit">Редактировать</button>
                <button className="profile__button profile__button_type_logout">Выйти из аккаунта</button>
            </div>
        </div>
    );
}

export default Profile;
