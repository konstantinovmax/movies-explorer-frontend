import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
  const [searchData, setSearchData] = React.useState('');
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const filteredFoundMovies = searchMovieFilter(props.userMovies, searchData);
  const filteredFoundMoviesWithDuration = movieDurationFilter(filteredFoundMovies, checkboxChecked);
  
  function searchMovieFilter(movies, searchQuery) {
    return movies.filter((movie) => movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  function movieDurationFilter(movies, checked) {
    return movies.filter((movie) => checked ? movie.duration <= 40 : Number);
  }

  function handleSearchData(searchQuery) {
    setSearchData(searchQuery);
  }
  
  function handleCheckboxChange() {
    setCheckboxChecked(!checkboxChecked);
  }
  
  React.useEffect(() => {
    setFilteredMovies(filteredFoundMoviesWithDuration);
  }, [props.userMovies, searchData, checkboxChecked]); // eslint-disable-line

  return (
    <div className="saved-movies">
      <SearchForm
      onSearchSubmit={handleSearchData}
      onCheckboxChecked={checkboxChecked}
      onCheckboxChange={handleCheckboxChange}
      />
      {
        props.loading
        ? <Preloader />
        : <MoviesCardList
          savedMovies={true}
          movies={filteredMovies}
          onToggleMovie={props.onToggleMovie}
        />
      }
    </div>
  );
}

export default SavedMovies;
