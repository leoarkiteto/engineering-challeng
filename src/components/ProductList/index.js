import React from 'react';
import Product from './Product';

import classes from './style.module.css';
import data from '../../data/shoes.json';

function ProductList() {
  return (
    <div className={classes.ProductList}>
      {data.map(shoe => (
        <Product
          key={shoe.id}
          title={shoe.title}
          desc={shoe.description}
          price={shoe.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
