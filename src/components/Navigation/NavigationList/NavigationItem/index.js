import React from 'react';

import classes from './style.module.css';

const navigationItem = ({ link, children, active }) => {
  return (
    <li className={classes.NavigationItem}>
      <a href={link} className={active ? classes.active : null}>
        {children}
      </a>
    </li>
  );
};

export default navigationItem;
