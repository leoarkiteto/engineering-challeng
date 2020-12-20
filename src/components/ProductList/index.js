import React from 'react';
import Product from './Product';

import classes from './style.module.css';

const ProductList = ({ data, showId }) => {
  return (
    <div className={classes.ProductList}>
      {data.map(shoe => (
        <Product
          key={shoe.id}
          title={shoe.title}
          desc={shoe.description}
          price={shoe.price}
          id={shoe.id}
          pickedProduct={showId}
        />
      ))}
    </div>
  );
};

export default ProductList;
