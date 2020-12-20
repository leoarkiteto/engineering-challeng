import React from 'react';
import Logo from '../../Logo';
import NavigationList from '../NavigationList';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import Search from '../../Search';

import classes from './style.module.css';
import data from '../../../data/shoes.json';

const toolbar = ({ drawerToggleClicked }) => {
  const searchListProduct = event => {
    let productName = event.target.value;
    const productFound = data.filter(product => product.title === productName);
    console.log(productFound);
  };

  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />
      <div className={classes.Logo}>
        <Logo />
      </div>
      <Search searchProduct={e => searchListProduct(e)} />
      <nav className={classes.DesktopOnly}>
        <NavigationList />
      </nav>
    </header>
  );
};

export default toolbar;
