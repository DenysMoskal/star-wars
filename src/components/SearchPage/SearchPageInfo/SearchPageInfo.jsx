import React from 'react';
import styles from './SearchPageInfo.module.css';

import { Link } from 'react-router-dom';

const SearchPageInfo = ({ people }) => {
  return (
    <>
      {people ? (
        <ul className={styles.list__container}>
          {people.map(({ id, name, img }) => (
            <li className={styles.list__item} key={id}>
              <Link to={`/people/${id}`}>
                <img className={styles.list__photo} src={img} alt={name} />
                <p className={styles.list__text}>{name}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <h2 className={styles.person__comment}>Not found people</h2>
      )}
    </>
  );
};

export default SearchPageInfo;
