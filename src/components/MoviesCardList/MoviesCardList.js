import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    const [limit, setLimit] = React.useState(4);

    /* function numberOfMoviesCard() {
        if (!props.savedMovies && window.innerWidth >= 1280) {
            return 12
        } else if (!props.savedMovies && window.innerWidth >= 480 && window.innerWidth < 1280) {
            return 8
        } else if (!props.savedMovies && window.innerWidth < 480) {
            return 5
        }
    } */

    function showMoreMovies() {
        setLimit(limit + 4);
    }

    return (
        <section className="movies-card-list">
            <div className="movies-card-list__grid">
                {props.movies.length > 0 && props.movies.slice(0, limit).map((movie, i) => (
                    <MoviesCard
                    movie={movie}
                    key={i}
                    savedMovies={props.savedMovies}
                    onToggleMovie={props.onToggleMovie}
                    />
                ))}
            </div>
            {props.savedMovies ? props.movies.length < 1 && <p className="movies-card-list__message">Нет добавленных фильмов</p> : props.movies.length < 1 && <p className="movies-card-list__message">{props.movieSearchError}</p>}
            {
                props.savedMovies
                ? ''
                : (props.movies.length > 0) && (props.movies.length > limit) ? <button className="movies-card-list__more-movies-button" onClick={showMoreMovies}>Ещё</button> : ''
            }
        </section>
    );
}

export default MoviesCardList;
