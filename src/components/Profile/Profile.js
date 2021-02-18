import React from 'react';
import './Profile.css';

function Profile() {
    return (
        <div className="profile">
            <h2 className="profile__title">Привет, Максим</h2>
            <div className="profile__user-data-container">
                <p className="profile__user-name">Имя</p>
                <p className="profile__user-name">Имя</p>
            </div>
            <div className="profile__user-data-container">
                <p className="profile__user-email">Почта</p>
                <p className="profile__user-email">max@max.ru</p>
            </div>
            <button className="profile__edit-button">Редактировать</button>
            <button className="profile__logout-button">Выйти из аккаунта</button>
        </div>
    );
}

export default Profile;
