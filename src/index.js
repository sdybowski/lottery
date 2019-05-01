import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './js/redux/store/store';
import App from './App';
import * as serviceWorker from './js/utils/serviceWorker';
import { CONFIG } from './js/app/config';

ReactDOM.render(
	<Provider store={store}><App /></Provider>,
	CONFIG.DOM_TARGET,
);

serviceWorker.unregister();
