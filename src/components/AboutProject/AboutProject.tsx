import { FC } from 'react';
import styles from './AboutProject.module.scss';
import classNames from 'classnames';

const AboutProject: FC = () => {
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>О проекте</h2>
      <div className={styles.twoColumns}>
        <article className={styles.column}>
          <h3 className={styles.columnTitle}>
            Дипломный проект включал 5 этапов
          </h3>
          <p className={styles.columnText}>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </article>
        <article className={styles.column}>
          <h3 className={styles.columnTitle}>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className={styles.columnText}>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div
        className={classNames(
          styles.progressBarContainer,
          styles.progressBarContainerFirst,
        )}
      >
        <div
          className={classNames(styles.progressBar, styles.progressBarBackend)}
        >
          <p
            className={classNames(
              styles.progressBarText,
              styles.progressBarTextBlack,
            )}
          >
            1 неделя
          </p>
        </div>
        <div
          className={classNames(styles.progressBar, styles.progressBarFrontend)}
        >
          <p
            className={classNames(
              styles.progressBarText,
              styles.progressBarTextWhite,
            )}
          >
            4 недели
          </p>
        </div>
      </div>
      <div className={styles.progressBarContainer}>
        <div
          className={classNames(
            styles.progressBar,
            styles.progressBarBackendDescription,
          )}
        >
          <p
            className={classNames(
              styles.progressBarText,
              styles.progressBarTextGrey,
            )}
          >
            Back-end
          </p>
        </div>
        <div
          className={classNames(
            styles.progressBar,
            styles.progressBarFrontendDescription,
          )}
        >
          <p
            className={classNames(
              styles.progressBarText,
              styles.progressBarTextGrey,
            )}
          >
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
