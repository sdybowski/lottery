import { applyMiddleware, compose, createStore } from 'redux'
import { reducer } from './../reducers/reducer';
import { PRELOADED_STATE } from './preloadedState';
import { middlewares } from './middlewares';

export const store = createStore(
	reducer,
	PRELOADED_STATE,
	compose(applyMiddleware(...middlewares)),
);