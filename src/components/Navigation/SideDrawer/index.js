import React from 'react';
import Logo from '../../Logo';
import NavigationList from '../NavigationList';
import Backdrop from '../../UI/Backdrop';

import classes from './style.module.css';

const SideDrawer = ({ open, closed }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <>
      <Backdrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationList />
        </nav>
      </div>
    </>
  );
};

export default SideDrawer;
