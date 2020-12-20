import React from 'react';
import Modal from '../../../UI/Modal';
// import Login from '../../../Login';

import classes from './style.module.css';

const NavigationItem = ({ displayModal, showModal, children, popUp }) => {
  return (
    <>
      <Modal show={displayModal} modalClosed={showModal}>
        {popUp}
      </Modal>

      <li className={classes.NavigationItem}>
        <a href='/' onClick={showModal}>
          {children}
        </a>
      </li>
    </>
  );
};

export default NavigationItem;
