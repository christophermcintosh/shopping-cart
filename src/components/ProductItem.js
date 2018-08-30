import React, { Component } from 'react';
import ProductEditWindow from './ProductEditWindow';
import Button from './Button';
import { fetchCart } from '../store';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      openEdit: false,
      quantity: null,
      color: null,
      size: null
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

  handleSelectedColor = event => {
    const { product, updateColor } = this.props;

    this.setState({
      color: event.target.value
    });

    updateColor(product.id, event.target.value);
  };

  handleSelectedSize = event => {
    const { product, updateSize } = this.props;

    this.setState({
      size: event.target.value
    });
    console.log(product.id);
    updateSize(product.id, event.target.value);
  };

  handleDelete = () => {
    const { product, removeItem, getUpdatedCart } = this.props;
    removeItem(product.id);
    getUpdatedCart();
  };

  render() {
    const { product, cart } = this.props;
    const { openEdit } = this.state;
    return (
      <div>
        <h1>{product.name}</h1>
        <img src={product.image} alt={product.name} />
        <select
          value={product.selectedColor}
          onChange={this.handleSelectedColor}
        >
          {product.colors.map((color, i) => {
            return (
              <option key={i} value={color}>
                {color}
              </option>
            );
          })}
        </select>

        <select value={product.selectedSize} onChange={this.handleSelectedSize}>
          {product.sizes.map((size, i) => {
            return (
              <option key={i} value={size}>
                {size}
              </option>
            );
          })}
        </select>

        <p>{product.price}</p>

        <label htmlFor="quantity">Quantity:</label>
        <input
          type="number"
          name="quantity"
          value={product.quantity}
          min="1"
          step="1"
          onChange={this.handleQuantity}
        />

        <Button handleClick={this.handleEdit} text="Edit" />
        <Button handleClick={this.handleDelete} text="Delete" />

        {openEdit ? (
          <ProductEditWindow
            closeEdit={this.handleEdit}
            product={product}
            cart={cart}
            quantity={product.quantity}
            handleQuantity={this.handleQuantity}
            handleSelectedColor={this.handleSelectedColor}
            handleSelectedSize={this.handleSelectedSize}
          />
        ) : null}
      </div>
    );
  }
}

export default Product;
