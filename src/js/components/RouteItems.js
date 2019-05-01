import React from 'react';
import _ from 'lodash';
import { ROUTES } from '../app/routing';
import { Route } from 'react-router';

export const RouteItems = _.map(ROUTES, route =>
	<Route key={_.get(route, 'LABEL')} exact path={_.get(route, 'PATH')} render={_.get(route, 'RENDERER')} />);