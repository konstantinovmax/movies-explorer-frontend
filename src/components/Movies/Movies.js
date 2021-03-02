import React, { Suspense } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = React.lazy(() => import('../MoviesCardList/MoviesCardList'));

function Movies(props) {
    return (
        <div className="movies">
           <SearchForm
           onGetMovies={props.onGetMovies}
           />
           <Suspense fallback={<Preloader />}>
            <MoviesCardList
            movies={props.movies}
            savedMovies={false}
            onAddFilm={props.onAddFilm}
            />
           </Suspense>
        </div>
    );
}

export default Movies;
