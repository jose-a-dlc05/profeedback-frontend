import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './FeedbackCardDetail.styles.scss';

function FeedbackCardDetail({ match }) {
	const [singleFeedback, setSingleFeedback] = useState(null);
	const [comments, setComments] = useState([]);
	// Fetch Single Feedback
	const fetchSingleFeedback = async () => {
		const response = await axios
			.get(`https://feedbackproduct.herokuapp.com/${match.params.id}`)
			.catch((err) => {
				console.log('Err: ', err);
			});
		setSingleFeedback(response.data);
	};

	const getComments = async () => {
		const response = await axios
			.get(`https://feedbackproduct.herokuapp.com/${match.params.id}/comments`)
			.catch((err) => {
				console.log('Err: ', err);
			});
		setComments(response.data);
	};

	useEffect(() => {
		fetchSingleFeedback();
		getComments();
	}, []);

	console.log(singleFeedback);
	console.log(comments);

	if (singleFeedback === null) {
		return <div></div>;
	}

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
					<button type='button' className='btn btn-edit'>
						Edit Feedback
					</button>
				</div>
				<div className='feedback-card' style={{ marginTop: '25px' }}>
					<div className='upvote-btn'>
						{/* <span className='arrow-up'>^</span>
					<span className='upvote-number'>{data.upvotes}</span> */}
					</div>
					<div className='card-overview'>
						<h4>{singleFeedback[0].title}</h4>
						<p>{singleFeedback[0].description}</p>
						<span>{singleFeedback[0].category}</span>
					</div>
					<div className='comment'>
						<span>
							<i className='fas fa-comment'></i>
						</span>
						<span>{Number(comments.length)}</span>
					</div>
				</div>
			</div>
			<div className='comment-card'>Comments</div>
		</div>
	);
}

export default FeedbackCardDetail;
