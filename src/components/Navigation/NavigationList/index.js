import React, { useState } from 'react';
import NavigationItem from './NavigationItem';
import { BiCartAlt, BiHeart, BiUser } from 'react-icons/bi';
import Login from '../../Login';
import Checkout from '../../Checkout';

import classes from './style.module.css';

const NavigationList = () => {
  const [login, setLogin] = useState(false);
  const [wishlist, setWishlist] = useState(false);
  const [checkout, setCheckout] = useState(false);

  return (
    <ul className={classes.NavigationList}>
      <NavigationItem
        displayModal={login}
        showModal={() => setLogin(!login)}
        popUp={<Login />}>
        <BiUser style={{ display: 'block' }} />
        MySpace
      </NavigationItem>

      <NavigationItem
        displayModal={wishlist}
        showModal={() => setWishlist(!wishlist)}>
        <BiHeart style={{ display: 'block' }} />
        Wishlist
      </NavigationItem>

      <NavigationItem
        displayModal={checkout}
        showModal={() => setCheckout(!checkout)}
        popUp={<Checkout />}>
        <BiCartAlt style={{ display: 'block' }} />
        Checkout {checkout ? '(1)' : null}
      </NavigationItem>
    </ul>
  );
};

export default NavigationList;
