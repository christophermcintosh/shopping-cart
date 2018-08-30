import React, { Component } from 'react';
import Button from './Button';
import ProductEdit from './ProductEdit';

class ProductEditWindow extends Component {
  render() {
    const {
      closeEdit,
      product,
      quantity,
      handleQuantity,
      updateQuantity
    } = this.props;

    return (
      <div className="lightbox">
        <div className="product-edit-expand-container">
          <Button handleClick={closeEdit} text="X" />
          <ProductEdit
            product={product}
            quantity={quantity}
            handleQuantity={handleQuantity}
          />
        </div>
      </div>
    );
  }
}

export default ProductEditWindow;
