import React from 'react';
import { useState } from 'react';
import styles from './MoviesCardList.module.scss';
import MoviesCard from '../MoviesCard/MoviesCard';

const MoviesCardList = ({
  movies,
  savedMovies,
  onToggleMovie,
  movieSearchError,
}) => {
  const [limit, setLimit] = useState(4);

  const showMoreMovies = () => {
    setLimit(limit + 4);
  };

  return (
    <section className={styles.root}>
      <div className={styles.grid}>
        {movies.length > 0 &&
          movies
            .slice(0, limit)
            .map((movie, i) => (
              <MoviesCard
                movie={movie}
                key={i}
                savedMovies={savedMovies}
                onToggleMovie={onToggleMovie}
              />
            ))}
      </div>
      {savedMovies
        ? movies.length < 1 && (
            <p className={styles.message}>Нет добавленных фильмов</p>
          )
        : movies.length < 1 && (
            <p className={styles.message}>{movieSearchError}</p>
          )}
      {savedMovies ? (
        ''
      ) : movies.length > 0 && movies.length > limit ? (
        <button className={styles.button} onClick={showMoreMovies}>
          Ещё
        </button>
      ) : (
        ''
      )}
    </section>
  );
};

export default MoviesCardList;
