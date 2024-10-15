import React, { useEffect } from 'react';
import axios from 'axios';
import EmptyFeedback from '../NoFeedback/NoFeedback.component';
import FeedbackCard from '../FeedbackCard/FeedbackCard.component';
import { useDispatch, useSelector } from 'react-redux';
import { setFeedback } from '../../redux/actions/feedbackActions';
import './FeedbackCards.styles.scss';

function FeedbackCards() {
	const { feedback, amount } = useSelector(
		(state: { allFeedback: { feedback: any[]; amount: number } }) =>
			state.allFeedback
	);

	const dispatch = useDispatch();

	// Fetch Feedback
	const fetchFeedback = async () => {
		const response = await axios
			.get('https://product-feedback-api-t6wx.onrender.com/')
			.catch((err) => {
				console.log('Err: ', err);
			});
		if (response && response.data) {
			dispatch(setFeedback(response.data));
		}
	};

	useEffect(() => {
		fetchFeedback();
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
