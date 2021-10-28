import './AboutProject.css';

const AboutProject = () => {
  return (
    <section id="about-project-id" className="about-project">
      <h2 className="about-project__section-title">О проекте</h2>
      <div className="about-project__two-columns">
        <article className="about-project__column">
          <h3 className="about-project__column-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__column-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-project__column">
          <h3 className="about-project__column-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__column-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="about-project__progress-bar-container about-project__progress-bar-container_type_first">
        <div className="about-project__progress-bar about-project__progress-bar_type_backend">
          <p className="about-project__progress-bar-text about-project__progress-bar-text_type_black">
            1 неделя
          </p>
        </div>
        <div className="about-project__progress-bar about-project__progress-bar_type_frontend">
          <p className="about-project__progress-bar-text about-project__progress-bar-text_type_white">
            4 недели
          </p>
        </div>
      </div>
      <div className="about-project__progress-bar-container">
        <div className="about-project__progress-bar about-project__progress-bar_type_backend-description">
          <p className="about-project__progress-bar-text about-project__progress-bar-text_type_grey">
            Back-end
          </p>
        </div>
        <div className="about-project__progress-bar about-project__progress-bar_type_frontend-description">
          <p className="about-project__progress-bar-text about-project__progress-bar-text_type_grey">
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
