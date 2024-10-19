import fetchFeedback, { Feedback } from '../../utils/api/fetchFeedback';
import { useQuery } from '@tanstack/react-query';
import EmptyFeedback from '../NoFeedback/NoFeedback.component';
import FeedbackCard from '../FeedbackCard/FeedbackCard.component';
import { useDispatch, useSelector } from 'react-redux';
import { setFeedback } from '../../redux/actions/feedbackActions';
import './FeedbackCards.styles.scss';

function FeedbackCards() {
	const dispatch = useDispatch();
	const { feedback, amount } = useSelector(
		(state: { allFeedback: { feedback: any[]; amount: number } }) =>
			state.allFeedback
	);
	useQuery(['feedback'], fetchFeedback, {
		onSuccess: (response) => {
			dispatch(setFeedback(response.data));
		},
		onError: (error) => {
			console.log('Error: ', error);
		},
	});

	if (amount === 0) {
		return <EmptyFeedback />;
	}
	return (
		<div className='feedback-cards'>
			{feedback.map((data) => (
				<FeedbackCard key={data.id} data={data} />
			))}
		</div>
	);
}

export default FeedbackCards;
