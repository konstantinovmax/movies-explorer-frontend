import './Techs.css';

const Techs = () => {
  return (
    <section id="techs-id" className="techs">
      <h2 className="techs__section-title">Технологии</h2>
      <div className="techs__text-techs-container">
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__text">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className="techs__list">
          <li className="techs__item-container">
            <p className="techs__item">HTML</p>
          </li>
          <li className="techs__item-container">
            <p className="techs__item">CSS</p>
          </li>
          <li className="techs__item-container">
            <p className="techs__item">JS</p>
          </li>
          <li className="techs__item-container">
            <p className="techs__item">React</p>
          </li>
          <li className="techs__item-container">
            <p className="techs__item">Git</p>
          </li>
          <li className="techs__item-container">
            <p className="techs__item">Express.js</p>
          </li>
          <li className="techs__item-container techs__item-container_type_last">
            <p className="techs__item">mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
