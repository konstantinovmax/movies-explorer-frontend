import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <section className="movies-card-list">
            <div className="movies-card-list__grid">
                <MoviesCard />
            </div>
            <button className="movies-card-list__more-movies-button">Ещё</button>
        </section>
    );
}

export default MoviesCardList;
