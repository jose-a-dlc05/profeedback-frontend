import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

	if (singleFeedback === null) {
		return <div></div>;
	}

	return (
		<div>
			{JSON.stringify(singleFeedback)}
			{JSON.stringify(comments)}
		</div>
	);
}

export default FeedbackCardDetail;
