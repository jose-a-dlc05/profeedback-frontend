import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

export const fetchCommentsByFeedback = async (
	context: QueryFunctionContext<[string, { id: string }]>
) => {
	const { queryKey } = context;
	const [, { id }] = queryKey;
	try {
		const response = await axios.get(
			`https://product-feedback-api-t6wx.onrender.com/${id}/comments`
		);
		if (response.status !== 200) {
			throw new Error('No data returned from server');
		}
		return response.data;
	} catch (err) {
		console.error('Error getting comments: ', err);
		throw err;
	}
};
