import { useState, useEffect } from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

const SearchForm = ({
  onSearchSubmit,
  onCheckboxChecked,
  onCheckboxChange,
}) => {
  const [searchData, setSearchData] = useState('');
  const [isSearchDataDirty, setIsSearchDataDirty] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [searchDataError, setSearchDataError] = useState(
    'Нужно ввести ключевое слово'
  );

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'search':
        setIsSearchDataDirty(true);
        break;
      default:
        console.log('Ошибка в blurHandler');
        break;
    }
  };

  const handleChange = (e) => {
    setSearchData(e.target.value);
    if (e.target.value.length < 1 || e.target.value.length > 30) {
      setSearchDataError('Текст запроса должен составлять от 1 до 30 символов');
    } else {
      setSearchDataError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchData);
    setSearchData('');
  };

  useEffect(() => {
    if (searchDataError || searchData.length < 1) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [searchDataError, searchData]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-form__container">
        <input
          type="text"
          name="search"
          className={`search-form__input ${
            isSearchDataDirty && searchDataError
              ? 'search-form__input_type_error'
              : ''
          }`}
          placeholder="Введите запрос"
          minLength={1}
          maxLength={30}
          autoComplete="off"
          required
          onChange={handleChange}
          value={searchData}
          onBlur={blurHandler}
        />
        <button
          type="submit"
          className={`search-form__button ${
            isFormValid
              ? 'search-form__button'
              : 'search-form__button_type_disabled'
          }`}
          disabled={!isFormValid}
        />
      </div>
      {isSearchDataDirty && searchDataError && (
        <span id="search-form-input-error" className="search-form__input-error">
          {searchDataError}
        </span>
      )}
      <FilterCheckbox
        onCheckboxChecked={onCheckboxChecked}
        onCheckboxChange={onCheckboxChange}
      />
      <span className="search-form__line" />
    </form>
  );
};

export default SearchForm;
