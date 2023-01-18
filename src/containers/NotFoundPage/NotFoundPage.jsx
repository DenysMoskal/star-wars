import React from 'react';

import img from '@image/404.jpg';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <img className={styles.image} src={img} alt="Not Found" />
    </>
  );
};

export default NotFoundPage;
