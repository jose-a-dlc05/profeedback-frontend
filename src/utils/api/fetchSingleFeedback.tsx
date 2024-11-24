import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

export const fetchSingleFeedback = async (
	context: QueryFunctionContext<[string, { id: string }]>
) => {
	const { queryKey } = context;
	const [, { id }] = queryKey;
	try {
		const response = await axios.get(
			`https://product-feedback-api-t6wx.onrender.com/${id}`
		);
		if (response.status !== 200) {
			throw new Error('No data returned from server');
		}
		return response.data;
	} catch (err) {
		console.error('Error getting feedback: ', err);
		throw err;
	}
};
