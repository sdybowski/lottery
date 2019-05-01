import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux'
import { store } from './js/redux/store/store';
import * as serviceWorker from './js/utils/serviceWorker';
import { CONFIG } from './js/app/config';
import { ConnectedRouter } from "connected-react-router";
import { history } from './js/redux/store/history';
import { Route, Switch } from 'react-router';
import { RouteItems } from './js/components/RouteItems';

ReactDOM.render(
	<Provider store={store} context={ReactReduxContext}>
		<ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
			<Switch>
				{ RouteItems }
				<Route render={() => (<div>Miss</div>)} />
			</Switch>
		</ConnectedRouter>
	</Provider>,
	CONFIG.DOM_TARGET,
);

serviceWorker.unregister();
