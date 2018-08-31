import React, { Component } from 'react';
import ProductEditLightBox from './ProductEditLightBox';
import Button from './Button';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openEdit: false,
      quantity: props.product.quantity,
      color: props.product.selectedColor,
      size: props.product.selectedSize
    };
  }

  handleEdit = () => {
    const { openEdit } = this.state;
    this.setState({ openEdit: !openEdit });
  };

  handleAction = (event, state, fn) => {
    const { product } = this.props;
    this.setState({
      [state]: event.target.value
    });
    fn(product.id, event.target.value);
  };

  handleQuantity = event => {
    this.handleAction(event, 'quantity', this.props.updateQuantity);
  };

  handleSelectedColor = event => {
    this.handleAction(event, 'color', this.props.updateColor);
  };

  handleSelectedSize = event => {
    this.handleAction(event, 'size', this.props.updateSize);
  };

  handleDelete = () => {
    const { product, removeItem, getUpdatedCart } = this.props;
    removeItem(product.id);
    getUpdatedCart();
  };

  render() {
    const { product } = this.props;
    const { openEdit, color, size, quantity } = this.state;
    return (
      <div>
        <div className="row">
          <div className="col-8">
            <div className="product-desc">
              <img src={product.image} alt={product.name} className="mx-5" />
              <div>
                <p className="font-weight-bold text-uppercase">
                  {product.name}
                </p>
                <p>
                  Style #: MS13KT
                  {product.id}
                </p>
                <p>
                  Color: <span className="font-weight-bold">{color} </span>
                </p>
                <div className="product-btn">
                  <Button handleClick={this.handleEdit} text="EDIT" />
                  <Button handleClick={this.handleDelete} text="REMOVE" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-1">
            <p>{size}</p>
          </div>
          <div className="col-2">
            <p>{quantity}</p>
          </div>
          <div className="col-1">
            <p className="font-weight-bold">${product.price}</p>
          </div>
        </div>
        <hr />
        {openEdit ? (
          <ProductEditLightBox
            closeEdit={this.handleEdit}
            product={product}
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
