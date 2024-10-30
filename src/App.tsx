import Home from './pages/Home/Home.component';
import NewFeedback from './pages/NewFeedback/NewFeedback.component';
import FeedbackCardDetail from './pages/FeedbackCardDetail/FeedbackCardDetail.component';
import EditFeedback from './pages/EditFeedback/EditFeedback.component';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useParams,
	useLocation,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.styles.scss';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
		},
	},
});

function App() {
	return (
		<div className='container'>
			<Router>
				<QueryClientProvider client={queryClient}>
					<Routes>
						<Route
							path={'/feedback-product/:id'}
							element={<FeedbackCardDetail />}
						/>
						<Route path={'/edit-feedback/:id'} element={<EditFeedback />} />
						<Route
							path={'/new-feedback'}
							element={<NewFeedback history={undefined} />}
						/>
						<Route path='/' element={<Home />} />
					</Routes>
				</QueryClientProvider>
			</Router>
		</div>
	);
}

export default App;
