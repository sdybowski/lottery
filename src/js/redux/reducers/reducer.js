import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { history } from '../store/history';

import { path } from './pathReducer';

export const reducer = combineReducers({
	router: connectRouter(history),
	path,
});