import React from 'react';
import Tile from '../../components/Tile/Tile.component';
import image from '../../assets/image_one.png';
import './Home.styles.scss';

function Home() {
	return (
		<div className='row g-5'>
			<div className='col-3 offset-1 control-tiles'>
				<Tile className='main-tile'>
					<span>
						<h3>Pro Feedback</h3>
						<p>Feedback Board</p>
					</span>
				</Tile>
			</div>
			<div className='col-8 feedback-area'>
				<div className='banner'>
					<div className='banner-icon'>
						<a href='https://localhost:3000'>
							<img src={image} alt='product feedback logo' />
						</a>
						<span className='suggestions__amount'>6 Suggestions</span>
						<div className='dropdown'>
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
							<ul
								className='dropdown-menu'
								aria-labelledby='dropdownMenuButton1'
							>
								<li>
									<a className='dropdown-item' href='http://localhost:3000/'>
										Most Upvotes
										<span className='checkmark-active'>
											<i class='fas fa-check'></i>
										</span>
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='http://localhost:3000/'>
										Least Upvotes
										<span className='checkmark-not-active'>
											<i class='fas fa-check'></i>
										</span>
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='http://localhost:3000/'>
										Most Comments
										<span className='checkmark-not-active'>
											<i class='fas fa-check'></i>
										</span>
									</a>
								</li>
								<li>
									<a className='dropdown-item' href='http://localhost:3000/'>
										Least Comments
										<span className='checkmark-not-active'>
											<i class='fas fa-check'></i>
										</span>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='add-btn'>
						<button type='button' className='btn btn-primary'>
							+ Add Feedback
						</button>
					</div>
				</div>
				<div>Cards</div>
			</div>
		</div>
	);
}

export default Home;
