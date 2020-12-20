import React from 'react';
import Layout from './containers/Layout';
import ProductList from './components/ProductList';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Layout>
        <h3>Products</h3>
        <ProductList />
      </Layout>
    </div>
  );
}

export default App;
