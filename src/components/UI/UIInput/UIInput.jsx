import React from 'react';
import cn from 'classnames';
import styles from './UIInput.module.css';
import close from './img/close.svg';

const UIInput = ({ value, HandleText, placeholder, classes, setText }) => {
  return (
    <div className={cn(styles.wrapper__input, classes)}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => HandleText(e.target.value)}
        className={styles.input}
      />
      <img
        src={close}
        alt="close"
        onClick={() => setText('')}
        className={cn(styles.clear, !value && styles.clear__none)}
      />
    </div>
  );
};

export default UIInput;
