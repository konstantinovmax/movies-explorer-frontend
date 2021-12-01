import { useState, useEffect } from 'react';
import styles from './SearchForm.module.scss';
import classNames from 'classnames';
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
    <form className={styles.root} onSubmit={handleSubmit}>
      <div className={styles.container}>
        <input
          type="text"
          name="search"
          className={classNames(
            styles.input,
            isSearchDataDirty && searchDataError ? styles.errorColor : ''
          )}
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
          className={classNames(
            styles.button,
            isFormValid ? styles.button : styles.disabledButton
          )}
          disabled={!isFormValid}
        />
      </div>
      {isSearchDataDirty && searchDataError && (
        <span id="search-form-input-error" className={styles.inputError}>
          {searchDataError}
        </span>
      )}
      <FilterCheckbox
        onCheckboxChecked={onCheckboxChecked}
        onCheckboxChange={onCheckboxChange}
      />
      <span className={styles.line} />
    </form>
  );
};

export default SearchForm;
