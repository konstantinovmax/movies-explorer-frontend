import './MoviesCard.css';

const apiUrl = 'https://api.nomoreparties.co';

const MoviesCard = ({ movie, onToggleMovie, savedMovies }) => {
  const movieButtonClassName = `movies-card__button ${
    movie.isAlreadyAdded
      ? 'movies-card__button_type_already-added'
      : 'movies-card__button_type_add'
  }`;

  const handleToggleButton = () => {
    onToggleMovie(movie);
  };

  return (
    <>
      <figure className="movies-card" key={movie._id}>
        {savedMovies ? (
          <button
            type="button"
            className="movies-card__button movies-card__button_type_delete"
            onClick={handleToggleButton}
          />
        ) : (
          <button
            type="button"
            className={movieButtonClassName}
            onClick={handleToggleButton}
          />
        )}
        <a
          className="movies-card__trailer-link"
          href={savedMovies ? movie.trailer : movie.trailerLink}
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="movies-card__image"
            src={
              savedMovies
                ? movie.image
                : `${apiUrl}${movie.image ? movie.image.url : ''}`
            }
            alt={movie.nameRU}
          />
        </a>
        <figcaption className="movies-card__description-duration-container">
          <p className="movies-card__description">{movie.nameRU}</p>
          <p className="movies-card__duration">{`${Math.floor(
            movie.duration / 60
          )}ч ${movie.duration % 60}м`}</p>
        </figcaption>
      </figure>
    </>
  );
};

export default MoviesCard;
