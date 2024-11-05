import axios from 'axios';

const updateComment = async (newComment: {
	title?: string;
	category?: string;
	status?: string;
	upvotes?: number;
	description?: string;
	id: string;
}) => {
	const response = await axios.patch(
		`http://localhost:8000/${newComment.id}`,
		newComment
	);
	return response.data;
};

export default updateComment;
