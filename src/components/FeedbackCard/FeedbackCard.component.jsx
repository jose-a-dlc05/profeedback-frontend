import React from 'react';
import { Link } from 'react-router-dom';
import './FeedbackCard.styles.scss';

function FeedbackCard({ data }) {
	return (
		<div className='feedback-card'>
			<div className='card-overview'>
				<Link to={`/feedback-product/${data.id}`}>
					<h4>{data.title}</h4>{' '}
				</Link>
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
