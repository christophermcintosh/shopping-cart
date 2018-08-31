import React from 'react';
import Cart from './Cart';
import CartSubtotal from './CartSubtotal';

const App = () => {
  return (
    <div className="container-fluid">
      <h2 className="py-2">Shopping Cart</h2>
      <p>
        If the cart is empty then we shall again add back the products for you
      </p>
      <div>
        <Cart />
      </div>
      <div>
        <CartSubtotal />
      </div>
    </div>
  );
};

export default App;
