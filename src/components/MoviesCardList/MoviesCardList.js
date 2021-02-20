import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <Switch>
            <Route path="/movies">
                <section className="movies-card-list">
                    <ul className="movies-card-list__grid">
                        <MoviesCard />
                    </ul>
                    <button className="movies-card-list__more-movies-button">Ещё</button>
                </section>
            </Route>
            <Route path="/saved-movies">
                <section className="movies-card-list">
                    <ul className="movies-card-list__grid">
                        <MoviesCard />
                    </ul>
                </section>
            </Route>
        </Switch>
    );
}

export default MoviesCardList;
