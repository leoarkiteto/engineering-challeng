import React from 'react';

import classes from './style.module.css';

const button = ({ children, clicked, btnType }) => {
  return (
    <button
      className={[classes.Button, classes[btnType]].join(' ')}
      onClick={clicked}>
      {children}
    </button>
  );
};

export default button;
