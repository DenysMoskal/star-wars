import React from 'react';
import PropTypes from 'prop-types';
import styles from './PeopleNavigate.module.css';
import { Link } from 'react-router-dom';
import UIButton from '@UI/UIButton';

const PeopleNavigate = ({ getResource, counterPage, prevPage, nextPage }) => {
  const handleChangeNext = () => {
    getResource(nextPage);
  };

  const handleChangePrev = () => {
    getResource(prevPage);
  };

  return (
    <div>
      <h1 className={styles.header__text}>Navigation</h1>
      <div className={styles.main}>
        <Link to={`/people/?page=${counterPage - 1}`} className={styles.link}>
          <UIButton
            text="Prev"
            onClick={handleChangePrev}
            disabled={!prevPage}
          />
        </Link>
        <Link to={`/people/?page=${counterPage + 1}`} className={styles.link}>
          <UIButton
            text="Next"
            onClick={handleChangeNext}
            disabled={!nextPage}
          />
        </Link>
      </div>
    </div>
  );
};

PeopleNavigate.propTypes = {
  getResource: PropTypes.func,
  counterPage: PropTypes.number,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
};

export default PeopleNavigate;
