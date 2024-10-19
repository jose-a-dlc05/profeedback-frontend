import Comment from '../Comment/Comment.component';

function Comments({ details }) {
	return details.map((detail) => {
		return <Comment key={detail.id} detail={detail} />;
	});
}

export default Comments;
