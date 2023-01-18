import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import '../index.css';
import styles from './UIButton.module.css';

const UIButton = ({ text, onClick, disabled, theme = 'dark' }, classes) => {
  return (
    <button
      className={cn(styles.button, styles[theme], classes)}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

UIButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  classes: PropTypes.string,
};

export default UIButton;
