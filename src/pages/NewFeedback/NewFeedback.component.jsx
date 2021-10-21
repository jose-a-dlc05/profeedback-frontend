import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewFeedback.styles.scss';

function NewFeedback() {
	const [category, setCategory] = useState('Feature');
	return (
		<div className='input-form'>
			<div className='input-form-item--top'></div>
			<div className='feedback'>
				<div>
					<Link to='/' className='go-back-link'>
						<span>
							<i className='fas fa-angle-left'></i>
						</span>
						Go Back
					</Link>
				</div>
				<form>
					<div className='form-icon'>
						<i className='fas fa-plus'></i>
					</div>
					<div className='add-feedback-inputs'>
						<h4 className='add-feedback-title'>Create New Feedback</h4>
						<label>
							Feedback Title
							<p>Add a short, descriptive headline</p>
							<input
								type='text'
								className='feedback-title-input'
								name='feedback-title'
							/>
						</label>
						<label>
							Category
							<p>Choose a category for your feedback</p>
							<select value={category} className='category-input'>
								<option value='Feature'>Feature</option>
								<option value='UI'>UI</option>
								<option value='UX'>UX</option>
								<option value='Enhancement'>Enhancement</option>
								<option value='Bug'>Bug</option>
							</select>
						</label>
						<label>
							Feedback Detail
							<p>
								Include any specific comments on what should be improved, added,
								etc.
							</p>
							<textarea className='detail-input'></textarea>
						</label>
					</div>
					<div className='buttons'>
						<button type='button' className='btn btn-add'>
							Add Feedback
						</button>
						<button type='button' className='btn btn-cancel'>
							Cancel
						</button>
					</div>
				</form>
			</div>
			<div className='input-form-item--bottom'></div>
		</div>
	);
}

export default NewFeedback;
