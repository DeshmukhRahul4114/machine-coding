import {createStore, combineReducers } from 'redux';
import CounterReducer from './CounterReducer';

const root= combineReducers({
    count:CounterReducer
})

let store=createStore(root);

export default store;



