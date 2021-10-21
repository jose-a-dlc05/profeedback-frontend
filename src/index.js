import React from 'react';
import ReactDOM from 'react-dom';
import './index.styles.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App.jsx';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
