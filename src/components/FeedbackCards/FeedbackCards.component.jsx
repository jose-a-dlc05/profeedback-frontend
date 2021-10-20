import React from 'react';
import EmptyFeedback from '../../components/NoFeedback/NoFeedback.component';
import FeedbackCard from '../FeedbackCard/FeedbackCard.component';
import './FeedbackCards.styles.scss';

function FeedbackCards() {
	return (
		<div className='feedback-cards'>
			{
				// <EmptyFeedback />
			}
			<FeedbackCard />
		</div>
	);
}

export default FeedbackCards;
