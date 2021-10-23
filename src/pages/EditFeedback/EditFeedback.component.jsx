import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EditFeedback.styles.scss';

function EditFeedback({ match }) {
	// Fetch Single Feedback
	const fetchSingleFeedback = async () => {
		const response = await axios
			.get(`https://feedbackproduct.herokuapp.com/${match.params.id}`)
			.catch((err) => {
				console.log('Err: ', err);
			});
		console.log(response.data);
	};

	useEffect(() => {
		fetchSingleFeedback();
	}, []);
	return <div>Edit Feedback</div>;
}

export default EditFeedback;
