import React from 'react';
import image from '../../assets/image_one.png';
import '../Banner/Banner.styles.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Banner() {
	const feedbackAmount = useSelector((state) => state.allFeedback.amount);
	return (
		<div className='banner'>
			<div className='banner-icon'>
				<a href='https://localhost:3000'>
					<img src={image} alt='product feedback logo' />
				</a>
				<span className='suggestions__amount'>
					{feedbackAmount} Suggestions
				</span>
				<div className='dropdown' style={{ visibility: 'hidden' }}>
					<span className='dropdown-type'>Sort by:</span>
					<button
						className='btn dropdown-toggle'
						type='button'
						id='dropdownMenuButton1'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						Most Upvotes
					</button>
					<ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
						<li>
							<a className='dropdown-item' href='http://localhost:3000/'>
								Most Upvotes
								<span className='checkmark-active'>
									<i className='fas fa-check'></i>
								</span>
							</a>
						</li>
						<li>
							<a className='dropdown-item' href='http://localhost:3000/'>
								Least Upvotes
								<span className='checkmark-not-active'>
									<i className='fas fa-check'></i>
								</span>
							</a>
						</li>
						<li>
							<a className='dropdown-item' href='http://localhost:3000/'>
								Most Comments
								<span className='checkmark-not-active'>
									<i className='fas fa-check'></i>
								</span>
							</a>
						</li>
						<li>
							<a className='dropdown-item' href='http://localhost:3000/'>
								Least Comments
								<span className='checkmark-not-active'>
									<i className='fas fa-check'></i>
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<Link to='/new-feedback'>
				<div className='add-btn'>
					<button type='button' className='btn btn-primary'>
						+ Add Feedback
					</button>
				</div>
			</Link>
		</div>
	);
}

export default Banner;
