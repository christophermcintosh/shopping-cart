import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchProducts,
  fetchCart,
  updateQuantity,
  updateColor,
  updateSize,
  removeItem,
  getUpdatedCart
} from '../store';
import ProductItem from '../components/ProductItem';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      cart: []
    };
  }

  componentDidMount() {
    this.props.fetchProducts();
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
        <h1>Products</h1>
        {cart.map(product => {
          return (
            <ProductItem
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
    products: state.products.products,
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts()),
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
)(Product);
