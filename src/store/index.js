import products from './product-reducer'
import categories from './category-reducer'

import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({ categories, products });

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();
