import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
    return (
        <div className="saved-movies">
            <SearchForm
            
            />
            <MoviesCardList
            userMovies={props.userMovies}
            onDeleteFilm={props.onDeleteFilm}
            />
        </div>
        
    );
}

export default SavedMovies;
