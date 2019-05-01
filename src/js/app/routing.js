import React from 'react';
import { Home } from '../pages/Home';
import { Test } from '../pages/Test';

export const ROUTES = {
	HOME: { LABEL: 'Home', PATH: '/', RENDERER: () => <Home /> },
	TEST: { LABEL: 'Test', PATH: '/test', RENDERER: () => <Test /> },
};