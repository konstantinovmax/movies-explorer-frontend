import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <Switch>
            <Route exact path="/">
                <footer className="footer">
                    <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__copyright-links-container">
                        <p className="footer__copyright">© 2021</p>
                        <div className="footer__links-container">
                            <Link to="#" className="footer__link">Яндекс.Практикум</Link>
                            <Link to="#" className="footer__link">Github</Link>
                            <Link to="#" className="footer__link">Facebook</Link>
                        </div>
                    </div>
                </footer>
            </Route>
            <Route path="/movies">
                <footer className="footer">
                    <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__copyright-links-container">
                        <p className="footer__copyright">© 2021</p>
                        <div className="footer__links-container">
                            <Link to="#" className="footer__link">Яндекс.Практикум</Link>
                            <Link to="#" className="footer__link">Github</Link>
                            <Link to="#" className="footer__link">Facebook</Link>
                        </div>
                    </div>
                </footer>
            </Route>
            <Route path="/saved-movies">
                <footer className="footer">
                    <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                    <div className="footer__copyright-links-container">
                        <p className="footer__copyright">© 2021</p>
                        <div className="footer__links-container">
                            <Link to="#" className="footer__link">Яндекс.Практикум</Link>
                            <Link to="#" className="footer__link">Github</Link>
                            <Link to="#" className="footer__link">Facebook</Link>
                        </div>
                    </div>
                </footer>
            </Route>
        </Switch>
        
    );
}

export default Footer;