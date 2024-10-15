import { combineReducers } from 'redux';
import { feedbackReducer } from './feedbackReducer';
const reducers = combineReducers({
	allFeedback: feedbackReducer,
});
export default reducers;
