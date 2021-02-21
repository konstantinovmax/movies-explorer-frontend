import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

function PageNotFound() {
    return (
        <div className="page-not-found">
            <div className="page-not-found__text-container">
                <h2 className="page-not-found__title">404</h2>
                <p className="page-not-found__subtitle">Страница не найдена</p>
            </div>
            <Link to="/" className="page-not-found__back-link">Назад</Link>
        </div>
    );
}

export default PageNotFound;
