import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, fetchCart, updateQuantity } from '../store';
import ProductList from '../components/ProductList';

class Product extends Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchCart();
  }

  render() {
    const { products, cart, updateQuantity } = this.props;

    return (
      <ProductList
        products={products}
        cart={cart}
        updateQuantity={updateQuantity}
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
  updateQuantity: (productId, quantity) =>
    dispatch(updateQuantity(productId, quantity)),
  fetchCart: () => dispatch(fetchCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product);
