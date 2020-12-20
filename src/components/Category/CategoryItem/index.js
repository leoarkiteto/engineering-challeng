import React from 'react';

import classes from './style.module.css';

const CategoryItem = ({ picture, category }) => {
  return (
    <div className={classes.CategoryItem}>
      <img src={picture} alt='category' />
      <span>{category}</span>
    </div>
  );
};

export default CategoryItem;
