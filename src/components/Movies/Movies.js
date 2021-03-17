import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  const [searchData, setSearchData] = React.useState('');
  const [checkboxChecked, setCheckboxChecked] = React.useState(false);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const localStorMovies = JSON.parse(localStorage.getItem('movies'));
  const filteredFoundMovies = searchMovieFilter(props.movies, searchData);
  const filteredFoundMoviesWithDuration = movieDurationFilter(filteredFoundMovies, checkboxChecked);
  
  function searchMovieFilter(movies, searchQuery) {
    return movies.filter((movie) => movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  function movieDurationFilter(movies, checked) {
    return movies.filter((movie) => checked ? movie.duration <= 40 : Number);
  }

  function handleSearchData(searchQuery) {
    setSearchData(searchQuery);
    if (!localStorMovies) {
      props.onGetMovies();
    }
  }
  
  function handleCheckboxChange() {
    setCheckboxChecked(!checkboxChecked);
  }
  
  React.useEffect(() => {
    setFilteredMovies(filteredFoundMoviesWithDuration);
  }, [props.movies, searchData, checkboxChecked]); // eslint-disable-line

  return (
    <div className="movies">
      <SearchForm
      onGetMovies={props.onGetMovies}
      onSearchSubmit={handleSearchData}
      onCheckboxChecked={checkboxChecked}
      onCheckboxChange={handleCheckboxChange}
      />
      {
        props.loading
        ? <Preloader />
        : <MoviesCardList
          savedMovies={false}
          movies={filteredMovies}
          onToggleMovie={props.onToggleMovie}
          noticeMessage={props.noticeMessage}
          movieSearchError={props.movieSearchError}
          />
      }  
    </div>
  );
}

export default Movies;
