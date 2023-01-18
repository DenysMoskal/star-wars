import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Favorite.module.css';

import bookmark from '@image/bookmark.svg';
import { useSelector } from 'react-redux';

const Favorite = () => {
  const [count, setCount] = React.useState(0);
  const storeData = useSelector((state) => state.favorite.favorite);

  React.useEffect(() => {
    const length = Object.keys(storeData).length;
    length.toString().length > 2 ? setCount('...') : setCount(length);
  });

  return (
    <div className={styles.conatainer}>
      <Link to="/favorite">
        <span className={styles.counter}>{count}</span>
        <img className={styles.icon} src={bookmark} alt="" />
      </Link>
    </div>
  );
};

export default Favorite;
