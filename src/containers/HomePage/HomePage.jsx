import React from 'react';
import styles from './HomePage.module.css';

import ChooseSide from '@components/Home/ChooseSide';

const HomePage = () => {
  return (
    <>
      <h1 className={styles.header}>HomePage</h1>
      <ChooseSide />
    </>
  );
};

export default HomePage;
