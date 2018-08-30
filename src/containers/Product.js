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
import ProductList from '../components/ProductList';

class Product extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
  }

  componentDidUpdate(nextProps) {
    console.log(this.props);
    console.log(nextProps);
  }

  render() {
    const {
      products,
      cart,
      updateQuantity,
      updateColor,
      updateSize,
      removeItem,
      fetchCart,
      getUpdatedCart
    } = this.props;

    return (
      <ProductList
        products={products}
        cart={cart}
        updateQuantity={updateQuantity}
        updateColor={updateColor}
        updateSize={updateSize}
        removeItem={removeItem}
        getUpdatedCart={getUpdatedCart}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.products,
    cart: state.products.products
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
