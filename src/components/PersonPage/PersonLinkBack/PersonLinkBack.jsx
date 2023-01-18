import React from 'react';
import { useNavigate } from 'react-router';
import styles from './PersonLinkBack.module.css';
import iconBack from '@image/arrowback.svg';

const PersonLinkBack = () => {
  const navigate = useNavigate();

  const handleGoBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <a href="#" onClick={handleGoBack} className={styles.link}>
      <img className={styles.link__img} src={iconBack} alt="Back" />
      <span>Go back</span>
    </a>
  );
};

export default PersonLinkBack;
