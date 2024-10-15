import Home from './pages/Home/Home.component';
import NewFeedback from './pages/NewFeedback/NewFeedback.component';
import FeedbackCardDetail from './pages/FeedbackCardDetail/FeedbackCardDetail.component';
import EditFeedback from './pages/EditFeedback/EditFeedback.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.styles.scss';

function App() {
	return (
		<div className='container'>
			<Router>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path={'/new-feedback'} component={NewFeedback} />
					<Route
						path={'/feedback-product/:id'}
						component={FeedbackCardDetail}
					/>
					<Route path={'/edit-feedback/:id'} component={EditFeedback} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
