import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const [searchData, setSearchData] = React.useState('')

    function handleChange(evt) {
        setSearchData(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onGetMovies()
        setSearchData('')
    }

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__container">
                <input
                type="text"
                className="search-form__input"
                placeholder="Фильм"
                minLength="2"
                maxLength="30"
                required
                onChange={handleChange}
                value={searchData}
                />
                <button type="submit" className="search-form__button" />
            </div>
            <FilterCheckbox />
            <span className="search-form__line" />
        </form>
    );
}

export default SearchForm;
