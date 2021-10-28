import React from 'react';
import { uniqueNamesGenerator, names } from 'unique-names-generator';
import '../Comment/Comment.styles.scss';
import image from '../../assets/img_avatar.png';

function Comment({ detail }) {
	const config = {
		dictionaries: [names],
	};

	const characterName = uniqueNamesGenerator(config);
	return (
		<div className='comment-card'>
			<p className='user'>
				<img
					src={image}
					alt='Avatar'
					width='30px'
					height='30px'
					style={{ marginRight: '5px', borderRadius: '50%' }}
				/>
				{characterName}
			</p>
			<p className='comment-post'>{detail.content}</p>
		</div>
	);
}

export default Comment;
