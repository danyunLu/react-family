import {createStore} from 'redux';
import combineReducers from './reducer.js';

let store = createStore(combineReducers);

export default store;