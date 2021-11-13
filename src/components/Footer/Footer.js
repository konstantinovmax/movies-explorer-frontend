import { Route, Switch } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <Switch>
      <Route exact path="/">
        <footer className={styles.root}>
          <p className={styles.text}>
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className={styles.mainContainer}>
            <p className={styles.copyright}>© 2021</p>
            <ul className={styles.linksContainer}>
              <li className={styles.linkContainer}>
                <a
                  href="https://praktikum.yandex.ru/"
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className={styles.linkContainer}>
                <a
                  href="https://github.com/konstantinovmax"
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className={styles.linkContainer}>
                <a
                  href="https://www.facebook.com/konstantinovmax"
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Route>
      <Route path={['/movies', '/saved-movies']}>
        <footer className={styles.root}>
          <p className={styles.text}>
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className={styles.mainContainer}>
            <p className={styles.copyright}>© 2021</p>
            <ul className={styles.linksContainer}>
              <li className={styles.linkContainer}>
                <a
                  href="https://praktikum.yandex.ru/"
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className={styles.linkContainer}>
                <a
                  href="https://github.com/konstantinovmax"
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className={styles.linkContainer}>
                <a
                  href="https://www.facebook.com/konstantinovmax"
                  className={styles.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </Route>
    </Switch>
  );
};

export default Footer;
