import React from 'react';
import Button from './Button';
import SelectBox from './SelectBox';

const ProductEdit = ({
  product,
  quantity,
  handleSelectedColor,
  handleSelectedSize,
  handleQuantity,
  handleClick
}) => {
  return (
    <div className="product-lightbox">
      <div className="product-lightbox-desc text-center py-5">
        <hr />
        <p className="text-uppercase font-weight-bold">{product.name}</p>
        <p className="text-uppercase font-weight-bold">
          #MS13KT
          {product.id}
        </p>
        <p>
          Price:{' '}
          <span className="text-uppercase font-weight-bold">
            ${product.price}
          </span>
        </p>
        <hr />
        <div>
          <SelectBox
            value={product.selectedColor}
            handleChange={handleSelectedColor}
            arr={product.colors}
            property="selectedColor"
            label="Color: "
          />
        </div>
        <div>
          <SelectBox
            value={product.selectedSize}
            handleChange={handleSelectedSize}
            arr={product.sizes}
            property="selectedSize"
            label="Size: "
          />
        </div>
        <div>
          <label>
            Quantity:{' '}
            <input
              type="number"
              name="quantity"
              value={product.quantity}
              min="1"
              step="1"
              onChange={handleQuantity}
            />
          </label>
        </div>
        <hr />
        <Button handleClick={handleClick} text="Submit Edit" />
        <hr />
      </div>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
    </div>
  );
};

export default ProductEdit;
