import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchCart,
  updateQuantity,
  updateColor,
  updateSize,
  removeItem,
  getUpdatedCart
} from '../store';
import SingleProduct from '../components/SingleProduct';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    this.props.fetchCart();
  }

  componentDidUpdate(nextProps) {
    if (this.props.cart !== nextProps.cart) {
      this.setState({
        cart: this.props.cart
      });
    }
  }

  render() {
    const { cart } = this.state;

    return (
      <div>
        <div className="row row-header">
          <div className="col-8">{cart.length} ITEMS</div>
          <div className="col-1">SIZE</div>
          <div className="col-2">QTY</div>
          <div className="col-1">PRICE</div>
        </div>
        {cart.map(product => {
          return (
            <SingleProduct
              key={product.id}
              product={product}
              cart={cart}
              updateQuantity={this.props.updateQuantity}
              updateColor={this.props.updateColor}
              updateSize={this.props.updateSize}
              removeItem={this.props.removeItem}
              getUpdatedCart={this.props.getUpdatedCart}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => ({
  fetchCart: cart => dispatch(fetchCart(cart)),
  getUpdatedCart: () => dispatch(getUpdatedCart()),
  updateQuantity: (productId, quantity) =>
    dispatch(updateQuantity(productId, quantity)),
  updateColor: (productId, selectedColor) =>
    dispatch(updateColor(productId, selectedColor)),
  updateSize: (productId, selectedSize) =>
    dispatch(updateSize(productId, selectedSize)),
  removeItem: productId => dispatch(removeItem(productId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
