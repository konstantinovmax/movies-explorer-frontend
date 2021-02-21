import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './NavTab.css';

function NavTab() {
    return (
        <nav className="nav-tab">
            <Link to="/#about-project-id" className="nav-tab__link">О проекте</Link>
            <Link to="/#techs-id" className="nav-tab__link">Технологии</Link>
            <Link to="/#about-me-id" className="nav-tab__link">Студент</Link>
        </nav>
    );
}

export default NavTab;
