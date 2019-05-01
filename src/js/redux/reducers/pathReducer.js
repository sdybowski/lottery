import { CHANGE_PATH } from '../actions/index';

const initialState = { path: '/' };

export const path = (state = initialState, action) => {
	const { type, payload } = action;
	switch(type) {
		case CHANGE_PATH: return { ...state, ...payload };
		default: return state;
	}
};