import React from 'react';
import CategoryItem from './CategoryItem';

import women from '../../assets/img/women.jpg';
import men from '../../assets/img/men.jpg';
import classes from './style.module.css';

const Category = () => {
  return (
    <div className={classes.Category}>
      <CategoryItem category='Women' picture={women} />
      <CategoryItem category='Men' picture={men} />
    </div>
  );
};

export default Category;
