import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from './middleware/promiseMiddleware';
import combineReducers from './reducer.js';

let store = createStore(combineReducers,applyMiddleware(promiseMiddleware));

export default store;