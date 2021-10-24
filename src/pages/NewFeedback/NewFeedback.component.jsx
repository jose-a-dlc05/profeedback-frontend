import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './NewFeedback.styles.scss';

function NewFeedback({ history }) {
	const [inputState, setInputState] = useState({
		feedback_title: '',
		category: 'feature',
		feedback_detail: '',
	});

	// Changes the fields on change based on the input field name
	const handleChange = (event) => {
		const { name, value } = event.target;
		setInputState((prevState) => ({ ...prevState, [name]: value }));
	};

	// Returns all values back to initial state
	const clearState = () => {
		setInputState({
			feedback_title: '',
			category: 'feature',
			feedback_detail: '',
		});
	};

	// Submit data to api
	const handleSubmit = async (event) => {
		event.preventDefault();
		const { feedback_title, category, feedback_detail } = inputState;
		const newFeedback = {
			feedback_title,
			category,
			feedback_detail,
		};
		if (feedback_detail || feedback_detail) {
			await axios
				.post('https://feedbackproduct.herokuapp.com/', newFeedback)
				.catch((err) => {
					console.log('Err: ', err);
				});
		}

		clearState();
		history.push('/');
	};

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
							<span>Feedback Title</span>
							<p>Add a short, descriptive headline</p>
							<input
								type='text'
								className='feedback-title-input'
								name='feedback_title'
								value={inputState.feedback_title}
								onChange={handleChange}
							/>
						</label>
						<label>
							<span>Category</span>
							<p>Choose a category for your feedback</p>
							<select
								value={inputState.category}
								onChange={handleChange}
								className='category-input'
								name='category'
							>
								<option value='Feature'>Feature</option>
								<option value='UI'>UI</option>
								<option value='UX'>UX</option>
								<option value='Enhancement'>Enhancement</option>
								<option value='Bug'>Bug</option>
							</select>
						</label>
						<label>
							<span>Feedback Detail</span>
							<p>
								Include any specific comments on what should be improved, added,
								etc.
							</p>
							<textarea
								className='detail-input'
								value={inputState.feedback_detail}
								onChange={handleChange}
								name='feedback_detail'
								maxLength='255'
							></textarea>
						</label>
					</div>
					<div className='buttons'>
						<button
							type='button'
							className='btn btn-add'
							onClick={handleSubmit}
						>
							Add Feedback
						</button>
						<Link to='/' className='go-back-link'>
							<button type='submit' className='btn btn-cancel'>
								Cancel
							</button>
						</Link>
					</div>
				</form>
			</div>
			<div className='input-form-item--bottom'></div>
		</div>
	);
}

export default NewFeedback;
