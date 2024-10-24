import { fetchFeedback } from '../../utils/api/fetchFeedback';
import { useQuery } from '@tanstack/react-query';
import EmptyFeedback from '../NoFeedback/NoFeedback.component';
import FeedbackCard from '../FeedbackCard/FeedbackCard.component';
import { useDispatch, useSelector } from 'react-redux';
import { setFeedback } from '../../redux/actions/feedbackActions';
import './FeedbackCards.styles.scss';
import { useState } from 'react';

interface Feedback {
	id: string;
	title: string;
	category: string;
	upvotes: number;
	status: string;
	description: string;
}

function FeedbackCards({
	feedback,
	amount,
}: {
	feedback: any[];
	amount: number;
}) {
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
