import React from 'react';

import shoesLogo from '../../assets/img/logo.jpeg';
import classes from './style.module.css';

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={shoesLogo} alt='MyShop logo' />
    </div>
  );
};

export default Logo;
