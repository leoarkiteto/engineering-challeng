import React from 'react';

import classes from './style.module.css';

const FooterItem = ({ title, items }) => {
  return (
    <div className={classes.FooterItem}>
      <h2>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
