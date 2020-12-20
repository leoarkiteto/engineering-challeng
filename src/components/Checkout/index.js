import React from 'react';
import Button from '../UI/Button';

const Checkout = () => {
  return (
    <div>
      <h2>I hope you're happy with you chose</h2>
      <ul>
        <li>Product:</li>
        <li>Size:</li>
        <li>Price</li>
      </ul>
      <h3>Total Price</h3>
      <Button>Buy!</Button>
    </div>
  );
};

export default Checkout;
