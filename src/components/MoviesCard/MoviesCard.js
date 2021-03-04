import React from 'react';
import './MoviesCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const apiUrl = 'https://api.nomoreparties.co';


function MoviesCard(props) {
    const currentUser = React.useContext(CurrentUserContext);
    console.log(props.movie);
    const isAlreadyAdded = props.movie.owner === currentUser._id;
    const movieCardIconClassName = (
        `movies-card__add-button ${isAlreadyAdded ? 'movies-card__already-added-icon' : 'movies-card__add-button'}`
    );

    function handleAddFilm() {
        props.onAddFilm({
            country: props.movie.country,
            director: props.movie.director,
            duration: props.movie.duration,
            year: props.movie.year,
            description: props.movie.description,
            image: `${apiUrl}${props.movie.image ? props.movie.image.url : ''}`,
            trailer: props.movie.trailerLink,
            thumbnail: `${apiUrl}${props.movie.image.formats.thumbnail ? props.movie.image.formats.thumbnail.url : ''}`,
            movieId: props.movie.id,
            nameRU: props.movie.nameRU,
            nameEN: props.movie.nameEN
        });
    }

    function handleDeleteFilm() {
        props.onDeleteFilm(props.movie);
    }
    
    return (
        <>
            <figure className="movies-card" key={props.movie._id}>
                {
                props.savedMovies
                ? <button type="button" className="movies-card__delete-button" onClick={handleDeleteFilm} />
                : <button type="button" className={movieCardIconClassName} onClick={handleAddFilm}>Сохранить</button>
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
