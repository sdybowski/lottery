import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { path } from './pathReducer';

export { path } from './pathReducer';
export const reducer = history => combineReducers({
	router: connectRouter(history),
	path,
});