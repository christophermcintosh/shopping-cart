import products from '../api/products';

const GET_PRODUCTS = 'GET_PRODUCTS';

const initialState = {
  products: []
};

export const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    products
  };
};

export const fetchProducts = () => {
  return dispatch => dispatch(getProducts(products));
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return Object.assign({}, state, { products: action.products });

    default:
      return state;
  }
}
