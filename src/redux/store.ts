import { compose, createStore } from 'redux';

// Add this declaration to extend the Window interface
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
	}
}

import reducers from './reducers/index';

const store = createStore(
	reducers,
	{},
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
