import { createStore, applyMiddleware } from 'redux';
import { reducer } from './../reducers';
import { PRELOADED_STATE } from './preloadedState';
import { middlewares } from './middlewares';

export const store = createStore(reducer, PRELOADED_STATE, applyMiddleware(...middlewares));