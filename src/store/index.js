/* eslint-disable no-unused-vars */
import products from './product-reducer';
import categories from './category-reducer';
import cart from './cart-reducer';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';

let reducers = combineReducers({ categories, products, cart });

const store = () => {
    return createStore(reducers, applyMiddleware(thunk));
}

export default store();
