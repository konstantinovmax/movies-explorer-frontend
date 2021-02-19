import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import studentPhoto from '../../images/MK.jpg';

function AboutMe() {
    return (
        <section id="about-me-id" className="about-me">
            <h2 className="about-me__section-title">Студент</h2>
            <div className="about-me__content-container">
                <div className="about-me__text-container">
                    <h3 className="about-me__name">Максим</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 28 лет</p>
                    <p className="about-me__description">Почему я решил стать разработчиком? Во время работы в компаниях BIA-Technologies и Группе ЛСР мне приходилось взаимодействовать с разработчиками в рамках проектной деятельности в роли аналитика. Для понимания процесса разработки мне необходимо было обладать техническими знаниями, поэтому я изучал процесс разработки и практиковался сам. В результате меня настолько увлек процесс программирования, что я решил стать веб-разработчиком, чтобы непосредственно самому вести разработку. В веб-разработке я выбрал направление Фронтенд, потому что мне нравится работать с интерфейсом и видеть результат своей работы.</p>
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
