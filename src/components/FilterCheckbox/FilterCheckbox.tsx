import { FC } from 'react';
import styles from './FilterCheckbox.module.scss';

type Props = {
  onCheckboxChecked: boolean;
  onCheckboxChange: any;
};

const FilterCheckbox: FC<Props> = ({ onCheckboxChecked, onCheckboxChange }) => {
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
