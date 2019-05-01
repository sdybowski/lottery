import logger from 'redux-logger';
import { routerMiddleware } from "connected-react-router";
import { history } from './history';

export const middlewares = [logger, routerMiddleware(history)];
