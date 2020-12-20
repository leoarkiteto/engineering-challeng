import React from 'react';
import Layout from './containers/Layout';
import ProductList from './components/ProductList';

import data from './data/shoes.json';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <h3>Products</h3>
        <ProductList data={data} />
      </Layout>
    </div>
  );
};

export default App;
