import React, { Component } from 'react';
import Product from './Product';
import Cart from './Cart';

class App extends Component {
  render() {
    return (
      <div>
        <Product />
        <Cart />
      </div>
    );
  }
}

export default App;
