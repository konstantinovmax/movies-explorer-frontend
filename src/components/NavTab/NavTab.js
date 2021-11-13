import { HashLink as Link } from 'react-router-hash-link';
import styles from './NavTab.module.scss';

const NavTab = () => {
  return (
    <nav className={styles.root}>
      <Link to="/#about-project-id" className={styles.link}>
        О проекте
      </Link>
      <Link to="/#techs-id" className={styles.link}>
        Технологии
      </Link>
      <Link to="/#about-me-id" className={styles.link}>
        Студент
      </Link>
    </nav>
  );
};

export default NavTab;
