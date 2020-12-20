import React from 'react';
import Backdrop from '../Backdrop';
import classes from './style.module.css';

const modal = ({ children, show, modalClosed }) => {
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0',
        }}>
        {children}
      </div>
    </>
  );
};

export default modal;
