import React from 'react';
import './Portfolio.css';
import portfolioLinkIcon from '../../images/portfolio-link-icon.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__section-title">Портфолио</h2>
            <a href="https://konstantinovmax.github.io/how-to-learn/" className="portfolio__link-container" target="_blank" rel="noreferrer">
                <p className="portfolio__link-text">Статичный сайт</p>
                <img className="portfolio__link-icon" src={portfolioLinkIcon} alt="Иконка ссылки" />
            </a>
            <span className="portfolio__line" />
            <a href="https://konstantinovmax.github.io/russian-travel/" className="portfolio__link-container" target="_blank" rel="noreferrer">
                <p className="portfolio__link-text">Адаптивный сайт</p>
                <img className="portfolio__link-icon" src={portfolioLinkIcon} alt="Иконка ссылки" />
            </a>
            <span className="portfolio__line" />
            <a href="https://mestomk.students.nomoredomains.monster/" className="portfolio__link-container" target="_blank" rel="noreferrer">
                <p className="portfolio__link-text">Одностраничное приложение</p>
                <img className="portfolio__link-icon" src={portfolioLinkIcon} alt="Иконка ссылки" />
            </a>
        </section>
    );
}

export default Portfolio;
