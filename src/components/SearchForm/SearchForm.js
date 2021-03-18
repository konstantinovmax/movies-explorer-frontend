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
        if (e.target.value.length < 1 || e.target.value.length > 30) {
            setSearchDataError('Текст запроса должен составлять от 1 до 30 символов');
        } else {
            setSearchDataError('');
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSearchSubmit(searchData);
        setSearchData('');
    }

    React.useEffect(() => {
        if (searchDataError || searchData.length < 1) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [searchDataError, searchData]);

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-form__container">
                <input
                type="text"
                name="search"
                className={`search-form__input ${(searchDataDirty && searchDataError) ? 'search-form__input_type_error' : ''}`}
                placeholder="Введите запрос"
                minLength="1"
                maxLength="30"
                autoComplete="off"
                required
                onChange={handleChange}
                value={searchData}
                onBlur={blurHandler}
                />
                <button
                type="submit"
                className={`search-form__button ${formValid ? 'search-form__button' : 'search-form__button_type_disabled'}`}
                disabled={!formValid}
                />
            </div>
            { (searchDataDirty && searchDataError) && <span id="search-form-input-error" className="search-form__input-error">{searchDataError}</span> }
            <FilterCheckbox
            onCheckboxChecked={props.onCheckboxChecked}
            onCheckboxChange={props.onCheckboxChange}
            />
            <span className="search-form__line" />
        </form>
    );
}

export default SearchForm;
