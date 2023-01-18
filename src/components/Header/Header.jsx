import React from 'react';
import styles from './Header.module.css';
import Favorite from '../Favorite/Favorite';

import { NavLink } from 'react-router-dom';

import {
  THEME_LIGHT,
  THEME_DARK,
  THEME_NEITRAL,
  useTheme,
} from '@context/ThemeProvider';

import light from './img/light.svg';
import dark from './img/dark.svg';
import neitral from './img/neitral.svg';

const Header = () => {
  const isTheme = useTheme();
  const [icon, setIcon] = React.useState(neitral);

  React.useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
        setIcon(light);
        break;
      case THEME_DARK:
        setIcon(dark);
        break;
      case THEME_NEITRAL:
        setIcon(neitral);
        break;
      default:
        setIcon(neitral);
    }
  }, [isTheme]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={icon} alt="LOGO START WARS" />
      <ul className={styles.list__container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people?page=1">People</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/not-found">NotFound</NavLink>
        </li>
        <li>
          <NavLink to="/fail">Fail</NavLink>
        </li>
      </ul>

      <Favorite />
    </div>
  );
};

export default Header;
