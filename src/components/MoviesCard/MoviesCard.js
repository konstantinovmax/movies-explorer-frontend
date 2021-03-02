import React from 'react';
import './MoviesCard.css';
const apiUrl = 'https://api.nomoreparties.co';

function MoviesCard(props) {

    function handleAddFilm() {
        
    }

    function handleDeleteFilm() {

    }
    
    return (
        <>
            <figure className="movies-card" key={props.movie._id}>
                {
                props.savedMovies
                ? <button type="button" className="movies-card__delete-button" onClick={handleDeleteFilm} />
                : <button type="button" className="movies-card__add-button" onClick={handleAddFilm}>Сохранить</button>
                }
                <a
                className="movies-card__trailer-link"
                href={props.savedMovies ? props.movie.trailer : props.movie.trailerLink}
                target="_blank"
                rel="noreferrer"
                >
                    <img className="movies-card__image" src=
                    {
                        props.savedMovies
                        ? props.movie.image
                        : `${apiUrl}${props.movie.image ? props.movie.image.url : ''}`
                    }
                        alt={props.movie.nameRU} />
                </a>
                <figcaption className="movies-card__description-duration-container">
                    <p className="movies-card__description">{props.movie.nameRU}</p>
                    <p className="movies-card__duration">{props.movie.duration}</p>
                </figcaption>
            </figure>
        </>
    );
}

export default MoviesCard;
