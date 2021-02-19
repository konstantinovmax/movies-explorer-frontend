import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section id="techs-id" className="techs">
            <h2 className="techs__section-title">Технологии</h2>
            <div className="techs__text-techs-container">
                <h3 className="techs__title">7 технологий</h3>
                <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
                <div className="techs__techs-container">
                    <p className="techs__tech">HTML</p>
                    <p className="techs__tech">CSS</p>
                    <p className="techs__tech">JS</p>
                    <p className="techs__tech">React</p>
                    <p className="techs__tech">Git</p>
                    <p className="techs__tech">Express.js</p>
                    <p className="techs__tech">mongoDB</p>
                </div>
            </div>
        </section>
    );
}

export default Techs;
