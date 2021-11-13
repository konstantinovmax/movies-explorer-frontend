import styles from './Techs.module.scss';

const Techs = () => {
  return (
    <section id="techs-id" className={styles.root}>
      <h2 className={styles.sectionTitle}>Технологии</h2>
      <div className={styles.container}>
        <h3 className={styles.title}>7 технологий</h3>
        <p className={styles.text}>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <ul className={styles.list}>
          <li className={styles.itemContainer}>
            <p className={styles.item}>HTML</p>
          </li>
          <li className={styles.itemContainer}>
            <p className={styles.item}>CSS</p>
          </li>
          <li className={styles.itemContainer}>
            <p className={styles.item}>JS</p>
          </li>
          <li className={styles.itemContainer}>
            <p className={styles.item}>React</p>
          </li>
          <li className={styles.itemContainer}>
            <p className={styles.item}>Git</p>
          </li>
          <li className={styles.itemContainer}>
            <p className={styles.item}>Express.js</p>
          </li>
          <li className={styles.itemContainer}>
            <p className={styles.item}>mongoDB</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Techs;
