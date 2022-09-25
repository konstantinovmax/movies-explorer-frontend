import React from 'react';
import styles from './FilterCheckbox.module.scss';

const FilterCheckbox = ({ onCheckboxChecked, onCheckboxChange }) => {
  return (
    <div className={styles.root}>
      <label className={styles.container}>
        <input
          className={styles.input}
          type="checkbox"
          checked={onCheckboxChecked}
          onChange={onCheckboxChange}
        />
        <span className={styles.slider} />
      </label>
      <p className={styles.text}>Короткометражки</p>
    </div>
  );
};

export default FilterCheckbox;
