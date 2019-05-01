import { applyMiddleware, compose, createStore } from 'redux'
import { reducer } from './../reducers';
import { PRELOADED_STATE } from './preloadedState';
import { middlewares } from './middlewares';
import { history } from './history';

export const store = createStore(
	reducer(history),
	PRELOADED_STATE,
	compose(applyMiddleware(...middlewares)),
);