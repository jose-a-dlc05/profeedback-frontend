import React from 'react';
import { Link } from 'react-router-dom';
import '../NoFeedback/NoFeedback.styles.scss';
import image from '../../assets/empty_sugg.png';

function NoFeedback() {
	return (
		<div className='no-feedback'>
			<div className='no-feedback-content'>
				<img src={image} alt='person with hat and magnifying glass' />
				<h2>There is no feedback yet.</h2>
				<p>
					Got a suggestion? Found a bug that needs to be squashed? We love
					hearing about new ideas to improve our app.
				</p>
				<Link to='/new-feedback'>
					<button type='button' className='btn btn-primary'>
						+ Add Feedback
					</button>
				</Link>
			</div>
		</div>
	);
}

export default NoFeedback;
