import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm(props) {
    const [searchData, setSearchData] = React.useState('')
    const [searchDataDirty, setSearchDataDirty] = React.useState(false);
    const [searchDataError, setSearchDataError] = React.useState('Нужно ввести ключевое слово');
    const [formValid, setFormValid] = React.useState(false);

    function blurHandler(e) {
        switch (e.target.name) {
            case 'search':
                setSearchDataDirty(true);
                break;

            default:
                console.log('Ошибка в blurHandler');
                break;
        }
    }

    function handleChange(e) {
        setSearchData(e.target.value);

        if (e.target.value.length < 2 || e.target.value.length > 30) {
            setSearchDataError('Текст запроса должен составлять от 2 до 30 символов');
        } else {
            setSearchDataError('');
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onGetMovies()
        setSearchData('')
    }

    React.useEffect(() => {
        if (searchDataError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [searchDataError]);

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__container">
                <input
                type="text"
                name="search"
                className={`search-form__input ${(searchDataDirty && searchDataError) ? 'search-form__input_type_error' : ''}`}
                placeholder="Фильм"
                minLength="2"
                maxLength="30"
                autoComplete="off"
                required
                onChange={handleChange}
                value={searchData}
                onBlur={blurHandler}
                />
                <button type="submit" className={`search-form__button ${formValid ? 'search-form__button' : 'search-form__button_type_disabled'}`} disabled={!formValid}/>
            </div>
            { (searchDataDirty && searchDataError) && <span id="search-form-input-error" className="search-form__input-error">{searchDataError}</span> }
            <FilterCheckbox />
            <span className="search-form__line" />
        </form>
    );
}

export default SearchForm;
