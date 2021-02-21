import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies() {
    return (
        <div className="movies">
           <SearchForm />
           <MoviesCardList />
        </div>
    );
}

export default Movies;
