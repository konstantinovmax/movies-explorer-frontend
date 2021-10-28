import { useState } from 'react';
import './MoviesCardList.css';
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
    <section className="movies-card-list">
      <div className="movies-card-list__grid">
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
            <p className="movies-card-list__message">Нет добавленных фильмов</p>
          )
        : movies.length < 1 && (
            <p className="movies-card-list__message">{movieSearchError}</p>
          )}
      {savedMovies ? (
        ''
      ) : movies.length > 0 && movies.length > limit ? (
        <button
          className="movies-card-list__more-movies-button"
          onClick={showMoreMovies}
        >
          Ещё
        </button>
      ) : (
        ''
      )}
    </section>
  );
};

export default MoviesCardList;
