import styles from './Preloader.module.scss';

const Preloader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <span className={styles.round} />
      </div>
    </div>
  );
};

export default Preloader;
