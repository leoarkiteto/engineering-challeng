import React from 'react';

import classes from './style.module.css';

function footerItem({ id, title, items }) {
  return (
    <div className={classes.FooterItem}>
      <h2>{title}</h2>
      <ul>
        {items.map(item => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default footerItem;
