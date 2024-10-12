import React from 'react';
import ReactDOM from 'react-dom';
import './index.styles.scss';
import store from './redux/store.js';
import { Provider } from 'react-redux';
import App from './App.jsx';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
