import React from 'react';
import NavigationItem from './NavigationItem';
import { BiCartAlt, BiHeart, BiUser } from 'react-icons/bi';

import classes from './style.module.css';

const navigationList = () => {
  return (
    <>
      <ul className={classes.NavigationList}>
        <NavigationItem link='/' active>
          <BiUser style={{ display: 'block' }} />
          MySpace
        </NavigationItem>
        <NavigationItem link='/'>
          <BiHeart style={{ display: 'block' }} />
          Wishlist
        </NavigationItem>
        <NavigationItem link='/'>
          <BiCartAlt style={{ display: 'block' }} />
          Checkout
        </NavigationItem>
      </ul>
    </>
  );
};

export default navigationList;
