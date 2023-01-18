import React from 'react';
import styles from './ChoseSide.module.css';
import cn from 'classnames';

import {
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
  useTheme,
} from '@context/ThemeProvider';

import lightSide from './img/light-side.jpg';
import darkSide from './img/dark-side.jpg';
import falcon from './img/falcon.jpg';

const ChooseSideItem = ({ text, img, theme, classes }) => {
  const isTheme = useTheme();
  return (
    <div
      className={cn(styles.item, classes)}
      onClick={() => isTheme.change(theme)}
    >
      <div className={styles.item__text}>{text}</div>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

const ChooseSide = () => {
  const elements = [
    {
      text: 'Light Side',
      theme: THEME_LIGHT,
      img: lightSide,
      classes: styles.item__light,
    },
    {
      text: 'Dark Side',
      theme: THEME_DARK,
      img: darkSide,
      classes: styles.item__dark,
    },
    {
      text: `I'am Han Solo`,
      theme: THEME_NEITRAL,
      img: falcon,
      classes: styles.item__solo,
    },
  ];
  return (
    <div className={styles.container}>
      {elements.map((element, index) => (
        <ChooseSideItem {...element} key={index} />
      ))}
    </div>
  );
};

export default ChooseSide;
