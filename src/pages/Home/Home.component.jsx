import React from 'react';
import Tile from '../../components/Tile/Tile.component';
import Banner from '../../components/Banner/Banner.component';
import FeedbackCards from '../../components/FeedbackCards/FeedbackCards.component';
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
				<Banner />
				<FeedbackCards />
			</div>
		</div>
	);
}

export default Home;
