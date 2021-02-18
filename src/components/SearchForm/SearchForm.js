import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
    return (
        <form className="search-form">
            <div className="search-form__container">
                <input type="text" className="search-form__input" placeholder="Фильм" />
                <button type="submit" className="search-form__button" />
            </div>
            <FilterCheckbox />
            <span className="search-form__line" />
        </form>
    );
}

export default SearchForm;
