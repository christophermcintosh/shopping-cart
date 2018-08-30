import React, { Component } from 'react';

class Subtotal extends Component {
  render() {
    const { subtotal } = this.props;
    return (
      <div>
        <h1>${Number(subtotal).toFixed(2)}</h1>
      </div>
    );
  }
}

export default Subtotal;
