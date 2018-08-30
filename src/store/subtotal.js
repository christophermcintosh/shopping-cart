import products from '../api/products';

const GET_TOTAL = 'GET_TOTAL';

const initialState = {
  subtotal: null
};

export const getTotal = subtotal => {
  return {
    type: GET_TOTAL,
    subtotal
  };
};

export const fetchTotal = cart => {
  const total = cart.reduce((acc, curr) => {
    let newTotal = curr.price * curr.quantity;
    acc = acc + newTotal;
    return acc;
  }, 0);
  return dispatch => dispatch(getTotal(total));
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TOTAL:
      return Object.assign({}, state, { subtotal: action.subtotal });
    default:
      return state;
  }
}
