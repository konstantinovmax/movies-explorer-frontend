import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <section className="footer">
            <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            <div className="footer__copyright-links-container">
                <p className="footer__copyright">© 2021</p>
                <div className="footer__links-container">
                    <Link to="#" className="footer__link">Яндекс.Практикум</Link>
                    <Link to="#" className="footer__link">Github</Link>
                    <Link to="#" className="footer__link">Facebook</Link>
                </div>
            </div>
        </section>
    );
}

export default Footer;