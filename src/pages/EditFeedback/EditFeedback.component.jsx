import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './EditFeedback.styles.scss';

function EditFeedback({ match, history }) {
	const [feedbackData, setFeedbackData] = useState({
		id: '',
		feedback_title: '',
		feedback_header: '',
		category: '',
		status: '',
		feedback_detail: '',
	});

	// Returns all values back to initial state
	const clearState = () => {
		setFeedbackData({
			feedback_title: '',
			category: 'feature',
			status: 'suggestion',
			feedback_detail: '',
		});
	};
	// Fetch Single Feedback
	const fetchSingleFeedback = async () => {
		const response = await axios
			.get(`https://feedbackproduct.herokuapp.com/${match.params.id}`)
			.catch((err) => {
				console.log('Err: ', err);
			});

		setFeedbackData({
			id: response.data[0].id,
			feedback_title: response.data[0].title,
			feedback_header: response.data[0].title,
			category: response.data[0].category,
			status: response.data[0].status,
			feedback_detail: response.data[0].description,
		});
	};

	// Submit updated data to api
	const handleSubmit = async (event) => {
		event.preventDefault();
		const { id, feedback_title, category, status, feedback_detail } =
			feedbackData;
		const updatedFeedback = {
			id,
			feedback_title,
			category,
			status,
			feedback_detail,
		};

		await axios
			.put(`https://feedbackproduct.herokuapp.com/${updatedFeedback.id}`, {
				title: feedback_title,
				category,
				status,
				description: feedback_detail,
			})
			.catch((err) => {
				console.log('Err: ', err);
			});
		clearState();
		history.push('/');
	};

	// Changes the fields on change based on the input field name
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFeedbackData((prevState) => ({ ...prevState, [name]: value }));
	};

	useEffect(() => {
		fetchSingleFeedback();
	}, []);

	if (feedbackData !== null) {
		return (
			<div className='input-form'>
				<div className='input-form-item--top'></div>
				<div className='feedback'>
					<div>
						<Link
							to={`/feedback-product/${feedbackData.id}`}
							className='go-back-link'
						>
							<span>
								<i className='fas fa-angle-left'></i>
							</span>
							Go Back
						</Link>
					</div>

					<form>
						<div className='form-icon'>
							<i className='fas fa-pen-nib'></i>
						</div>
						<div className='add-feedback-inputs'>
							<h4 className='add-feedback-title'>{`Editing '${feedbackData.feedback_header}'`}</h4>
							<label>
								<span>Feedback Title</span>
								<p>Add a short, descriptive headline</p>
								<input
									type='text'
									className='feedback-title-input'
									name='feedback_title'
									value={feedbackData.feedback_title}
									onChange={handleChange}
								/>
							</label>
							<label>
								<span>Category</span>
								<p>Choose a category for your feedback</p>
								<select
									value={feedbackData.category}
									className='category-input'
									name='category'
									onChange={handleChange}
								>
									<option value='feature'>Feature</option>
									<option value='ui'>UI</option>
									<option value='ux'>UX</option>
									<option value='enhancement'>Enhancement</option>
									<option value='bug'>Bug</option>
								</select>
							</label>
							<label>
								<span>Update-Status</span>
								<p>Change feedback state</p>
								<select
									value={feedbackData.status}
									className='category-input'
									name='status'
									onChange={handleChange}
								>
									<option value='suggestion'>Suggestion</option>
									<option value='planned'>Planned</option>
									<option value='in-progress'>In-Progress</option>
									<option value='live'>Live</option>
								</select>
							</label>
							<label>
								<span>Feedback Detail</span>
								<p>
									Include any specific comments on what should be improved,
									added, etc.
								</p>
								<textarea
									className='detail-input'
									name='feedback_detail'
									maxLength='255'
									value={feedbackData.feedback_detail}
									onChange={handleChange}
								></textarea>
							</label>
						</div>
						<div className='edit-panel'>
							<div className='buttons'>
								<button
									type='button'
									className='btn btn-add'
									onClick={handleSubmit}
								>
									Save Changes
								</button>
								<Link
									to={`/feedback-product/${feedbackData.id}`}
									className='go-back-link'
								>
									<button type='submit' className='btn btn-cancel'>
										Cancel
									</button>
								</Link>
							</div>
							<div className='btn-delete'>
								<button type='button' className='btn-danger '>
									Delete
								</button>
							</div>
						</div>
					</form>
				</div>
				<div className='input-form-item--bottom'></div>
			</div>
		);
	} else {
		return <div>Loading...</div>;
	}
}

export default EditFeedback;
