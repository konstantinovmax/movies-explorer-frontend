import React from 'react';
import './MoviesCard.css';
const apiUrl = 'https://api.nomoreparties.co';


function MoviesCard(props) {
        
    const movieButtonClassName = (
        `movies-card__button ${props.movie.isAlreadyAdded ? 'movies-card__button_type_already-added' : 'movies-card__button_type_add'}`
    );

    function handleToggleButton() {
        props.onToggleMovie(props.movie);
    }
    
    return (
        <>
            <figure className="movies-card" key={props.movie._id}>
                {
                    props.savedMovies
                        ? <button type="button" className="movies-card__button movies-card__button_type_delete" onClick={handleToggleButton} />
                        : <button type="button" className={movieButtonClassName} onClick={handleToggleButton} />
                }
                <a
                className="movies-card__trailer-link"
                href={props.savedMovies ? props.movie.trailer : props.movie.trailerLink}
                target="_blank"
                rel="noreferrer"
                >
                    <img className="movies-card__image" src={
                        props.savedMovies
                        ? props.movie.image
                        : `${apiUrl}${props.movie.image ? props.movie.image.url : ''}`
                    }
                        alt={props.movie.nameRU} />
                </a>
                <figcaption className="movies-card__description-duration-container">
                    <p className="movies-card__description">{props.movie.nameRU}</p>
                    <p className="movies-card__duration">{`${Math.floor(props.movie.duration / 60)}ч ${props.movie.duration % 60}м`}</p>
                </figcaption>
            </figure>
        </>
    );
}

export default MoviesCard;
