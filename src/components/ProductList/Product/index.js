import React from 'react';

import classes from './style.module.css';
import shoes from '../../../assets/img/tyron-harkiss-foster-BIkif7IMZSQ-unsplash.jpg';

function Product({ title, desc, price }) {
  return (
    <div className={classes.Product}>
      <div>
        <img src={shoes} alt='shoes' width='300' />
      </div>
      <div className={classes.Desc}>
        <div>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <div className={classes.Price}>$ {price}</div>
      </div>
      <div className={classes.Add}>
        <div>1 2 3 4 5 6</div>
        <a href='/'>+</a>
      </div>
    </div>
  );
}

export default Product;
