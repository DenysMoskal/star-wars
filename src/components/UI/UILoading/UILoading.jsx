import React from 'react';

import styles from './UILoading.module.css';

import image from '@image/loding.svg';

const UILoading = () => {
  return (
    <>
      <img className={styles.loader} src={image} alt="loding" />
    </>
  );
};

export default UILoading;
