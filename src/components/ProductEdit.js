import React, { Component } from 'react';
import Button from './Button';

class ProductEdit extends Component {
  constructor() {
    super();
  }

  render() {
    const {
      product,
      cart,
      quantity,
      handleQuantity,
      handleSelectedColor,
      handleClick,
      handleSelectedSize
    } = this.props;

    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />

        <label>
          Color:
          <select
            value={cart[product.id].selectedColor}
            onChange={handleSelectedColor}
          >
            {product.colors.map((color, i) => {
              return (
                <option key={i} value={color}>
                  {color}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Color:
          <select
            value={cart[product.id].selectedSize}
            onChange={handleSelectedSize}
          >
            {product.sizes.map((size, i) => {
              return (
                <option key={i} value={size}>
                  {size}
                </option>
              );
            })}
          </select>
        </label>
        <p>{product.price}</p>
        <input
          type="number"
          name="quantity"
          value={quantity}
          min="1"
          step="1"
          onChange={handleQuantity}
        />
        <Button handleClick={handleClick} text="Submit Edit" />
      </div>
    );
  }
}

export default ProductEdit;
