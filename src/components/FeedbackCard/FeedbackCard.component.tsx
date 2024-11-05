import React from 'react';
import { Link } from 'react-router-dom';
import './FeedbackCard.styles.scss';
import { useMutation } from '@tanstack/react-query';
import updateComment from '../../utils/api/updateComment';

function FeedbackCard({ data }) {
	const upvoteFeedback = useMutation(updateComment, {
		onError: (error) => {
			console.error('Error: ', error);
		},
	});
	return (
		<>
			<div className='feedback-card'>
				<span
					className='badge upvote-btn'
					onClick={() => {
						upvoteFeedback.mutate({
							id: data.id,
							upvotes: ++data.upvotes,
						});
					}}
				>
					<span>
						<i className='fas fa-angle-up'></i>
					</span>
					{data.upvotes}
				</span>
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
		</>
	);
}

export default FeedbackCard;
