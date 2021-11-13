import styles from './Portfolio.module.scss';
import portfolioLinkIcon from '../../images/portfolioLinkIcon.svg';

const Portfolio = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Портфолио</h2>
      <ul className={styles.list}>
        <li>
          <a
            href="https://konstantinovmax.github.io/how-to-learn/"
            className={styles.container}
            target="_blank"
            rel="noreferrer"
          >
            <p className={styles.linkText}>Статичный сайт</p>
            <img
              className={styles.linkIcon}
              src={portfolioLinkIcon}
              alt="Иконка ссылки"
            />
          </a>
        </li>
        <span className={styles.line} />
        <li>
          <a
            href="https://konstantinovmax.github.io/russian-travel/"
            className={styles.container}
            target="_blank"
            rel="noreferrer"
          >
            <p className={styles.linkText}>Адаптивный сайт</p>
            <img
              className={styles.linkIcon}
              src={portfolioLinkIcon}
              alt="Иконка ссылки"
            />
          </a>
        </li>
        <span className={styles.line} />
        <li>
          <a
            href="https://mestomk.students.nomoredomains.monster/"
            className={styles.container}
            target="_blank"
            rel="noreferrer"
          >
            <p className={styles.linkText}>Одностраничное приложение</p>
            <img
              className={styles.linkIcon}
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
