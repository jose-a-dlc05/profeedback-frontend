import React from 'react';
import Tile from '../../components/Tile/Tile.component';
import Banner from '../../components/Banner/Banner.component';
import FeedbackCards from '../../components/FeedbackCards/FeedbackCards.component';
import './Home.styles.scss';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter } from '../../utils/stringManipulation';
import { Link } from 'react-router-dom';

function Home() {
	const { feedback } = useSelector(
		(state: { allFeedback: { feedback: any[]; amount: number } }) =>
			state.allFeedback
	);
	const feedbackCategories = new Set(
		feedback.map((data) => capitalizeFirstLetter(data.category))
	);
	return (
		<div className='row g-5'>
			<div className='col-3 offset-1 control-tiles'>
				<Tile className='main-tile'>
					<span>
						<h3>ProFeedback</h3>
						<p>Feedback Board</p>
					</span>
				</Tile>
				<br />
				<Tile className='category-tile'>
					{feedback.length > 0 && (
						<h4>
							<Link className='badge badge-custom-category active' to={''}>
								All
							</Link>
							{[...feedbackCategories].map((category) => (
								<Link
									key={category}
									className='badge badge-custom-category'
									to={`/${category}`}
								>
									{category}
								</Link>
							))}
						</h4>
					)}
				</Tile>
			</div>
			<div className='col-8 feedback-area'>
				<Banner />
				<FeedbackCards />
			</div>
		</div>
	);
}

export default Home;
