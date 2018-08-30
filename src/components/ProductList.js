import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({
  products,
  cart,
  updateQuantity,
  updateColor,
  updateSize,
  removeItem,
  getUpdatedCart
}) => {
  return (
    <div>
      <h1>Products</h1>
      {cart.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            cart={cart}
            updateQuantity={updateQuantity}
            updateColor={updateColor}
            updateSize={updateSize}
            removeItem={removeItem}
            getUpdatedCart={getUpdatedCart}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
