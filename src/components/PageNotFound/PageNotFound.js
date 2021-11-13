import { useHistory } from 'react-router-dom';
import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  const history = useHistory();

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.title}>404</h2>
        <p className={styles.subtitle}>Страница не найдена</p>
      </div>
      <button className={styles.button} onClick={history.goBack}>
        Назад
      </button>
    </div>
  );
};

export default PageNotFound;
