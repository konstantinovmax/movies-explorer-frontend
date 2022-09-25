import React from 'react';
import styles from './Promo.module.scss';
import NavTab from '../NavTab/NavTab';

const Promo = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.title}>Movies Explorer</h1>
      <NavTab />
    </section>
  );
};

export default Promo;
