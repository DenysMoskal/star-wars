import React from 'react';
import PropTypes from 'prop-types';

import styles from './PersonFilms.module.css';

import { makeConcurrentRequest, changeHTTP } from '@utils/network';
const PersonFilms = ({ personFilms }) => {
  const [films, setFilms] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const filmsHTTPS = personFilms.map((url) => changeHTTP(url));
      const responce = await makeConcurrentRequest(filmsHTTPS);

      setFilms(responce);
    })();
  }, []);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list__container}>
        {films
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => (
            <li key={episode_id} className={styles.list__item}>
              <span className={styles.item__episode}>Episode {episode_id}</span>
              <span className={styles.item__colm}>:</span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

PersonFilms.propTypes = {
  personFilms: PropTypes.array,
};

export default PersonFilms;
