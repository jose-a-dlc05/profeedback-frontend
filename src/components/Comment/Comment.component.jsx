import React from 'react';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import '../Comment/Comment.styles.scss';

function Comment({ detail }) {
	const config = {
		dictionaries: [names],
	};

	const characterName = uniqueNamesGenerator(config);
	return (
		<div className='comment-card'>
			<p className='user'>{characterName}</p>
			<p className='comment-post'>{detail.content}</p>
		</div>
	);
}

export default Comment;
