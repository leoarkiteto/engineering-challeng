import React from 'react';
import Logo from '../../Logo';
import NavigationList from '../NavigationList';
import DrawerToggle from '../SideDrawer/DrawerToggle';
import Search from '../../Search';

import classes from './style.module.css';

const Toolbar = ({ drawerToggleClicked, searchListProduct }) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />

      <div className={classes.Logo}>
        <Logo />
      </div>

      <Search searchProduct={searchListProduct} />

      <nav className={classes.DesktopOnly}>
        <NavigationList />
      </nav>
    </header>
  );
};

export default Toolbar;
