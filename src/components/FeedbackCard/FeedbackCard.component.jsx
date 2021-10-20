import React from 'react';
import './FeedbackCard.styles.scss';

function FeedbackCard() {
	return (
		<div className='feedback-card'>
			<div className='upvote-btn'>
				<span className='arrow-up'>^</span>
				<span className='upvote-number'>112</span>
			</div>
			<div className='card-overview'>
				<h4>Add tags for solutions</h4>
				<p>Easier to search for solutions based on a specific task.</p>
				<span>Enchancement</span>
			</div>
			<div className='comment'>
				<span>
					<i class='fas fa-comment'></i>
				</span>
				<span>2</span>
			</div>
		</div>
	);
}

export default FeedbackCard;
