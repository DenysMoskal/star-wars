import React from 'react';
import styles from './ErrorMessage.module.css';

import solo from './video/han-solo.mp4';

const ErrorMessage = () => {
  return (
    <>
      <p className={styles.text}>
        We cannot display data.
        <br />
        Come back when we fix everything
      </p>
      <video className={styles.video} src={solo} loop autoPlay muted />
    </>
  );
};

export default ErrorMessage;
