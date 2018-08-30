import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products, cart, updateQuantity }) => {
  return (
    <div>
      <h1>Products</h1>
      {products.map(product => {
        return (
          <ProductItem
            key={product.id}
            product={product}
            cart={cart}
            updateQuantity={updateQuantity}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
