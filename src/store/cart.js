import products from '../api/products';

const GET_CART = 'GET_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

const initialState = {
  cart: []
};

export const getCart = cart => {
  return {
    type: GET_CART,
    cart
  };
};
export const updateQuantity = (productId, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    productId,
    quantity
  };
};

export const fetchCart = () => {
  return dispatch => {
    dispatch(getCart(products));
  };
};

export const fetchQuantity = (productId, quantity) => {
  return dispatch => dispatch(updateQuantity(productId, quantity));
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case UPDATE_QUANTITY:
      const newState = [...state];
      const { productId, quantity } = action;
      newState[productId].quantity = quantity;
      return newState;
    default:
      return state;
  }
}
