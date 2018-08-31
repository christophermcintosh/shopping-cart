import React, { Component } from 'react';
import Subtotal from '../components/Subtotal';
import { connect } from 'react-redux';
import { fetchTotal } from '../store';

class Cart extends Component {
  componentDidUpdate(prevProps) {
    const { cart, fetchTotal, subtotal } = this.props;
    if (prevProps.subtotal === subtotal) {
      fetchTotal(cart);
    }
  }

  render() {
    const { subtotal } = this.props;
    return (
      <div className="mx-auto text-center">
        <Subtotal subtotal={subtotal} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
    subtotal: state.subtotal.subtotal
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTotal: cart => dispatch(fetchTotal(cart))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
