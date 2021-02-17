import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import studentPhoto from '../../images/MK.jpg';

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__section-title">Студент</h2>
            <div className="about-me__content-container">
                <div className="about-me__text-container">
                    <h3 className="about-me__name">Максим</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 28 лет</p>
                    <p className="about-me__description">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className="about-me__links-container">
                        <Link to="#" className="about-me__link">Facebook</Link>
                        <Link to="#" className="about-me__link">Github</Link>
                    </div>
                </div>
                <img className="about-me__photo" src={studentPhoto} alt="Фото студента" />
            </div>
        </section>
    );
}

export default AboutMe;
