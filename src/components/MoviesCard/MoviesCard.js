import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './MoviesCard.css';
import filmOne from '../../images/film1.png';
import filmTwo from '../../images/film2.png';
import filmThree from '../../images/film3.png';
import filmFour from '../../images/film4.png';
import filmFive from '../../images/film5.png';
import filmSix from '../../images/film6.png';
import filmSeven from '../../images/film7.png';
import filmEight from '../../images/film8.png';
import filmNine from '../../images/film9.png';
import filmTen from '../../images/film10.png';
import filmEleven from '../../images/film11.png';
import filmTwelve from '../../images/film12.png';

function MoviesCard() {
    return (
        <>
            <Switch >
                <Route path="/movies">
                    <figure className="movies-card">
                        <button type="button" className="movies-card__add-button">Сохранить</button>
                        <img className="movies-card__image" src={filmOne} alt="33 слова о дизайне" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">33 слова о дизайне</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <span className="movies-card__already-added-icon" />
                        <img className="movies-card__image" src={filmTwo} alt="Киноальманах «100 лет дизайна»" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Киноальманах «100 лет дизайна»</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={filmThree} alt="В погоне за Бенкси" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">В погоне за Бенкси</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={filmFour} alt="Баския: Взрыв реальности" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Баския: Взрыв реальности</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={filmFive} alt="Бег это свобода" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Бег это свобода</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <button type="button" className="movies-card__add-button">Сохранить</button>
                        <img className="movies-card__image" src={filmSix} alt="Книготорговцы" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Книготорговцы</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <span className="movies-card__already-added-icon" />
                        <img className="movies-card__image" src={filmSeven} alt="Когда я думаю о Германии ночью" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Когда я думаю о Германии ночью</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={filmEight} alt="Gimme Danger: История Игги и The Stooges" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Gimme Danger: История Игги и The Stooges</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={filmNine} alt="Дженис: Маленькая девочка грустит" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Дженис: Маленькая девочка грустит</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={filmTen} alt="Соберись перед прыжком" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Соберись перед прыжком</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <span className="movies-card__already-added-icon" />
                        <img className="movies-card__image" src={filmEleven} alt="Пи Джей Харви: A dog called money" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Пи Джей Харви: A dog called money</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={filmTwelve} alt="По волнам: Искусство звука в кино" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">По волнам: Искусство звука в кино</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                </Route>
                <Route path="/saved-movies">
                    <figure className="movies-card">
                        <img className="movies-card__image" src={filmTwo} alt="Киноальманах «100 лет дизайна»" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Киноальманах «100 лет дизайна»</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <img className="movies-card__image" src={filmSeven} alt="Когда я думаю о Германии ночью" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Когда я думаю о Германии ночью</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                    <figure className="movies-card">
                        <span className="movies-card__delete-button" />
                        <img className="movies-card__image" src={filmEleven} alt="Пи Джей Харви: A dog called money" />
                        <figcaption className="movies-card__description-duration-container">
                            <p className="movies-card__description">Пи Джей Харви: A dog called money</p>
                            <p className="movies-card__duration">1ч 17м</p>
                        </figcaption>
                    </figure>
                </Route>
            </Switch>
        </>
    );
}

export default MoviesCard;
