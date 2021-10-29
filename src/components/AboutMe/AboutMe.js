import styles from './AboutMe.module.scss';
import studentPhoto from '../../images/aboutMePhoto.jpg';

const AboutMe = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Студент</h2>
      <div className={styles.contentContainer}>
        <article className={styles.textContainer}>
          <h3 className={styles.name}>Максим</h3>
          <p className={styles.profession}>Фронтенд-разработчик, 28 лет</p>
          <p className={styles.description}>
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
          <ul className={styles.linksContainer}>
            <li>
              <a
                href="https://www.facebook.com/konstantinovmax"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://github.com/konstantinovmax"
                className={styles.link}
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </article>
        <img className={styles.photo} src={studentPhoto} alt="Фото студента" />
      </div>
    </section>
  );
};

export default AboutMe;
