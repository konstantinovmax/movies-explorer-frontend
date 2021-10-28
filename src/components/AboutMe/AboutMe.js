import './AboutMe.css';
import studentPhoto from '../../images/aboutMePhoto.jpg';

const AboutMe = () => {
  return (
    <section id="about-me-id" className="about-me">
      <h2 className="about-me__section-title">Студент</h2>
      <div className="about-me__content-container">
        <article className="about-me__text-container">
          <h3 className="about-me__name">Максим</h3>
          <p className="about-me__profession">Фронтенд-разработчик, 28 лет</p>
          <p className="about-me__description">
            Почему я решил стать разработчиком? Во время работы я
            взаимодействовал с разработчиками в рамках проектной деятельности в
            роли бизнес и веб-аналитика. Для понимания процесса разработки мне
            необходимо было обладать техническими знаниями, поэтому я изучал
            процесс разработки и практиковался сам. В результате меня настолько
            увлек процесс программирования, что я решил стать веб-разработчиком,
            чтобы непосредственно самому вести разработку. В веб-разработке я
            выбрал направление Фронтенд, потому что мне нравится работать с
            интерфейсом и видеть результат своей работы.
          </p>
          <ul className="about-me__links-container">
            <li>
              <a
                href="https://www.facebook.com/konstantinovmax"
                className="about-me__link about-me__link_type_first"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/konstantinovmax"
                className="about-me__link about-me__link_type_second"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </article>
        <img
          className="about-me__photo"
          src={studentPhoto}
          alt="Фото студента"
        />
      </div>
    </section>
  );
};

export default AboutMe;
