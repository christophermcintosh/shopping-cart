import React, { Component } from 'react';
import Button from './Button';
import ProductEdit from './ProductEdit';

class ProductEditWindow extends Component {
  render() {
    const {
      closeEdit,
      product,
      cart,
      quantity,
      handleQuantity,
      handleSelectedColor,
      handleSelectedSize
    } = this.props;

    return (
      <div className="lightbox">
        <div className="product-edit-expand-container">
          {/* <Button handleClick={closeEdit} text="X" /> */}
          <ProductEdit
            product={product}
            cart={cart}
            quantity={quantity}
            handleQuantity={handleQuantity}
            handleSelectedColor={handleSelectedColor}
            handleSelectedSize={handleSelectedSize}
            handleClick={closeEdit}
          />
        </div>
      </div>
    );
  }
}

export default ProductEditWindow;
