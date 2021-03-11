import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    const [limit, setLimit] = React.useState(50);

    function showMoreMovies() {
        setLimit(limit + 3);
    }

    return (
        <section className="movies-card-list">
            <div className="movies-card-list__grid">
                {props.movies.slice(0, limit).map((movie) => (
                    <MoviesCard
                    movie={movie}
                    movies={props.movies}
                    key={movie._id}
                    savedMovies={props.savedMovies}
                    onAddFilm={props.onAddFilm}
                    onDeleteFilm={props.onDeleteFilm}
                    />
                ))}
            </div>
            {
            props.savedMovies
            ? ''
            : props.movies.length >= 3 && props.movies.length <= 100 ? <button className="movies-card-list__more-movies-button" onClick={showMoreMovies}>Ещё</button> : ''
            }
        </section>
    );
}

export default MoviesCardList;
