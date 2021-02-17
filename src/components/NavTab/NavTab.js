import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {
    return (
        <div className="nav-tab">
            <Link to="#" className="nav-tab__link">О проекте</Link>
            <Link to="#" className="nav-tab__link">Технологии</Link>
            <Link to="#" className="nav-tab__link">Студент</Link>
        </div>
    );
}

export default NavTab;
