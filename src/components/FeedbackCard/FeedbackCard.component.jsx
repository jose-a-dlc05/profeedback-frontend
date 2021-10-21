import React from 'react';
import './FeedbackCard.styles.scss';

function FeedbackCard({ data }) {
	return (
		<div className='feedback-card'>
			<div className='upvote-btn'>
				<span className='arrow-up'>^</span>
				<span className='upvote-number'>{data.upvotes}</span>
			</div>
			<div className='card-overview'>
				<h4>{data.title}</h4>
				<p>{data.description}</p>
				<span>{data.category}</span>
			</div>
			<div className='comment'>
				<span>
					<i className='fas fa-comment'></i>
				</span>
				<span>{Number(data.comments)}</span>
			</div>
		</div>
	);
}

export default FeedbackCard;
