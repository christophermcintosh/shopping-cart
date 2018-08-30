import products from '../api/products';

const ADD_TO_CART = 'ADD_TO_CART';
const UPDATE_CART = 'UPDATE_CART';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
const UPDATE_COLOR = 'UPDATE_COLOR';
const UPDATE_SIZE = 'UPDATE_SIZE';
const REMOVE_ITEM = 'REMOVE_ITEM';

const initialState = {
  cart: []
};

export const addToCart = cart => {
  return {
    type: ADD_TO_CART,
    cart
  };
};

export const getUpdatedCart = cart => {
  return {
    type: UPDATE_CART,
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

export const updateSize = (productId, selectedSize) => {
  return {
    type: UPDATE_SIZE,
    productId,
    selectedSize
  };
};

export const removeItem = productId => {
  return {
    type: REMOVE_ITEM,
    productId
  };
};

export const fetchCart = cart => {
  return dispatch => {
    dispatch(addToCart((cart = products)));
  };
};

export const updateCart = () => {
  return dispatch => dispatch(getUpdatedCart());
};

export const getQuantity = (productId, quantity) => {
  return dispatch => dispatch(updateQuantity(productId, quantity));
};

export const color = (productId, selectedColor) => {
  return dispatch => dispatch(updateColor(productId, selectedColor));
};

export const size = (productId, selectedSize) => {
  return dispatch => dispatch(updateSize(productId, selectedSize));
};

export const removeProduct = productId => {
  return dispatch => dispatch(removeItem(productId));
};

const updateCartProperty = (state, id, property, value) => {
  const newState = [...state];
  newState[id][property] = value;
  return newState;
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.cart;
    case UPDATE_CART:
      return [...state];
    case UPDATE_QUANTITY:
      return updateCartProperty(
        state,
        action.productId,
        'quantity',
        action.quantity
      );
    case UPDATE_COLOR:
      return updateCartProperty(
        state,
        action.productId,
        'selectedColor',
        action.selectedColor
      );
    case UPDATE_SIZE:
      return updateCartProperty(
        state,
        action.productId,
        'selectedSize',
        action.selectedSize
      );
    case REMOVE_ITEM:
      var newState = [...state];
      return newState.filter(item => {
        return item.id !== action.productId;
      });

    default:
      return state;
  }
}
