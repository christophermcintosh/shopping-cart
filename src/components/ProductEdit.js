import React, { Component } from 'react';
import Button from './Button';

class ProductEdit extends Component {
  constructor() {
    super();
  }

  handleSumbitEdit = () => {};

  render() {
    const { product, quantity, handleQuantity, updateQuantity } = this.props;
    console.log(quantity);
    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <ul>
          {product.colors.map((color, i) => {
            return <li key={i}>{color}</li>;
          })}
        </ul>
        <p>{product.price}</p>
        <input
          type="number"
          name="quantity"
          value={quantity}
          min="1"
          step="1"
          onChange={handleQuantity}
        />
        <Button handleClick={this.handleSubmitEdit} text="Submit Edit" />
      </div>
    );
  }
}

export default ProductEdit;
