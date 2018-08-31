import React from 'react';
import ProductEdit from './ProductEdit';

const ProductEditLightBox = ({
  closeEdit,
  product,
  quantity,
  handleQuantity,
  handleSelectedColor,
  handleSelectedSize
}) => {
  return (
    <div className="lightbox">
      <div className="product-edit-expand-container">
        <ProductEdit
          product={product}
          quantity={quantity}
          handleQuantity={handleQuantity}
          handleSelectedColor={handleSelectedColor}
          handleSelectedSize={handleSelectedSize}
          handleClick={closeEdit}
        />
      </div>
    </div>
  );
};

export default ProductEditLightBox;
