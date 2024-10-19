import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Comments from '../../components/Comments/Comments.component';
import axios from 'axios';
import './FeedbackCardDetail.styles.scss';

interface MatchParams {
	params: {
		id: string;
	};
}

function FeedbackCardDetail({ match }: { match: MatchParams }) {
	const [singleFeedback, setSingleFeedback] = useState(null);
	const [comments, setComments] = useState<any[]>([]);
	// Fetch Single Feedback
	const fetchSingleFeedback = async () => {
		const response = await axios
			.get(`http://localhost:8000/${match.params.id}`)
			// .get(`https://product-feedback-api-t6wx.onrender.com/${match.params.id}`)
			.catch((err) => {
				console.log('Err: ', err);
			});
		setSingleFeedback(response.data);
	};

	const getComments = async () => {
		const response = await axios
			.get(`http://localhost:8000/${match.params.id}/comments`)
			// .get(
			// 	`https://product-feedback-api-t6wx.onrender.com/${match.params.id}/comments`
			// )
			.catch((err) => {
				console.log('Err: ', err);
			});
		setComments(response.data);
	};

	useEffect(() => {
		fetchSingleFeedback();
		getComments();
	}, []);

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
						to={`/edit-feedback/${match.params.id}`}
						className='edit-feedback-link'
					>
						<button type='button' className='btn btn-edit'>
							Edit Feedback
						</button>
					</Link>
				</div>
				<div className='feedback-card' style={{ marginTop: '25px' }}>
					{/*	<div className='upvote-btn'>
					 <span className='arrow-up'>^</span>
					<span className='upvote-number'>{data.upvotes}</span> 
					</div>*/}
					<div className='card-overview'>
						<h4>{singleFeedback[0].title}</h4>
						<p>{singleFeedback[0].description}</p>
						<span>{singleFeedback[0].category}</span>
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
				<div className='comment-box'>{comments}</div>
			)}
		</div>
	);
}

export default FeedbackCardDetail;
