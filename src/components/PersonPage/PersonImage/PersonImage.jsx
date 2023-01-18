import React from 'react';
import { useDispatch } from 'react-redux';
import {
  setPersonToFavorite,
  removePersonFromFavorite,
} from '@store/favoriteSlice';
import styles from './PersonImage.module.css';

import iconWhite from '@image/medal.svg';
import iconYellow from '@image/medal-active.svg';

const PersonImage = ({
  personImage,
  personName,
  personId,
  setPersonFavorite,
  personFavorite,
}) => {
  const dispatch = useDispatch();

  const toggle = () => {
    if (personFavorite) {
      dispatch(removePersonFromFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personImage,
          },
        }),
      );
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <img className={styles.photo} src={personImage} alt={personName} />

        <img
          className={styles.favorite}
          onClick={toggle}
          src={personFavorite ? iconYellow : iconWhite}
          alt="medal"
        />
      </div>
    </>
  );
};

export default PersonImage;
