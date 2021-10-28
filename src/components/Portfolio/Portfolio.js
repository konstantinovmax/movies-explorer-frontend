import './Portfolio.css';
import portfolioLinkIcon from '../../images/portfolioLinkIcon.svg';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__section-title">Портфолио</h2>
      <ul className="portfolio__list">
        <li>
          <a
            href="https://konstantinovmax.github.io/how-to-learn/"
            className="portfolio__link-container"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Статичный сайт</p>
            <img
              className="portfolio__link-icon"
              src={portfolioLinkIcon}
              alt="Иконка ссылки"
            />
          </a>
        </li>
        <span className="portfolio__line" />
        <li>
          <a
            href="https://konstantinovmax.github.io/russian-travel/"
            className="portfolio__link-container"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Адаптивный сайт</p>
            <img
              className="portfolio__link-icon"
              src={portfolioLinkIcon}
              alt="Иконка ссылки"
            />
          </a>
        </li>
        <span className="portfolio__line" />
        <li>
          <a
            href="https://mestomk.students.nomoredomains.monster/"
            className="portfolio__link-container"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__link-text">Одностраничное приложение</p>
            <img
              className="portfolio__link-icon"
              src={portfolioLinkIcon}
              alt="Иконка ссылки"
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
