import { useState, useEffect } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

const SavedMovies = ({
  userMovies,
  isLoading,
  movieSearchError,
  onToggleMovie,
}) => {
  const [searchData, setSearchData] = useState('');
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const searchMovieFilter = (movies, searchQuery) => {
    return movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const movieDurationFilter = (movies, checked) => {
    return movies.filter((movie) => (checked ? movie.duration <= 40 : Number));
  };

  const filteredFoundMovies = searchMovieFilter(userMovies, searchData);

  const filteredFoundMoviesWithDuration = movieDurationFilter(
    filteredFoundMovies,
    isCheckboxChecked
  );

  const handleSearchData = (searchQuery) => {
    setSearchData(searchQuery);
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  useEffect(() => {
    setFilteredMovies(filteredFoundMoviesWithDuration);
  }, [userMovies, searchData, isCheckboxChecked]);

  return (
    <div className="saved-movies">
      <SearchForm
        onSearchSubmit={handleSearchData}
        onCheckboxChecked={isCheckboxChecked}
        onCheckboxChange={handleCheckboxChange}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={filteredMovies}
          savedMovies={true}
          onToggleMovie={onToggleMovie}
          movieSearchError={movieSearchError}
        />
      )}
    </div>
  );
};

export default SavedMovies;
