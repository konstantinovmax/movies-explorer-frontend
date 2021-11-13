import styles from './Promo.module.scss';
import NavTab from '../NavTab/NavTab';

const Promo = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <NavTab />
    </section>
  );
};

export default Promo;
