import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    const [limit, setLimit] = React.useState(3);

    function showMoreMovies() {
        setLimit(limit + 3);
    }

    return (
        <section className="movies-card-list">
            <div className="movies-card-list__grid">
                {props.movies.slice(setLimit, limit).map((movie, i) => (
                    <MoviesCard
                    movie={movie}
                    key={i}
                    savedMovies={props.savedMovies}
                    onAddFilm={props.onAddFilm}
                    onDeleteFilm={props.onDeleteFilm}
                    />
                ))}
            </div>
            {
            props.savedMovies
            ? ''
            : props.movies.length >= 3 ? <button className="movies-card-list__more-movies-button" onClick={showMoreMovies}>Ещё</button> : ''
            }
        </section>
    );
}

export default MoviesCardList;
