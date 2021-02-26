import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MoviesCard.css';
const apiUrl = 'https://api.nomoreparties.co';

function MoviesCard(props) {
    
    return (
        <>
            <Switch >
                <Route path="/movies">
                    <figure className="movies-card" key={props.movie._id}>
                        <button type="button" className="movies-card__add-button" onClick={props.onAddFilm}>Сохранить</button>
                        <a
                        className="movies-card__trailer-link"
                        href={props.movie.trailerLink}
                        target="_blank"
                        rel="noreferrer"
                        >
                            <img className="movies-card__image" src={`${apiUrl}${props.movie.image ? props.movie.image.url : ''}`} alt={props.movie.nameRU} />
                        </a>
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">{props.movie.nameRU}</p>
                            <p className="movies-card__duration">{props.movie.duration}</p>
                        </figcaption>
                    </figure>
                </Route>
                {/* <Route path="/saved-movies">
                    <figure className="movies-card" key={props.userMovie._id}>
                        <button type="button" className="movies-card__delete-button" onClick={props.onDeleteFilm} />
                        <a
                        className="movies-card__trailer-link"
                        href={props.userMovie.trailer}
                        target="_blank"
                        rel="noreferrer"
                        >
                            <img className="movies-card__image" src={props.userMovie.image} alt={props.userMovie.nameRU} />
                        </a>
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">{props.userMovie.nameRU}</p>
                            <p className="movies-card__duration">{props.userMovie.duration}</p>
                        </figcaption>
                    </figure>
                </Route> */}
            </Switch>
        </>
    );
}

export default MoviesCard;
