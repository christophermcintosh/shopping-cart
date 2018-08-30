import products from '../api/products';

const GET_CART = 'GET_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const UPDATE_COLOR = 'UPDATE_COLOR';

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

export const updateColor = (productId, selectedColor) => {
  return {
    type: UPDATE_COLOR,
    productId,
    selectedColor
  };
};

export const fetchCart = () => {
  return dispatch => {
    dispatch(getCart(products));
  };
};

export const getQuantity = (productId, quantity) => {
  return dispatch => dispatch(updateQuantity(productId, quantity));
};

export const getColor = (productId, selectedColor) => {
  return dispatch => dispatch(updateColor(productId, selectedColor));
};

const updateHelper = (state, id, property, value) => {
  const newState = [...state];
  newState[id][property] = value;
  return newState;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case UPDATE_QUANTITY:
      return updateHelper(state, action.productId, 'quantity', action.quantity);
    case UPDATE_COLOR:
      return updateHelper(
        state,
        action.productId,
        'selectedColor',
        action.selectedColor
      );
    default:
      return state;
  }
}
