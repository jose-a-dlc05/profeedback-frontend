import { createRoot } from 'react-dom/client';
import './index.styles.scss';
import store from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
