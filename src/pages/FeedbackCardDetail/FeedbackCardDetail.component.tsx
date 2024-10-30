import React, { useState, DetailedHTMLProps, HTMLAttributes } from 'react';
import { Link, useParams } from 'react-router-dom';
import Comments from '../../components/Comments/Comments.component';
import { AxiosResponse } from 'axios';
import './FeedbackCardDetail.styles.scss';
import { fetchSingleFeedback } from '../../utils/api/fetchSingleFeedback';
import { useQuery } from '@tanstack/react-query';
import { fetchCommentsByFeedback } from '../../utils/api';

interface FeedbackDetail {
	upvotes: number;
	title: string;
	description: string;
	category: string;
}

interface Comment {
	content: string;
	created_at: string;
	id: string;
	parent_id: string;
	replying_to_user: string;
	user_id: string;
}

function FeedbackCardDetail() {
	const params = useParams<{ id: string }>();
	const [singleFeedback, setSingleFeedback] = useState<FeedbackDetail | null>(
		null
	);
	const [comments, setComments] = useState<Comment[]>([]);
	useQuery(['singleFeedback', { id: params.id }], fetchSingleFeedback, {
		onSuccess: (response: AxiosResponse<FeedbackDetail>) => {
			setSingleFeedback(response[0]);
		},
		onError: (error) => {
			console.log('Error: ', error);
		},
	});
	useQuery(['comments', { id: params.id }], fetchCommentsByFeedback, {
		onSuccess: (response) => {
			setComments(response as Comment[]);
		},
		onError: (error) => {
			console.log('Error: ', error);
		},
	});

	if (singleFeedback === null) {
		return <div></div>;
	}
	const commentNumber = Number(typeof comments !== 'string' && comments.length);
	return (
		<div className='feedback-card-detail'>
			<div className='feedback-detail'>
				<div className='feedback-control'>
					<div className='link-wrapper'>
						<Link to='/' className='go-back-link'>
							<span>
								<i className='fas fa-angle-left'></i>
							</span>
							Go Back
						</Link>
					</div>
					<Link
						to={`/edit-feedback/${params.id}`}
						className='edit-feedback-link'
					>
						<button type='button' className='btn btn-edit'>
							Edit Feedback
						</button>
					</Link>
				</div>
				<div className='feedback-card' style={{ marginTop: '25px' }}>
					<span className='badge upvote-btn'>
						<span>
							<i className='fas fa-angle-up'></i>
						</span>
						{singleFeedback.upvotes}
					</span>
					<div className='card-overview'>
						<h4>{singleFeedback.title}</h4>
						<p>{singleFeedback.description}</p>
						<span>{singleFeedback.category}</span>
					</div>
					<div className='comment'>
						<span>
							<i className='fas fa-comment'></i>
						</span>
						<span>{commentNumber}</span>
					</div>
				</div>
			</div>
			{commentNumber ? (
				<div className='comment-box'>
					<h5 className='comment-number'>{commentNumber} Comments</h5>
					{<Comments details={comments} />}
				</div>
			) : (
				<div className='comment-box'>
					{comments.map((comment, index) => (
						<div key={index}>
							<div
								{...(comment as DetailedHTMLProps<
									HTMLAttributes<HTMLDivElement>,
									HTMLDivElement
								>)}
							/>
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default FeedbackCardDetail;
