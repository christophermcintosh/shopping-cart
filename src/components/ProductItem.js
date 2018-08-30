import React, { Component } from 'react';
import ProductEditWindow from './ProductEditWindow';
import Button from './Button';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      openEdit: false,
      quantity: 1
    };
  }

  handleEdit = () => {
    const { openEdit } = this.state;
    this.setState({ openEdit: !openEdit });
  };

  handleQuantity = event => {
    const { product, updateQuantity } = this.props;

    this.setState({
      quantity: event.target.value
    });

    updateQuantity(product.id, event.target.value);
  };

  render() {
    const { product, cart } = this.props;
    const { openEdit } = this.state;

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

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={cart[product.id].quantity}
          min="1"
          step="1"
          onChange={this.handleQuantity}
        />

        <Button handleClick={this.handleEdit} text="Edit" />

        {openEdit ? (
          <ProductEditWindow
            closeEdit={this.handleEdit}
            product={product}
            quantity={cart[product.id].quantity}
            handleQuantity={this.handleQuantity}
          />
        ) : null}
      </div>
    );
  }
}

export default Product;
