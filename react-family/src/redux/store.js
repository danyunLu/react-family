import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import combineReducers from './reducer.js';

let store = createStore(combineReducers,applyMiddleware(thunkMiddleware));

export default store;