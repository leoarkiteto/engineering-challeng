import React from 'react';

import classes from './style.module.css';

const Backdrop = ({ show = false, clicked }) => {
  return show ? (
    <div className={classes.Backdrop} onClick={clicked}></div>
  ) : null;
};

export default Backdrop;
