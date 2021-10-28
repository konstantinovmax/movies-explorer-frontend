import { Route, Switch } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <Switch>
      <Route exact path="/">
        <footer className="footer">
          <p className="footer__text">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__copyright-links-container">
            <p className="footer__copyright">© 2021</p>
            <ul className="footer__links-container">
              <li className="footer__link-container">
                <a
                  href="https://praktikum.yandex.ru/"
                  className="footer__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__link-container">
                <a
                  href="https://github.com/konstantinovmax"
                  className="footer__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="footer__link-container footer__link-container_type_last">
                <a
                  href="https://www.facebook.com/konstantinovmax"
                  className="footer__link"
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
        <footer className="footer">
          <p className="footer__text">
            Учебный проект Яндекс.Практикум х BeatFilm.
          </p>
          <div className="footer__copyright-links-container">
            <p className="footer__copyright">© 2021</p>
            <ul className="footer__links-container">
              <li className="footer__link-container">
                <a
                  href="https://praktikum.yandex.ru/"
                  className="footer__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Яндекс.Практикум
                </a>
              </li>
              <li className="footer__link-container">
                <a
                  href="https://github.com/konstantinovmax"
                  className="footer__link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="footer__link-container footer__link-container_type_last">
                <a
                  href="https://www.facebook.com/konstantinovmax"
                  className="footer__link"
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
