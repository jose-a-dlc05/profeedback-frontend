import Home from './pages/Home/Home.component';
import NewFeedback from './pages/NewFeedback/NewFeedback.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.styles.scss';

function App() {
	return (
		<div className='container'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path={'/new-feedback'} component={NewFeedback} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
