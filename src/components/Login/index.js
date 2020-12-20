import React from 'react';

import classes from './style.module.css';

const Login = () => {
  return (
    <div>
      <form className={classes.Login}>
        <p>Sign In</p>
        <div className={classes.Fields}>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            name='username'
            id='username'
            placeholder='Username'
          />
        </div>

        <div className={classes.Fields}>
          <label htmlFor='login'>Login</label>
          <input type='text' name='login' id='login' placeholder='Login' />
        </div>
      </form>
    </div>
  );
};

export default Login;
