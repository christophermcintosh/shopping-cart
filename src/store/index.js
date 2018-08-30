import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import products from './products';
import cart from './cart';
import subtotal from './subtotal';

export const POETRYDB_API_KEY = `${process.env.REACT_APP_POETRYDB_API_KEY}`;

const reducer = combineReducers({ products, cart, subtotal });
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);

const store = createStore(reducer, middleware);

export default store;
export * from './products';
export * from './cart';
export * from './subtotal';
