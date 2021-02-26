import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
    const [limit, setLimit] = React.useState(3);

    function showMoreMovies() {
        setLimit(limit + 3);
    }

    return (
        <Switch>
            <Route path="/movies">
                <section className="movies-card-list">
                    <div className="movies-card-list__grid">
                        {props.movies.slice(setLimit, limit).map((movie, i) => (
                            <MoviesCard
                            movie={movie}
                            key={i}
                            onAddFilm={props.onAddFilm}
                            />
                        ))}
                    </div>
                    {props.movies.length > 6 ? <button className="movies-card-list__more-movies-button" onClick={showMoreMovies}>Ещё</button> : '' }
                </section>
            </Route>
            {/* <Route path="/saved-movies">
                <section className="movies-card-list">
                    <div className="movies-card-list__grid">
                        {props.userMovies && props.userMovies.map((userMovie) => (
                            <MoviesCard
                            userMovie={userMovie}
                            key={userMovie._id}
                            onDeleteFilm={props.onDeleteFilm}
                            />
                        ))}
                    </div>
                </section>
            </Route> */}
        </Switch>
    );
}

export default MoviesCardList;
