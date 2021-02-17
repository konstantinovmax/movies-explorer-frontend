import React from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import portfolioLinkIcon from '../../images/portfolio-link-icon.svg';

function Portfolio() {
    return (
        <section className="portfolio">
            <h2 className="portfolio__section-title">Портфолио</h2>
            <Link to="#" className="portfolio__link-container">
                <p className="portfolio__link-text">Статичный сайт</p>
                <img className="portfolio__link-icon" src={portfolioLinkIcon} alt="Иконка ссылки" />
            </Link>
            <span className="portfolio__line" />
            <Link to="#" className="portfolio__link-container">
                <p className="portfolio__link-text">Адаптивный сайт</p>
                <img className="portfolio__link-icon" src={portfolioLinkIcon} alt="Иконка ссылки" />
            </Link>
            <span className="portfolio__line" />
            <Link to="#" className="portfolio__link-container">
                <p className="portfolio__link-text">Одностраничное приложение</p>
                <img className="portfolio__link-icon" src={portfolioLinkIcon} alt="Иконка ссылки" />
            </Link>
        </section>
    );
}

export default Portfolio;
