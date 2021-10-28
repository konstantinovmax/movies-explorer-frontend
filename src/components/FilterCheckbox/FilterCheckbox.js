import './FilterCheckbox.css';

const FilterCheckbox = ({ onCheckboxChecked, onCheckboxChange }) => {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__container">
        <input
          className="filter-checkbox__input"
          type="checkbox"
          checked={onCheckboxChecked}
          onChange={onCheckboxChange}
        />
        <span className="filter-checkbox__slider" />
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
