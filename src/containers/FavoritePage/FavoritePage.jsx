import React from 'react';
import { useSelector } from 'react-redux';

import styles from './FavoritePage.module.css';

import PeopleList from '@components/PeoplePage/PeopleList';

const FavoritePage = () => {
  const [people, setPeople] = React.useState([]);

  const storeData = useSelector((state) => state.favorite.favorite);

  React.useEffect(() => {
    const arr = Object.entries(storeData);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });

      setPeople(res);
    }
  }, []);

  return (
    <>
      <h1 className="header__text ">Favorite Page</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>No data</h2>
      )}
    </>
  );
};

export default FavoritePage;
