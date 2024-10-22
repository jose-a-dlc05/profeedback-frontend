import axios from 'axios';

export interface Feedback {
	id: string;
	feedbackText: string;
}

export const fetchFeedback = async ({ queryKey }) => {
	const response = await axios
		// .get('https://product-feedback-api-t6wx.onrender.com/')
		.get<Feedback[]>('http://localhost:8000')
		.catch((err) => {
			console.error('Error getting feedback: ', err);
		});

	if (!response || response.status !== 200) {
		throw new Error('No data returned from server');
	}

	return response;
};
