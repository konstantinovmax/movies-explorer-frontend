import { useState, useEffect, useMemo } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const Movies = ({
  movies,
  onGetMovies,
  isLoading,
  onToggleMovie,
  movieSearchError,
}) => {
  const [searchData, setSearchData] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const localStorMovies = JSON.parse(localStorage.getItem('movies'));

  const searchMovieFilter = (movies, searchQuery) => {
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const movieDurationFilter = (movies, checked) => {
    return movies.filter((movie) => (checked ? movie.duration <= 40 : Number));
  };

  const filteredFoundMovies = searchMovieFilter(movies, searchData);

  const filteredFoundMoviesWithDuration = movieDurationFilter(
    filteredFoundMovies,
    isCheckboxChecked
  );

  const handleSearchData = (searchQuery) => {
    setSearchData(searchQuery);
    if (!localStorMovies) {
      onGetMovies();
    }
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  useEffect(() => {
    setFilteredMovies(filteredFoundMoviesWithDuration);
  }, [movies, searchData, isCheckboxChecked]);

  return (
    <div className="movies">
      <SearchForm
        onSearchSubmit={handleSearchData}
        onCheckboxChecked={isCheckboxChecked}
        onCheckboxChange={handleCheckboxChange}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          savedMovies={false}
          movies={filteredMovies}
          onToggleMovie={onToggleMovie}
          movieSearchError={movieSearchError}
        />
      )}
    </div>
  );
};

export default Movies;
