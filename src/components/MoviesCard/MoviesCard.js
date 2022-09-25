import React from 'react';
import styles from './MoviesCard.module.scss';
import classNames from 'classnames';

const apiUrl = 'https://api.nomoreparties.co';

const MoviesCard = ({ movie, onToggleMovie, savedMovies }) => {
  const handleToggleButton = () => {
    onToggleMovie(movie);
  };

  return (
    <>
      <figure className={styles.root} key={movie._id}>
        {savedMovies ? (
          <button
            type="button"
            className={classNames(styles.button, styles.deleteButton)}
            onClick={handleToggleButton}
          />
        ) : (
          <button
            type="button"
            className={classNames(
              styles.button,
              movie.isAlreadyAdded
                ? styles.alreadyAddedButton
                : styles.addButton
            )}
            onClick={handleToggleButton}
          />
        )}
        <a
          className={styles.link}
          href={savedMovies ? movie.trailer : movie.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className={styles.image}
            src={
              savedMovies
                ? movie.image
                : `${apiUrl}${movie.image ? movie.image.url : ''}`
            }
            alt={movie.nameRU}
          />
        </a>
        <figcaption className={styles.container}>
          <p className={styles.description}>{movie.nameRU}</p>
          <p className={styles.duration}>{`${Math.floor(
            movie.duration / 60
          )}ч ${movie.duration % 60}м`}</p>
        </figcaption>
      </figure>
    </>
  );
};

export default MoviesCard;
