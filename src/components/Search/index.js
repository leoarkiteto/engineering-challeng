import React from 'react';
import { BiSearch } from 'react-icons/bi';

import classes from './style.module.css';

const Search = ({ searchProduct }) => {
  return (
    <div className={classes.Search}>
      <input type='text' onChange={searchProduct} placeholder='Search' />
      <BiSearch className={classes.Icon} />
    </div>
  );
};

export default Search;
